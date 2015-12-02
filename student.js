var field= "";
var field2 = "";
var field3 = "";
var field4 = "";

// Local Storage Setup

function setItem() {
    var temp= localStorage.getItem("userData");
    var post= JSON.parse(temp);
    console.log(post[0]);
    
// Display last annoucment posted
      
for ( var i=0; i < 5; i++ ){
    
    field += post[i].title + "<br>";
    field2 += post[i].date + "<br>";
    field3 += post[i].clubname + "<br>";
    field4 += post[i].insertpost + "<br>";
   
    // Display spesific information posted by teacher
    document.getElementById("title").innerHTML = field;
    document.getElementById("time").innerHTML = field2;
    document.getElementById("club").innerHTML = field3;
    document.getElementById("post").innerHTML = field4; 
    }
}