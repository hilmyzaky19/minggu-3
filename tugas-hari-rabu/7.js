
// Soal 7 – Mesin Konversi Nilai

// Diberikan data:

// const input = "89.75";

// Lakukan hal berikut:

// 1. Ubah menjadi number.
// 2. Tampilkan tipe data sebelum dan sesudah konversi.
// 3. Bulatkan nilainya.
// 4. Tentukan apakah nilai tersebut merupakan bilangan bulat atau bukan.

// ---
const input = "89.75";


const nilai = Number(input);

console.log(typeof input);
console.log(typeof nilai);

const bulat = Math.round(nilai);
console.log(bulat);

console.log(Number.isInteger(nilai));