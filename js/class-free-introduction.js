function selectRadio(radioId) {
  // Dapatkan elemen radio berdasarkan ID
  var radioElement = document.getElementById(radioId);

  // Periksa apakah elemen radio ditemukan
  if (radioElement) {
    // Atur properti checked menjadi true
    radioElement.checked = true;
  }
}
