import {brandCardsArray} from "./brandCardsArray";
import {techCardsArray} from "./techCardsArray";
import { priceCardsArray } from "./priceCardsArray";

//пишу класс для карточек брендов, он будет принимать массив и возвращать DOM элемент (верстку нужного количества карточек)
export class Card {
//метод для экранов среднего и большого
    render(cardsArray){
      if(cardsArray[0].purpose === "brand"){
     let newCard = "";
        for (let card of cardsArray) {

           newCard +=  `<a href=${card.link} class="section">
              <img src=${card.image} alt=${card.alt} width=${card.imageWidth} height=${card.imageHeight}>
            <div class="section__button button"><div class="pointer"></div></div></a>`
}
return newCard;
}
if(cardsArray[0].purpose === "tech"){
   let newCard = "";
        for (let card of cardsArray) {

           newCard += `<a class="section" href=${card.link} class="section"><div class="repair-of-tech">${card.name}</div>
           <div class="section__button button"><div class="pointer"></div></div></a>`
    }
    return newCard;
   }

   if(cardsArray[0].purpose === "price"){
      let newCard = "";
           for (let card of cardsArray) {
              newCard += `<tr>
              <td>${card.name}</td>
              <td>${card.price}</td>
              <td>${card.time}</td>
              <td><button class="table__button button--long">Заказать</button></td>
            </tr>`
       }
       return newCard;
      }
}
//метод для мобильного
renderForMobile(cardsArray){
   if(cardsArray[0].purpose === "brand"){
   let newCard = "";

   for (let card of cardsArray) {
   newCard+= `<div class="swiper-slide cards-slider"><a href=${card.link} class="section">
   <img src=${card.image} alt=${card.alt} width=${card.imageWidth} height=${card.imageHeight}>
   <div class="section__button button"><div class="pointer"></div></div></a></div>`
   }
   return newCard;
}
if(cardsArray[0].purpose === "tech"){
   let newCard = "";
   for (let card of cardsArray) { 
      newCard +=`<div class="swiper-slide tech-slider"><a class="section" href=${card.link} class="section"><div class="repair-of-tech">${card.name}</div>
      <div class="section__button button"><div class="pointer"></div></div></a></div>`
   }
   return newCard;
}
if(cardsArray[0].purpose === "price"){
   let newCard = "";
        for (let card of cardsArray) {
           newCard += `<div class="swiper-slide price-slider"><a href=${card.link} class="section">
          <div class="price-item"><span class= "price-item__span">Ремонтные услуги</span><br>${card.name}</span></div>
          <div class="price-item"><span class="price-item__span">Цена</span><br>${card.price}</div>
          <div class="price-item"><div><span class= "price-item__span">Срок</span><br>${card.time}</div><button class="table__button button--long">Заказать</button></div>
          </a></div>
         `
    }
    return newCard;
   }
}
}