### Rota 7 — Cardápio Digital (PWA)

Aplicação web progressiva (PWA) de cardápio digital e autoatendimento para restaurantes. O sistema permite que clientes naveguem pelo menu, configurem restrições alimentares, favoritem pratos e enviem pedidos para a comanda da mesa com funcionamento offline e dados salvos localmente no navegador.

---

### Funcionalidades

* **Cardápio Completo Pré-Cadastrado:** 16 pratos e bebidas distribuídos em 4 categorias (*Entradas*, *Pratos Principais*, *Sobremesas* e *Bebidas*), com preços, descrições e selos nutricionais (*Sem Glúten*, *Zero Lactose* e *Vegano*).


* **Busca Inteligente e Filtros:** Pesquisa em tempo real (com normalização de acentos e letras maiúsculas/minúsculas) combinada com filtros por categoria e lista de favoritos.


* **Perfil Alimentar e Alertas de Alergia:** Permite salvar intolerâncias a glúten, lactose, dieta vegana e observações livres para a cozinha, exibindo alertas visuais imediatos nos cards de pratos incompatíveis.


* **Carrinho e Comanda Inteligente:** Separação entre os itens selecionados para o envio atual e o histórico de pedidos já enviados para a cozinha, calculando automaticamente o subtotal e o valor acumulado da mesa.


* **Persistência de Dados (`localStorage`):** Carrinho, comanda enviada, favoritos, preferências alimentares e identificação da mesa/cliente permanecem salvos mesmo após fechar ou recarregar o aplicativo.


* **Progressive Web App (PWA):** Instalável na tela inicial de dispositivos Android, iOS e Desktop. Conta com botão de instalação nativa (`beforeinstallprompt`), seção ilustrada de **"Como Instalar"** e cache offline completo (HTML, CSS, JS, ícones, fontes e imagens) via Service Worker.



---

### Tecnologias Utilizadas

* **HTML5** semântico.


* **CSS3** com variáveis customizadas


* **Bootstrap 5.3.3** & **Bootstrap Icons 1.11.3** (Grid responsivo, Navbar, Carousel, Cards, Modals, Forms e Classes Utilitárias)


* **JavaScript (ES6+)** com validação de armazenamento local e sanitização contra XSS


* **Web App Manifest (`manifest.json`) & Service Worker (`sw.js`)** com estratégias híbridas de cache (*Cache-First* para mídia/CDNs e *Network-First* para documentos/scripts)



---

### Estrutura do Projeto

* `index.html` — Estrutura principal da aplicação, carrossel de destaques, modais e guia de instalação.


* `style.css` — Identidade visual, destaques em âmbar e animações.


* `app.js` — Base de dados do cardápio, renderização dinâmica, filtros, controle de carrinho/comanda, `localStorage` e registro do PWA.


* `manifest.json` — Configurações de instalação, nome, cores de tema, modo `standalone` e ícones.


* `sw.js` — Service Worker responsável pelo pré-cache de recursos e suporte offline.


* `img/` — Imagens dos pratos e banners promocionais.


* `icons/` — Favicons e ícones do aplicativo nas resoluções `180x180`, `192x192` e `512x512`.
