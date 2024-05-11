function moveZeros(arr) {
    var result=[]
    var zeroes=0;
      for (let i=0;i<arr.length;i++){
        if (arr[i]!==0 ){
          result.push(arr[i])
        }
        else{
        //   continue
          zeroes++;
          console.log(zeroes)
        }
      }
      for (let j=0;j<zeroes;j++){
          result.push(0)
         
        }
      return result
    }