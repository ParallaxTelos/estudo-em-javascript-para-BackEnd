// Declaração de Função
function minhaFuncao(param) {
    //bloco de código
};

// minhaFuncao("param");

// Expressão de Função

// const soma = function (num1, num2) { return num1 + num2; };
// console.log(soma(1, 2));

// Diferença principal : Hoisting
// funções e var são "listadas" no topo do arquivo.

console.log(apresentar());
function apresentar() {
    return "olá";
}

console.log(soma());
const soma = function (num1, num2) { return num1 + num2; };

