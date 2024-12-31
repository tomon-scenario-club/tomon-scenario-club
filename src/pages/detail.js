export function detail() {
  window.addEventListener('scroll', function () {
    var scroll = window.scrollY;
    var windowHeight = window.innerHeight;
    var imgElement = document.querySelector('.thumbnail');
    const detailTitleEl = document.querySelector('.detail-hidden');

    if (imgElement) {
      var scale = 1 + scroll / 600;
      imgElement.style.transform = `scale(${scale})`;
      imgElement.style.transition = 'transform 0.1s ease-out';
    }

    const distanceToTitle = detailTitleEl.offsetTop;
    if (scroll + windowHeight > distanceToTitle) {
      detailTitleEl.classList.add('detail-is-active');
    }
  });
}