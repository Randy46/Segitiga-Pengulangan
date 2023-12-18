// membuat pengulangan menggunakan nama angkot 1 - 10 
// menggunakan pengulangan "while and for"

var angkot = 1; //nomor angkot
var jumlahAngkot = 10; // jumlah angkot
var angkotNormal = 5; //angkot yang dalam keadaan normal

//angkot lebih kecil dari yang ber oprasi
while (angkot <= angkotNormal) {
    console.log('angkot No.' + angkot + ' beroprasi dengan baik')
    angkot++;// jumlah nomor angkot ditambah sampai looping ber nilai terpenuhi
}

//nomor angkot sama dengan angkot yang beroprasi, ditambah 1(agar nilai menambah 1 nomor), 
//nomor angkot (dengan nilai sama dengan angkot yang beroprasi) lebih kecil dari jumlah angkot, maka looping akan ditambahkan sampai nilainya terpenuhi
for (angkot = angkotNormal + 1; angkot <= jumlahAngkot; angkot++) {
    console.log('angkot no.' + angkot + ' sedang tidak beroprasi')
}
