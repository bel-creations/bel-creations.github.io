(function(){
    const titleQuestions = [...document.querySelectorAll('.questions_title')]; //[...] --> para convertirlo en array
    console.log(titleQuestions);

    titleQuestions.forEach(question =>{
        question.addEventListener('click', ()=>{
            let height = 0;
            let answer = question.nextElementSibling; // el elemento hermano del título es el hermano que queremos mostrar
            let addPadding = question.parentElement.parentElement;

            addPadding.classList.toggle('questions_padding--add')
            question.children[0].classList.toggle('questions_arrow--rotate');// quiero obtener los hijos y se empieza desde el primer hijo que es el 0. Quiero obtener las clases del span y agregarle o quitarle dependiendo si tiene o no la clase questions (questions_arrow--rotate) que hace que el elemento rote
            if(answer.clientHeight === 0){
                height = answer.scrollHeight; //alto minimo para que un elemento se muestre
            }

            answer.style.height = `${height}px`; //con `` (invertidas)
        })
    }) // de todas sus preguntas, quiero obtener su pregunta individual. Si a una pregunta se le da click,

})(); // función autoinvocada  para proteger las variables de otros archivos