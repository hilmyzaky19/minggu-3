// Bagian A — Scope

// Soal 1 — Sistem Divisi Perusahaan

// Buat data berikut:

// const perusahaan = "PT Maju Bersama";

// Buat function yang memiliki:

// - nama perusahaan
// - nama divisi
// - nama tim

// Tampilkan data yang bisa diakses dari setiap level scope.

// Jelaskan mengapa beberapa variabel bisa diakses dan


const perusahaan = "PT Maju Bersama";

function devisiPerusahan() {
    const devisi = "Marketing";

    function timPerusahaan() {
        const tim = "SEO";

        console.log("Scope Tim");
        console.log(perusahaan);
        console.log(devisi);
        console.log(tim);
    }

    console.log("Scope Divisi ");
    console.log(perusahaan);
    console.log(devisi);

    timPerusahaan();
}

devisiPerusahan();

console.log("Scope Global");
console.log(perusahaan);