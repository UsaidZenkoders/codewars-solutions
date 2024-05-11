var countBits = function(n) {
    binaryRep=n.toString(2)
    var count=0;
    for (let i=0;i<binaryRep.length;i++){
      
      if (binaryRep[i]==1){
        count++;
      }
    }
    return count
  };