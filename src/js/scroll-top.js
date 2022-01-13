export { onScroll, onToTopBtn };

const toTopBtn = document.querySelector('.btn-top');
window.addEventListener('scroll', onScroll);
toTopBtn.addEventListener('click', onToTopBtn);
function onScroll(){
    const x = window.scrollY
    const y = document.documentElement.clientHeight
    if (x > y) {
    toTopBtn.classList.add('btn-top--visible')
  }
  if (x < y) {
    toTopBtn.classList.remove('btn-top--visible')
  }
};

function onToTopBtn() {
     if (window.scrollY > 0) {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
};

