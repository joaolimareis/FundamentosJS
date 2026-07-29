const estoque = [12, 5, 0, 20, 3, 15, 0];

for(i=0; i < estoque.length; i++){
  if(estoque[i]=== 0){
    console.log(`Produto ${estoque[i]}: em falta`)
  }else if (estoque[i] < 5 ){
    console.log(`Produto ${estoque[i]}: Estoque baixo`)

  }else if (estoque[i] >= 5){
    
    console.log(`Produto ${estoque[i]}: Estoque Normal`)
  }

  }
    console.log("Fim da lista")
