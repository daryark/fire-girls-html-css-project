const stickyBtn = document.querySelector('.sticky');

window.addEventListener('scroll', checkHeight);
function checkHeight() {
  if (window.scrollY > 200) {
    stickyBtn.style.display = 'block';
  } else {
    stickyBtn.style.display = 'none';
  }
}
stickyBtn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
});
