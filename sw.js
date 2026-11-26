const PREFIXO_CACHE = "rota7-pwa-";
const CACHE_NAME = PREFIXO_CACHE + "v2";

const ARQUIVOS_ESSENCIAIS = [
  "./",
  "./index.html",
  "./style.css",
  "./app.js",
  "./manifest.json"
];

const ARQUIVOS_COMPLEMENTARES = [
  "./icons/favicon.ico",
  "./icons/apple-touch-icon.png",
  "./icons/logo192.png",
  "./icons/logo512.png",
  "https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css",
  "https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js",
  "https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css",
  "https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/fonts/bootstrap-icons.woff2",
  "https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/fonts/bootstrap-icons.woff",
  "./img/picanhaup.avif",
  "./img/salada.avif",
  "./img/restaurante.avif",
  "./img/classic-italian-bruschetta-with-tomato-mozzarella-cheese.webp",
  "./img/Bolinho de Costela Defumada (6 un).webp",
  "./img/Dadinho-de-Tapioca-O-Pasquim.webp",
  "./img/123-ceviche-de-manga.webp",
  "./img/picanha.webp",
  "./img/risoto-de-camarao.webp",
  "./img/creamy-fettuccine-alfredo-with-parmesan-cheese-and-parsley-photo.webp",
  "./img/moqueca-de-banana-da-terra-a-versao-vegetariana-da-moqueca-b-1-750x422.webp",
  "./img/74296754-grelhado-salmao-com-espargos-e-quinoa-em-uma-sombrio-prato-uma-saudavel-e-delicioso-refeicao-opcao-para-almoco-ou-jantar-foto.webp",
  "./img/petig.webp",
  "./img/pudim-de-leite-condensado.webp",
  "./img/mousse.webp",
  "./img/suco-de-acerola-com-laranja-1200x768.webp",
  "./img/abad60a7-de23-4ae2-9f19-090c8ebf41da.webp",
  "./img/closeup-shot-of-a-glass-of-creamy-swiss-lemonade-w-1-1755969360.webp",
  "./img/81A+7iR+7GL.webp"
];

self.addEventListener("install", (event) => {
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE_NAME).then(async (cache) => {
      await cache.addAll(ARQUIVOS_ESSENCIAIS);
      const resultados = await Promise.allSettled(
        ARQUIVOS_COMPLEMENTARES.map((url) => cache.add(url))
      );
      resultados.forEach((resultado, i) => {
        if (resultado.status === "rejected") {
          console.warn("SW: não foi possível pré-cachear", ARQUIVOS_COMPLEMENTARES[i]);
        }
      });
    })
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((chaves) =>
      Promise.all(
        chaves
          .filter((chave) => {
            const ehDesteApp = chave.startsWith(PREFIXO_CACHE) || chave === "sabor-brasa-pwa-v1";
            return ehDesteApp && chave !== CACHE_NAME;
          })
          .map((chave) => caches.delete(chave))
      )
    ).then(() => self.clients.claim())
  );
});

function guardarNoCache(event, requisicao, resposta) {
  if (!resposta || resposta.status !== 200) return;
  if (!requisicao.url.startsWith("http")) return;

  const copia = resposta.clone();
  event.waitUntil(
    caches
      .open(CACHE_NAME)
      .then((cache) => cache.put(requisicao, copia))
      .catch(() => {})
  );
}

function respostaOffline() {
  return new Response("Sem conexão e este recurso ainda não está disponível offline.", {
    status: 503,
    statusText: "Service Unavailable",
    headers: { "Content-Type": "text/plain; charset=utf-8" }
  });
}

async function redePrimeiro(event) {
  const requisicao = event.request;
  try {
    const resposta = await fetch(requisicao);
    guardarNoCache(event, requisicao, resposta);
    return resposta;
  } catch (erro) {
    const emCache = await caches.match(requisicao, { ignoreSearch: true });
    if (emCache) return emCache;

    if (requisicao.mode === "navigate") {
      const pagina = (await caches.match("./index.html")) || (await caches.match("./"));
      if (pagina) return pagina;
    }
    return respostaOffline();
  }
}

async function cachePrimeiro(event) {
  const requisicao = event.request;
  const emCache = await caches.match(requisicao, { ignoreSearch: true });
  if (emCache) return emCache;

  try {
    const resposta = await fetch(requisicao);
    guardarNoCache(event, requisicao, resposta);
    return resposta;
  } catch (erro) {
    return respostaOffline();
  }
}

self.addEventListener("fetch", (event) => {
  const requisicao = event.request;
  if (requisicao.method !== "GET") return;

  const url = new URL(requisicao.url);
  if (url.protocol !== "http:" && url.protocol !== "https:") return;

  const mesmaOrigem = url.origin === self.location.origin;
  const ehRecursoEstatico =
    requisicao.destination === "image" ||
    requisicao.destination === "font" ||
    !mesmaOrigem;

  event.respondWith(ehRecursoEstatico ? cachePrimeiro(event) : redePrimeiro(event));
});
