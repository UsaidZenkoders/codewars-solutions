function duplicateCount(text){
    //...
    splittedText=text.toLowerCase().split("")
    count=1
    hashMap={}
    let result=0
    let noOfDuplicates=0
     for (let i=0;i<splittedText.length;i++){
      if (splittedText[i] in hashMap){
          hashMap[splittedText[i]]=count+1
      }
      else{
        hashMap[splittedText[i]]=count
        
      }
    }
    for (let keys in hashMap){
      if(hashMap[keys]>1){
        result+=1
      }
      
    }
    return result
    
  }