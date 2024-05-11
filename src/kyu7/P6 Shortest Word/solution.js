function findShort(s){
    s=s.split(" ")
    var shortest;
    shortest=s[0].length
    for (let i=0;i<s.length;i++){
      if (s[i].length<shortest){
        shortest=s[i].length   
      }
      else{
          continue
      }
    }
    return shortest
  }