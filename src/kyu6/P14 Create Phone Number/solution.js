function createPhoneNumber(numbers){
    var result="("
    result+=`${numbers.slice(0,3)}) ${numbers.slice(3,6)}-${numbers.slice(6,)}`
    result=result.replace(/,/g,"")
    return result
    
  }