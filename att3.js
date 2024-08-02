// Criação e Manipulação de Objetos
let livro = {
    titulo: "O Senhor dos Anéis",
    autor: "J.R.R. Tolkien",
    anoPublicacao: 1954
};

// Adição de nova propriedade
livro.editora = "HarperCollins";
console.log(livro);

// Manipulação de Arrays
let cores = ["vermelho", "azul", "verde"];
cores.push("amarelo"); // Adiciona ao final
console.log(cores); // Exibe: ["vermelho", "azul", "verde", "amarelo"]

cores.pop(); // Remove o último item
console.log(cores); // Exibe: ["vermelho", "azul", "verde"]
