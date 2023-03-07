var alunos;

console.log(`Vai começar...`);
for (aluno = 1; aluno <= 10; aluno++){
    console.log(`Seja bem vindo aluno ${aluno}\n`);
    if(aluno == 5){
        console.log(`Sala em 50%.\nO número de alunos é: ${aluno}`);
    }
    if(aluno == 10){
        console.log(`Sala em 100%.\nO número de alunos é: ${aluno}`);
    }
}
console.log(`FIM!`);