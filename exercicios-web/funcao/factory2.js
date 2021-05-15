// Factory personalizada.
function criarProduto(nome, preco, desconto = 0.1) {
    return {
        nome,
        preco,
        desconto
    };
}

console.log(criarProduto('lápis', 1));
console.log(criarProduto('borracha', 0.5));
