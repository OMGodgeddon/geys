const modal = document.querySelector('#modal');
const openModal = document.querySelector('#openModal');

openModal.addEventListener('click', (e) => {
  e.preventDefault();
  modal.classList.toggle('modal--open');
});

modal.addEventListener('click', (e) => {
  modal.classList.remove('modal--open');
});
