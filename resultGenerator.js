var newv=document.querySelector("#newv");
var subm=document.querySelector("#subm");
var result=document.querySelector("#result");
var subjectInput=document.querySelector("#subjectInput")
var subName=["abc"];
var subCode=["xyz"];
var credits=[2];
var sName=document.querySelector("#sName");
var sCode=document.querySelector("#sCode");
var credits=document.querySelector("#credits");
var subNameDisp=document.querySelector("#sNameDisp");
var subCodeDisp=document.querySelector("#sCodeDisp");
var creditsDisp=document.querySelector("#creditsDisp");
var showResult=document.querySelector("#showResult");
var numOfSubs=0;

newv.addEventListener("click", function(){
  subjectInput.style.display = "block";
});
subm.addEventListener("click", function(){
  subName[numOfSubs] = sName.value
  subCode[numOfSubs] = sCode.value;
  credits[numOfSubs] = credits.value;
  numOfSubs++;
  subjectInput.style.display= "none";
});
result.addEventListener("click", function(){
  showResult.style.display=" block";
  for(var i=0; i<numOfSubs; i++)
  {
    subNameDisp.textContent+=subName[i];
    subCodeDisp.textContent+=subCode[i];
    creditsDisp.textContent+=credits[i];

  }
});


