const refs = {
	openModalBtn: document.querySelector("[data-open-modal]"),
	closeModalBtn: document.querySelector("[data-close-modal]"),
	backdrop: document.querySelector("[data-backdrop]"),
};

refs.openModalBtn.addEventListener("click", toggleModal);
refs.closeModalBtn.addEventListener("click", toggleModal);

function toggleModal() {
	document.body.classList.toggle("data-open-modal");
	refs.backdrop.classList.toggle("visually-hidden");
}

/*
(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open]'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    modal: document.querySelector('[data-modal]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('visually-hidden');
  }
})();
*/