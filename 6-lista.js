console.log (`Trabalhando com listas`);

// muitas variáveis que representam a mesma coisa "Cidades".
// const salvador = `Salvador`;
// const saoPalo = `São Paulo`;
// const rioDeJaneiro = `Rio de Janeiro`;

const listaDeDestinos = new Array (
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
)
//adicionanando dinamicamente itens a lista fora do construtor.
listaDeDestinos.push (`Curitiba`)

console.log ("Destinos possíveis");
console.log (listaDeDestinos);

//removendo dinamicamente itens a lista fora do construtor (posição-contagem de índices-"0,1,2..",nº de elementos).
listaDeDestinos.splice (1,1);
console.log (listaDeDestinos);

//representação de indíces pré definidos na lista, conforme sua posição.
console.log (listaDeDestinos[1], listaDeDestinos[0]);