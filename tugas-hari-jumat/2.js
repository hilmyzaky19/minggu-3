// Soal 2 – Analisis Nilai Siswa

// Diberikan data:

// const nilai = [85, 92, 78, 95, 88];

// Lakukan:

// 1. Ambil nilai pertama, kedua, dan terakhir menggunakan Array Destructuring.
// 2. Abaikan nilai ketiga.
// 3. Simpan sisa nilai ke dalam variabel baru menggunakan Rest Element.
// 4. Tampilkan hasilnya.

// ---

const nilai = [85, 92, 78, 95, 88];

const [pertama, kedua, , ...sisa] = nilai;

const terakhir = nilai[nilai.length - 1];

console.log("Nilai pertama:", pertama);
console.log("Nilai kedua:", kedua);
console.log("Nilai terakhir:", terakhir);
console.log("Sisa nilai:", sisa);