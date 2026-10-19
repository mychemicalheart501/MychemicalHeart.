// ============================================================
// UMBRELLA ARCHIVES - SCRIPT
// ============================================================

// Menu mobile
const menuToggle = document.getElementById('menuToggle');
const mainNav = document.getElementById('mainNav');

if (menuToggle && mainNav) {
  menuToggle.addEventListener('click', () => {
    mainNav.classList.toggle('open');
  });
}

// Fecha o menu ao clicar em um link (mobile)
document.querySelectorAll('.nav a').forEach(link => {
  link.addEventListener('click', () => {
    if (window.innerWidth <= 600) {
      mainNav.classList.remove('open');
    }
  });
});

// Efeito sutil de "terminal" no console (só pra ficar daora)
console.log('%c☣ UMBRELLA ARCHIVES ☣', 'color: #c41e3a; font-size: 16px; font-weight: bold;');
console.log('%cAcesso autorizado. Nível: Ômega', 'color: #999; font-size: 12px;');
console.log('%cQualquer tentativa de invasão será registrada.', 'color: #666; font-size: 11px;');