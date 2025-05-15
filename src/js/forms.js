export function setupForms() {
    const salesForm = document.querySelector('#sales-form')
  const bookingForm = document.querySelector("#booking-form");
  const fightClubForm = document.querySelector('#fight-club__form')




  function handleFormSubmit(form) {
    form.addEventListener("submit", function (e) {
    e.preventDefault();

    const formData = new FormData(bookingForm);

    fetch("https://formspree.io/f/mpwdqenl", {
      method: "POST",
      body: formData,
      headers: {
        Accept: "application/json",
      },
    })
      .then((response) => {
        if (response.ok) {
          alert("Данные успешно отправлены!");
          bookingForm.reset();
        } else {
          response.json().then((data) => {
            alert("Ошибка: " + (data.error || "Неизвестная ошибка."));
          });
        }
      })
      .catch((error) => {
        console.error("Сетевая ошибка:", error);
        alert("Сетевая ошибка. Попробуйте позже.");
      });
  });
  }

  [salesForm, bookingForm, fightClubForm].forEach((form) => {
    if(form) {
        handleFormSubmit(form)
    }
  })
}