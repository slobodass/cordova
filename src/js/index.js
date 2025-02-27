import "../css/index.css";
import Swiper from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

// const loginTab = document.getElementById("login-tab");
const registerTab = document.getElementById("register-tab");
const loginForm = document.getElementById("login-form");
const registerForm = document.getElementById("register-form");
const formRegistration = document.querySelector(".form-registration");
const registerEmail = document.querySelector("#register-email");
const registerPassword = document.querySelector("#register-password");
const formAuth = document.querySelector(".form-auth");
const authEmail = document.querySelector(".auth-email");
const authPassword = document.querySelector(".auth-password");
const modalTitle = document.querySelector(".modal_title");
const modalText = document.querySelector(".modal_text");

const firebaseConfig = {
  apiKey: "AIzaSyC6NSFMcNA2F3SgoCodLUt53Rt6vlGmKXI",
  authDomain: "sf-app-database.firebaseapp.com",
  projectId: "sf-app-database",
  storageBucket: "sf-app-database.firebasestorage.app",
  messagingSenderId: "135936952195",
  appId: "1:135936952195:web:f6cdbf9d06143a532858b6",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

function onDeviceReady() {
  console.log("Running cordova-" + cordova.platformId + "@" + cordova.version);
  document.getElementById("deviceready").classList.add("ready");
}

// click - обработчик событий
// loginTab.addEventListener("click", () => {
//   loginTab.classList.add("active");
//   registerTab.classList.remove("active");
//   loginForm.style.display = "block";
//   registerForm.style.display = "none";
// });

// registerTab.addEventListener("click", () => {
//   registerTab.classList.add("active");
//   loginTab.classList.remove("active");
//   loginForm.style.display = "none";
//   registerForm.style.display = "block";
// });

const trainingsCards = document.querySelectorAll(".trainings__item");
const trainingsModal = document.querySelector(".modal");
const modalCloseButton = document.querySelector(".modal__button-close");

const cardData = [
  {
    title: "Йога",
    description: "Йога - ..........",
  },
  {
    title: "Кросс-тренинг",
    description: "Йога - ..........",
  },
  {
    title: "Здоровая спина",
    description: "Йога - ..........",
  },
  {
    title: "Dance hall",
    description: "Йога - ..........",
  },
  {
    title: "Zumba",
    description: "Йога - ..........",
  },
  {
    title: "Шпагат",
    description: "Йога - ..........",
  },
  {
    title: "Стретчинг",
    description: "Йога - ..........",
  },
  {
    title: "Табата",
    description: "Йога - ..........",
  },
  {
    title: "TRX",
    description: "Йога - ..........",
  },
];

trainingsCards.forEach((card, index) => {
  card.addEventListener("click", () => {
    modalTitle.textContent = cardData[index].title;
    modalText.textContent = cardData[index].description;

    trainingsModal.classList.add("modal_active");
  });
});

const swiper = new Swiper(".swiper-container", {
  loop: true,
  slidesPerView: 3,
  spaceBetween: 30,
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 10,
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

document.addEventListener("deviceready", onDeviceReady, false);

// formRegistration.addEventListener("submit", async function (event) {
//   event.preventDefault();
//   const email = registerEmail.value;
//   const password = registerPassword.value;
//   try {
//     const userCredential = await createUserWithEmailAndPassword(
//       auth,
//       email,
//       password
//     );
//     console.log("Регистрация прошла успешно");
//   } catch (error) {
//     console.error("Ошибка регистрации: ", error);
//   }
// });

// formAuth.addEventListener("submit", async function (event) {
//   event.preventDefault();
//   const email = authEmail.value;
//   const password = authPassword.value;
//   try {
//     const userCredential = await signInWithEmailAndPassword(
//       auth,
//       email,
//       password
//     );
//     console.log("Вход прошел успешно!");
//     window.location.href = "index.html";
//   } catch (error) {
//     console.error("Ошибка входа: ", error);
//   }
// });

// крестик закрывает окно
modalCloseButton.addEventListener("click", () => {
  trainingsModal.classList.remove("modal_active");
});

trainingsModal.addEventListener("click", (event) => {
  if (event.target === trainingsModal) {
    trainingsModal.classList.remove("modal_active");
  }
});