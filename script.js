$(document).ready(function () {
  //fungsi pada kondisi awal
  //membuat id rumus dan hasil menjadi tersembunyi
  $("#rumus").hide();
  $("#hasil").hide();
  $("#tb").hide();

  //fungsi berjalan ketika tombol hitung segitiga diklik
  $("#hit-segitiga").click(() => {
    $("#riwayat").hide();
    $("#hit-segitiga").hide();
    $("#persegi").hide();
    $("#lingkaran").hide();
    $("#segitiga").attr("class", "col-lg-12");
    $("#rumus").show();
    $("#input-rumus").show();
    $("#input-rumus").html(`
    <h5>Segitiga</h5>
    <p><strong>L = 1/2 * Alas * Tinggi</strong></p>
    <strong>Panjang Alas</strong>
    <input type="number" id="alas"></input><br>
    <strong>Tinggi</strong>
    <input type="number" id="tinggi"></input><br>
    <button id="hitung" class="btn btn-success">Hitung Luas</button>
    `);
    //fungsi untuk tombol hitung ketika diklik
    $("#hitung").click(() => {
      const alas = $("#alas").val();
      const tinggi = $("#tinggi").val();
      const luas = 0.5 * alas * tinggi;
      const waktu = new Date();
      if (alas == 0 || tinggi == 0) {
        alert("Inputan tidak boleh kosong");
      } else {
        const segitiga = {
          waktu:
            "Tanggal " +
            waktu.getDate() +
            " Jam " +
            waktu.getHours() +
            ":" +
            waktu.getMinutes(),
          object: "segitiga",
          data: "alas " + alas + " tinggi " + tinggi,
          hasil: luas,
        };
        $.ajax({
          type: "POST",
          url: "./proses/segitiga.php", // Ganti dengan URL server-side yang sesuai
          data: segitiga,
          success: function (response) {
            // Berhasil mengirim data
            console.log(response);
          },
          error: function (xhr, status, error) {
            // Error saat mengirim data
            console.log(error, xhr, status);
          },
        });
        // $("#riwayat-segitiga").text(r_segitiga + 1);
        $("#hasil").show();
        $("#hasil").html(`
      <h5>Luas segitiga yang anda hitung adalah</h5>
      <h2>${luas}</h2>
      `);
      }
    });
  });

  //fungsi berjalan ketika tombol hitung persegi diklik
  $("#hit-persegi").click(() => {
    $("#riwayat").hide();
    $("#hit-persegi").hide();
    $("#segitiga").hide();
    $("#lingkaran").hide();
    $("#persegi").attr("class", "col-lg-12");
    $("#rumus").show();
    $("#input-rumus").show();
    $("#input-rumus").html(`
    <h5>Persegi</h5>
    <p><strong>L = Sisi * Sisi</strong></p>
    <strong>Panjang Sisi</strong>
    <input type="number" id="sisi"></input><br>
    <button id="hitung" class="btn btn-success">Hitung Luas</button>
    `);
    //fungsi untuk tombol hitung ketika diklik
    $("#hitung").click(() => {
      const sisi = $("#sisi").val();
      const luas = sisi * sisi;
      const waktu = new Date();
      if (sisi == 0) {
        alert("Inputan tidak boleh kosong");
      } else {
        const persegi = {
          waktu:
            "Tanggal " +
            waktu.getDate() +
            " Jam " +
            waktu.getHours() +
            ":" +
            waktu.getMinutes(),
          object: "persegi",
          data: sisi,
          hasil: luas,
        };
        $.ajax({
          type: "POST",
          url: "./proses/persegi.php", // Ganti dengan URL server-side yang sesuai
          data: persegi,
          success: function (response) {
            // Berhasil mengirim data
            console.log(response);
          },
          error: function (xhr, status, error) {
            // Error saat mengirim data
            console.log(error, xhr, status);
          },
        });
        $("#hasil").show();
        $("#hasil").html(`
      <h5>Luas persegi yang anda hitung adalah</h5>
      <h2>${luas}</h2>
      `);
      }
    });
  });

  //fungsi berjalan ketika tombol hitung lingkaran diklik
  $("#hit-lingkaran").click(() => {
    $("#riwayat").hide();
    $("#hit-lingkaran").hide();
    $("#persegi").hide();
    $("#segitiga").hide();
    $("#lingkaran").attr("class", "col-lg-12");
    $("#rumus").show();
    $("#input-rumus").show();
    $("#input-rumus").html(`
    <h5>Lingkaran</h5>
    <p><strong>L = 𝝿 * r<sup>2</sup></strong></p>
    <strong>Panjang Jari-jari</strong>
    <input type="number" id="jari"></input><br>
    <button id="hitung" class="btn btn-success">Hitung Luas</button>
    `);
    //fungsi untuk tombol hitung ketika diklik
    $("#hitung").click(() => {
      const jari = $("#jari").val();
      const luas = (3.14 * jari * jari).toFixed(2);
      const waktu = new Date();
      if (jari == 0) {
        alert("Inputan tidak boleh kosong");
      } else {
        const lingkaran = {
          waktu:
            "Tanggal " +
            waktu.getDate() +
            " Jam " +
            waktu.getHours() +
            ":" +
            waktu.getMinutes(),
          object: "lingkaran",
          data: jari,
          hasil: luas,
        };
        $.ajax({
          type: "POST",
          url: "./proses/lingkaran.php", // Ganti dengan URL server-side yang sesuai
          data: lingkaran,
          success: function (response) {
            // Berhasil mengirim data
            console.log(response);
          },
          error: function (xhr, status, error) {
            // Error saat mengirim data
            console.log(error, xhr, status);
          },
        });
        $("#hasil").show();
        $("#hasil").html(`
      <h5>Luas lingkaran yang anda hitung adalah</h5>
      <h2>${luas}</h2>
      `);
      }
    });
  });

  //fungsi berjalan ketika tombol kembali diklik
  $("#kembali").click(() => {
    location.reload();
    // $("#riwayat").show();
    // $("#hasil").hide();
    // $("#rumus").hide();
    // $("#input-rumus").hide();
    // $("#hit-lingkaran").show();
    // $("#hit-persegi").show();
    // $("#hit-segitiga").show();
    // $("#persegi").show();
    // $("#segitiga").show();
    // $("#lingkaran").show();
    // $("#lingkaran").attr("class", "col-lg-4");
    // $("#segitiga").attr("class", "col-lg-4");
    // $("#persegi").attr("class", "col-lg-4");
  });

  $.ajax({
    type: "GET",
    url: "./data/segitiga.csv",
    dataType: "text",
    success: function (data) {
      const rows = data.split("\n");
      let table = "<table>";
      for (let i = 0; i < rows.length; i++) {
        const cells = rows[i].split(",");
        table += "<tr>";
        for (let j = 0; j < cells.length; j++) {
          if (i === 0) {
            table += "<th>" + cells[j] + "</th>";
          } else {
            table += "<td>" + cells[j] + "</td>";
          }
        }
        table += "</tr>";
      }
      table += "</table>";
      $("#tb-segitiga").html(table);
      const rowSegitiga = $("#tb-segitiga tr").length;
      console.log(rowSegitiga - 2);
      $("#riwayat-segitiga").text(rowSegitiga - 2);
    },
  });

  $.ajax({
    type: "GET",
    url: "./data/persegi.csv",
    dataType: "text",
    success: function (data) {
      const rows = data.split("\n");
      let table = "<table>";
      for (let i = 0; i < rows.length; i++) {
        const cells = rows[i].split(",");
        table += "<tr>";
        for (let j = 0; j < cells.length; j++) {
          if (i === 0) {
            table += "<th>" + cells[j] + "</th>";
          } else {
            table += "<td>" + cells[j] + "</td>";
          }
        }
        table += "</tr>";
      }
      table += "</table>";
      $("#tb-persegi").html(table);
      const rowPersegi = $("#tb-persegi tr").length;
      console.log(rowPersegi - 2);
      $("#riwayat-persegi").text(rowPersegi - 2);
    },
  });

  $.ajax({
    type: "GET",
    url: "./data/lingkaran.csv",
    dataType: "text",
    success: function (data) {
      const rows = data.split("\n");
      let table = "<table>";
      for (let i = 0; i < rows.length; i++) {
        const cells = rows[i].split(",");
        table += "<tr>";
        for (let j = 0; j < cells.length; j++) {
          if (i === 0) {
            table += "<th>" + cells[j] + "</th>";
          } else {
            table += "<td>" + cells[j] + "</td>";
          }
        }
        table += "</tr>";
      }
      table += "</table>";
      $("#tb-lingkaran").html(table);
      const rowLingkaran = $("#tb-lingkaran tr").length;
      console.log(rowLingkaran - 2);
      $("#riwayat-lingkaran").text(rowLingkaran - 2);
    },
  });

  setTimeout(function totalHitung() {
    const hitSegitiga = parseInt($("#riwayat-segitiga").text());
    const hitPersegi = parseInt($("#riwayat-persegi").text());
    const hitLingkaran = parseInt($("#riwayat-lingkaran").text());
    const totalHitung = hitSegitiga + hitPersegi + hitLingkaran;
    const persenSegitiga = (hitSegitiga / totalHitung) * 100;
    const persenPersegi = (hitPersegi / totalHitung) * 100;
    const persenLingkaran = (hitLingkaran / totalHitung) * 100;
    $("#total-hitung").text(totalHitung);
    $("#persen-riwayat-segitiga").text(persenSegitiga.toFixed(2) + "%");
    $("#persen-riwayat-persegi").text(persenPersegi.toFixed(2) + "%");
    $("#persen-riwayat-lingkaran").text(persenLingkaran.toFixed(2) + "%");
    console.log(persenSegitiga);
  }, 1000);
});
