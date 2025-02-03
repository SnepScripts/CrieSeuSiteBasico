// Animação de rolagem suave para os links da navegação
document.querySelectorAll('nav a').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    const targetId = this.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);

    window.scrollTo({
      top: targetElement.offsetTop,
      behavior: 'smooth'
    });
  });
});

// Esconde a tela de carregamento quando a página é carregada
window.addEventListener('load', () => {
  const loading = document.getElementById('loading');
  loading.style.display = 'none';
});