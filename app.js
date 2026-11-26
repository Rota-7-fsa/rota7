const CARDAPIO_DADOS = [

  { id: 1, nome: "Bruschetta Italiana Tradicional", categoria: "Entradas", preco: 28.90, descricao: "Fatias de pão italiano tostado com tomates frescos, manjericão, alho e azeite extravirgem.", imagem: "img/classic-italian-bruschetta-with-tomato-mozzarella-cheese.webp", contemGluten: true, contemLactose: false, vegano: true },
  { id: 2, nome: "Bolinho de Costela Defumada (6 un)", categoria: "Entradas", preco: 36.50, descricao: "Massa de mandioca cremosa recheada com costela bovina desfiada e maionese da casa.", imagem: "img/Bolinho de Costela Defumada (6 un).webp", contemGluten: true, contemLactose: true, vegano: false },
  { id: 3, nome: "Dadinhos de Tapioca com Melado", categoria: "Entradas", preco: 32.00, descricao: "Cubos crocantes de tapioca com queijo coalho, servidos com geleia de pimenta artesanal.", imagem: "img/Dadinho-de-Tapioca-O-Pasquim.webp", contemGluten: false, contemLactose: true, vegano: false },
  { id: 4, nome: "Ceviche de Manga e Coco", categoria: "Entradas", preco: 29.90, descricao: "Cubos de manga fresca marinados no limão taiti, leite de coco, cebola roxa e coentro.", imagem: "img/123-ceviche-de-manga.webp", contemGluten: false, contemLactose: false, vegano: true },
  { id: 5, nome: "Picanha na Brasa", categoria: "Principais", preco: 89.90, descricao: "400g de picanha grelhada na brasa, acompanha arroz biro-biro, farofa crocante e fritas.", imagem: "img/picanha.webp", contemGluten: false, contemLactose: false, vegano: false },
  { id: 6, nome: "Risoto de Camarão com Limão Siciliano", categoria: "Principais", preco: 78.00, descricao: "Arroz arbóreo cremoso com camarões rosa grelhados, manteiga, parmesão e raspas de limão.", imagem: "img/risoto-de-camarao.webp", contemGluten: false, contemLactose: true, vegano: false },
  { id: 7, nome: "Fettuccine Alfredo com Filé Mignon", categoria: "Principais", preco: 72.50, descricao: "Massa artesanal ao molho cremoso de queijos nobres acompanhada de medalhões de filé.", imagem: "img/creamy-fettuccine-alfredo-with-parmesan-cheese-and-parsley-photo.webp", contemGluten: true, contemLactose: true, vegano: false },
  { id: 8, nome: "Moqueca Vegana de Banana da Terra", categoria: "Principais", preco: 58.90, descricao: "Banana da terra e palmito pupunha cozidos no leite de coco e azeite de dendê com arroz branco.", imagem: "img/moqueca-de-banana-da-terra-a-versao-vegetariana-da-moqueca-b-1-750x422.webp", contemGluten: false, contemLactose: false, vegano: true },
  { id: 9, nome: "Salmão Grelhado com Quinoa e Legumes", categoria: "Principais", preco: 84.00, descricao: "Posta de salmão chileno grelhado no azeite de ervas com mix de quinoa e brócolis tostado.", imagem: "img/74296754-grelhado-salmao-com-espargos-e-quinoa-em-uma-sombrio-prato-uma-saudavel-e-delicioso-refeicao-opcao-para-almoco-ou-jantar-foto.webp", contemGluten: false, contemLactose: false, vegano: false },
  { id: 10, nome: "Petit Gâteau com Sorvete de Creme", categoria: "Sobremesas", preco: 26.90, descricao: "Bolo quente de chocolate belga com recheio cremoso e bola de sorvete artesanal.", imagem: "img/petig.webp", contemGluten: true, contemLactose: true, vegano: false },
  { id: 11, nome: "Pudim de Leite Condensado da Vovó", categoria: "Sobremesas", preco: 19.90, descricao: "Pudim liso sem furinhos com calda generosa de caramelo âmbar.", imagem: "img/pudim-de-leite-condensado.webp", contemGluten: false, contemLactose: true, vegano: false },
  { id: 12, nome: "Mousse de Cacau 70% com Abacate", categoria: "Sobremesas", preco: 24.00, descricao: "Sobremesa cremosa zero lactose e zero glúten adoçada com melado de cana e morangos.", imagem: "img/mousse.webp", contemGluten: false, contemLactose: false, vegano: true },
  { id: 13, nome: "Suco Natural de Laranja com Acerola", categoria: "Bebidas", preco: 14.50, descricao: "Copo 400ml espremido na hora, rico em vitamina C, sem adição de conservantes.", imagem: "img/suco-de-acerola-com-laranja-1200x768.webp", contemGluten: false, contemLactose: false, vegano: true },
  { id: 14, nome: "Soda Italiana de Frutas Vermelhas", categoria: "Bebidas", preco: 16.90, descricao: "Água gaseificada com xarope artesanal de amora, framboesa e morango com gelo.", imagem: "img/abad60a7-de23-4ae2-9f19-090c8ebf41da.webp", contemGluten: false, contemLactose: false, vegano: true },
  { id: 15, nome: "Limonada Suíça Cremosa", categoria: "Bebidas", preco: 15.90, descricao: "Limão taiti batido com leite condensado, água gelada e folhas de hortelã fresca.", imagem: "img/closeup-shot-of-a-glass-of-creamy-swiss-lemonade-w-1-1755969360.webp", contemGluten: false, contemLactose: true, vegano: false },
  { id: 16, nome: "Cerveja Artesanal IPA 500ml", categoria: "Bebidas", preco: 24.90, descricao: "Cerveja puro malte lupulada com notas cítricas e amargor equilibrado.", imagem: "img/81A+7iR+7GL.webp", contemGluten: true, contemLactose: false, vegano: true }
];

const STORAGE_KEYS = {
  CARRINHO: "rota_7_carrinho",
  COMANDA: "rota_7_comanda",
  FAVORITOS: "rota_7_favoritos",
  PREFERENCIAS: "rota_7_preferencias",
  MESA: "rota_7_mesa"
};

const PREFERENCIAS_PADRAO = { semGluten: false, semLactose: false, vegano: false, outrasAlergias: "" };

function lerStorage(chave, valorPadrao) {
  try {
    const bruto = localStorage.getItem(chave);
    if (bruto === null) return valorPadrao;
    const valor = JSON.parse(bruto);
    return valor === null || valor === undefined ? valorPadrao : valor;
  } catch (erro) {
    console.warn(`Dado inválido em "${chave}", usando valor padrão.`, erro);
    return valorPadrao;
  }
}

function lerArray(chave) {
  const valor = lerStorage(chave, []);
  return Array.isArray(valor) ? valor : [];
}

function lerPreferencias() {
  const valor = lerStorage(STORAGE_KEYS.PREFERENCIAS, PREFERENCIAS_PADRAO);
  if (typeof valor !== "object" || Array.isArray(valor)) return { ...PREFERENCIAS_PADRAO };
  return {
    semGluten: valor.semGluten === true,
    semLactose: valor.semLactose === true,
    vegano: valor.vegano === true,
    outrasAlergias: typeof valor.outrasAlergias === "string" ? valor.outrasAlergias : ""
  };
}

function lerMesa() {
  try {
    return localStorage.getItem(STORAGE_KEYS.MESA) || "";
  } catch (erro) {
    return "";
  }
}

function carrinhoValido(lista) {
  return lista.filter(i => i && Number.isFinite(Number(i.id)) && Number.isFinite(Number(i.quantidade)) && Number(i.quantidade) > 0)
    .map(i => ({ id: Number(i.id), quantidade: Number(i.quantidade) }));
}

function comandaValida(lista) {
  return lista.filter(p => p && Array.isArray(p.itens) && Number.isFinite(Number(p.subtotal)) &&
    p.itens.every(i => i && Number.isFinite(Number(i.preco)) && Number.isFinite(Number(i.quantidade))))
    .map(p => ({ ...p, subtotal: Number(p.subtotal) }));
}

let estado = {
  categoriaAtiva: "Todos",
  termoBusca: "",
  carrinho: carrinhoValido(lerArray(STORAGE_KEYS.CARRINHO)),
  comanda: comandaValida(lerArray(STORAGE_KEYS.COMANDA)),
  favoritos: lerArray(STORAGE_KEYS.FAVORITOS).map(Number).filter(Number.isFinite),
  preferencias: lerPreferencias(),
  mesa: lerMesa()
};

function salvarEstado() {
  try {
    localStorage.setItem(STORAGE_KEYS.CARRINHO, JSON.stringify(estado.carrinho));
    localStorage.setItem(STORAGE_KEYS.COMANDA, JSON.stringify(estado.comanda));
    localStorage.setItem(STORAGE_KEYS.FAVORITOS, JSON.stringify(estado.favoritos));
    localStorage.setItem(STORAGE_KEYS.PREFERENCIAS, JSON.stringify(estado.preferencias));
    localStorage.setItem(STORAGE_KEYS.MESA, estado.mesa);
  } catch (erro) {
    console.warn("Não foi possível salvar os dados localmente.", erro);
  }
}

function escaparHtml(texto) {
  return String(texto ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function normalizarTexto(texto) {
  return String(texto ?? "").normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
}

function formatarMoeda(valor) {
  return valor.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}

function verificarConflitoAlimentar(prato) {
  const conflitos = [];
  if (estado.preferencias.semGluten && prato.contemGluten) conflitos.push("Contém Glúten");
  if (estado.preferencias.semLactose && prato.contemLactose) conflitos.push("Contém Lactose");
  if (estado.preferencias.vegano && !prato.vegano) conflitos.push("Não Vegano");
  return conflitos;
}

function renderizarCardapio() {
  const grid = document.getElementById("gridCardapio");
  
  const itensFiltrados = CARDAPIO_DADOS.filter(item => {
    const bateCategoria = estado.categoriaAtiva === "Todos" || (estado.categoriaAtiva === "Favoritos" && estado.favoritos.includes(item.id)) || item.categoria === estado.categoriaAtiva;
    const termo = normalizarTexto(estado.termoBusca.trim());
    const bateBusca = normalizarTexto(item.nome).includes(termo) || normalizarTexto(item.descricao).includes(termo);
    return bateCategoria && bateBusca;
  });

  if (itensFiltrados.length === 0) {
    grid.innerHTML = `<div class="col-12 text-center py-5"><i class="bi bi-emoji-frown fs-1 text-muted"></i><h5 class="mt-3 text-muted">Nenhum prato encontrado para este filtro.</h5></div>`;
    return;
  }

  grid.innerHTML = itensFiltrados.map(item => {
    const ehFavorito = estado.favoritos.includes(item.id);
    const conflitos = verificarConflitoAlimentar(item);
    const itemNoCarrinho = estado.carrinho.find(c => c.id === item.id);
    const qtdNoCarrinho = itemNoCarrinho ? itemNoCarrinho.quantidade : 0;

    return `
      <div class="col-12 col-sm-6 col-lg-3">
        <div class="card h-100 rounded-4 overflow-hidden card-produto">
          <div class="position-relative">
            <img src="${item.imagem}" class="card-img-top img-produto" alt="${item.nome}" loading="lazy">
            <span class="badge bg-black bg-opacity-75 text-destaque border border-secondary position-absolute bottom-0 start-0 m-2">${item.categoria}</span>
            <button class="btn-favorito position-absolute top-0 end-0 m-2" data-acao="favoritar" data-id="${item.id}" title="Favoritar prato">
              <i class="bi ${ehFavorito ? 'bi-heart-fill text-danger' : 'bi-heart text-white'} fs-5"></i>
            </button>
          </div>
          
          <div class="card-body d-flex flex-column">
            <div class="d-flex justify-content-between align-items-start gap-2 mb-1">
              <h6 class="card-title fw-bold mb-0 text-white">${item.nome}</h6>
            </div>
            
            <p class="card-text small text-muted flex-grow-1 mb-2">${item.descricao}</p>

            <!-- Tags Nutricionais com alto contraste -->
            <div class="d-flex flex-wrap gap-1 mb-2">
              ${!item.contemGluten ? '<span class="badge bg-dark text-success border border-success">Sem Glúten</span>' : ''}
              ${!item.contemLactose ? '<span class="badge bg-dark text-info border border-info">Zero Lactose</span>' : ''}
              ${item.vegano ? '<span class="badge bg-success text-white">Vegano</span>' : ''}
            </div>

            <!-- Alerta de Conflito -->
            ${conflitos.length > 0 ? `
              <div class="alert bg-warning text-dark py-1 px-2 small mb-2 d-flex align-items-center gap-1 fw-bold">
                <i class="bi bi-exclamation-circle-fill"></i>
                <span>Atenção: ${conflitos.join(", ")}</span>
              </div>
            ` : ''}

            <div class="d-flex justify-content-between align-items-center mt-2 pt-2 border-top border-secondary">
              <span class="fs-5 fw-bold text-destaque">${formatarMoeda(item.preco)}</span>
              <button class="btn ${qtdNoCarrinho > 0 ? 'btn-success text-white' : 'btn-destaque text-dark'} btn-sm fw-semibold px-3 rounded-pill" data-acao="adicionar" data-id="${item.id}">
                <i class="bi ${qtdNoCarrinho > 0 ? 'bi-check2' : 'bi-plus-lg'} me-1"></i>
                ${qtdNoCarrinho > 0 ? `No Pedido (${qtdNoCarrinho})` : 'Adicionar'}
              </button>
            </div>
          </div>
        </div>
      </div>
    `;
  }).join("");
}

function atualizarInterfaceCarrinho() {
  const contador = document.getElementById("contadorCarrinho");
  const listaCarrinho = document.getElementById("listaCarrinho");
  const valorSubtotalEl = document.getElementById("valorSubtotalCarrinho");
  const listaComanda = document.getElementById("listaComanda");
  const valorTotalComandaEl = document.getElementById("valorTotalComanda");

  const totalItensNoCarrinho = estado.carrinho.reduce((acc, item) => acc + item.quantidade, 0);
  contador.textContent = totalItensNoCarrinho;

  let subtotalCarrinho = 0;

  if (estado.carrinho.length === 0) {
    listaCarrinho.innerHTML = `
      <div class="text-center py-3 text-muted small">
        <i class="bi bi-cart3 fs-4 d-block mb-1"></i>
        Nenhum item selecionado para envio no momento.
      </div>
    `;
  } else {
    listaCarrinho.innerHTML = estado.carrinho.map(itemCarrinho => {
      const prato = CARDAPIO_DADOS.find(p => p.id === itemCarrinho.id);
      if (!prato) return "";
      const subtotalItem = prato.preco * itemCarrinho.quantidade;
      subtotalCarrinho += subtotalItem;

      return `
        <div class="d-flex justify-content-between align-items-center border-bottom border-secondary py-2">
          <div class="me-2">
            <h6 class="mb-0 fw-semibold small text-white">${prato.nome}</h6>
            <small class="text-muted">${formatarMoeda(prato.preco)} un.</small>
          </div>
          <div class="d-flex align-items-center gap-2">
            <button class="btn btn-outline-light btn-sm px-2 py-0 border-secondary" data-acao="diminuir" data-id="${prato.id}">-</button>
            <span class="fw-bold px-1 small text-white">${itemCarrinho.quantidade}</span>
            <button class="btn btn-outline-light btn-sm px-2 py-0 border-secondary" data-acao="aumentar" data-id="${prato.id}">+</button>
            <span class="fw-bold text-destaque ms-2 small" style="min-width: 75px; text-align: right;">${formatarMoeda(subtotalItem)}</span>
          </div>
        </div>
      `;
    }).join("");
  }

  valorSubtotalEl.textContent = formatarMoeda(subtotalCarrinho);

  let somaComandaEnviada = 0;

  if (estado.comanda.length === 0) {
    listaComanda.innerHTML = `<div class="text-center py-3 text-muted small">Nenhum pedido foi enviado para a cozinha ainda.</div>`;
  } else {
    listaComanda.innerHTML = estado.comanda.map((pedido, idx) => {
      somaComandaEnviada += pedido.subtotal;

      const linhasItens = pedido.itens.map(item => `
        <li class="d-flex justify-content-between small py-1 border-bottom border-secondary">
          <span class="text-light"><strong>${escaparHtml(item.quantidade)}x</strong> ${escaparHtml(item.nome)}</span>
          <span class="text-muted">${formatarMoeda(item.preco * item.quantidade)}</span>
        </li>
      `).join("");

      return `
        <div class="bg-secondary border border-secondary rounded-3 p-3 mb-2 shadow-sm">
          <div class="d-flex justify-content-between align-items-center mb-2">
            <div>
              <span class="badge bg-success text-white me-1">Pedido #${idx + 1} — Em preparo</span>
              <strong class="small text-white"><i class="bi bi-geo-alt-fill text-destaque me-1"></i>${escaparHtml(pedido.mesa)}</strong>
            </div>
            <small class="text-muted">${escaparHtml(pedido.horario)}</small>
          </div>
          <ul class="list-unstyled mb-2 ps-1">
            ${linhasItens}
          </ul>
          ${pedido.observacaoAlergia ? `<div class="small text-dark bg-warning px-2 py-1 rounded mb-2 fw-semibold"><i class="bi bi-exclamation-triangle me-1"></i>Obs: ${escaparHtml(pedido.observacaoAlergia)}</div>` : ''}
          <div class="d-flex justify-content-between align-items-center pt-1 border-top border-secondary small">
            <span class="text-muted">Total deste pedido:</span>
            <strong class="text-destaque">${formatarMoeda(pedido.subtotal)}</strong>
          </div>
        </div>
      `;
    }).join("");
  }

  const totalGeralComanda = somaComandaEnviada + subtotalCarrinho;
  valorTotalComandaEl.textContent = formatarMoeda(totalGeralComanda);
}

function limparResiduosModal() {
  if (document.querySelector(".modal.show")) return;
  document.querySelectorAll(".modal-backdrop").forEach((el) => el.remove());
  document.body.classList.remove("modal-open");
  document.body.style.removeProperty("overflow");
  document.body.style.removeProperty("padding-right");
}

function mostrarPopupPedidoEnviado(novoPedido) {
  const popup = document.getElementById("janelaConfirmacao");
  const resumo = document.getElementById("resumoJanelaPedido");

  const listaHtml = novoPedido.itens.map(i => `
    <div class="d-flex justify-content-between text-light">
      <span><strong>${escaparHtml(i.quantidade)}x</strong> ${escaparHtml(i.nome)}</span>
      <span>${formatarMoeda(i.preco * i.quantidade)}</span>
    </div>
  `).join("");

  resumo.innerHTML = `
    <div class="fw-bold text-destaque mb-2">
      <i class="bi bi-person-check-fill me-1"></i>Mesa / Cliente: ${escaparHtml(novoPedido.mesa)}
    </div>
    <div class="mb-2 border-top border-bottom border-secondary py-2">
      ${listaHtml}
    </div>
    <div class="d-flex justify-content-between fw-bold text-white">
      <span>Valor do Pedido:</span>
      <span class="text-destaque">${formatarMoeda(novoPedido.subtotal)}</span>
    </div>
  `;

  popup.classList.remove("d-none");
}

function atualizarInterfacePreferencias() {
  document.getElementById("prefSemGluten").checked = estado.preferencias.semGluten;
  document.getElementById("prefSemLactose").checked = estado.preferencias.semLactose;
  document.getElementById("prefVegano").checked = estado.preferencias.vegano;
  document.getElementById("prefOutrasAlergias").value = estado.preferencias.outrasAlergias || "";

  const restricoesAtivas = [];
  if (estado.preferencias.semGluten) restricoesAtivas.push("Sem Glúten");
  if (estado.preferencias.semLactose) restricoesAtivas.push("Zero Lactose");
  if (estado.preferencias.vegano) restricoesAtivas.push("Vegano");
  if (estado.preferencias.outrasAlergias.trim() !== "") {
    restricoesAtivas.push(`Obs: "${estado.preferencias.outrasAlergias.trim()}"`);
  }

  const barraAlerta = document.getElementById("alertaPreferencias");
  const badge = document.getElementById("etiquetaPreferencias");
  const texto = document.getElementById("textoPreferenciasAtivas");

  if (restricoesAtivas.length > 0) {
    barraAlerta.classList.remove("d-none");
    badge.classList.remove("d-none");
    texto.textContent = restricoesAtivas.join(" • ");
  } else {
    barraAlerta.classList.add("d-none");
    badge.classList.add("d-none");
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const inputMesa = document.getElementById("inputMesa");
  const erroMesa = document.getElementById("erroMesa");
  inputMesa.value = estado.mesa;

  atualizarInterfacePreferencias();
  renderizarCardapio();
  atualizarInterfaceCarrinho();

  document.getElementById("modalPreferencias").addEventListener("show.bs.modal", atualizarInterfacePreferencias);

  inputMesa.addEventListener("input", (e) => {
    estado.mesa = e.target.value;
    if (estado.mesa.trim() !== "") {
      erroMesa.classList.add("d-none");
      inputMesa.classList.remove("is-invalid");
    }
    salvarEstado();
  });

  document.getElementById("campoBusca").addEventListener("input", (e) => {
    estado.termoBusca = e.target.value;
    renderizarCardapio();
  });

  document.getElementById("botoesCategorias").addEventListener("click", (e) => {
    const btn = e.target.closest("button[data-categoria]");
    if (!btn) return;

    document.querySelectorAll("#botoesCategorias button").forEach(b => {
      b.classList.remove("btn-destaque", "active", "fw-bold", "text-dark");
      b.classList.add("btn-outline-light", "border-secondary");
    });

    btn.classList.remove("btn-outline-light", "border-secondary");
    btn.classList.add("btn-destaque", "active", "fw-bold", "text-dark");

    estado.categoriaAtiva = btn.getAttribute("data-categoria");
    renderizarCardapio();
  });

  document.getElementById("gridCardapio").addEventListener("click", (e) => {
    const btn = e.target.closest("button[data-acao]");
    if (!btn) return;

    const acao = btn.getAttribute("data-acao");
    const id = Number(btn.getAttribute("data-id"));

    if (acao === "favoritar") {
      if (estado.favoritos.includes(id)) {
        estado.favoritos = estado.favoritos.filter(favId => favId !== id);
      } else {
        estado.favoritos.push(id);
      }
      salvarEstado();
      renderizarCardapio();
    }

    if (acao === "adicionar") {
      const existente = estado.carrinho.find(item => item.id === id);
      if (existente) {
        existente.quantidade += 1;
      } else {
        estado.carrinho.push({ id, quantidade: 1 });
      }
      salvarEstado();
      renderizarCardapio();
      atualizarInterfaceCarrinho();
    }
  });

  document.getElementById("listaCarrinho").addEventListener("click", (e) => {
    const btn = e.target.closest("button[data-acao]");
    if (!btn) return;

    const acao = btn.getAttribute("data-acao");
    const id = Number(btn.getAttribute("data-id"));
    const itemIndex = estado.carrinho.findIndex(item => item.id === id);

    if (itemIndex === -1) return;

    if (acao === "aumentar") {
      estado.carrinho[itemIndex].quantidade += 1;
    } else if (acao === "diminuir") {
      estado.carrinho[itemIndex].quantidade -= 1;
      if (estado.carrinho[itemIndex].quantidade <= 0) {
        estado.carrinho.splice(itemIndex, 1);
      }
    }

    salvarEstado();
    renderizarCardapio();
    atualizarInterfaceCarrinho();
  });

  document.getElementById("btnLimparCarrinho").addEventListener("click", () => {
    estado.carrinho = [];
    salvarEstado();
    renderizarCardapio();
    atualizarInterfaceCarrinho();
  });

  document.getElementById("btnLimparComanda").addEventListener("click", () => {
    estado.comanda = [];
    salvarEstado();
    atualizarInterfaceCarrinho();
  });

  document.getElementById("btnFinalizarPedido").addEventListener("click", () => {
    if (estado.carrinho.length === 0) return;

    const identificacao = estado.mesa.trim();
    if (!identificacao) {
      erroMesa.classList.remove("d-none");
      inputMesa.classList.add("is-invalid");
      inputMesa.focus();
      return;
    }

    const itensDetalhados = estado.carrinho.map(itemCarrinho => {
      const prato = CARDAPIO_DADOS.find(p => p.id === itemCarrinho.id);
      return {
        id: prato.id,
        nome: prato.nome,
        preco: prato.preco,
        quantidade: itemCarrinho.quantidade
      };
    });

    const subtotalPedido = itensDetalhados.reduce((acc, i) => acc + (i.preco * i.quantidade), 0);
    const agora = new Date();
    const horarioFormatado = agora.toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit" });

    const novoPedidoComanda = {
      mesa: identificacao,
      horario: horarioFormatado,
      itens: itensDetalhados,
      subtotal: subtotalPedido,
      observacaoAlergia: estado.preferencias.outrasAlergias.trim()
    };

    estado.comanda.push(novoPedidoComanda);
    estado.carrinho = [];
    salvarEstado();
    renderizarCardapio();
    atualizarInterfaceCarrinho();

    const modalEl = document.getElementById("modalCarrinho");
    const modalInstancia = bootstrap.Modal.getInstance(modalEl);

    if (modalInstancia && modalEl.classList.contains("show")) {
      modalEl.addEventListener("hidden.bs.modal", () => {
        limparResiduosModal();
        mostrarPopupPedidoEnviado(novoPedidoComanda);
      }, { once: true });
      modalInstancia.hide();
    } else {
      limparResiduosModal();
      mostrarPopupPedidoEnviado(novoPedidoComanda);
    }
  });

  document.getElementById("btnFecharJanela").addEventListener("click", () => {
    document.getElementById("janelaConfirmacao").classList.add("d-none");
    limparResiduosModal();
    const modalEl = document.getElementById("modalCarrinho");
    const modalInstancia = bootstrap.Modal.getOrCreateInstance(modalEl);
    modalInstancia.show();
  });

  document.getElementById("formPreferencias").addEventListener("submit", (e) => {
    e.preventDefault();
    estado.preferencias = {
      semGluten: document.getElementById("prefSemGluten").checked,
      semLactose: document.getElementById("prefSemLactose").checked,
      vegano: document.getElementById("prefVegano").checked,
      outrasAlergias: document.getElementById("prefOutrasAlergias").value
    };
    salvarEstado();
    atualizarInterfacePreferencias();
    renderizarCardapio();

    const modalEl = document.getElementById("modalPreferencias");
    const modalInstancia = bootstrap.Modal.getInstance(modalEl);
    if (modalInstancia) modalInstancia.hide();
  });
});

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("./sw.js").catch((err) => {
      console.warn("Aviso no registro do Service Worker:", err);
    });
  });
}

let eventoInstalacaoPwa = null;
const btnInstalarNativo = document.getElementById("btnInstalarNativo");
const secaoInstalar = document.getElementById("secaoInstalar");
const linkMenuInstalar = document.querySelector('a[href="#secaoInstalar"]');

function verificarModoAppInstalado() {
  const estaNoApp =
    window.matchMedia("(display-mode: standalone)").matches ||
    window.navigator.standalone === true;

  if (estaNoApp) {
    if (secaoInstalar) secaoInstalar.classList.add("d-none");
    if (linkMenuInstalar) linkMenuInstalar.closest("li")?.classList.add("d-none");
  }
}

verificarModoAppInstalado();

window.addEventListener("beforeinstallprompt", (e) => {
  e.preventDefault();
  eventoInstalacaoPwa = e;
});

window.addEventListener("appinstalled", () => {
  eventoInstalacaoPwa = null;
  verificarModoAppInstalado();
});

if (btnInstalarNativo) {
  btnInstalarNativo.addEventListener("click", async () => {
    if (eventoInstalacaoPwa) {
      eventoInstalacaoPwa.prompt();
      const { outcome } = await eventoInstalacaoPwa.userChoice;
      if (outcome === "accepted") {
        eventoInstalacaoPwa = null;
      }
    } else {
      alert(
        "Para instalar ou criar um novo atalho:\n\n" +
        "• Android (Chrome): Toque nos 3 pontinhos (⋮) > 'Instalar aplicativo' ou 'Adicionar à tela inicial'.\n" +
        "• iPhone (Safari): Toque em Compartilhar (↑) > 'Adicionar à Tela de Início'.\n" +
        "• PC (Chrome/Edge): Clique no ícone de instalação na barra de endereço ou no menu (⋮) > 'Salvar e compartilhar' > 'Instalar página como app'."
      );
    }
  });
}
