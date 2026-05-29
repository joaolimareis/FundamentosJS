const usuarios = [
  {
    nome: "João",
    idade: 20,
    profissao: "Dev"
  },

  {
    nome: "Maria",
    idade: 17,
    profissao: "Designer"
  },

  {
    nome: "Carlos",
    idade: 30,
    profissao: "Dev"
  },

  {
    nome: "Ana",
    idade: 25,
    profissao: "QA"
  }
];

// for(let value of usuarios){
//     console.log(value)

// }

const maiorIdade = usuarios.filter((usuarios) => usuarios.idade >= 18)
//console.log(maiorIdade)

const nomes = usuarios.map((usuarios)=> usuarios.nome)
// console.log(nomes)

const encontraNome = usuarios.find((usuarios) => usuarios.nome === "Carlos")
// console.log(encontraNome)

const somaIdades = usuarios.reduce((acc,  usuarios) => {
    return acc + usuarios.idade
}, 0);
// console.log(somaIdades)

const profissaoRepetida = usuarios.filter((user, index, array) => {
    return index === array.findIndex(u => u.profissao === user.profissao)
})
console.log(profissaoRepetida)