import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger'

export function initAnimations() {
  if (typeof window === 'undefined' || typeof document === 'undefined') {
    // サーバーサイドでは何もしない
    return;
  }
  const matchMedia = window.matchMedia('(max-width: 768px)');

  if (matchMedia.matches) {
    setTimeout(function () {
      document.querySelector('.p-firstview_text h1').style.visibility = 'hidden';
      document.querySelector('.p-firstview_text p').style.visibility = 'hidden';
    }, 2000)
  } else {
    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.scroll-container',
        start: 'top top',
        end: '+=100%',
        scrub: true,
        pin: true,
        anticipatePin: 1
      }
    });

    tl.to('.p-firstview_text', {
      autoAlpha: 0,
      y: -100,
    }, 0)
      .to('.p-firstview_background', {
        autoAlpha: 0,
        y: -200,
      }, 0.8);

    ScrollTrigger.create({
      trigger: '.scroll-container',
      start: 'top top',
      end: '+=100%',
      onLeave: () => {
        console.log('animation complete');
      }
    });
  }
}