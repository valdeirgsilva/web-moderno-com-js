// Tagged templates - processa o template dentro de um função.
function tag(partes, ...valores) {
    console.log(partes);
    console.log(valores);
    return 'Outra string';
}

const aluno = 'Gui';
const situacao = 'Aprovado';
console.log(tag `${aluno} está ${situacao}.`);