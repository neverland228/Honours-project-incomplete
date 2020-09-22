const menu = document.querySelector('#menu');
const links = document.querySelector('#links');

menu.addEventListener('click', () => {
  console.log(links.classList);
  links.classList.remove('hidden');
});
