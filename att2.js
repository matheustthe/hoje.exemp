// Declaração da variável
let estaFrio = true;

// Verificação do valor da variável
if (estaFrio) {
    console.log("Está frio.");
} else {
    console.log("Não está frio.");
}

// Inversão do valor
estaFrio = !estaFrio;
console.log("Está frio?", estaFrio); // Exibe: Está frio? false

// Declaração da outra variável
let estaQuente = false;

// Uso de && (AND) e || (OR)
let resultadoAnd = estaFrio && estaQuente;
console.log("Frio e Quente?", resultadoAnd); // Exibe: Frio e Quente? false

let resultadoOr = estaFrio || estaQuente;
console.log("Frio ou Quente?", resultadoOr); // Exibe: Frio ou Quente? false
