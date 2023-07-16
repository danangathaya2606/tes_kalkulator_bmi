function calculateBMI() {
  var gender = document.getElementById("gender").value;
  var age = parseInt(document.getElementById("age").value);
  var weight = parseFloat(document.getElementById("weight").value);
  var height = parseFloat(document.getElementById("height").value);

  if (gender === "" || isNaN(age) || isNaN(weight) || isNaN(height)) {
    document.getElementById("result").innerHTML = "Mohon lengkapi semua input.";
    return;
  }

  // Konversi tinggi badan menjadi meter
  height = height / 100;

  // Hitung BMI
  var bmi = weight / (height * height);

  // Tampilkan hasil BMI
  var result = "BMI Anda adalah <br>" + bmi.toFixed(2);

  // Tambahkan kategori BMI berdasarkan jenis kelamin
  if (gender === "male") {
    result += "<br>Kategori: ";
    if (age >= 18) {
      if (bmi < 18.5) {
        result += "Kurus";
      } else if (bmi < 25) {
        result += "Normal";
      } else if (bmi < 30) {
        result += "Gemuk";
      } else {
        result += "Obesitas <br> Kamu harus olahraga rutin untuk menunrunkan berat badan.";
      }
    } else {
      result += "Perkembangan belum selesai";
    }
  } else if (gender === "female") {
    result += "<br>Kategori: ";
    if (age >= 18) {
      if (bmi < 18.5) {
        result += "Kurus";
      } else if (bmi < 24) {
        result += "Normal";
      } else if (bmi < 29) {
        result += "Gemuk";
      } else {
        result += "Obesitas";
      }
    } else {
      result += "Perkembangan belum selesai";
    }
  }

  document.getElementById("result").innerHTML = result;
}
