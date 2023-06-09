<?php
// Nama file CSV
$namaFile = '../data/segitiga.csv';

// Membuka file CSV
$file = fopen($namaFile, 'r');

// Membaca header (baris pertama) file CSV
$header = fgetcsv($file);

// Membaca data dari file CSV
$data = array();
while (($row = fgetcsv($file)) !== false) {
    $data[] = $row;
}

// Menutup file CSV
fclose($file);

// Menampilkan data
foreach ($data as $row) {
    // Mengakses nilai di setiap kolom
    $kolom1 = $row[0];
    $kolom2 = $row[1];
    // ... lanjutkan sesuai dengan jumlah kolom yang ada

    // Menampilkan nilai kolom
    echo "Kolom 1: $kolom1, Kolom 2: $kolom2 <br>";
}
?>
