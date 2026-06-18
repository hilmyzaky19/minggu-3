// Soal 13 — Pengingat Acara

// Diberikan data:

// const acara = "Seminar JavaScript";
// const tanggalAcara = "2026-12-01";

// Tampilkan:

// - nama acara
// - berapa hari lagi menuju acara
// - berapa jam lagi menuju acara

// Soal 13 — Pengingat Acara

const acara = "Seminar JavaScript";
const tanggalAcara = "2026-12-01";

const sekarang = new Date();
const acaraDate = new Date(tanggalAcara);

const selisihMs = acaraDate - sekarang;

const hariLagi = Math.floor(selisihMs / (1000 * 60 * 60 * 24));
const jamLagi = Math.floor(selisihMs / (1000 * 60 * 60));

console.log("Nama Acara :", acara);
console.log("Hari menuju acara :", hariLagi, "hari");
console.log("Jam menuju acara :", jamLagi, "jam");