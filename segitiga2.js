let n = 5; // Tinggi segitiga
let s = "";

// membuat segitiga bagian atas
for (let i = 1; i <= n; i++) {
    // Membuat spasi di setiap baris
    for (let j = n; j > i; j--) {
        s += " ";
    }
    // Membuat '*' di setiap baris
    for (let k = 0; k != (2 * i - 1); k++) {
        s += "*";
    }
    for (let j = n; j > i; j--) {
        s += " ";
    }
    s += "\n";
}

// membuat segitiga bagian bawah
for (let i = 1; i <= n; i++) {
    for (let l = 0; l < i - 1; l++) {
        s += " ";// membuat spasi
    }
    for (let m = 0; m != 2 * (i - n) - 1; m--) {
        s += "*";//membuat bintang
    }
    for (let l = 0; l < i - 1; l++) {
        s += " ";// membuat spasi
    }
    s += "\n";
}
console.log(s);
