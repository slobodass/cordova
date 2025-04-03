import "../css/index.css";
import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,

  signOut
} from "firebase/auth";

const loginTab = document.getElementById("login-tab");
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
const errorMessage = document.querySelector("#error-message")

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

formRegistration.addEventListener('submit', async function (event) {
    event.preventDefault()
    const email = registerEmail.value;
    const password = registerPassword.value;
    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password)
        console.log('Регистрация прошла успешно');
    } catch (error) {
        console.error('Ошибка регистрации: ', error)
    }
})

formAuth.addEventListener('submit', async function (event) {
    event.preventDefault()
    const email = authEmail.value;
    const password = authPassword.value;
    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password)
        console.log('Вход прошел успешно!');
        window.location.href = "index.html"
    } catch (error) {
        console.error('Ошибка входа: ', error);
        errorMessage.textContent = "Неверный пароль или email"
        errorMessage.style.display = "block"
    }
})



// click - обработчик событий
loginTab.addEventListener('click', () => {
    loginTab.classList.add('active');
    // active - изменение цвета эл-та
    registerTab.classList.remove('active');
    loginForm.style.display = 'block';
    formAuth.style.display = "flex";
    registerForm.style.display = 'none';
});

registerTab.addEventListener('click', () => {
    registerTab.classList.add('active');
    loginTab.classList.remove('active');
    loginForm.style.display = 'none';
    formRegistration.style.display = "flex";
    registerForm.style.display = 'block';
});

document.addEventListener("DOMContentLoaded", () => {
    onAuthStateChanged(auth, (user) => {
      const isLoginPage = window.location.pathname.includes("login.html");
  
      if (!user && !isLoginPage) {
        window.location.href = "login.html"; 
        console.log("window.location.href = login.html");
      } else if (user && isLoginPage) {
        window.location.href = "index.html"; 
        console.log("window.location.href = index.html ");
      } else {
        console.log("Пользователь НЕ авторизован");
      }
    });
  });
