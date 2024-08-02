// Trabalhando com Datas
let dataAtual = new Date();
console.log("Data atual:", dataAtual);

let dataNascimento = new Date('2000-01-01');
let idade = dataAtual.getFullYear() - dataNascimento.getFullYear();
let mes = dataAtual.getMonth() - dataNascimento.getMonth();
if (mes < 0 || (mes === 0 && dataAtual.getDate() < dataNascimento.getDate())) {
    idade--;
}
console.log("Idade:", idade); // Exibe a idade calculada
