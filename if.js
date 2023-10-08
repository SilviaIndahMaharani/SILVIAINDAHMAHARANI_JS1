let nilai = prompt("Masukkan nilai Anda:");

if (nilai === null) {
  console.log("Anda membatalkan input.");
} else if (nilai === "") {
  console.log("Anda tidak memasukkan nilai.");
} else {
  nilai = parseFloat(nilai); 
  
  if (!isNaN(nilai)) {
    if (nilai >= 80) {
      console.log("Anda mendapat nilai A.");
    } else if (nilai >= 70) {
      console.log("Anda mendapat nilai B.");
    } else if (nilai >= 60) {
      console.log("Anda mendapat nilai C.");
    } else {
      console.log("Anda mendapat nilai D atau lebih rendah.");
    }

    if (nilai >= 70) {
      console.log("Selamat! Anda lulus.");
      
      if (nilai > 90) {
        console.log("Dan Anda mendapatkan nilai A+.");
      }
    } else {
      console.log("Maaf, Anda tidak lulus.");
    }
  } else {
    console.log("Input yang Anda masukkan bukan angka.");
  }
}
