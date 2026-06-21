
// Soal 1 — Sistem Seleksi Beasiswa Nasional

// Diberikan data berikut:

// const peserta = [
//   {
//     nama: "Ari",
//     tanggalLahir: "2007-03-15",
//     nilai: [80, 90, 75],
//     penghasilanOrtu: 3500000
//   },
//   {
//     nama: "Bima",
//     tanggalLahir: "2006-08-22",
//     nilai: [60, 70, 85],
//     penghasilanOrtu: 1500000
//   },
//   {
//     nama: "Citra",
//     tanggalLahir: "2007-01-10",
//     nilai: [95, 88, 92],
//     penghasilanOrtu: 7000000
//   }
// ];

// Buat sistem yang menentukan penerima beasiswa.

// Kriteria penerima beasiswa ditentukan olehmu sendiri.

// Minimal mempertimbangkan:

// - umur
// - rata-rata nilai
// - penghasilan orang tua

// Program harus menghasilkan:

// - ranking peserta
// - alasan setiap peserta lolos atau tidak
// - 1 peserta terbaik

// Wajib menggunakan

// - Date Object
// - Destructuring
// - Spread Operator
// - Number Method

// ---

const peserta = [
  {
    nama: "Ari",
    tanggalLahir: "2007-03-15",
    nilai: [80, 90, 75],
    penghasilanOrtu: 3500000
  },
  {
    nama: "Bima",
    tanggalLahir: "2006-08-22",
    nilai: [60, 70, 85],
    penghasilanOrtu: 1500000
  },
  {
    nama: "Citra",
    tanggalLahir: "2007-01-10",
    nilai: [95, 88, 92],
    penghasilanOrtu: 7000000
  }
];

// Hoisting
function hitungUmur(tanggalLahir) {
  const lahir = new Date(tanggalLahir);
  const sekarang = new Date();

  let umur = sekarang.getFullYear() - lahir.getFullYear();

  if (
    sekarang.getMonth() < lahir.getMonth() ||
    (
      sekarang.getMonth() === lahir.getMonth() &&
      sekarang.getDate() < lahir.getDate()
    )
  ) {
    umur--;
  }

  return umur;
}

// Rest Parameter
function rataRata(...nilai) {
  const total = nilai.reduce((a, b) => a + b, 0);
  return Number((total / nilai.length).toFixed(2));
}

// Closure
function buatPenilaian() {
  const batasNilai = 80;

  return function (rataNilai, penghasilan, umur) {
    let skor = 0;

    if (umur <= 20) skor += 20;
    if (rataNilai >= batasNilai) skor += 50;
    if (penghasilan <= 4000000) skor += 30;

    return skor;
  };
}

const penilaian = buatPenilaian();

const hasil = peserta.map((data) => {
  // Destructuring
  const {
    nama,
    tanggalLahir,
    nilai,
    penghasilanOrtu
  } = data;

  const umur = hitungUmur(tanggalLahir);
  const rataNilai = rataRata(...nilai);

  const skor = penilaian(
    rataNilai,
    penghasilanOrtu,
    umur
  );

  const alasan = [];

  if (umur <= 20) {
    alasan.push("Umur memenuhi syarat");
  } else {
    alasan.push("Umur tidak memenuhi syarat");
  }

  if (rataNilai >= 80) {
    alasan.push("Nilai akademik memenuhi syarat");
  } else {
    alasan.push("Nilai akademik belum memenuhi syarat");
  }

  if (penghasilanOrtu <= 4000000) {
    alasan.push("Masuk prioritas bantuan");
  } else {
    alasan.push("Tidak masuk prioritas bantuan");
  }

  return {
    // Spread Operator
    ...data,
    umur,
    rataNilai,
    skor,
    status: skor >= 70
      ? "LOLOS".toUpperCase()
      : "TIDAK LOLOS".toUpperCase(),
    alasan
  };
});

// Ranking
const ranking = [...hasil].sort(
  (a, b) => b.skor - a.skor
);

console.log("=== RANKING PESERTA ===");

ranking.forEach((peserta, index) => {
  console.log(
    `${index + 1}. ${peserta.nama} - ${peserta.skor}`
  );

  peserta.alasan.forEach((a) => {
    console.log(`- ${a}`);
  });

  console.log("");
});

const terbaik = ranking[0];

console.log("=== PENERIMA BEASISWA TERBAIK ===");
console.log(terbaik.nama);