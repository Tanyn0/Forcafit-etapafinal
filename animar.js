const menulista = document.getElementById('menu-mobile')
const btnburger = document.getElementById('btn-menu')

menulista.addEventListener('click', animar)

function animar(){
    menulista.classList.toggle('abrir')
    btnburger.classList.toggle('ative')
}