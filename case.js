   var totalcasedata =[{Id: 1, Name:"rohit",Surname:"birla",Father:"ram",Mother:"sita",Female:"female",Age:"12",Dob:"10.10.10",Contactnumber:1222646313,Alltnumber:12541684665,Email:"Example@gmail.com",Religen:"hindu",Caste:"obc",Education:"college"}];
    
function bodyload(){debugger;


    var crnUser = JSON.parse(localStorage.getItem("currentuser"));
    $("#role").html(
        
        crnUser.role);
   if(crnUser.role === "Reception" || crnUser.role === "Counselor"){
    document.getElementById("forms").style.display="none";
    document.getElementById("key-contacts").style.display="none";
    document.getElementById("center-management").style.display="none";
    document.getElementById("user-management").style.display="none";
   }


   var tData = JSON.parse(localStorage.getItem('totalcase'));
   var casetype = localStorage.getItem("kapil");
 
   if(totalcasedata !== undefined && totalcasedata !== null){
    if(tData !== undefined && tData !== null){
        totalcasedata = tData;
    }

   if(casetype == 1 ||  casetype == 2 || casetype == 3 || casetype == 4 || casetype == 5 || casetype == 6 || casetype == 7 || casetype == 8 || casetype == 8 || casetype == 9 || casetype == 10){
      
    let casetypedata = totalcasedata.filter(function(item){ return item.CasesId == ("case"+casetype)});
    tableDataPrint(casetypedata);
   }
   else{
    tableDataPrint(totalcasedata);
   }
    
    $('#example').DataTable(
        {
        dom: 'Bfrtip',
        buttons: [
            'copy', 'csv', 'excel', 'pdf', 'print'
        ]

    } );
    document.getElementById("caseCount").innerHTML=totalcasedata.length;
}
    
};
function tableDataPrint(tableData) {
    // empty the table
    let datatable = document.getElementById("tableBody");
    datatable.innerHTML='';
    for(var i = 1; i <= tableData.length; i++){
        var tableTR  = document.createElement(`tr`);
        tableTR.setAttribute('onclick', `findId(${tableData[i-1].Id})`);
       
       
        var td0 = document.createElement("td");
        td0.innerHTML = tableData[i-1].Id;
        tableTR.appendChild(td0);
    
        var td1 = document.createElement("td");
        td1.innerHTML= tableData[i-1].Name;
        tableTR.appendChild(td1);
    
        var td2 = document.createElement("td");
        td2.innerHTML= tableData[i-1].Surname;
        tableTR.appendChild(td2);
    
        var td3 = document.createElement("td");
        td3.innerHTML= tableData[i-1].Father;
        tableTR.appendChild(td3);
    
        var td4 = document.createElement("td");
        td4.innerHTML= tableData[i-1].Mother;
        tableTR.appendChild(td4);
    
        var td5 = document.createElement("td");
        td5.innerHTML= tableData[i-1].Female;
        tableTR.appendChild(td5);
    
        var td6 = document.createElement("td");
        td6.innerHTML= tableData[i-1].Date;
        tableTR.appendChild(td6);
    
    
        var td7 = document.createElement("td");
        td7.innerHTML= tableData[i-1].Age;
        tableTR.appendChild(td7);
    
    
        var td8 = document.createElement("td");
        td8.innerHTML= tableData[i-1].Contactnumber;
        tableTR.appendChild(td8);
    
        var td10 = document.createElement("td");
        td10.innerHTML= tableData[i-1].Email;
        tableTR.appendChild(td10);
    
        datatable.appendChild(tableTR);
    }
}
function findId(Id){debugger;
    localStorage.setItem("currentuserid",Id);
    window.location=("savedata.html")
 }



 function togglebtn(){debugger
    
  var togglebtn=  document.getElementById("togglebtn");
  if(togglebtn.checked == true){
      let today = new Date().toLocaleDateString(); 
        let casetypedata = totalcasedata.filter(function(item){ return item.Date == today});
        tableDataPrint(casetypedata);
  }
  else{
    tableDataPrint(totalcasedata);
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

    $("#next-btn").click(()=>{debugger;

        localStorage.setItem("kapil",0)


        let currentcasedata = {};
        
        let isError = false;
        
        let  caseType= 0;

        let findid = JSON.parse(localStorage.getItem("totalcase"));
        totalcasedata = findid;

       

        let name = document.getElementById("name").value;
        let surname = document.getElementById("surname").value;
        let father = document.getElementById("father-name").value;
        let mother = document.getElementById("mother-name").value;
        let female = document.getElementById("female").value;
        let dob = document.getElementById("dob").value;
        let age = document.getElementById("age").value;
        let contactnumber = document.getElementById("contact-number").value;
        let alltnumber = document.getElementById("allt-contact").value;
        let email = document.getElementById("email").value;
        let caste = document.getElementById("caste").value;
        let religen = document.getElementById("religen").value;
        let education = document.getElementById("education").value;
        let cases = document.getElementById("cases").value;
    


        if(name === "") {
            document.getElementById('nameError').innerHTML="This filed is requried";
            isError = true;
        }
        if(dob === "") {
            document.getElementById('dobError').innerHTML="This filed is requried";
            isError = true;
        }
        if(age === ""){
            document.getElementById('ageError').innerHTML="This filed is requried";
            isError = true;

        }
        if(contactnumber === ""){
            document.getElementById('numberError').innerHTML="This filed is requried";
            isError = true;
        }
        if(cases === ""){
            document.getElementById("casesError").innerHTML="This filed is requried";
        }
        if(isError === true) {
            return;
        }
        if(isError === false){
           if(totalcasedata !== null && totalcasedata !== undefined){
            var count = totalcasedata.length;
        }
        if(totalcasedata == undefined && totalcasedata == null){
            count=0;
        }

        if(cases === "Total Women Centers"){
            caseType = 1;
        }
        if(cases === "Total Cases Registered In Women Centers"){
            caseType = 2;
        }
        if(cases === "Total Sexual Abuse Cases in PS"){
            caseType = 3;
        }
        
        if(cases === "FIR"){
            caseType = 4;
        }
        
        if(cases === "Medical Test"){
            caseType = 5;
        }
        
        if(cases === "No. 161 Done"){
            caseType = 6;
        }
        
        if(cases === "No. 164 Done"){
            caseType = 7;
        }
        if(cases === "FSL"){
            caseType = 8;
        }
        if(cases === "Convicted"){
            caseType = 9;
        }
        if(cases === "Aquitted"){
            caseType = 10;
        }
        let today = new Date().toLocaleDateString();

    var crnUser = JSON.parse(localStorage.getItem("currentuser"));


         currentcasedata={
            Id:count+1,            
            Name:name,
            Surname:surname,
            Father:father,
            Mother:mother,
            Female:female,
            Dob:dob,
            Age:age,
            Contactnumber:contactnumber,
            Alltnumber:alltnumber,
            Email:email,
            Caste:caste,
            Religen:religen,
            Education:education,
            CasesId:("case"+caseType),
            Date:today,
            User:crnUser.userid,
            counslerid:"",
        }
        console.log(currentcasedata);
       

       
    }
    
    let cData = localStorage.getItem("totalcase");
    if(cData !== undefined){ 
        cData = JSON.parse(cData);
        totalcasedata = cData;
        
    }
    if(totalcasedata === undefined || totalcasedata === null){
        totalcasedata = [];
    }

    totalcasedata.push(currentcasedata);
   
    localStorage.setItem("totalcase",JSON.stringify(totalcasedata)); 

    localStorage.setItem("currentuserid",count+1);

    window.location=('savedata.html');

    });
});