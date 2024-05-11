function pigIt(str){
    //Code here
    words=str.split(" ")
    newArray=[]
    for (let i=0;i<words.length;i++){
      if (words[i].match(/[A-Za-z]/)){
      let temp=words[i][0]
      temp+="ay"
      let added=words[i].slice(1)+temp
      newArray.push(added)
    }
    else{
      newArray.push(words[i])
    }}
    return newArray.join(" ")
  }