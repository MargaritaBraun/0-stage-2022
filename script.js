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

//Servise   service
let gardenbtn = document.getElementById('garden');
let lawbtn = document.getElementById('law');
let plantingbtn = document.getElementById('planting');
let gardenGallary = document.querySelectorAll('.garden');
let lawGallary = document.querySelector('.lawn');
let plantingGallary = document.querySelectorAll('.planting');


const addTagsClickHandler = () => {
    document.querySelector('.service__container').addEventListener('click', (e) =>{
        if (e.target.classList.contains('servicebtn')) {
            let clickedTag = e.target;
            clickedTag.classList.toggle('active');
            let gallary = document.querySelectorAll('.element')
            gallary.forEach(gallar => {
                gallar.classList.add('blur');
            })
            selectClickButtonsGarden();
            selectClickButtonsLaw();
            selectClickButtonsPlants();
        }
    })
}

addTagsClickHandler();

const selectClickButtonsGarden = () => {
        if (gardenbtn.classList.contains('active')) {
            gardenGallary.forEach(garden => {
                garden.classList.remove('blur');
            })
            if (!gardenbtn.classList.contains('active')) {
                garden.classList.add('blur');
            }
        }
    }

    const selectClickButtonsLaw = () => {
        if (lawbtn.classList.contains('active')) {
            lawGallary.classList.remove('blur');
            }
            if (!lawbtn.classList.contains('active')) {
                lawGallary.classList.add('blur');
            }
        }


        const selectClickButtonsPlants = () => {
            if (plantingbtn.classList.contains('active')) {
                plantingGallary.forEach(plantin => {
                    plantin.classList.remove('blur');
                })
                if (!plantingbtn.classList.contains('active')) {
                    plantin.classList.add('blur');
                }
            }
        }

    /*





const addblurAll = () => {
    let tags = document.querySelectorAll('.element');
    tags.classList.add('.blur')
}
//const gardenButtonsAll = () => {
    
    gardenbtn.addEventListener ('click', () => {
        gallaryGarden.classList.remove('.blur')
    })
    //console.log(gallaryGarden);
//}




//удалили выбранный стиль для кнопки а добавили обычный класс, можно мне удалить
const removeSelectedTags = () => {
    let tags = document.querySelectorAll('.servicebtn');
    tags.forEach(tag => {
        tag.classList.remove('servicebtnActive');
        tag.classList.add('btn__not');
        if (clickedTag.innerText) {
            showAllStrategies();
        } else {
            filtlerStrategies(clickedTag.innerText);
        }
        
    })

}
/*const selectClickTag = (clickedTag) => {
clickedTag.classList.add('servicebtnActive');
clickedTag.classList.remove('btn__not');
}

const showAllStrategies = () => {

}

const filtlerStrategies = (selectedTag) => {
    let strategies = document.querySelectorAll('.tags');
    strategies.forEach(stratedy => {
        stratedy.classList.add('blur');
        stratedy.querySelectorAll('.tags').forEach(tag => {
            if (tag.innerText === selectedTag) {
                stratedy.classList.remove('blur');
            }
        })
    })
}
*/
