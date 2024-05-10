function countChange(money, coins) {
    var n=coins.length;
    if (money===0) {
      return 1; 
    } else if (n <= 0||money < 0) {
      return 0;
    } else {
      return countChange(money,coins.slice(0,n - 1))+countChange(money -coins[n - 1],coins);
    }
  }