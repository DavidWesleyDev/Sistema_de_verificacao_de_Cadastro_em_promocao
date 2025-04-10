alert('Seja muito Bem-vindo na nossa Loja Oficial!');

let nome = prompt('Qual o seu nome? ');
let idade = Number(prompt('Qual a sua idade ' + nome));
console.log('Nome digitado:' , nome);
console.log('idade digitada:' , idade);

if( idade >= 18 && nome != ''){                         //se a idade for 18 anos ou mais, e o nome não for vazio '' 
    alert('Parabéns!! Você esta apta a participar da promoção.');
    alert('Seu nome é ' + nome + 'e sua idade é ' + idade.toFixed(1));

    console.log('Resultado: Aprovado!');
}else{
    alert ('Que pena! Você não está apta para participar desta promoção.');
    alert ('Você não conseguiu porque não atingiu a idade necessária, que era 18 anos, e você só tem ' + idade + ' anos');

    console.log('Resultado: Reprovado');
};