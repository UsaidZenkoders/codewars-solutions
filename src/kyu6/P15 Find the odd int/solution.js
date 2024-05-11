function findOdd(A) {
    //happy coding!
    hashMap = {}
    var count = 1
    for (let i = 0; i < A.length; i++) {
        if (A[i] in hashMap) {
            hashMap[A[i]] += 1
        }
        else {
            hashMap[A[i]] = count
        }
    }
    for (let i = 0; i < A.length; i++) {
        if (hashMap[A[i]] % 2 !== 0) {
            return A[i]
            break
        }
        else {
            continue
        }
    }
}