
console.log("\n", `# Trabalhando com Condicionais #`, "\n");

console.log("Destinos possíveis,\n");

//Variáveis
const idadeComprador = 17;
const estaAcompanhada = false;
let temPassagemComprada = false;
const destino = "Rio de Janeiro";
let contador = 0;

//Lista
const listaDeDestinos = new Array(
    "Salvador", 
    "Rio de Janeiro"
);

// //Condição
// if (idadeComprador >= 18 || estaAcompanhada == true) {
//   console.log("Comprador Maior de Idade");
//   listaDeDestinos.splice(2, 1);
//   temPassagemComprada = true;
// } else {
//   console.log("Não é Maior de Idade, Não posso Vender !");
//   temPassagemComprada = false;
// }

//Exibir lista
console.log(listaDeDestinos, "\n");

/* //Laço quando eu sei qtos tem na Lista, usa-se While.
while(contador < 3){
    //console.log(listaDeDestinos[contador],"\n")
    if(listaDeDestinos[contador] == destino){
        console.log("Destino Existente.\n");
        //break;
        
    }else{
        console.log("Destino NÃO Existe.");
    }

    contador += 1;
} */


for (let contador = 0; contador < 3; contador++) {
    

    if (listaDeDestinos[contador] == destino) {
      console.log("Destino Existente.\n");
      //break;
    } else {
      console.log("Destino NÃO Existe.");
    }
    
}