/*
The openNav function is used to open side navigation upto 60% width
*/
function openNav() {
    document.getElementById("myNav").style.width = "60%";
  }
  /*
  The openNav function is used to set side navigation upto 0% width
  i.e. side navigation will not be visible
  */
  function closeNav() {
    document.getElementById("myNav").style.width = "0%";
  }
  
  /*
  This function displays time in element with id time and refreshes it every 0.5s using setinterval function
  */
  setInterval(displayClock, 500);
  function displayClock() {
    document.getElementById("time").innerHTML = new Date().toLocaleTimeString(
      "en-US",
      { hour: "numeric", hour12: true, minute: "numeric", second: "numeric" }
    );
  }
  
  /*
  the below code is for changing background image of banner area. 5 images are stored in array. 
  The images are selected randomly and change background every 5 seconds.
  */
  window.onload = function () {
    /The below code is used to make greeting according to local time. It will check current time in system and greet according to time for 5s and hides after 5s/
    var greeting;
    var time = new Date().getHours();
    if (time < 12) {
      greeting = "Good Morning";
    } else if (time < 15) {
      greeting = "Good Afternoon";
    } else if(time < 18){
      greeting = "Good Evening";
    } else {
      greeting = "Good Night";
    }
    document.getElementById("greet").innerHTML = greeting;
    // setTimeout(function () {
    //   document.getElementById("greet").style.display = "none";
    // }, 3000);
    
    var currentIndex = 0; // Inisialisasi indeks gambar saat ini di luar fungsi
  
  function changeImage() {
      var BackgroundImg = [
          "./images/candra-banner.png",
          "./images/alex-banner.png",
          "./images/damai-banner.png",
          "./images/bitha-banner.png"
      ];
      
      // Ubah gambar latar belakang
      document.getElementById("home").style.backgroundImage = 'url("' + BackgroundImg[currentIndex] + '")';
      
      // Perbarui indeks, kembali ke awal jika mencapai akhir
      currentIndex = (currentIndex + 1) % BackgroundImg.length;
  }
  
    window.setInterval(changeImage, 5000);
  };