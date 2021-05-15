const carrinho = [
    '{"nome": "Borracha", "preco": 3.45 }',
    '{"nome": "Caderno", "preco": 13.90 }',
    '{"nome": "Kit de Lapis", "preco": 41.22 }',
    '{"nome": "Caneta", "preco": 7.50 }'
];

// Retornar um array apenas com os preços.
const transformaEmObj = json => JSON.parse(json);
const pegaOsPrecos = produto => produto.preco;

const resultado = carrinho.map(transformaEmObj).map(pegaOsPrecos);
console.log(resultado);