import Swiper from 'swiper';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/bundle'

export function gallerySwiper() {
  const swiper = new Swiper('#gallery-swiper', {
    modules: [Navigation, Autoplay],
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    centeredSlides: true,
    slidesPerView: 2,
    spaceBetween: '16vw',
    speed: 500,
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
}

export async function fetchGalleryContents() {
  const apiUrl = `${import.meta.env.PUBLIC_MICROCMS_API_URL_2}gallery`;
  const apiKey = import.meta.env.PUBLIC_MICROCMS_API_KEY_2;
  try {
    const response = await fetch(apiUrl, {
      headers: {
        'X-API-KEY': apiKey
      },
    });
    const data = await response.json();
    return data.contents;
  } catch (error) {
    console.error(error);
    return;
  }
}
