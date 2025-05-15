import Inputmask from "inputmask";                                        //подключаем библиотеку Inputmask и сохраняем её конструктор в переменной Inputmask.

export function setupPhoneMask() {                                        //объявляем и экспортируем функцию setupPhoneMask, чтобы её могли вызвать из других модулей.
  const phoneInputs = document.querySelectorAll(".phone-input");          //находим все поля ввода с классом .phone-input и кладём их в NodeList phoneInputs.
  if (phoneInputs) {
    const mask = new Inputmask({
      mask: "+7 (999) 999-99-99",                                         //маска телефона
      showMaskOnHover: true,                                              //при наведении курсора отображается шаблон маски.
      showMaskOnFocus: true,
      placeholder: "_",
    });

    phoneInputs.forEach((input) => {                                      //перебираем все найденные поля ввода.
      mask.mask(input);                                                   //применяем созданную маску к текущему элементу input.
    });
  }
}