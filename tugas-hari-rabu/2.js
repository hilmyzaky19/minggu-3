// 1. Menghitung jumlah karakter.
// 2. Menghitung jumlah kata.
// 3. Menampilkan kata pertama.
// 4. Menampilkan kata terakhir.
// 5. Mengecek apakah kalimat mengandung kata ""pemrograman"".

const kalimat = "JavaScript adalah bahasa pemrograman yang sangat menyenangkan";
// 1 kalo mau ngitung jumlah perhuruf dengan spasi nya juga
console.log(kalimat.length)
// ini kalo mau di hitung per kata nya
const kata = kalimat.split(" ");
console.log(kata.length)
// kalo mau nyari kata pertama nya
console.log(kata[0]);
// kalo ini yang terahir
console.log(kata[kata.length -1]);
// kalo mau ngecek apakah kalimat mengandung kata "pemrograman"
console.log(kalimat.includes("pemrograman"));



