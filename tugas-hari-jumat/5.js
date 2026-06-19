// Soal 5 – Gabung Tim

// Diberikan data:

// const timMerah = ["Ari", "Bima"];
// const timBiru = ["Citra", "Dewi"];

// Buat array baru:

// [
//   "Ari",
//   "Bima",
//   "Kapten",
//   "Citra",
//   "Dewi"
// ]
const timMerah = ["Ari", "Bima"];
const timBiru = ["Citra", "Dewi"];

const timGabungan = [
    ...timMerah,
    "Kapten",
    ...timBiru
];

console.log(timGabungan)