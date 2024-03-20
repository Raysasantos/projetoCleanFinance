/* Esse arquivo foi criado para manipular o menu responsivo */

<button onclick="window.location.href = 'html/login.html';"> Entrar </button>

const menu = document.querySelector('.menu')
const menuIcon = document.querySelector('.sideMenu img')

menuIcon.addEventListener('click', function() {
  // quando houver clique no ícone de menu
  menu.classList.toggle('active')
})