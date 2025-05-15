export function setupForms() {                                           //объявляем и экспортируем функцию setupForms, чтобы другие модули могли её импортировать.
    const salesForm = document.querySelector('#sales-form')              //ищем в DOM элемент <form id="sales-form"> и сохраняем его в переменную salesForm.
    const bookingForm = document.querySelector("#booking-form");
    const fightClubForm = document.querySelector('#fight-club__form')


    function handleFormSubmit(form) {
        form.addEventListener("submit", function (e) {                   //навешиваем слушатель события submit
            e.preventDefault();

            const formData = new FormData(form);                         //собираем данные формы в объект FormData для удобной отправки.

            fetch("https://formspree.io/f/mpwdqenl", {                   //инициируем HTTP‑запрос методом fetch на адрес Formspree.
                method: "POST",
                body: formData,                                          //помещаем данные формы в тело запроса.
                headers: {
                    Accept: "application/json",                         
                },
            })
                .then((response) => {
                    if (response.ok) {
                        alert("Данные успешно отправлены!");
                        form.reset();
                    } else {
                        response.json().then((data) => {
                            alert("Ошибка: " + (data.error || "Неизвестная ошибка."));
                        });
                    }
                })
                .catch((error) => {
                    console.error("Сетевая ошибка:", error);              //информируем пользователя о проблеме.
                    alert("Сетевая ошибка. Попробуйте позже.");
                });
        });
    }

    [salesForm, bookingForm, fightClubForm].forEach((form) => {           //создаём массив из трёх форм и перебираем его.
        if (form) {                                                       //убедимся, что элемент существует на странице.
            handleFormSubmit(form)                                        //подключаем описанный выше обработчик к этой форме.
        }
    })
}