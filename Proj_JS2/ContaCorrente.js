
export class ContaCorrente {
  agencia;
  cliente;


  saldo; //Atributo Privado, para isso usa-se o _ outline

  //Função ou Método recebe a variavel que contém um valor
  sacar(valor) {
    if (this.saldo >= valor) {
      this.saldo -= valor;
      return valor;
    } else {
      console.log("Saque Maior que dinheiro em Conta");
    }
  }

  depositar(valor) {
    if (valor > 0) {
      this.saldo += valor;
      return valor;
    }
  }
}
