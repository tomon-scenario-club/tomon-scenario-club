import Swiper from "swiper";
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

export function eventsSwiper() {
  const swiper = new Swiper('#events-swiper', {
    modules: [Pagination],
    direction: 'horizontal',
    loop: true,
    slidesPerView: 1,
  
    pagination: {
      el: '.swiper-pagination',
    },
  });
}