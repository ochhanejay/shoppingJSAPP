function bodyload(){debugger;
        let total = JSON.parse(localStorage.getItem("totalcase"));
        let crnUser = JSON.parse(localStorage.getItem("currentuser"));
        $("#role").html(crnUser.role);
       if(crnUser.role === "Counselor"){
        document.getElementById("forms").style.display="none";
        document.getElementById("key-contacts").style.display="none";
        document.getElementById("center-management").style.display="none";
        document.getElementById("user-management").style.display="none";
    }
    var counselorcase = total.filter(function(item){return item.counslerid == crnUser.userid});
    let datatable = document.getElementById("tableBody");
    
    for(var i = 1; i<=counselorcase.length-1; i++){
            var tableTR  = document.createElement(`tr`);
            // tableTR.setAttribute('onclick', `findId(${counselorcase[i-1].Id})`);
           
           
            var td0 = document.createElement("td");
            td0.innerHTML = counselorcase[i-1].Id;
            tableTR.appendChild(td0);
        
            var td1 = document.createElement("td");
            td1.innerHTML= counselorcase[i-1].Name;
            tableTR.appendChild(td1);
        
            var td3 = document.createElement("td");
            td3.innerHTML= counselorcase[i-1].Father;
            tableTR.appendChild(td3);
        
            var td4 = document.createElement("td");
            td4.innerHTML= counselorcase[i-1].Mother;
            tableTR.appendChild(td4);
        
            var td5 = document.createElement("td");
            td5.innerHTML= counselorcase[i-1].Female;
            tableTR.appendChild(td5);
        
            var td6 = document.createElement("td");
            td6.innerHTML= counselorcase[i-1].Date;
            tableTR.appendChild(td6);
        
        
            var td7 = document.createElement("td");
            td7.innerHTML= counselorcase[i-1].Age;
            tableTR.appendChild(td7);
        
        
            var td8 = document.createElement("td");
            td8.innerHTML= counselorcase[i-1].Contactnumber;
            tableTR.appendChild(td8);
        
            var td10 = document.createElement("td");
            td10.innerHTML= counselorcase[i-1].Email;
            tableTR.appendChild(td10);
        
            datatable.appendChild(tableTR);
        }
         $('#example').DataTable();

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


    $("#logout").click(()=>{debugger;
        localStorage.removeItem("currentuser");
        window.location=("login.html");
    });
});