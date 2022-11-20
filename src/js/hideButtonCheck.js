import { brandCardsArray } from "./brandCardsArray";
//тут кнопка показать все меняет класс, имя, крутится
export function hideButtonCheck() {
  let showAllButton = document.querySelectorAll(".show-all");
  showAllButton.forEach(function (button) {
    button.addEventListener("click", function () {
      button.classList.toggle("hide");

      for (let name of button.classList) {
        if (name === "hide") {
          button.innerText = "Скрыть";
        } else if (button.className !== "hide") {
          button.innerText = "Показать все";
        }
      }
    });
  });
}
hideButtonCheck();
