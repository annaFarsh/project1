//массив карточек
let currentArray = [];



let media1120px = window.matchMedia("(min-width: 1120px)");
let media767px = window.matchMedia(
  "(min-width: 767px) and (max-width: 1119px)"
);
let media240px = window.matchMedia("(min-width: 240px) and (max-width: 767px)");

//тут свайпер
new Swiper(".swiper", {
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    320: {
      slidesPerView: 1.4,
      spaceBetween: 0,
    },
    480: {
      slidesPerView: 2,
      spaceBetween: 0,
    },
    640: {
      slidesPerView: 3,
      spaceBetween: 0,
    },
  },
});

//ищу тело таблицы
let priceTable = document.querySelector(".price-table");
let swiperWrapper = document.querySelector(".swiper-wrapper");
//функция генерации карточек для мобилок
let priceCard = "";
function generationCardsforMobile() {
  priceCards.forEach((card) => {
    return (priceCard += 
//         `<div class="swiper-slide cards-slider"><a class="section" href=${card.link} class="section"><div class="repair-of-tech">${card.name}</div>
//  <div class="section__button button"><div class="pointer"></div></div></a></div>`
`<tr>
    <td>${card.name}</td>
    <td>${card.price}</td>
    <td>${card.time}</td>
    <td></td>
  </tr>`
 );
  });
  swiperWrapper.innerHTML = priceCard;
}


//функция для генерации карточки
function generationCards() {
  priceCards.forEach((card) => {
    return (priceCard += `<tr>
    <td>${card.name}</td>
    <td>${card.price}</td>
    <td>${card.time}</td>
    <td><button class="table__button button">Заказать</button></td>
  </tr>`
    );
  });
  //вставляю карточку в див
  priceTable.innerHTML = priceCard;
}
if (media767px.matches || media1120px.matches) {
generationCards();
} else if (media240px.matches) {
  generationCardsforMobile();
}
