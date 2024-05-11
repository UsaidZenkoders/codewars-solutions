function digitalRoot(n) {
    var digits = n.toString().split("").map(Number);
    
    while (digits.length > 1) {
      var sum = digits.reduce((a, b) => a + b, 0);
      
      
      digits = sum.toString().split("").map(Number);
    }
    
    return digits[0];
  }