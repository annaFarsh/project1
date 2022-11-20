export default
document.addEventListener('DOMContentLoaded', () => {
    //по клику открывается модальное окно, кнопок две, ВЕШАЮ на обе
    let callButtons = document.querySelectorAll('.modal-call__open');
    callButtons.forEach(function(btn){
      btn.addEventListener('click', function() {
        document.querySelector('.modal-call').classList.add('modal--active');
        document.body.classList.add("hidden");  
    })
    })


      document.querySelector('.modal-call__open').addEventListener('click', function() {
        document.querySelector('.modal-call').classList.add('modal--active');
        document.body.classList.add("hidden");
      })
      //закрывается по клику на кнопку закрытия
      document.querySelector('.modal-call__close').addEventListener('click', function() {
        document.querySelector('.modal-call').classList.remove('modal--active');
        document.body.classList.remove('hidden');
      })
    });
    //если кликнули вне модала - тоже закроется
    document.querySelector('.modal-call').addEventListener('click', function(e){
    if(e.target.closest('.modal-call__content') === null){
      this.classList.remove('modal--active');
      document.body.classList.remove('hidden');
    }
    })