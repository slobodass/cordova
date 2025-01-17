/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

// Wait for the deviceready event before using any of Cordova's device APIs.
// See https://cordova.apache.org/docs/en/latest/cordova/events/events.html#deviceready
document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
    // Cordova is now initialized. Have fun!

    console.log('Running cordova-' + cordova.platformId + '@' + cordova.version);
    document.getElementById('deviceready').classList.add('ready');
}

// import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js';
// import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js';
const firebaseConfig = {
    apiKey: "AIzaSyC6NSFMcNA2F3SgoCodLUt53Rt6vlGmKXI",
    authDomain: "sf-app-database.firebaseapp.com",
    projectId: "sf-app-database",
    storageBucket: "sf-app-database.firebasestorage.app",
    messagingSenderId: "135936952195",
    appId: "1:135936952195:web:f6cdbf9d06143a532858b6"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);



const loginTab = document.getElementById('login-tab');
const registerTab = document.getElementById('register-tab');
const loginForm = document.getElementById('login-form');
const registerForm = document.getElementById('register-form');
const formRegistration = document.querySelector('.form-registration')
const registerEmail = document.querySelector('#register-email')
const registerPassword = document.querySelector('#register-password')
const formAuth = document.querySelector('.form-auth')
const authEmail = document.querySelector('.auth-email')
const authPassword = document.querySelector('.auth-password')



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
        console.error('Ошибка входа: ', error)
    }
})



// click - обработчик событий
loginTab.addEventListener('click', () => {
    loginTab.classList.add('active');
    // active - изменение цвета эл-та
    registerTab.classList.remove('active');
    loginForm.style.display = 'block';
    registerForm.style.display = 'none';
});

registerTab.addEventListener('click', () => {
    registerTab.classList.add('active');
    loginTab.classList.remove('active');
    loginForm.style.display = 'none';
    registerForm.style.display = 'block';
});