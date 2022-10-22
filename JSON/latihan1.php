<?php
// $mahasiswa = [
//     [
//     "nama" => "Fahmy rosyadi",
//     "nim" => "e41212254",
//     "email" => "fahmyrosyadi29@gmail.com"
//     ],
//     [
//     "nama" => "rsyd fhmy",
//     "nim" => "e41219913",
//     "email" => "rsydfhmy@gmail.com"
//     ]
// ];
$dbh = new PDO('mysql:host=localhost;dbname=mahasiswa', 'root' ,'');

$db = $dbh->prepare('SELECT * FROM mahasiswa');
$db->execute();
//Ambil semua datanya lalu ubah kembalian jadi array assoc
$mahasiswa = $db->fetchAll(PDO::FETCH_ASSOC);

$data = json_encode($mahasiswa);
echo $data

?>