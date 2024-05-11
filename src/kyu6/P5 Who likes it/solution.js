function likes(names) {
    message=""
    if (names.length==0){
      return message+="no one likes this"
    }
     else if (names.length==1){
      return message+=`${names[0]} likes this`
    }
    else if (names.length==2){
      return message+=`${names[0]} and ${names[1]} like this`
    }
    else if (names.length==3){
      return message+=`${names[0]}, ${names[1]} and ${names[2]} like this`
    }
    else{
      return message+=`${names[0]}, ${names[1]} and ${names.length-2} others like this`
    }
}