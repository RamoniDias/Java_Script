console.log("\n", `# Trabalhando com Condicionais #`, "\n");

console.log("Destinos possíveis,\n");

const listaDeDestinos = new Array("Salvador", "São Paulo", "Rio de Janeiro");

const idadeComprador = 17;
const estaAcompanhada = false;

// if (idadeComprador >= 18) {
//   console.log("Comprador Maior de Idade");
//   //Exclui Item da Lista = Array
//   listaDeDestinos.splice(1, 1);
// } else if (estaAcompanhada) {
//   console.log("Comprador está acompanhado.");
//   listaDeDestinos.splice(1, 1);
// } else {
//   console.log("Não é Maior de Idade, Não posso Vender !");
// }

if (idadeComprador >= 18 || estaAcompanhada == true){
  console.log("Comprador Maior de Idade");
  listaDeDestinos.splice(1, 1);
}else{
  console.log("Não é Maior de Idade, Não posso Vender !");
}

//Exibir lista
console.log(listaDeDestinos, "\n");
