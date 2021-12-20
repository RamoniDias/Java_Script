
class aluno{
    nome;
    nCarteirinha;
    sala;


   calcular(valor){

    if(this.nCarteirinha < 10){

        this.nCarteirinha = this.nCarteirinha += valor; 
    } 
   } 
}

const ObjAluno01 = new aluno();

ObjAluno01.nome = "Ramoni Dias";
ObjAluno01.nCarteirinha = 7;
ObjAluno01.sala = "3°B";

console.log("\n","Antes da Função:", ObjAluno01.nCarteirinha, "\n");

ObjAluno01.calcular(10);

console.log("\n","Chamou a Função:", ObjAluno01.nCarteirinha, "\n");
console.log("\n", "Objeto:",ObjAluno01, "\n");

