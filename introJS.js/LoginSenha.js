const senhaCorreta = "1234";
const tentativas = [
  "1111",
  "0000",
  "1234"
];
let i = 0
while(i < tentativas.length){
  const tentativaAtual = tentativas[i]
  if(senhaCorreta === tentativaAtual){
    console.log("Login realizado ");
    break

  }else{
    console.log("Senha incorreta")
  }
 i++
}