let showBtn   = document.getElementById('show')
let hiddenBtn = document.getElementById('hidden')
let container = document.querySelector('.container')

showBtn.addEventListener('click', event => {
    container.classList.add('show-nav')
});

hiddenBtn.addEventListener('click', event => {
  container.classList.remove('show-nav')
});
