function rand({min = 0, max = 1000}) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor);
}

const obj = {max: 50, min: 40};
console.log(rand(obj));
console.log(rand({min: 955}));
console.log(rand({}));
// Gera erro por causa do mesmo problema de destructuring1.js
console.log(rand());