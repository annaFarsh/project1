import {techCardsArray} from "./techCardsArray";
import { Card } from "./classCard";

//определяю какой экран и генерирую верстку (для Тех карточек)
export function renderTechcards(techCardsArray) {
    let screenWidth = window.screen.width;
    if (screenWidth > 767 && screenWidth < 1119) {
      document.querySelector(".tech").innerHTML = new Card().render(
        techCardsArray.slice(0, 3)
      );
    }
    if (screenWidth > 1119) {
      document.querySelector(".tech").innerHTML = new Card().render(
        techCardsArray
      );
    }
    if (screenWidth < 767) {
      document.querySelector(
        ".swiper-tech"
      ).innerHTML = new Card().renderForMobile(techCardsArray.concat(techCardsArray));
  }
}
  renderTechcards(techCardsArray)