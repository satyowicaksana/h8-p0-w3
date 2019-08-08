function targetTerdekat(arr) {
    //Masukkan daftar nilai indeks dengan char 'o' pada arr ke array 2 dimensi baru di indeks 0
    //Masukkan daftar nilai indeks dengan char 'x' pada arr ke array 2 dimensi baru di indeks 1
    var arrIndexOX = [[], []];
    for(var i = 0; i < arr.length; i++) {
        if(arr[i] === 'o') {
            arrIndexOX[0].push(i);
        } else if(arr[i] === 'x') {
            arrIndexOX[1].push(i);
        }
    }

    //Jika tidak ada char 'o' atau char 'x', kembalikan 0
    if(arrIndexOX[0].length === 0 || arrIndexOX[1].length === 0) {
        return 0;
    }

    /* Bandingkan selisih antara setiap angka indeks 'o' dengan
    setiap angka indeks 'x' dan simpan selisih terkecil */
    var countMinDistance = Infinity;
    var difference = 0;
    for(var i = 0; i < arrIndexOX[0].length; i++) {
        for(var j = 0; j < arrIndexOX[1].length; j++) {
            difference = Math.abs(arrIndexOX[0][i] - arrIndexOX[1][j]);
            if(countMinDistance > difference) {
                countMinDistance = difference;
            }
        }
    }

    return countMinDistance;
}

// TEST CASES
console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2