var solution = function(firstArray, secondArray) {
    var sum=0;
     for(let i=0;i<firstArray.length;i++){
       sum+=(Math.abs(firstArray[i]-secondArray[i]))**2
     }
    return sum/firstArray.length
    
  }