const modalOpenButton = document.getElementById('menu');
const modalCloseButton = document.getElementById('modalCloseButton');
const modal = document.getElementById('modalContainer');

modalOpenButton.addEventListener('click', () => {
  modal.classList.remove('hidden');
  document.body.style.overflow = 'hidden';
});

modalCloseButton.addEventListener('click', () => {
  modal.classList.add('hidden');
  document.body.style.overflow = 'auto';
});



