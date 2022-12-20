var hora = new Date().getHours()
var min = new Date().getMinutes()
var corpo = document.querySelector('body')

if(hora >= 6 && hora <= 12) {
    corpo.style.background = '#008B8B'
    
}
else if(hora >12 && hora <=18) {
    corpo.style.background = '#BDB76B'
}
else(
    corpo.style.background = "#696969"
    
)
var horario = document.querySelector('#horario')
horario.innerHTML = `Agora são ${hora} horas e ${min} minutos !`

var img = document.querySelector('#imagem')


if(hora >= 6 && hora <= 12) {
    img.style.background = "imagens\manhã.jpg"
    
}
else if(hora >12 && hora <=18) {
    corpo.style.background = '#BDB76B'
}
else(
    corpo.style.background = "#696969"
    
)