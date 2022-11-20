
export default
document.addEventListener('DOMContentLoaded', () => {
//по клику открывается модальное окно. Кнопок две, надо повесить событие на каждую
let feedbackButtons = document.querySelectorAll('.modal-feedback__open');
feedbackButtons.forEach(function(btn){
  btn.addEventListener('click', function() {
    document.querySelector('.modal-feedback').classList.add('modal--active');
    document.body.classList.add("hidden");  
})
})

  //закрывается по клику на кнопку закрытия
  document.querySelector('.modal-feedback__close').addEventListener('click', function() {
    document.querySelector('.modal-feedback').classList.remove('modal--active');
    document.body.classList.remove('hidden');
  })
});
//если кликнули вне модала - тоже закроется
document.querySelector('.modal-feedback').addEventListener('click', function(e){
if(e.target.closest('.modal-feedback__content') === null){
  this.classList.remove('modal--active');
  document.body.classList.remove('hidden');
}
})

