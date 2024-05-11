function findOutlier(integers) {
 
    let evens = integers.filter(num=>num%2 === 0);
    let odds = integers.filter(num=>num%2!== 0);
  
    if (evens.length === 1) {
      return evens[0];
    } else {
      return odds[0];
    }
  }