// Soal 6 – Sistem Inventaris

// Diberikan data:

// const inventoryAwal = [
//     "Pedang",
//     "Perisai",
//     "Potion"
// ];

// Buat inventory baru yang berisi:

// - seluruh item lama
// - ditambah "Armor"
// - ditambah "Elixir"

// Data inventory awal tidak boleh berubah.

// ---
const inventoryAwal = [
    "Pedang",
    "Perisai",
    "Potion"
];

const inventoryBaru = [
    ...inventoryAwal,
    "Armor",
    "Elixir"
];

console.log("Inventory Awal:", inventoryAwal);
console.log("Inventory Baru:", inventoryBaru);