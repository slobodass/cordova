import Swiper from "swiper";                               //импортируем основной класс Swiper для создания слайдера.
import "swiper/css";                                       //подключаем базовые стили Swiper
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";               //импортируем JS‑модуль Navigation

export function initializeSwiper() {
  return new Swiper(".swiper-container", {
    loop: true,                                            //включаем бесконечную прокрутку
    slidesPerView: 3,                                      //по умолчанию показываем 3 слайда одновременно.
    spaceBetween: 30,                                      //расстояние между слайдами
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      480: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      640: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
    },
  });
}