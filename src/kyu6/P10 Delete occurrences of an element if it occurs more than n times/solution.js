function deleteNth(arr,n){
    let count = {};
       let result = [];
       
       for (let num of arr) {
           if (!count[num]) {
               count[num] = 1;
           } else {
               count[num]++;
           }
           
           if (count[num] <= n) {
               result.push(num);
           }
       }
       
       return result;
   }