// Soal 8 — Sistem Dompet Digital

// Buat function:

// buatDompet(saldoAwal)

// Function harus mengembalikan method:

// - tambahSaldo()
// - kurangiSaldo()
// - cekSaldo()

// Saldo harus tersimpan secara private menggunakan closure.

function buatDompet(saldoAwal) {
    let saldo = saldoAwal;

    return {
        tambahSaldo(jumlah) {
            saldo += jumlah;
            console.log(`Saldo bertambah. Saldo sekarang: Rp${saldo}`);
        },

        kurangiSaldo(jumlah) {
            if (jumlah > saldo) {
                console.log("Saldo tidak cukup!");
                return;
            }

            saldo -= jumlah;
            console.log(`Saldo berkurang. Saldo sekarang: Rp${saldo}`);
        },

        cekSaldo() {
            console.log(`Saldo saat ini: Rp${saldo}`);
        }
    };
}

const dompet = buatDompet(100000);

dompet.cekSaldo();
dompet.tambahSaldo(50000);
dompet.kurangiSaldo(30000);
dompet.cekSaldo();