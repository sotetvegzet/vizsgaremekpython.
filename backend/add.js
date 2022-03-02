function sendPost(){

    var email = document.getElementById("email").value
    if (!email.includes("@")){
      alert("Nem emailt adtál meg!")
      return;
    }
    const data = JSON.stringify({
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        
        address:document.getElementById("address").value,
        psw:document.getElementById("psw").value,
        mobile:document.getElementById("mobile").value
      });
      
      navigator.sendBeacon('http://127.0.0.1:5000/savedetails/', data);
      console.log(data)
      alert("Sikeresen létrehoztál egy felhasználót!")
    }