const refs = {
	openModalBtn: document.querySelector("[data-open-modal-read-more]"),
	closeModalBtn: document.querySelector("[data-close-modal-read-more]"),
	backdrop: document.querySelector("[data-backdrop-read-more]"),
};

refs.openModalBtn.addEventListener("click", toggleModal);
refs.closeModalBtn.addEventListener("click", toggleModal);

function toggleModal() {
	document.body.classList.toggle("data-open-modal-read-more");
	refs.backdrop.classList.toggle("is-hidden");
}