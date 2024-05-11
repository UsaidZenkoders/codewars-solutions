function getCount(str) {
    var count=0
    hashMap={
      "a":0,
      "e":1,
      "i":2,
      "o":3,
      "u":4
    }
    for (let i=0;i<str.length;i++){
      if (str[i].toLowerCase() in hashMap){
        count+=1
      }
      else{
        continue
      }
    }
    return count
  }