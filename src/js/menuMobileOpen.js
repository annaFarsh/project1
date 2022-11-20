export default
document.querySelector(".menu__button").addEventListener('click', function(){
        document.querySelector(".menu-mobile--close").classList.add('menu-mobile');
    });
document.querySelector(".header-mobile__button").addEventListener('click', function(){
    document.querySelector(".menu-mobile--close").classList.remove('menu-mobile');
})

