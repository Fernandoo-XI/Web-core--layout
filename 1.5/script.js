var button = document.querySelector('.list__button-text');
var text = document.querySelector('.list_arrow');
var list = document.querySelector('.items__part');

button.addEventListener('click', function () {
  if (list.classList.contains('hidden')) {
      list.classList.remove('hidden');
      text.textContent = 'Скрыть';
    } else {
      list.classList.add('hidden');
      text.textContent = 'Показать все';
    }
});

text.addEventListener('click', function () {
  
  if (list.classList.contains('hidden')) {
      list.classList.remove('hidden');
      text.textContent = 'Скрыть';
    } else {
      list.classList.add('hidden');
      text.textContent = 'Показать все';
    }

});

var swiper = new Swiper('.swiper', {
  
  spaceBetween: 16,
  slidesPerView: 'auto',

  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true
  },


});


