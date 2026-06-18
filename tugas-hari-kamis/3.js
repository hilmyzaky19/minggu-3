// Soal 3 — Manajemen Turnamen

// Buat program turnamen game.

// Data:

// - nama turnamen
// - nama tim
// - nama pemain

// Pisahkan variabel menggunakan scope yang sesuai.

// Buat laporan yang menampilkan informasi turnamen lengkap.
const namaTurnamen = "Mobile Legends Championship 2026";

function dataTim() {
    const namaTim = "ONIC Esports";

    function dataPemain() {
        const namaPemain = "yuda";

        console.log(" LAPORAN TURNAMEN ");
        console.log("Turnamen :", namaTurnamen);
        console.log("Tim      :", namaTim);
        console.log("Pemain   :", namaPemain);
    }

    dataPemain();
}