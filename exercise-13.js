function targetTerdekat(arr) {
    if(arr.indexOf('o') < 0 || arr.indexOf('x') < 0) {
        return 0;
    }
    var countO = 0;
    var countOMin = Infinity;
    for(var i = arr.indexOf('o') + 1; i < arr.length; i++) {
        countO += 1;
        if(arr[i] === 'o') {
            countO = 0;
        } else if(arr[i] === 'x') {
            if(countOMin > countO) {
                countOMin = countO;
            }
        }
    }
    var countX = 0;
    var countXMin = Infinity;
    for(var i = arr.indexOf('x') + 1; i < arr.length; i++) {
        countX += 1;
        if(arr[i] === 'x') {
            countX = 0;
        } else if(arr[i] === 'o') {
            if(countXMin > countX) {
                countXMin = countX;
            }
        }
    }
    if(countOMin < countXMin) {
        return countOMin;
    } else {
        return countXMin;
    }
}

// TEST CASES
console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2