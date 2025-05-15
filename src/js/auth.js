import { initializeApp } from "firebase/app";  //авторизация
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";  //

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

export function setupAuthRedirect() {                      //объявляем и экспортируем функцию setupAuthRedirect.
  onAuthStateChanged(auth, (user) => {
    if (!user) {
      window.location.href = "login.html";
    }
  });
}

export function logout() {
  signOut(auth)                                           //инициируем выход пользователя из Firebase Auth
    .then(() => {
      console.log("Выход выполнен успешно");
      window.location.href = "login.html";             //перенаправляем пользователя на страницу входа
    })
    .catch((error) => {                              //обрабатываем возможную ошибку при выходе
      console.error("Ошибка при выходе: ", error);  //выводим описание ошибки в консоль
    });
}

export { auth, createUserWithEmailAndPassword, signInWithEmailAndPassword };   //переэкспортируем объекты/функции auth, createUserWithEmailAndPassword и signInWithEmailAndPassword, чтобы их можно было импортировать из этого модуля в других файлах.