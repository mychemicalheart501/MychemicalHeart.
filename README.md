# ☣ Umbrella Archives

Blog estático no estilo Umbrella Corporation (preto + branco + vermelho).

Pronto pra subir no **GitHub Pages**.

---

## Como usar

### 1. Baixar os arquivos
Baixe a pasta `umbrella-blog` inteira.

### 2. Colocar no GitHub
1. Crie um repositório novo no GitHub (pode ser público ou privado).
2. Faça upload de **todos** os arquivos da pasta (index.html, style.css, script.js, about.html, articles.html, archive.html).
3. Vá em **Settings → Pages**.
4. Em "Source" escolha a branch `main` (ou `master`) e a pasta `/ (root)`.
5. Salve. Em alguns minutos o site vai aparecer em:
   `https://seuusuario.github.io/nome-do-repositorio`

### 3. Testar localmente
É só abrir o arquivo `index.html` no navegador (Chrome, Firefox, Edge...).

---

## Como editar as coisas

### Mudar nome do blog e tagline
Abra qualquer arquivo `.html` e procure por:
```html
<div class="blog-title">UMBRELLA <span>ARCHIVES</span></div>
<div class="blog-tagline">Arquivos Classificados • Nível Ômega</div>
```
Troque o texto. Faça isso em **todas** as páginas (index, about, articles, archive).

### Mudar cores, fontes e fundo
Abra o arquivo `style.css` e edite as variáveis no topo:

```css
:root {
  --bg: #0a0a0a;              /* fundo geral */
  --text: #e8e8e8;            /* texto */
  --accent: #c41e3a;          /* vermelho Umbrella */
  --accent-hover: #ff2a4a;
  --card-bg: #141414;
  --font-main: 'Segoe UI', system-ui, sans-serif;
  --font-heading: 'Segoe UI', system-ui, sans-serif;
  --font-mono: 'Courier New', Courier, monospace;
  --bg-image: none;           /* coloque url('sua-imagem.jpg') se quiser */
}
```

É só mudar os valores e salvar. O site inteiro atualiza.

### Adicionar novos posts
No `index.html` e no `articles.html`, copie um bloco `<article class="post-card">...</article>` e cole abaixo, depois edite o texto, data, tags e imagem.

### Adicionar novas abas/páginas
1. Crie um arquivo novo (ex: `contato.html`) copiando a estrutura de `about.html`.
2. Adicione o link no menu de **todas** as páginas:
```html
<a href="contato.html">Contato</a>
```

### Colocar suas fotos, vídeos e músicas
- **Fotos**: troque o `src` das tags `<img>`.
- **Vídeo**: troque o `src` do `<iframe>` do YouTube ou use `<video src="seu-video.mp4">`.
- **Música**: troque o `src` do `<audio>`.

### Mudar o fundo
No `style.css`, na variável:
```css
--bg-image: url('caminho/da/sua/imagem.jpg');
```
E ajuste o `--bg-overlay` se quiser mais ou menos escuro.

---

## Estrutura dos arquivos

```
umbrella-blog/
├── index.html       ← Página inicial
├── articles.html    ← Lista de artigos
├── archive.html     ← Arquivo por data
├── about.html       ← Sobre
├── style.css        ← Todo o visual (cores, fontes, layout)
├── script.js        ← Menu mobile + console
└── README.md        ← Este arquivo
```

---

## Dicas

- Sempre que criar uma página nova, copie o header e o footer das existentes pra manter o visual igual.
- As laterais (sidebars) são independentes em cada página. Você pode colocar widgets diferentes em cada uma.
- O site é 100% responsivo. Teste no celular depois de publicar.
- Não precisa de Node, React, nada. É HTML puro + CSS + um pouquinho de JS.

Qualquer dúvida é só chamar.  
Agora vai lá e domina o arquivo, Ange. ☢