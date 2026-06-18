// Soal 9 — Sistem Login

// Buat function:

// buatLoginSystem()

// Sistem harus menyimpan:

// - jumlah login berhasil
// - jumlah login gagal

// Data tersebut tidak boleh dapat diakses langsung dari luar.

// Buat method untuk:

// - login berhasil
// - login gagal
// - melihat statistik

// Gunakan closure.

function buatLoginSystem() {
    let loginBerhasil = 0;
    let loginGagal = 0;

    return {
        berhasil() {
            loginBerhasil++;
            console.log("Login berhasil");
        },

        gagal() {
            loginGagal++;
            console.log("Login gagal");
        },

        statistik() {
            console.log("=== Statistik Login ===");
            console.log("Login Berhasil :", loginBerhasil);
            console.log("Login Gagal    :", loginGagal);
        }
    };
}

const login = buatLoginSystem();

login.berhasil();
login.berhasil();
login.gagal();
login.gagal();
login.berhasil();

login.statistik();