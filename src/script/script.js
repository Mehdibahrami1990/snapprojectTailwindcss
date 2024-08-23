const nav_res = document.querySelector('#nav_res');
const hamber_menu = document.querySelector('#hamber_menu');

hamber_menu.addEventListener('click', () => {
  if (nav_res.classList.contains('hidden')) {
    nav_res.classList.remove('hidden');
  } else {
    nav_res.classList.add('hidden');
  }
});
