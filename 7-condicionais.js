console.log(`Trabalhando com condicionais`);

const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
)

const idadeComprador = 18;
const estaAcompanhada = false;
const temPassagemComprada = true;

console.log("Destinos possíveis");
console.log(listaDeDestinos);

//fluxo e controle de execução
// if (idadeComprador >= 18){
//     console.log("Comprador maior de idade");
//     listaDeDestinos.splice(1, 1); //removendo dinamicamente itens a lista fora do construtor (posição-contagem de índices-"0,1,2..",nº de elementos).
// } else if (estaAcompanhada) {
//     console.log("Comprador está acompanhado (a)");
//     listaDeDestinos.splice(1, 1); //removendo din...
// } else {
//     console.log("Não é maior de idade, não vender");
// }

//concatenar operações lógicas
if (idadeComprador >= 18 || estaAcompanhada == true
    ) {
    console.log("Boa Viagem!");
    listaDeDestinos.splice(2, 1); 
} else {
    console.log("Não é maior de idade, não vender");
}

console.log ("Embarque: \n\n") //\n (pular linha)
if (idadeComprador >=18 && temPassagemComprada) {
    console.log ("Boa Viagem!")
}else {
    console.log ("Você não pode embarcar")
}

console.log(listaDeDestinos);

//operadores lógicos
// console.log (idadeComprador > 18 ); // idade maior que 18
// console.log (idadeComprador < 18 );  // idade menor que 18
// console.log (idadeComprador >= 18 ); // idade maior ou igual a 18
// console.log (idadeComprador <= 18 ); // idade menor ou igual a 18
// console.log (idadeComprador == 18 ); // apenas igual a 18 (= "atribuição" == "comparação")