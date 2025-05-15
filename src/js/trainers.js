import elina from "@/img/Elina.jpg";
import konstantin from "@/img/Konstantin.jpg";
import nikolai from "@/img/Nikolai.jpg";
import uri from "@/img/Uri.jpg";
import natalia from "@/img/Natalia.jpg";
import vyacheslav from "@/img/Vyacheslav.jpg";

const trainers = [
  { selector: ".trainer-1", image: elina },
  { selector: ".trainer-2", image: konstantin },
  { selector: ".trainer-3", image: elina },
  { selector: ".trainer-4", image: nikolai },
  { selector: ".trainer-5", image: uri },
  { selector: ".trainer-6", image: natalia },
  { selector: ".trainer-7", image: vyacheslav },
  { selector: ".trainer-8", image: vyacheslav },
];

export function setupTrainers() {
  trainers.forEach(({ selector, image }) => {
    const el = document.querySelector(selector);
    if (el) {
      el.style.backgroundImage = `url(${image})`;
    }
  });
}