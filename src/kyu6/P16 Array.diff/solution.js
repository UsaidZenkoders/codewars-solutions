function arrayDiff(a, b) {
    var finalArray=[]
    for (let i=0;i<a.length;i++){
        let found=false;
      for (let j=0;j<b.length;j++){
        if (a[i]===b[j]){
          found=true
          break
        }
      }
      if(!found){
          
      finalArray.push(a[i])
      }
        
    }
    return finalArray
  }
  