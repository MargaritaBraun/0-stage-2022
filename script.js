console.log('1 Вёрстка валидная +10 = 5 баллов/n2 Вёрстка семантическая +20 = 20 баллов/n3 Вёрстка соответствует макету +48 = 20 баллов/n4 Требования к css + 12 = 6 баллов/n5 Интерактивность, реализуемая через css +20 = 10 баллов/nИтого = 61 балла')
let hamburger = document.querySelector('.hamburger');
let nav__menu = document.querySelector('.nav__menu');
hamburger.addEventListener('click', function(){
	nav__menu.classList.toggle('active');
})