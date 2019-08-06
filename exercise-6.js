function angkaPalindrome(num) {
    var gotPalindrom = false;
    while(!gotPalindrom) {
        num += 1;
        gotPalindrom = palindrome(String(num));
    }
    return num;
}

function palindrome(kata) {
    for(var i = 0; i < kata.length / 2; i++) {
        if(kata[i] !== kata[kata.length - 1 - i]) {
            return false;
        }
    }
    return true;
}

// TEST CASES
console.log(angkaPalindrome(8)); // 9
console.log(angkaPalindrome(10)); // 11
console.log(angkaPalindrome(117)); // 121
console.log(angkaPalindrome(175)); // 181
console.log(angkaPalindrome(1000)); // 1001