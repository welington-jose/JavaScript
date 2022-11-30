//If..Else
//Se a hora estiver entre 06:00 e 12:00 : Bom Dia!
//Se estiver entre 12:00 até 18:00 : Boa Tarde!
//Caso contrário : Boa noite!
const hora = new Date().toLocaleTimeString()


if (hora > 6 && hora < 12) {
    console.log('Bom dia!')
}
else if (hora > 12 && hora < 18) {
    console.log('Boa tarde!')
}
else{
    console.log('Boa Noite')
}

