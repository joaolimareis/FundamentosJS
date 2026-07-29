const vendas = [120, 350, 80, 500, 220, 150];
 let VendasFeitas=  0
let maiorQue200= []


for(let i = 0; i < vendas.length; i++){
  VendasFeitas += vendas[i]
  if(vendas[i] > 200){
    maiorQue200.push(vendas[i])
  }


 
}
console.log(VendasFeitas)
console.log(maiorQue200);
