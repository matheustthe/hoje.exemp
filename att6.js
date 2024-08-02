// Criação do objeto aluno
let aluno = {
    nome: "Maria",
    idade: 22,
    curso: "Engenharia",
    apresentacao: function() {
        console.log(`Olá, meu nome é ${this.nome}, tenho ${this.idade} anos e estou cursando ${this.curso}.`);
    }
};

// Chamada do método
aluno.apresentacao(); // Exibe a mensagem de apresentação
