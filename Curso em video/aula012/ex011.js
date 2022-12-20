var idade = 24
console.log(`Você tem ${idade} de idade,`)
if(idade < 16   ) {
    console.log('Não vota')
}
else if (idade < 18) {
    console.log('Seu voto é opcional')
}
else if(idade >= 67) {
    console.log('Seu voto é opcional')
}
else{
    console.log('Voto obrigatório')
}
