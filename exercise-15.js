function groupAnimals(animals) {
    //Buat array dengan daftar huruf depan setiap value animals kemudian urutkan array tersebut
    var arrFirstLetter = [];
    var firstLetter = '';
    for(var i = 0; i < animals.length; i++) {
        firstLetter = animals[i][0];
        if(!arrFirstLetter.includes(firstLetter)) {
            arrFirstLetter.push(firstLetter);
        }
    }
    arrFirstLetter.sort();

    //Inisiasi arrResult sebagai array 2 dimensi dengan panjang yang sama dengan arrFirstLetter
    var arrResult = [];
    for(var i = 0; i < arrFirstLetter.length; i++) {
        arrResult.push([]);
    }
    
    //Masukkan setiap value animals ke dalam arrResult sesuai indeks huruf depannya pada arrFirstLetter
    var letterIndex = 0;
    for(var i = 0; i < animals.length; i++) {
        firstLetter = animals[i][0];
        letterIndex = arrFirstLetter.indexOf(firstLetter);
        arrResult[letterIndex].push(animals[i]);
    }

    return arrResult;
}

// TEST CASES
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]