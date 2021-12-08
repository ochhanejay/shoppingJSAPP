function bodyload(){ debugger;

    let crnUser = JSON.parse(localStorage.getItem("currentuser"));
    $("#role").html(crnUser.role);
   if(crnUser.role === "Reception"){
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

        if(searchresult[0].CasesId === 1){
        document.getElementById("savecase").innerHTML="Total Women Centers";
        }
        if(searchresult[0].CasesId === 2){
            document.getElementById("savecase").innerHTML="Total Cases Registered In Women Centers";
            }
            if(searchresult[0].CasesId === 3){
                document.getElementById("savecase").innerHTML="Total Sexual Abuse Cases in PS";
                }
         if(searchresult[0].CasesId === 4){
               document.getElementById("savecase").innerHTML="FIR";
           }
            if(searchresult[0].CasesId === 5){
                   document.getElementById("savecase").innerHTML="Medical Test";
               }
             if(searchresult[0].CasesId === 6){
                    document.getElementById("savecase").innerHTML="No. 161 Done";
                  }
             if(searchresult[0].CasesId === 7){
                     document.getElementById("savecase").innerHTML="No. 164 Done";
                 }
            if(searchresult[0].CasesId === 8){
               document.getElementById("savecase").innerHTML="FSL";
             }
             if(searchresult[0].CasesId === 9){
                document.getElementById("savecase").innerHTML="Convicted";
              }
              if(searchresult[0].CasesId === 10){
                document.getElementById("savecase").innerHTML="Aquitted";
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

          datatable();  
    });




    $("#logout").click(()=>{debugger;
        localStorage.removeItem("currentuser");
        window.location=("login.html");
    });

    $("#savedata").click(()=>{
        window.location=('case.html');
    });
});