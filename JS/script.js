document.addEventListener('DOMContentLoaded', function () {

  const botao = document.getElementById('menuToggle');
  const menu = document.getElementById('menuMobile');
  const grid = document.querySelector('.servicos-grid');
  const btnPrev = document.querySelector('.btn-prev');
  const btnNext = document.querySelector('.btn-next');
  const header = document.getElementById('header');


  // 1. Lógica para o botão AVANÇAR (Direita)
  btnNext.addEventListener('click', () => {
    // Rola para a direita a largura de um card (ex: 300px + gap)
    grid.scrollLeft += 320;
  });

  // 2. Lógica para o botão VOLTAR (Esquerda)
  btnPrev.addEventListener('click', () => {
    grid.scrollLeft -= 320;
  });

  // 3. Lógica para ESCONDER/MOSTRAR o botão de voltar
  grid.addEventListener('scroll', () => {
    if (grid.scrollLeft > 50) {
      btnPrev.classList.remove('hidden');
    } else {
      btnPrev.classList.add('hidden');
    }
  });

  window.addEventListener('scroll', function () {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });



  botao.addEventListener('click', function () {
    menu.classList.toggle('ativo');

    const spans = botao.querySelectorAll('span');

    if (menu.classList.contains('ativo')) {
      spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
      spans[1].style.opacity = '0';
      spans[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';
    } else {
      spans[0].style.transform = 'none';
      spans[1].style.opacity = '1';
      spans[2].style.transform = 'none';
    }
  });

  const observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
      }
    });
  }, { threshold: 0.1 });

  const elementos = document.querySelectorAll('.reveal');
  elementos.forEach(function (el) {
    observer.observe(el);
  });

});