
// Soal 14 — Sistem Kadaluarsa Produk

// Buat data beberapa produk.

// Contoh:

// [
//     {
//         nama: "Susu",
//         kadaluarsa: "2025-01-01"
//     }
// ]

// Program harus mampu:

// - menentukan apakah produk sudah kadaluarsa
// - menentukan berapa hari tersisa sebelum kadaluarsa

// ---


// Soal 14 — Sistem Kadaluarsa Produk

const produk = [
    {
        nama: "Susu",
        kadaluarsa: "2027-01-01"
    },
    {
        nama: "Roti",
        kadaluarsa: "2026-07-15"
    },
    {
        nama: "Yogurt",
        kadaluarsa: "2026-06-10"
    }
];

const sekarang = new Date();

for (const item of produk) {
    const tanggalKadaluarsa = new Date(item.kadaluarsa);

    const selisihMs = tanggalKadaluarsa - sekarang;
    const sisaHari = Math.floor(selisihMs / (1000 * 60 * 60 * 24));

    console.log(`Produk: ${item.nama}`);

    if (sisaHari < 0) {
        console.log("Status: Sudah kadaluarsa");
    } else {
        console.log("Status: Belum kadaluarsa");
        console.log(`Sisa waktu: ${sisaHari} hari`);
    }

    console.log("-------------------");
}
