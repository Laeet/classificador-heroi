console.log("Bem Vindo ao Classificador de Nível de Héroi! ");
let nomeDoHeroi = prompt("\nDigite o nome do seu herói: ");
let xpHeroi = prompt("Digite agora a quantidade de experiência(xp) dele: ");
console.log("\nVocê escolheu o herói:", nomeDoHeroi," com ",xpHeroi, "de xp");

if (xpHeroi < 1000) 
{
 console.log("\nO herói:", nomeDoHeroi," está no nível Ferro");
}
else if (xpHeroi >1000 || xpHeroi<=2000)
{
 console.log("\nO herói:", nomeDoHeroi," está no nível Bronze");
}
else if (xpHeroi >2000 || xpHeroi<=5000)
{
 console.log("\nO herói:", nomeDoHeroi," está no nível Prata");
}
else if (xpHeroi >6000 || xpHeroi<=7000)
{
 console.log("\nO herói:", nomeDoHeroi," está no nível Ouro");
}
else if (xpHeroi >=7000 || xpHeroi<=8000)
{
 console.log("\nO herói:", nomeDoHeroi," está no nível Platina");
}
else if (xpHeroi >8000 || xpHeroi<=9000)
{
 console.log("\nO herói:", nomeDoHeroi," está no nível Ascendente");
}
else if (xpHeroi >9000 || xpHeroi<=10000)
{
 console.log("\nO herói:", nomeDoHeroi," está no nível  Imortal");
}
else 
{
 console.log("\nO herói:", nomeDoHeroi," está no nível Radiante");
}

    
   
    




