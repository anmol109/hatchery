function show() {
    var x = document.getElementById("inp-cont");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }

function show2() {
    var y = document.getElementById("show-result");
    if (y.style.display === "none") {
        y.style.display = "block";
    } else {
        y.style.display = "none";
    }

}


var subname=["maths"];
var subcode=["mat"];
var subcred=[2];
function sub(){
    subname.push(getElementById("name").value());
    subcode.push(getElementById("code").value());
    subcred.push(getElementById("number").value());
}

function showresult(){
    document.getElementById("subject-name").innerHTML = subname[1];
    document.getElementById("gpa").innerHTML = subcred[0]
}


