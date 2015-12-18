var field= "";
var field2 = "";
var field3 = "";
var field4 = "";
var field5 = "";

// Local Storage Setup

function setItem() {
    var temp= localStorage.getItem("userData");
    var post= JSON.parse(temp);
    
// Display Filter
    var clubchoice;
    var genderchoice;
    var field= "";
    var field2 = "";
    var field3 = "";
    var field4 = "";
    var field5 = "";
    
// For loop and variables 
    
    for ( var i=0; i < 7; i++ ){
        clubchoice = document.getElementById("clubnamestudent").value
        genderchoice = document.getElementById("genderstudent").value
       
// FILTER for all options chosen my user!
        
        if (clubchoice === post[i].clubname && genderchoice === post[i].gender || clubchoice === post[i].clubname && genderchoice === "All" || clubchoice === "All" && genderchoice === post[i].gender || clubchoice === "All" && genderchoice === "All" ){
            field += post[i].title + "<br>";
            field2 += post[i].date + "<br>";
            field3 += post[i].clubname + "<br>";
            field4 += post[i].insertpost + "<br>";
            field5 += post[i].gender + "<br>";

            // Display spesific information posted by teacher
            document.getElementById("title").innerHTML = field;
            document.getElementById("time").innerHTML = field2;
            document.getElementById("club").innerHTML = field3;
            document.getElementById("post").innerHTML = field4; 
            document.getElementById("gender1"). innerHTML = field5;
        }


    }   
}
