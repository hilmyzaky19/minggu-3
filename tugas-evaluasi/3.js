// Soal 3 — Sistem Bank Mini

// Buat function:

// buatBank(namaBank)

// Function harus mengembalikan sistem yang mampu:

// bank.buatRekening(...)
// bank.transfer(...)
// bank.setor(...)
// bank.tarik(...)
// bank.laporan()

// Ketentuan

// - Saldo rekening tidak boleh dapat diakses langsung.
// - Setiap transaksi harus memiliki timestamp.
// - Semua transaksi harus tersimpan.
// - Rekening harus memiliki nomor unik otomatis.

// Wajib menggunakan

// - Closure
// - Scope
// - Date Object

// Tantangan

// Bagaimana cara memastikan saldo tidak dapat diubah langsung dari luar program?

// Jelaskan.
function buatBank(namaBank) {
    let nomorRekeningTerakhir = 1000;
    const rekeningList = {};
    const transaksi = [];

    function buatNomorRekening() {
        return ++nomorRekeningTerakhir;
    }

    function catatTransaksi(jenis, nomorRekening, jumlah) {
        transaksi.push({
            jenis,
            nomorRekening,
            jumlah,
            timestamp: new Date()
        });
    }

    return {
        buatRekening(namaPemilik) {
            const nomorRekening = buatNomorRekening();

            rekeningList[nomorRekening] = {
                namaPemilik,
                saldo: 0
            };

            catatTransaksi("BUAT_REKENING", nomorRekening, 0);

            return nomorRekening;
        },

        setor(nomorRekening, jumlah) {
            rekeningList[nomorRekening].saldo += jumlah;

            catatTransaksi("SETOR", nomorRekening, jumlah);
        },

        tarik(nomorRekening, jumlah) {
            if (rekeningList[nomorRekening].saldo < jumlah) {
                return "Saldo tidak cukup";
            }

            rekeningList[nomorRekening].saldo -= jumlah;

            catatTransaksi("TARIK", nomorRekening, jumlah);
        },

        transfer(dari, ke, jumlah) {
            if (rekeningList[dari].saldo < jumlah) {
                return "Saldo tidak cukup";
            }

            rekeningList[dari].saldo -= jumlah;
            rekeningList[ke].saldo += jumlah;

            catatTransaksi("TRANSFER_KELUAR", dari, jumlah);
            catatTransaksi("TRANSFER_MASUK", ke, jumlah);
        },

        laporan() {
            return {
                namaBank,
                rekening: rekeningList,
                transaksi
            };
        }
    };
}

// ===== Pengujian =====

const bank = buatBank("Bank Hilmy");

const rekeningHilmy = bank.buatRekening("Hilmy");
const rekeningZaky = bank.buatRekening("Zaky");

bank.setor(rekeningHilmy, 500000);
bank.transfer(rekeningHilmy, rekeningZaky, 100000);
bank.tarik(rekeningZaky, 50000);

console.log(bank.laporan());