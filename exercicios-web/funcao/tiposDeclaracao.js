console.log(soma(3, 4));

/* Function declaration (As funções declaradas dessa forma são 
   carregadas primeiras, e só depois que o intepretador executa o código). */
function soma(x, y) {
    return x + y;
}

 
/* Function expression (Já nas functions expressions, a chamada 
   da função só pode ocorrer após a atribuição da mesma a uma 
   variável). */
const sub = function (xm, y) {
    return x - y;
};
console.log(sub(3, 4));

// Named function expression (forma pouco utilizada).
const mult = function mult(x, y) {
    return x * y;
};
console.log(mult(3, 4));
