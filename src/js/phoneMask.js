import Inputmask from "inputmask";

export function setupPhoneMask() {
  const phoneInputs = document.querySelectorAll(".phone-input");
  if (phoneInputs) {
    const mask = new Inputmask({
      mask: "+7 (999) 999-99-99",
      showMaskOnHover: true,
      showMaskOnFocus: true,
      placeholder: "_",
    });

    phoneInputs.forEach((input) => {
      mask.mask(input);
    });
  }
}