// Bagian C — Closure

// Soal 7 — Counter Pengunjung

// Buat function:

// buatCounter()

// Setiap kali function hasilnya dipanggil:

// counter();

// Jumlah pengunjung harus bertambah.

// Contoh:

// Pengunjung ke-1
// Pengunjung ke-2
// Pengunjung ke-3

// Nilai counter tidak boleh bisa diubah langsung dari luar.

function buatCounter() {
    let jumlahPengunjung = 0;

    return function () {
        jumlahPengunjung++;
        console.log(`Pengunjung ke-${jumlahPengunjung}`);
    };
}

const counter = buatCounter();

counter();
counter();
counter();