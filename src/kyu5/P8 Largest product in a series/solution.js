function greatestProduct(input) {
    var maxProd=0
    for (let i=0;i<=input.length-5;i++){
      let prod=1;
      for (let j=i;j<i+5;j++){
        prod*=parseInt(input[j])}
        if (prod>maxProd){
          maxProd=prod
        }
      
    }
    return maxProd
  }