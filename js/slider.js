(function(){
    const sliders = [...document.querySelectorAll('.testimony_body')]; //pongo los [] para generar un array
    const buttonNext = document.querySelector('#next');
    const buttonBefore = document.querySelector('#before');
    let value;

    buttonNext.addEventListener('click', () =>{
        changePosition(1);
    });

    buttonBefore.addEventListener('click', () =>{
        changePosition(-1);
    });

    const changePosition = (add)=>{
        const currentTestimony = document.querySelector('.testimony_body--show').dataset.id;
        value = Number(currentTestimony);
        value+= add;

        sliders[Number(currentTestimony)-1].classList.remove('testimony_body--show');
        if(value === sliders.length+1 || value===0) {
            value = value === 0 ? sliders.length : 1;
        }  // si hay 0 sliders, quiero que me mande al último slider, pero si rebasamos el último, quiero que me mande al primero

        sliders[value-1].classList.add('testimony_body--show');  //quiero acceder al data-id. (value-1) porque se cuenta desde el 0
    }

})();
