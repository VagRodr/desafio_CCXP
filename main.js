function moveCard(selector){
    var element = document.querySelector(selector);
    element.classList.toggle("card_move");
}

//Checa o código das teclas//
function checkKeyboardCode(){
    document.addEventListener('keydown', (event) => {
        var name = event.key;
        var code = event.code;

        alert(`Tecla Pressionada ${name} /r/n key code value: ${code}`);
    }, false);
}

function addKeyboardEventListeners(){
    document.addEventListener('keydown', (event) => {

        var ingresso1 = document.getElementById("quinta");
        var ingresso2 = document.getElementById("sexta");
        var ingresso3 = document.getElementById("sabado");
        var ingresso4 = document.getElementById("domingo");

        var code = event.code;

        if(code == 'Digit1'){
            ingresso1.classList.toggle("card_move");
            ingresso2.classList.remove("card_move");
            ingresso3.classList.remove("card_move");
            ingresso4.classList.remove("card_move");
        }

        if(code == 'Digit2'){
            ingresso1.classList.remove("card_move");
            ingresso2.classList.toggle("card_move");
            ingresso3.classList.remove("card_move");
            ingresso4.classList.remove("card_move");
        }

        if(code == 'Digit3'){
            ingresso1.classList.remove("card_move");
            ingresso2.classList.remove("card_move");
            ingresso3.classList.toggle("card_move");
            ingresso4.classList.remove("card_move");
        }

        if(code == 'Digit4'){
            ingresso1.classList.remove("card_move");
            ingresso2.classList.remove("card_move");
            ingresso3.classList.remove("card_move");
            ingresso4.classList.toggle("card_move");
        }

    }, false);
}

addKeyboardEventListeners();