function scramble(str1, str2) {
    const hashMap = {};

    for (let char of str1.toLowerCase()) {
        hashMap[char] = (hashMap[char] || 0) + 1;
    }

    for (let char of str2.toLowerCase()) {
        if (!hashMap[char]) {
            return false; 
        }
        hashMap[char]--;
    }

    return true;
}