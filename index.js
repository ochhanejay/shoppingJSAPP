// var totalcasedata=[{"Name":"Mohit","Surname":"","Father":"","Mother":"","Female":"female","Dob":"0315-05-21","Age":"-112","Contactnumber":"111111111111","Alltnumber":"","Email":"","Caste":"","Religen":"","Education":""}];
   
$(function(){
    let userdetail = [
        {userid : "user1" , password : "user1" , name: "Ram", role: "Reception"},
        {userid : "user2" , password : "user2" , name: "Shyam", role: "Reception"},

        {userid : "user3" , password : "user3", name: "Dark", role: "Addmin"},
        {userid : "user4" , password : "user4", name: "John", role: "Addmin"},

        {userid : "user5" , password : "user5", name: "Rio", role: "Counselor",Photo:"images/rio.jpg", caseIds:[]},
        {userid : "user6" , password : "user6", name: "Profesor", role: "Counselor",Photo:"images/proffeser.jpg", caseIds:[]},

        

    ];
    
    $('#login-btn').click(()=>{
        


            var txtid = document.getElementById('user-id').value;
            var txtpassword = document.getElementById('user-password').value;

    


        for(var data of userdetail){
            if(data.userid === txtid && data.password === txtpassword){

               
                    
                    localStorage.setItem("currentuser",JSON.stringify(data));

                    localStorage.setItem("userdetail",JSON.stringify(userdetail));

                if(data.role == "Reception"){

                    currentuser = {};
                    window.location=("case.html");

                return;
            }


            if(data.role == "Addmin"){
                window.location=("dashboard.html");
                return;
               
            }
            if(data.role == "Counselor"){
                window.location=("report.html")
                return;
            }

            }
        };
        alert("Wrong id & password");
        

        
    });


    





    $("#dashboard").click(()=>{
        window.location=("dashboard.html");
    });
    
    $("#reports").click(()=>{
        window.location=("report.html");
    });

    $("#case").click(()=>{
        window.location=("case.html");
        
    });

    $("#create-new-case").click(()=>{
        window.location=("newcase.html");

          datatable();  
    });




    $("#logout").click(()=>{debugger;
        localStorage.removeItem("currentuser");
        window.location=("login.html");
    });

    

   
});
function bodyload(){

    let crnUser = JSON.parse(localStorage.getItem("currentuser"));
    $("#role").html(crnUser.role);
   if(crnUser.role === "Reception"){
    document.getElementById("forms").style.display="none";
    document.getElementById("key-contacts").style.display="none";
    document.getElementById("center-management").style.display="none";
    document.getElementById("user-management").style.display="none";

   }
}







