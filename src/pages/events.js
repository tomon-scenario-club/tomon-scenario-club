// すべてのテキスト要素を取得
const texts = document.querySelectorAll(".text");
// 各要素の出現タイミングを個別に設定（カスタマイズ可能）
const offsets = [600, 1000, 1400]; // 各テキストのスクロール閾値

// スクロールイベントのリスナーを設定
window.addEventListener("scroll", () => {
  var scroll = window.scrollY;
  const windowHeight = window.innerHeight;
  texts.forEach((text, index) => {
    if (scroll + windowHeight > text.offsetTop) {
      text.classList.add("line"); // 下線アニメーションを適用
    } else {
      text.classList.remove("line"); // 下線アニメーションを解除
    }
  });
});
// すべての画像要素を取得
const images = document.querySelectorAll(".fade-in");

// スクロールイベントのリスナーを設定
window.addEventListener("scroll", () => {
  images.forEach((image) => {
    const rect = image.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    // 画像が画面内に入ったら表示する
    if (rect.top < windowHeight - 100) {
      image.classList.add("visible");
    } else {
      image.classList.remove("visible");
    }
  });
});
