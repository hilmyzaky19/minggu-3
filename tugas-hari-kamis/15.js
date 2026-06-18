// 

// Soal 15 — Sistem Parkir Pintar

const kendaraan = {
    nomorPolisi: "W 1234 AB",
    waktuMasuk: new Date("2026-06-19T08:00:00"),
    waktuKeluar: new Date("2026-06-19T13:30:00")
};

const selisihMs = kendaraan.waktuKeluar - kendaraan.waktuMasuk;

// Lama parkir dalam jam (dibulatkan ke atas)
const lamaParkir = Math.ceil(selisihMs / (1000 * 60 * 60));

let biaya = 3000;

if (lamaParkir > 2) {
    biaya += (lamaParkir - 2) * 2000;
}

console.log("Nomor Polisi :", kendaraan.nomorPolisi);
console.log("Lama Parkir :", lamaParkir, "jam");
console.log("Total Biaya : Rp" + biaya.toLocaleString("id-ID"));