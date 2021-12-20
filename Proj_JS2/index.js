import { Cliente } from "./Cliente.js"; //Importando esta Classe deste arquivo
import { ContaCorrente } from "./ContaCorrente.js";

const cliente1 = new Cliente();
cliente1.nome = "Ricardo";
cliente1.cpf = 11111111100;

const cliente2 = new Cliente();
cliente2.nome = "Alice";
cliente2.cpf = 22222222200;

//Antes:
//const contaCorrenteRicardo = new ContaCorrente();
//contaCorrenteRicardo.cliente = cliente1;
//contaCorrenteRicardo.agencia = "1001"; //implementar valor errado
//contaCorrenteRicardo.saldo = 0;

//Depois:
const contaCorrenteRicardo = new ContaCorrente("Ricardo", 11111111100, 0);


// // contaCorrenteRicardo.cliente = cliente1; //Pegando os atributos de outra Classe

//contaCorrenteRicardo.depositar(100);   // Depósito Positivo
//contaCorrenteRicardo.depositar(100);   // implementar valor CERTO
//contaCorrenteRicardo.depositar(100);
//console.log("\n","Saldo:",contaCorrenteRicardo.saldo)

//const valorSacado = contaCorrenteRicardo.sacar(50); //Para mostrar valor do saque, se criou uma variavel para mostrar
//console.log("\n","Valor Sacado:",valorSacado);

//console.log("\n",contaCorrenteRicardo, "\n");

contaCorrenteRicardo.depositar(500);

const conta2 = new ContaCorrente();
conta2.cliente = cliente2;
conta2.agencia = 102;
conta2.saldo = 0;


contaCorrenteRicardo.transferir(150, conta2);

console.log("\n", ContaCorrente.numeroDeContas);
