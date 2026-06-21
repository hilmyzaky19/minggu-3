// Soal 4 — Audit Program Warisan

// Seorang programmer meninggalkan kode berikut:

// function sistem() {

//     console.log(user);

//     var user = "Ari";

//     if (true) {
//         let score = 90;
//     }

//     function tampil() {
//         console.log(score);
//     }

//     tampil();
// }

// sistem();

// Tugasmu:

// 1. Temukan seluruh masalah pada program.
// 2. Jelaskan penyebabnya.
// 3. Perbaiki tanpa mengubah tujuan utama program.
// 4. Tulis ulang program dengan struktur scope yang lebih baik.

// Wajib membahas

// - Scope
// - Hoisting

// ---
function sistem() {

    console.log(user);

    var user = "Ari";

    if (true) {
        let score = 90;
    }

    function tampil() {
        console.log(score);
    }

    tampil();
}

sistem();

// user undefined karena hoisting pada var
// score g bisa diakses oleh tampil() karena block scope nya let

// Solusinya adalah menempatkan score pada scope yang dapat diakses oleh fungsi tampil().
// Gunakan let atau const daripada var agar kode lebih aman dan mudah dipahami.




