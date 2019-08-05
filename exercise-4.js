function dataHandling2(arr) {
    arr.splice(1, 2, 'Roman Alamsyah Elsharawy', 'Provinsi Bandar Lampung');
    arr.splice(4, 1, 'Pria', 'SMA Internasional Metro');
    console.log(arr);
    var date = arr[3];
    var splittedDate = date.split('/');
    var month = splittedDate[1];
    switch(month) {
        case '01':
            console.log('Januari');
            break;
        case '02':
            console.log('Februari');
            break;
        case '03':
            console.log('Maret');
            break;
        case '04':
            console.log('April');
            break;
        case '05':
            console.log('Mei');
            break;
        case '06':
            console.log('Juni');
            break;
        case '07':
            console.log('Juli');
            break;
        case '08':
            console.log('Agustus');
            break;
        case '09':
            console.log('September');
            break;
        case '10':
            console.log('Oktober');
            break;
        case '11':
            console.log('November');
            break;
        case '12':
            console.log('Desember');
            break;
        default:
            console.log('Format input salah. Pastikan nilai bulan yang dimasukkan merupakan angka 1-12 dengan format mm');
            break;
    }
    splittedDate.sort(function(value1, value2) { return value1 < value2 });
    console.log(splittedDate);
    var joinedDate = splittedDate.join('-');
    console.log(joinedDate);
    var name = arr[1];
    var slicedName = name.slice(0, 15);
    console.log(slicedName);
}

var arr = ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"];
dataHandling2(arr);