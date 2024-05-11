function twosDifference(input){
    var result=[]
    var i=0
    var j=1
    while(i<input.length && j<input.length){
      var validPair=Math.abs(input[i]-input[j])===2
      if (validPair){
              result.push([Math.min(input[i], input[j]), Math.max(input[i], input[j])]);
      }
    
    if (j < input.length - 1) {
              j++;
          } else {
              i++;
              j = i + 1;
          }}
    result.sort((a, b) => a[0] - b[0] || a[1] - b[1]);
    return result
   }