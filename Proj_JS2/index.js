class Cliente{
    nome;
    cpf;
}

class ContaCorrente{
    agencia;
    saldo;
}

const cliente1 = new Cliente();
cliente1.nome    =   "Ricardo";
cliente1.cpf     = 11111111100;

const cliente2 = new Cliente();
cliente2.nome    = "Alice";
cliente2.cpf     = 22222222200;

const contaCorrenteRicardo1 = new ContaCorrente();
cliente1.agencia = "1001";
cliente1.saldo   =      0;

const contaCorrenteRicardo2 = new ContaCorrente();
cliente2.agencia = "1002";
cliente2.saldo   =      0;

console.log("\n",cliente1,"\n");   
console.log("\n",cliente2, "\n"); 


