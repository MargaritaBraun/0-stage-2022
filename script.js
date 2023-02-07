console.log('Вёрстка соответствует макету. Ширина экрана 768px +24 /n Вёрстка соответствует макету. Ширина экрана 380px +24 /n Ни на одном из разрешений до 320px включительно не появляется горизонтальная полоса прокрутки. Весь контент страницы при этом сохраняется: не обрезается и не удаляется +15 /n На ширине экрана 380рх и меньше реализовано адаптивное меню +22 (Допускается появление адаптивного меня на ширине более 380, но не допускается на ширине более 770px)')
const hamburger = document.querySelector('.hamburger');
const nav__menu = document.querySelector('.nav__menu');

//Prices

const accordionTitles = document.querySelectorAll(".pricesButton");

accordionTitles.forEach((accordionTitle) => {
  accordionTitle.addEventListener("click", () => {
    if (accordionTitle.classList.contains("active")) {
      accordionTitle.classList.remove("active");
    } else {
      const accordionTitlesWithIsOpen = document.querySelectorAll(".active");
      accordionTitlesWithIsOpen.forEach((accordionTitleWithIsOpen) => {
        accordionTitleWithIsOpen.classList.remove("active");
      });
      accordionTitle.classList.add("active");
    }
  });
});