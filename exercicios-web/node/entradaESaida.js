const anonimo = process.argv.indexOf('-a') !== -1;
// console.log(anonimo);

if(anonimo) {
    process.stdout.write('Fala Anônimo!!\n');
    process.exit();
} else {
    process.stdout.write('Informe o seu nome: ');
    process.stdin.on('data', data => {
        let nome = data.toString().replace('\n', '');

        console.log(`Fala ${nome}!!!\n`);
        process.exit();
    });
}