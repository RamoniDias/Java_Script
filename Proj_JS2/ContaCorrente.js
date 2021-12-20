
export class ContaCorrente {
  cliente;
  agencia;
  saldo; //Atributo Privado, para isso usa-se o _ outline

  static numeroDeContas = 0; //Onde vc alterar vai alterar em todo projeto

  constructor(cliente, agencia, saldo) {
    this.cliente = cliente;
    this.agencia = agencia;
    this.saldo = saldo;

    ContaCorrente.numeroDeContas += 1; // Declarando contador Statico.
  }

  set cliente(novoValor) {
    //Proteger atributo// Método de Atribuição
    if (novoValor instanceof Cliente) {
      this.cliente = novoValor;
    }
  }

  get cliente() {
    //Pegar atributo // Método de Acesso
    return this.cliente; //Encapsulamento maior privacidade - somente leitura
  }

  get saldo() {
    return this.saldo;
  }

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
    if (valor <= 0) {
      return;
    }
    this.saldo += valor;
  }

  transferir(valor, conta) {
    const valorSacado = this.sacar(valor);
    conta.depositar(valorSacado);
  }
}
