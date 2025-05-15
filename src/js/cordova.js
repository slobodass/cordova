export function setupCordova() {
  function onDeviceReady() {
    console.log("Running cordova-" + cordova.platformId + "@" + cordova.version);
    document.getElementById("deviceready").classList.add("ready");
  }

  document.addEventListener("deviceready", onDeviceReady, false);
}