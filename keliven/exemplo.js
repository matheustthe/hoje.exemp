const primeiroNome = "heitor "
const segundoNome = "santos"
const nome = primeiroNome+segundoNome
console.log(nome)
const operadores = ["+", "-", "*", "/"]
const num1 = 10
const num2 = 20
for (let i = 0; i<operadores.length; i++){
    console.log(`${operadores[i]}: ${eval(`${num1}${operadores[i]}${num2}`)}`)
}

let estaChovendo = true

console.log(estaChovendo? "está chovendo" : "não está chovendo")


let idUnico = Symbol()

let produto = {[idUnico]: 123,  nome: 'camiseta'}
console.log(produto[idUnico], produto.nome)


let bigint = BigInt("12345678901234567891234567890")
let numero = 12345678901234567891234567890
console.log(bigint,  numero)