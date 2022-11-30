//Operador lógico e (&&) - retorna TRUE se os dois operadores forem true


//console.log(true && true)


var maiorDeIdade = true
var possuiCarteiraDeTrabalho = true
var podeAplicar = maiorDeIdade && possuiCarteiraDeTrabalho
console.log(podeAplicar)



//Operador Lógico ou (||) - retorna TRUE se um dos operandos forem true

var maiorDeIdade = false
var possuiCarteiraDeTrabalho = true
var podeAplicar = maiorDeIdade || possuiCarteiraDeTrabalho
console.log('pode aplicar:', podeAplicar)


//Operador NOT (!)
var candidatoRecusado = !podeAplicar
console.log('pode aplicar:', candidatoRecusado)


//Falsy
//underfined
//null
//0
//false
//''
//NaN -not a number
//Truthy


