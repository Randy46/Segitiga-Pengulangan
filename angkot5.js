var angkot = 1; //nomor angkot
var jumlahAngkot = 10;// jumlah angkot
var angkotNormal = 6;// angkot beroprasi dengan normal

//variabel nomor angkot dimasukan kedalam for (jika angkot lebih kecil sama dengan jumlah angkot maka akan dilakukan pengulangan)
for (angkot; angkot <= jumlahAngkot; angkot++) {
    //jika nomor angkot lebih kecil (1) sama dengan angkot normal(6) maka masuk ke "if"/true
    if (angkot <= angkotNormal) {
        console.log('angkot no. ' + angkot + ' sedang beroprasi')
    } // jika angkot sama dengan nilainya (8) "||" (or/atau) angkot sama dengan nilainya (10) maka masuk ke "else if"/tru
    else if (angkot === 8 || angkot === 10) {
        console.log('angkot no. ' + angkot + ' sedang melakukan lembur')
    }//jika tidak masuk ke dalam variabel angkot normal maka masuk ke kondisi "else"/false
    else {
        console.log('angkot no. ' + angkot + ' sedang rusak')
    }


}