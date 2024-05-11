function solution(n){
    var sum=0
    for (let i=1;i<n;i++){
      if (n<0){
        return 0
      }
      else if (i%3===0 || i%5===0){
        sum+=i
      }
    }
    return sum
  }