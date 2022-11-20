import { brandCardsArray } from "./brandCardsArray";
import { Card } from "./classCard";

//генерация карточек Брендов(динамика)

//слежу за событиями. нажата ли кнопка и какой при этом экран
//от этого зависит как будет меняться массив, соответственно сколько карточек будет показываться
export default document.body.addEventListener("click", function (event) {
  if (
    event.target.className === "brands__show-all show-all" &&
    window.screen.width > 767 &&
    window.screen.width < 1119
  ) {
    document.querySelector(".brands").innerHTML = new Card().render(
      brandCardsArray.slice(0, 6)
    );
  }
  if (
    event.target.className === "brands__show-all show-all hide" &&
    window.screen.width > 767 &&
    window.screen.width < 1119
  ) {
    document.querySelector(".brands").innerHTML = new Card().render(
      brandCardsArray
    );
  }
  if (
    event.target.className === "brands__show-all show-all" &&
    window.screen.width > 1119
  ) {
    document.querySelector(".brands").innerHTML = new Card().render(
      brandCardsArray
    );
  }
  if (
    event.target.className === "brands__show-all show-all hide" &&
    window.screen.width > 1119
  ) {
    document.querySelector(".brands").innerHTML = new Card().render(
      brandCardsArray.concat(brandCardsArray.slice(0, 4))
    );
  }
});
