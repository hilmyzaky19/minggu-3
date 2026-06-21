function buatKasir(namaToko) {

    let transaksi = [];

    function tambahTransaksi(namaPelanggan, ...barang) {

        const daftarBarang = [...barang];

        const total = daftarBarang.reduce(
            (sum, item) => sum + item.harga,
            0
        );

        transaksi.push({
            namaPelanggan: namaPelanggan.trim(),
            barang: daftarBarang,
            total: Number(total.toFixed(2)),
            tanggal: new Date()
        });
    }

    function lihatTransaksi() {
        return transaksi.map(({ namaPelanggan, total, tanggal }) => ({
            namaPelanggan,
            total,
            tanggal
        }));
    }

    return {
        namaToko,
        tambahTransaksi,
        lihatTransaksi
    };
}

const kasir = buatKasir("Hilmy Store");

kasir.tambahTransaksi(
    "Ari",
    { nama: "Keyboard", harga: 150000 },
    { nama: "Mouse", harga: 50000 }
);

kasir.tambahTransaksi(
    "Bima",
    { nama: "Headset", harga: 200000 }
);

console.log(kasir.lihatTransaksi());