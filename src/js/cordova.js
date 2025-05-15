export function setupCordova() {
  function onDeviceReady() {
    console.log("Running cordova-" + cordova.platformId + "@" + cordova.version);
    document.getElementById("deviceready").classList.add("ready"); //добавляем элементу с id="deviceready" CSS‑класс ready, чтобы изменить стиль после готовности.
  }

  document.addEventListener("deviceready", onDeviceReady, false); //регистрируем слушатель события deviceready; когда оно произойдёт, вызовется onDeviceReady.
}