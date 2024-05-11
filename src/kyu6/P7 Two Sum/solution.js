function twoSum(numbers, target) {
    hashMap={}

    for (let i in numbers){
        let diff=target - numbers[i]
      if (diff in hashMap){
        return [hashMap[diff],i]
      }
      hashMap[numbers[i]]=i
      
    }
  
  
}