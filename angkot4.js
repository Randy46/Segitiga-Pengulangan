var angkot = 1; //nomor angkot
var jumlahAngkot = 10; // jumlah angkot
var angkotNormal = 6; // angkot beroprasi dengan normal
var angkotlembur = 8; // angkot yang melakukan lembur

//variabel nomor angkot dimasukan kedalam for (jika angkot lebih kecil sama dengan jumlah angkot maka akan dilakukan pengulangan)
for (angkot; angkot <= jumlahAngkot; angkot++) {
    //jika nomor angkot lebih kecil (1) sama dengan angkot normal(6) maka masuk ke "if"/true
    if (angkot <= angkotNormal) {
        console.log('angkot no. ' + angkot + ' sedang beroprasi')
    } //jika nomor angkot (8) sama nilainya dengan angkot yang melakukan lembur(8) maka masuk ke "else if"/tru
    else if (angkot === angkotlembur) {
        console.log('angkot no. ' + angkot + ' sedang melakukan lembur')
    } //jika tidak masuk ke dalam variabel angkot normal maka masuk ke kondisi "else"/false
    else {
        console.log('angkot no. ' + angkot + ' sedang rusak')
    }


}