const refs = {
  openModalBtn: document.querySelector('[data-open-modal-buy-now]'),
  // openModalBtnMob: document.querySelector('[data-open-modal-buy-now-mob]'),
  closeModalBtn: document.querySelector('[data-close-modal-buy-now]'),
  backdrop: document.querySelector('[data-backdrop-buy-now]'),
};

refs.openModalBtn.addEventListener('click', toggleModal);
// refs.openModalBtnMob.addEventListener('click', toggleModal);
refs.closeModalBtn.addEventListener('click', toggleModal);

function toggleModal() {
  document.body.classList.toggle('data-open-modal-buy-now');
  refs.backdrop.classList.toggle('is-hidden');
}
