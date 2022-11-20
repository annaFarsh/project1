import { Card } from "./classCard";
import { priceCardsArray } from "./priceCardsArray";

export default function renderPricecards(priceCardsArray) {
    let screenWidth = window.screen.width;
     if(screenWidth > 767) {
        document.querySelector(".price-table").innerHTML = new Card().render(
        priceCardsArray
      );
     }
      if (screenWidth <= 767) {
        document.querySelector(
          ".swiper-price"
        ).innerHTML = new Card().renderForMobile(priceCardsArray);
    }
  }
  renderPricecards(priceCardsArray);
  