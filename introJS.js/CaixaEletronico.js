const caixa = [100,50,20,10]

let i =0
  let ValorSacar = 380

while(i < caixa.length){
  let ValoCaixaAtual = caixa[i]
  if(ValoCaixaAtual <= ValorSacar ){
    const QtdNota = Math.floor(ValorSacar / ValoCaixaAtual)
    const resto = ValorSacar % ValoCaixaAtual
    console.log(`Vou levar ${QtdNota} nota(s) de R$${ValoCaixaAtual}`)
   
    ValorSacar =resto
    i++
    continue
  
    console.log(QtdNota)
  }


i++
}