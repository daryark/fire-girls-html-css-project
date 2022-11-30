const refs = {
  openModalBtnIcecream: document.querySelector('[data-open-modal-ice-cream]'),
  openModalBtnIcecoffee: document.querySelector('[data-open-modal-ice-coffee]'),
  openModalBtnMilkshakes: document.querySelector(
    '[data-open-modal-milkshakes]'
  ),
  closeModalBtn: document.querySelector('[data-close-modal-ingredients]'),
  backdrop: document.querySelector('[data-backdrop-ingredients]'),
};

refs.openModalBtnIcecream.addEventListener('click', toggleModal);
refs.openModalBtnIcecoffee.addEventListener('click', toggleModal);
refs.openModalBtnMilkshakes.addEventListener('click', toggleModal);
refs.closeModalBtn.addEventListener('click', toggleModal);

function toggleModal() {
  document.body.classList.toggle('data-open-modal-ingredients');
  refs.backdrop.classList.toggle('is-hidden');
}
