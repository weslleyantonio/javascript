// caractere, pontuação, etc

const texto1 = "Hello World!";
const texto2 = 'Hello World!';
const senha = "senha#132456";
const stringDeNumeros = "123456789";

const citacao = 'O wes disse "oi!"';

// Concatenação

const textoConcatenado = texto1 + senha;

// template string ou template literal 


// validações de strings

const cidade = "belo horizonte";
const input = "Belo Horizonte";

console.log(cidade === input); // false

const inputMinusculo = input.toLowerCase();

console.log(cidade === inputMinusculo); // true

console.log(senha.length) // 12 caracteres