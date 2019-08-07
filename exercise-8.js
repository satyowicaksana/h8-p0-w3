function pasanganTerbesar(num) {
    var strNum = String(num);
    var countMax = 0;
    for(var i = 0; i < strNum.length - 1; i++) {
        if(countMax < Number(strNum[i] + strNum[i + 1])) {
            countMax = Number(strNum[i] + strNum[i + 1]);
        }
    }
    return countMax;
}

// TEST CASES
console.log(pasanganTerbesar(641573)); // 73
console.log(pasanganTerbesar(12783456)); // 83
console.log(pasanganTerbesar(910233)); // 91
console.log(pasanganTerbesar(71856421)); // 85
console.log(pasanganTerbesar(79918293)); // 99