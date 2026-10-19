// ============================================================
// UMBRELLA ARCHIVES - CONFIGURAÇÃO
// Este arquivo é gerado pelo painel (painel.html).
// Não precisa editar à mão.
// ============================================================

const SITE_CONFIG = {
  "nome": {
    "parte1": "UMBRELLA",
    "parte2": "ARCHIVES"
  },
  "tagline": "Arquivos Classificados • Nível Ômega",
  "cores": {
    "bg": "#0a0a0a",
    "bgSecondary": "#111111",
    "text": "#e8e8e8",
    "textMuted": "#999999",
    "accent": "#c41e3a",
    "accentHover": "#ff2a4a",
    "border": "#2a2a2a",
    "cardBg": "#141414",
    "headerBg": "#0d0d0d"
  },
  "fundo": {
    "imagem": "",
    "escurecimento": 0.85
  },
  "musica": {
    "titulo": "Ambient Lab • Restricted",
    "arquivo": "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
  },
  "video": "https://www.youtube.com/embed/dQw4w9WgXcQ",
  "fotos": [
    "https://picsum.photos/seed/umb1/200/200",
    "https://picsum.photos/seed/umb2/200/200",
    "https://picsum.photos/seed/umb3/200/200",
    "https://picsum.photos/seed/umb4/200/200"
  ],
  "links": [
    {
      "texto": "Relatório Raccoon City",
      "url": "#"
    },
    {
      "texto": "Protocolo T-Virus",
      "url": "#"
    },
    {
      "texto": "Arquivo HUNK",
      "url": "#"
    },
    {
      "texto": "Base Antártida",
      "url": "#"
    },
    {
      "texto": "Comunicados Internos",
      "url": "#"
    }
  ]
};

(function () {
  const c = SITE_CONFIG;
  const raiz = document.documentElement.style;
  const $ = (sel) => document.querySelector(sel);
  const $$ = (sel) => document.querySelectorAll(sel);

  // Cores
  const variaveis = {
    bg: '--bg',
    bgSecondary: '--bg-secondary',
    text: '--text',
    textMuted: '--text-muted',
    accent: '--accent',
    accentHover: '--accent-hover',
    border: '--border',
    cardBg: '--card-bg',
    headerBg: '--header-bg'
  };
  Object.keys(variaveis).forEach((chave) => {
    if (c.cores[chave]) raiz.setProperty(variaveis[chave], c.cores[chave]);
  });

  // Fundo (wallpaper)
  if (c.fundo.imagem) raiz.setProperty('--bg-image', 'url("' + c.fundo.imagem + '")');
  raiz.setProperty('--bg-overlay', 'rgba(10, 10, 10, ' + c.fundo.escurecimento + ')');

  // Nome e frase
  const titulo = $('.blog-title');
  if (titulo) titulo.innerHTML = c.nome.parte1 + ' <span>' + c.nome.parte2 + '</span>';
  const frase = $('.blog-tagline');
  if (frase && c.tagline) frase.textContent = c.tagline;

  // Música
  const fonte = $('audio source');
  if (fonte && c.musica.arquivo) {
    fonte.src = c.musica.arquivo;
    fonte.parentElement.load();
  }
  const info = $('.music-info');
  if (info && c.musica.titulo) info.innerHTML = '<strong>Faixa Atual:</strong><br>' + c.musica.titulo;

  // Vídeo
  const video = $('.video-embed iframe');
  if (video && c.video) video.src = c.video;

  // Fotos e gifs
  const fotos = $$('.photo-grid img');
  c.fotos.forEach((src, i) => {
    if (fotos[i] && src) fotos[i].src = src;
  });

  // Links rápidos
  const links = $$('.link-list a');
  c.links.forEach((l, i) => {
    if (links[i] && l.texto) {
      links[i].textContent = '→ ' + l.texto;
      links[i].href = l.url || '#';
    }
  });
})();
