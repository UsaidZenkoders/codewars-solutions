var isPP=function(n){
    for (let m = 2; m * m <= n; m++) {
        let k = Math.round(Math.log(n) / Math.log(m));
        if (Math.pow(m, k) === n) {
            return [m, k];
        }
    }
    return null;
}