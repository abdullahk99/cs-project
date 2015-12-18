// Abdullah Khokhar, ICS3UR - C, November 26th, 2015, Annoucment App//


// Username and Password Entry For Student And Teacher

function validateForm() {
        var un = document.getElementById("userName").value;
        var pw = document.getElementById("password").value;
        var username = "Teacher"; 
        var password = "hi";
        var username2 = "Student";
        var password2 = "hi";
        if ((un == username) && (pw == password)) {
             $('#output').html("Hello " + username); 
            
// Time gap to next page

            setInterval(function() {window.location = "index.html";}, 800);
            return false;
        }
    
// Second username and password function

        else if ((un == username2) && (pw == password2)) {
             $('#output').html("Hello " + username2); 
                setInterval(function() {window.location = "StudentHome.html";}, 800);
                return false;
            
        }
            else {
            alert ("Login was unsuccessful, please check your username and password");

            }
      } 

  