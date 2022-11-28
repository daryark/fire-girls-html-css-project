const refs = {
	openModalBtn: document.querySelector("[data-open-mob-menu]"),
	closeModalBtn: document.querySelector("[data-close-mob-menu]"),
	backdrop: document.querySelector("[data-mob-menu]"),
};

refs.openModalBtn.addEventListener("click", toggleModal);
refs.closeModalBtn.addEventListener("click", toggleModal);

function toggleModal() {
	document.body.classList.toggle("data-open-mob-menu");
	refs.backdrop.classList.toggle("is-hidden");
}