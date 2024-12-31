window.addEventListener('scroll', () => {
  var scroll = window.scrollY;
  const windowHeight = window.innerHeight;
  const hiddenEls = document.querySelectorAll('.is-not-visible');

  hiddenEls.forEach((e) => {
    const rect = e.getBoundingClientRect();
    const eTop = scroll + rect.top;
    if (scroll + windowHeight > eTop) {
      e.classList.add('is-visible');
    }
  })
})