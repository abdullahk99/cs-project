// Abdullah Khokhar, ICS3UR - C, November 26th, 2015, Annoucment Cute//


// Username and Password Entry

function validateForm() {
        var un = document.getElementById("userName").value;
        var pw = document.getElementById("password").value;
        var username = "Abdullah"; 
        var password = "hi";
        if ((un == username) && (pw == password)) {
             $('#output').html("Hello " + username); 
            
// Time gap to next page

            setInterval(function() {window.location = "index.html";}, 500);
            return false;
        }
    
// Wrong username and pasword enter

        else {
            alert ("Login was unsuccessful, please check your username and password");
        }
      } 

  