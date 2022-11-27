const refs = {
	openModalBtn: document.querySelector("[data-open-modal-ice-cream]"),
	closeModalBtn: document.querySelector("[data-close-modal-ingridients]"),
	backdrop: document.querySelector("[data-backdrop-ingridients]"),
};

refs.openModalBtn.addEventListener("click", toggleModal);
refs.closeModalBtn.addEventListener("click", toggleModal);

function toggleModal() {
	document.body.classList.toggle("data-open-modal-ingridients");
	refs.backdrop.classList.toggle("is-hidden");
}

