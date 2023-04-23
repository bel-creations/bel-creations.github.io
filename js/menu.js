(function(){
    const openButton = document.querySelector('.nav_menu');
    const menu = document.querySelector('.nav_link');
    const closeMenu = document.querySelector('.nav_close');

    openButton.addEventListener('click', ()=>{
        menu.classList.add('nav_link--show');
    })

    closeMenu.addEventListener('click', ()=>{
        menu.classList.remove('nav_link--show');
    }); // no uso toggle() porque esto haría que si tuviese la clase 'nav_link--show' la removeria, pero si no tuviese la clase 'nav_link--show', la agregaría. En cambio, en este caso, necesitamos una función para agregar y otra para remover.

    
})();