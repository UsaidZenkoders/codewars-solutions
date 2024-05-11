function duplicateEncode(word) {
    let result =""
    const hashMap ={}
    word = word.toLowerCase();

    for (let char of word) {
        hashMap[char] = (hashMap[char]||0)+ 1;
    }
    for (let char of word) {
        if (hashMap[char] === 1) {
            result += "(";
        } else {
            result += ")"
        }
    }
    
    return result;
}