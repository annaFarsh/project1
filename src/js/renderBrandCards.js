import { brandCardsArray } from "./brandCardsArray";

import { Card } from "./classCard";

//определяю какой экран и генерирую верстку (для Бренд карточек)

export default function renderBrandcards(brandCardsArray) {
  let screenWidth = window.screen.width;
  if (screenWidth > 767 && screenWidth < 1119) {
    document.querySelector(".brands").innerHTML = new Card().render(
      brandCardsArray.slice(0, 6)
    );
  }
  if (screenWidth > 1119) {
    document.querySelector(".brands").innerHTML = new Card().render(
      brandCardsArray
    );
  }
  if (screenWidth < 767) {
    document.querySelector(
      ".swiper-brands"
    ).innerHTML = new Card().renderForMobile(brandCardsArray);
  }
}
renderBrandcards(brandCardsArray);
