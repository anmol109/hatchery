var newv=document.querySelector("#newv");
var subm=document.querySelector("#subm");
var result=document.querySelector("#result");
var subjectInput=document.querySelector("#subjectInput");
var Grade=document.querySelector("#grade");
var subName=[];
var subCode=[];
var credits=[];
var SubGrade=[];
var sName=document.querySelector("#sName");
var sCode=document.querySelector("#sCode");
var credits=document.querySelector("#credits");
var subNameDisp=document.querySelector("#sNameDisp");
var subCodeDisp=document.querySelector("#sCodeDisp");
var creditsDisp=document.querySelector("#creditsDisp");
var showResult=document.querySelector("#showResult");
var GradeDisp=document.querySelector("#GPADisp");
var GPADisp=document.querySelector("#GPA");
var numOfSubs=0;
var gpa=0;
var cred=0;

newv.addEventListener("click", function(){
  subjectInput.style.display = "block";
});
subm.addEventListener("click", function(){
  subName[numOfSubs] = sName.value
  subCode[numOfSubs] = sCode.value;
  credits[numOfSubs] = credits.value;
  SubGrade[numOfSubs] = Grade.value;
  numOfSubs++;
  subjectInput.style.display= "none";
});
result.addEventListener("click", function(){
  showResult.style.display=" block";
  for(var i=0; i<numOfSubs; i++)
  {
    subNameDisp.innerHTML+=subName[i]+"&#13;&#10;";
    subCodeDisp.innerHTML+=subCode[i]+"&#13;&#10;";
    creditsDisp.innerHTML+=credits[i]+"&#13;&#10;";
    GradeDisp.innerHTML+=SubGrade[i]+"&#13;&#10;";
    gpa+=tell(SubGrade[i])*credits[i];
    cred+=credits[i];
  }
  GPADisp.value=gpa/cred;
});

function tell(grade){
  if(grade=='A'){
    return 9;
  }
  else if(grade=='B'){
    return 8;
  }
  else if(grade=='C'){
    return 7;
  }
  else if(grade=='D'){
    return 6;
  }
  else if(grade=='E'){
    return 5;
  }
  else if(grade=='S'){
    return 10;
  }
  else if(grade=='N'){
    return 0;
  }
}

