function carregar() { 
    var hora = new Date().getHours()
    var min = new Date().getMinutes()
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')

    console.log(min)
    msg.innerHTML = `Agora são ${hora} horas e ${min} minutos !`

    
    if(hora >= 6 && hora <= 12) {
    img.src = 'manhã.jpg' 
    document.body.style.background = '#008B8B'
        
    }
    else if(hora >12 && hora <=18) {
        img.src = 'tarde.jpg'
        document.body.style.background = '#BDB76B'
    }
    else{
        img.src = 'noite.jpg'
        document.body.style.background =  "#696969"
        
    }
    var carPag = setInterval(() => {
        window.location.reload(10000)}, 10000)
    

    
        
}