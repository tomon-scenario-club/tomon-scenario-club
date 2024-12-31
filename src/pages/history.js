import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export async function historySwiper() {
  const historyContents = await fetchHistoryContents();

  if (!historyContents || historyContents.length === 0) {
    console.error('History contents are empty.');
    return;
  }

  const swiper = new Swiper('#history-swiper', {
    modules: [Navigation, Pagination],
    direction: 'horizontal',
    centeredSlides: true,
    spaceBetween: 23,
    slidesPerView: 1.3,

    pagination: {
      el: '#history .swiper-pagination',
      type: "progressbar",
    },

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    breakpoints: {
      769: {
        spaceBetween: 31,
        slidesPerView: 3.3,
      }
    }
  });

  swiper.on('slideChange', () => {
    const currentIndex = swiper.realIndex;
    const currentContent = historyContents[currentIndex];

    const periodEl = document.getElementById('history-period');
    const descriptionEl = document.getElementById('history-description');

    if (currentContent && periodEl && descriptionEl) {
      periodEl.textContent = currentContent.period || '';
      descriptionEl.textContent = currentContent.explanation || '';
    }
  });
}

export async function fetchHistoryContents() {
  const apiUrl = `${import.meta.env.PUBLIC_MICROCMS_API_URL}history?limit=100&orders=publishedAt`;
  const apiKey = import.meta.env.PUBLIC_MICROCMS_API_KEY;
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