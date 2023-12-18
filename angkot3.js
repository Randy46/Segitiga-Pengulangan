// membuat pengulangan menggunakan nama angkot 1 - 10 
// menggunakan pengulangan "for dan if else"

var angkot = 1; //nomor angkot
var jumlahAngkot = 10; // jumlah angkot
var angkotNormal = 6; // angkot dalam keadaan normal

//variabel ankot dimasukan ke dalam for (jika angkot lebih kecil daris sama dengan jumlah angkot maka pengulangan terjadi)
for (angkot; angkot <= jumlahAngkot; angkot++) {
    //jika angkot lebih kecil sama dengan angkot dalam keadaan normal maka masuk ke adaan "if" jika tidak maka masuk ke "else"
    if (angkot <= angkotNormal) {
        console.log('angkot no. ' + angkot + ' beroprasi')
    } else {
        console.log('angkot no. ' + angkot + ' tidak beroprasi')
    }

}