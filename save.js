function bodyload(){ debugger;

    let crnUser = JSON.parse(localStorage.getItem("currentuser"));
    $("#role").html(crnUser.role);
   if(crnUser.role === "Reception" || crnUser.role === "Counselor"){
    document.getElementById("forms").style.display="none";
    document.getElementById("key-contacts").style.display="none";
    document.getElementById("center-management").style.display="none";
    document.getElementById("user-management").style.display="none";
   }
    let totalcasedata = JSON.parse(localStorage.getItem("totalcase"));
    
    let currentuserid = localStorage.getItem("currentuserid");

   var searchresult = totalcasedata.filter(function(item){return item.Id == currentuserid});



        document.getElementById("savename").innerHTML=searchresult[0].Name;
        document.getElementById("savefathername").innerHTML=searchresult[0].Father;
        document.getElementById("savegender").innerHTML=searchresult[0].Female;
        document.getElementById("saveage").innerHTML=searchresult[0].Age;
        document.getElementById("alltcontact").innerHTML=searchresult[0].alltnumber;
        document.getElementById("savecaste").innerHTML=searchresult[0].Caste;
        document.getElementById("saveeducation").innerHTML=searchresult[0].Education;
        document.getElementById("savesurname").innerHTML=searchresult[0].Surname;
        document.getElementById("savemothername").innerHTML=searchresult[0].Mother;
        document.getElementById("savedob").innerHTML=searchresult[0].Dob;
        document.getElementById("savecontact").innerHTML=searchresult[0].Contactnumber;
        document.getElementById("saveemail").innerHTML=searchresult[0].Email;
        document.getElementById("savereligen").innerHTML=searchresult[0].Religen;

        if(searchresult[0].CasesId === ("case"+1)){
        document.getElementById("savecase").innerHTML="Total Women Centers";
        }
        if(searchresult[0].CasesId === ("case"+2)){
            document.getElementById("savecase").innerHTML="Total Cases Registered In Women Centers";
            }
            if(searchresult[0].CasesId === ("case"+3)){
                document.getElementById("savecase").innerHTML="Total Sexual Abuse Cases in PS";
                }
         if(searchresult[0].CasesId === ("case"+4)){
               document.getElementById("savecase").innerHTML="FIR";
           }
            if(searchresult[0].CasesId === ("case"+5)){
                   document.getElementById("savecase").innerHTML="Medical Test";
               }
             if(searchresult[0].CasesId === ("case"+6)){
                    document.getElementById("savecase").innerHTML="No. 161 Done";
                  }
             if(searchresult[0].CasesId === ("case"+7)){
                     document.getElementById("savecase").innerHTML="No. 164 Done";
                 }
            if(searchresult[0].CasesId === ("case"+8)){
               document.getElementById("savecase").innerHTML="FSL";
             }
             if(searchresult[0].CasesId === ("case"+9)){
                document.getElementById("savecase").innerHTML="Convicted";
              }
              if(searchresult[0].CasesId === ("case"+10)){
                document.getElementById("savecase").innerHTML="Aquitted";
              }
        
}
 function CounsleorChng(){debugger;
    // var CunData = {};
    var cunName = document.getElementById("CunsChnge").value;
    var userdata = JSON.parse(localStorage.getItem("userdetail"));

    var CunData = userdata.filter(function(item){return item.name == cunName});
    document.getElementById("cunImage").src = CunData[0].Photo;
    document.getElementById("cunName").innerHTML = CunData[0].name;
    document.getElementById("cunCount").innerHTML = 5;
    if(cunName == "Rio"){ 
    document.getElementById("savedata").disabled =false;
    }
    if(cunName == "Profesor"){ 
        document.getElementById("savedata").disabled =false;
        }
 }


$(function(){
    
    $("#dashboard").click(()=>{
        window.location=("dashboard.html");
    });
    
    $("#reports").click(()=>{
        window.location=("report.html");
    });

    $("#case").click(()=>{
        window.location=("case.html");
        localStorage.setItem("kapil",0)
    });

    $("#create-new-case").click(()=>{
        window.location=("newcase.html");
    });
    $("#logout").click(()=>{debugger;
        localStorage.removeItem("currentuser");
        window.location=("login.html");
    });
    $("#back").click(()=>{
        window.location=("case.html")
    }); 

    $("#savedata").click(()=>{ debugger;
        var total = JSON.parse(localStorage.getItem("totalcase"));
        var caseid = localStorage.getItem("currentuserid");

        var userdetail = JSON.parse(localStorage.getItem("userdetail"));
        var selectCounsler = document.getElementById("CunsChnge").value;

        var findcounselerId = userdetail.filter(function(item){return item.name == selectCounsler});
        // alert(findcounselerId[0].userid)

        for(var i = 0; i<=total.length-1; i++){
            if(total[i].Id == caseid){
                total[i].counslerid = findcounselerId[0].userid;
                alert(total[i].counslerid);
                localStorage.setItem("totalcase",JSON.stringify(total));
            }
        }
        for(var i = 0; i<=userdetail.length-1; i++){
            if(userdetail[i].name == selectCounsler){
                userdetail[i].caseIds.push(caseid);
                localStorage.setItem("userdetail",JSON.stringify(userdetail));
            }
        }        


        window.location=('case.html');
    });
});