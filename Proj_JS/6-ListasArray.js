console.log("\n",`# Trabalhando com LISTAS #`,"\n");

// const saoPaulo = "Salvador";
// const salvador = "São Paulo";
// const rioDeJaneiro = "Rio de Janeiro";

console.log("Destinos possíveis");

//Array - Vetor
const listaDeDestinos = new Array(
    "Salvador",
    "São Paulo",
    "Rio de Janeiro"
);

//Inserindo Valores a lista
listaDeDestinos.push("Curitiba");

//Deletar item da Lista, Posição e Qtos itens
listaDeDestinos.splice(2,1);

//Exibir lista
console.log(listaDeDestinos, "\n");

//Mostrar item da lista
console.log("Posição 1: ",listaDeDestinos[1],"\n");
