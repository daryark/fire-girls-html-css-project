const refs = {
	openModalBtn: document.querySelector("[data-open-modal-loc]"),
	closeModalBtn: document.querySelector("[data-close-modal-loc]"),
	backdrop: document.querySelector("[data-backdrop-loc]"),
};

refs.openModalBtn.addEventListener("click", toggleModal);
refs.closeModalBtn.addEventListener("click", toggleModal);

function toggleModal() {
	document.body.classList.toggle("data-open-modal-loc");
	refs.backdrop.classList.toggle("is-hidden");
}