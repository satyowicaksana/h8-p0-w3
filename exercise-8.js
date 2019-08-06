function pasanganTerbesar(num) {
    var strNum = String(num);
    var arrNum = [];
    for(var i = 0; i < strNum.length - 1; i++) {
        arrNum.push(Number(strNum[i] + strNum[i + 1]));
    }
    arrNum.sort();
    return arrNum[arrNum.length - 1];
}

// TEST CASES
console.log(pasanganTerbesar(641573)); // 73
console.log(pasanganTerbesar(12783456)); // 83
console.log(pasanganTerbesar(910233)); // 91
console.log(pasanganTerbesar(71856421)); // 85
console.log(pasanganTerbesar(79918293)); // 99