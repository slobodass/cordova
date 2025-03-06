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
    description: "Йога - Традиционная йога, как духовная практика, плюс тщательно подобранный комплекс физических упражнений («асан») – вот что такое йога-классы в Sandow fitness! Призванные устранить эмоциональный стресс и физическую усталость после напряженного трудового дня, эти занятия заметно улучшат параметры здоровья — укрепят позвоночник, мышечный корсет, стабилизируют работу сердечно-сосудистой системы, нормализуют давление, снимут напряжение в плечах и спине. Занятия организованы в максимально удобное время!",
  },
  {
    title: "Кросс-тренинг",
    description: "Кросс-тренинг - Супер популярный формат функционального фитнеса, для которого в Sanow fitness есть всё! Будь то подготовка к соревнованиям по кросс фиту под руководством сертифицированных тренеров, или просто улучшение таких параметров, как мышечная сила и выносливость, координация, баланс и скорость! Профессиональное оснащение и оборудование от официального партнера UFC Sport – компании Sparta Equipment! Занятия организованы в максимально удобное время!",
  },
  {
    title: "Здоровая спина",
    description: "Здоровая спина - Программа «Здоровая спина», разработанная специалистами Sandow Fitness в рамках концепции «Активное долголетие» является одной из самых мягких разновидностей фитнеса, направленных на восстановление и профилактику болезней позвоночника за счет проработки мышц, удерживающих позвоночник в правильном положении. Упражнения предназначены для безопасного растягивания мышц и связок: они улучшат и восстановят подвижность позвоночника, снимут излишнее напряжение и расслабят малоподвижные участки спины. Специально подобранный комплекс упражнений на развитие подвижности и гибкости спины рекомендуется и мужчинам, и женщинам. Тренировки помогут тем, кто хочет сохранить позвоночник здоровым и улучшить осанку!",
  },
  {
    title: "Dance hall",
    description: "Dance hall - Урок на основе базовых элементов популярных направлений street dance, хип-хоп, club dance, R&B. На занятиях под руководством профессиональных инструкторов- хореографов Вы почувствуете себя в круговороте зажигательных ритмов улиц Бронкса! Координация, выносливость, укрепление мышц, выплеск эмоций, хорошее времяпрепровождение в компании единомышленников — это лишь некоторые плюсы, которые несет в себе этот формат танцевального фитнеса в клубе Sandow!",
  },
  {
    title: "Zumba",
    description: "Zumba - Хотите поразить своей танцевальной техникой на любой танцевальной площадке? Тогда фитнес программа Zumba - то, что Вам нужно! Это – энергичная зажигательная тренировка на основе латиноамериканских танцевальных базовых движений с элементами аэробики. Она включает в себя микс из таких активных танцев, как самба, хип-хоп, сальса, меренге, бачата, кумбия, фламенко и некоторых других. Интенсивность урока способствует раскрепощению тела, улучшению эмоционального фона и жиросжиганию до 600 Ккал. за одно занятие! Подходит для любого возраста!",
  },
  {
    title: "Шпагат",
    description: "Шпагат - Урок направлен на достижение максимального уровня растяжки мышц ног, рекомендован для всех уровней подготовленности! При основном акценте на растяжку и шпагат улучшает и общую гибкость; все упражнения выполняются в фазе расслабления,что позволяет снять мышечное напряжение, привести в равновесие мысли, избавиться от стресса. Через некоторое время вы с удовольствием отметите, что походка стала легче, тело стало подтянутым, движения — пластичными. Позитивный заряд бодрости от специалистов по шпагату команды Sandow гарантирован!",
  },
  {
    title: "Стретчинг",
    description: "Стретчинг - Стретчинг (от английского «stretching» – растягивание) — это система особых упражнений, направленная на развитие гибкости всего тела. Авторская программа от фитнес экспертов Sandow fitness включает зарекомендовавшую себя на практике комбинацию упражнений из динамического, изометрического и активного стретчинга, обеспечивающую правильную и безопасную последовательность напряжения, расслабления, растягивания и фиксирования мышц, обеспечивая также и улучшение подвижности суставов! Как бонусы от регулярных занятий стретчингом – предотвращение застоя в лимфатической системе; избавление от болей в поясничном отделе позвоночника; улучшению осанки; профилактике целлюлита; избавлению от нервного перенапряжения и стрессов, оказывая положительное влияние на весь организм в целом!",
  },
  {
    title: "Табата",
    description: "Табата - Табата-тренировка – это высокоинтенсивный интервальный тренинг, цель которого выполнить максимальное количество движений за минимальное время, что обеспечивает высокие темпы снижения массы тела и повышения тонуса мускулатуры всего тела в кратчайшие сроки. Табата-тренировка имеет следующую структуру: 20 секунд максимальная нагрузка, 10 секунд отдых, повторяем этот цикл 8 раз. Это один табата-раунд, он длится всего лишь 4 минуты, но это будет по-настоящему сумасшедшие 4 минуты! Всего в тридцатиминутной тренировке – от 4 до 6 таких раундов. Одна такая тренировка приводит к сжиганию до 500 килокалорий и вызывает мощное ускорение обмена веществ на 48 часов!",
  },
  {
    title: "TRX",
    description: "TRX - Если Ваша цель - полный контроль над координацией и балансом тела с высоким темпом тренировочной интенсивности, тогда клубный формат TRX – для Вас! TRX – это одновременно и название уникального функционального тренажера, и зарекомендовавшей себя по всему миру эффективной системы функциональных тренировок Total Resistance eXercise, призванной в краткий период придать вашему телу мускулистость и тонус, повысить скорость обменных процессов и эффективно снизить массу тела! В Sandow Fitness – Вы можете выбрать для себя как индивидуальный, так и групповой формат этого топового направления!",
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