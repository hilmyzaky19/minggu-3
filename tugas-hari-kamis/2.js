// Soal 2 — Area Terlarang

// Buat program dengan minimal 3 tingkat function bersarang.

// Buat beberapa variabel pada setiap level.

// Tunjukkan:

// - variabel yang dapat diakses dari dalam
// - variabel yang tidak dapat diakses dari luar

// Gunakan console untuk membuktikannya.
const wilayah = "Global";

function luarArea() {
    const areaLuar = "Area Luar";

    console.log("Luar Area");
    console.log(wilayah);
    console.log(areaLuar);

    function dalamArea() {
        const areaDalam = "Area Dalam";

        console.log(" Dalam Area ");
        console.log(wilayah);
        console.log(areaLuar);
        console.log(areaDalam);

        function areaRahasia() {
            const areaRahasia = "Area Rahasia";

            console.log("Area Rahasia");
            console.log(wilayah);
            console.log(areaLuar);
            console.log(areaDalam);
            console.log(areaRahasia);
        }
     areaRahasia();
    }

    dalamArea();
}

luarArea();



