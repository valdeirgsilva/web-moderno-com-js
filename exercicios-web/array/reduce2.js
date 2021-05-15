const alunos = [
    { nome: 'João', nota: 7.3, bolsista: false },
    { nome: 'Maria', nota: 9.2, bolsista: true },
    { nome: 'Pedro', nota: 9.8, bolsista: false },
    { nome: 'Ana', nota: 8.7, bolsista: true }
];

/* Minha resposta:
Desafio 1: Todos os alunos são bolsistas?
const bolsistas = aluno => aluno.bolsista;
const todosSaoBolsistas = function(acumulador, valorAtual) {
    if(!valorAtual)
        acumulador = valorAtual;
    
    return acumulador;
};

console.log(alunos.map(bolsistas).reduce(todosSaoBolsistas));  

Desafio 2: Algum aluno é bolsista?
Minha resposta:
const algumEhBolsista = function(acumulador, valorAtual) {
    if(valorAtual)
        acumulador = valorAtual;

    return acumulador;
}

console.log(alunos.map(bolsistas).reduce(algumEhBolsista)); */

// ------------------------------------------------------------

// Correção:
// Desafio 1: Todos os alunos são bolsistas?
const todosBolsistas = (resultado, bolsista) => resultado && bolsista;
console.log(alunos.map(a => a.bolsista).reduce(todosBolsistas));

// Desafio 2: Algum aluno é bolsista?
const algumBolsista = (resultado, bolsista) => resultado || bolsista;
console.log(alunos.map(a => a.bolsista).reduce(algumBolsista));