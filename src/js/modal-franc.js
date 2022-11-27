const refs = {
	openModalBtn: document.querySelector("[data-open-modal-franc]"),
	closeModalBtn: document.querySelector("[data-close-modal-franc]"),
	backdrop: document.querySelector("[data-backdrop-franc]"),
};

refs.openModalBtn.addEventListener("click", toggleModal);
refs.closeModalBtn.addEventListener("click", toggleModal);

function toggleModal() {
	document.body.classList.toggle("data-open-modal-franc");
	refs.backdrop.classList.toggle("is-hidden");
}