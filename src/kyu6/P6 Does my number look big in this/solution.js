function narcissistic(value) {
    // Code me to return true or false
    
    numberOfdigits=value.toString().length
    splitString=value.toString().split("")
    let sum=0
    for (let i=0;i<numberOfdigits;i++){
      sum+=parseInt(splitString[i])**numberOfdigits
    }
      console.log(sum)
    if (value===sum){
      return true
    }
    else{
      return false
    }
  }