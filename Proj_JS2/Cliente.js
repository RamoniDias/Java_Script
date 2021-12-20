
export class Cliente {
  // Para poder usar a Classe em outro arquivo temos q exporta la
  nome;
  cpf;

  get cpf() {// Não do nenhum acessor para que ele possa alterar esse CPF
    return this.cpf;
  }

  constructor(nome, cpf) {
    this.nome = nome;
    this.cpf = cpf;
  }






}
  

