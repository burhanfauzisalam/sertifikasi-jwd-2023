<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
  // Get the data from the AJAX request
  $newData = [
    $_POST['waktu'],
    $_POST['object'],
    $_POST['data'],
    $_POST['hasil']
  ];

  // Open the CSV file in append mode
  $file = fopen('../data/segitiga.csv', 'a');

  // Write the new data to the file
  fputcsv($file, $newData);

  // Close the file
  fclose($file);

  // Send a success response back to the client
  echo "Data updated successfully!";
}
?>
