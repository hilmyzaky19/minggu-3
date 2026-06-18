// Soal 11 — Dashboard Waktu

// Buat program yang menampilkan:

// - tanggal sekarang
// - bulan sekarang
// - tahun sekarang
// - hari sekarang
// - jam sekarang
// - menit sekarang
// - detik sekarang

// Formatkan hasil agar mudah dibaca.

// ---

const sekarang = new Date();

const hari = [
    "Minggu",
    "Senin",
    "Selasa",
    "Rabu",
    "Kamis",
    "Jumat",
    "Sabtu"
];

const bulan = [
    "Januari",
    "Februari",
    "Maret",
    "April",
    "Mei",
    "Juni",
    "Juli",
    "Agustus",
    "September",
    "Oktober",
    "November",
    "Desember"
];

const sekarang = new Date();

const hari = [
    "Minggu",
    "Senin",
    "Selasa",
    "Rabu",
    "Kamis",
    "Jumat",
    "Sabtu"
];

const bulan = [
    "Januari",
    "Februari",
    "Maret",
    "April",
    "Mei",
    "Juni",
    "Juli",
    "Agustus",
    "September",
    "Oktober",
    "November",
    "Desember"
];

console.log("=== DASHBOARD WAKTU ===");
console.log("Tanggal :", sekarang.getDate());
console.log("Bulan   :", bulan[sekarang.getMonth()]);
console.log("Tahun   :", sekarang.getFullYear());
console.log("Hari    :", hari[sekarang.getDay()]);
console.log("Jam     :", sekarang.getHours());
console.log("Menit   :", sekarang.getMinutes());
console.log("Detik   :", sekarang.getSeconds());