import { techCardsArray } from "./techCardsArray";
import { Card } from "./classCard";
//генерация карточек Техники(динамичная)
//здесь генерирую карточки Техники для большого и среднего экрана, с учетом жмакания кнопки Показать все

export default document.body.addEventListener("click", function (event) {
  if (
    event.target.className === "tech__show-all show-all" &&
    window.screen.width > 767 &&
    window.screen.width < 1119
  ) {
    document.querySelector(".tech").innerHTML = new Card().render(
      techCardsArray.slice(0, 3)
    );
  }
  if (
    event.target.className === "tech__show-all show-all hide" &&
    window.screen.width > 767 &&
    window.screen.width < 1119
  ) {
    document.querySelector(".tech").innerHTML = new Card().render(
      techCardsArray.concat(techCardsArray.slice(0, 2))
    );
  }
  if (
    event.target.className === "tech__show-all show-all" &&
    window.screen.width >= 1119
  ) {
    document.querySelector(".tech").innerHTML = new Card().render(
      techCardsArray
    );
  }
  if (
    event.target.className === "tech__show-all show-all hide" &&
    window.screen.width >= 1119
  ) {
    document.querySelector(".tech").innerHTML = new Card().render(
      techCardsArray.concat(techCardsArray)
    );
  }
});
