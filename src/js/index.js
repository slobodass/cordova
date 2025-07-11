import "../css/index.css";
import { setupAuthRedirect, logout } from "./auth.js";
import { initializeSwiper } from "./slider.js";
import { initializeImageSlider } from "./imageSlider.js";
import { setupTrainers } from "./trainers.js";
import { setupForms } from "./forms.js";
import { setupModals } from "./modals.js";
import { setupPhoneMask } from "./phoneMask.js";
import { setupCordova } from "./cordova.js";

document.addEventListener("DOMContentLoaded", () => {     //Внутри обработчика вызываем подготовительные функции в нужном порядке
  setupAuthRedirect();
  initializeSwiper();
  initializeImageSlider();
  setupTrainers();
  setupForms();
  setupModals();
  setupPhoneMask();                                        //
});

setupCordova();                                            //вызываем настройку Cordova

const logoutBtn = document.querySelector(".logout-btn");  //находим кнопку «Выйти» по классу
logoutBtn.addEventListener("click", logout);