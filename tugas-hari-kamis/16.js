// Soal 16 — Mesin Aktivitas (Hard Mode)

// Buat function:

// buatLogger()

// Setiap aktivitas yang dicatat harus menyimpan:

// - nama aktivitas
// - waktu aktivitas dibuat

// Contoh:

// logger("Login");
// logger("Checkout");
// logger("Logout");

// Buat method:

// tampilkanRiwayat()

// yang menampilkan seluruh aktivitas yang pernah tercatat.

// Riwayat aktivitas harus disimpan menggunakan closure sehingga tidak dapat diakses langsung dari luar.

// Soal 16 — Mesin Aktivitas (Hard Mode)

function buatLogger() {
    const riwayat = [];

    function logger(aktivitas) {
        riwayat.push({
            namaAktivitas: aktivitas,
            waktu: new Date()
        });
    }

    logger.tampilkanRiwayat = function () {
        console.log("=== RIWAYAT AKTIVITAS ===");

        riwayat.forEach((item, index) => {
            console.log(
                `${index + 1}. ${item.namaAktivitas} - ${item.waktu.toLocaleString("id-ID")}`
            );
        });
    };

    return logger;
}

// Membuat logger
const logger = buatLogger();

// Mencatat aktivitas
logger("Login");
logger("Checkout");
logger("Logout");

// Menampilkan riwayat
logger.tampilkanRiwayat();