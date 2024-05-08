function highAndLow(numbers){
    let intArray = numbers.split(" ").map(Number);
    intArray.sort((a, b) => a - b);
    
    let result = intArray[intArray.length - 1] + " " + intArray[0];
    return result;
  }
  
  console.log(highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4"));