function sumTwoSmallestNumbers(numbers) {  
    numbers=numbers.sort((a,b)=>a-b)
    console.log(numbers)
    result=numbers[0]+numbers[1]
    return result
  }