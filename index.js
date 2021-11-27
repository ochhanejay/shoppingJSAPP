
   
    

  
$(function(){
    let userdetail = [
        {userid : "a" , password : "a123" , name: "a1", role: "Reception"},
        {userid : "b" , password : "b123", name: "b1", role: "Addmin"},
        {userid : "c" , password : "c123", name: "c1", role: "Security"},

    ];
    
    $('#login-btn').click(()=>{
        


            var txtid = document.getElementById('user-id').value;
            var txtpassword = document.getElementById('user-password').value;

    


        for(var data of userdetail){debugger;
            if(data.userid === txtid && data.password === txtpassword){

               
                    
                    localStorage.setItem("currentuser",JSON.stringify(data));

                    localStorage.setItem("userdetail",JSON.stringify(userdetail));

                if(data.role == "Reception"){

                    currentuser = {};
                    window.location=("case.html");



                    $("#forms").style.display="none";
                    $("#key-contacts").style.display="none";
                    document. getElementById("forms").disabled = true;
                    document. getElementById("key-contacts").disabled = true;
                    document.getElementById("forms").style. display = "none";
                return;
            }


            if(data.role == "Addmin"){
                window.location=("dashboard.html");
                return;
               
            }
            if(data.role == "Security"){
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


    $("#forms").click(()=>{
                    // $("#forms").style.display="none";
                    // $("#key-contacts").style.display="none";
                    // document. getElementById("forms").disabled = true;
                    // document. getElementById("key-contacts").disabled = true;
                    document.getElementById("forms").style. display = "none";
                    document. getElementById("key-contacts").style.display = "none";

    });
});
function bodyload(){debugger;
    let crnUser = JSON.parse(localStorage.getItem("currentuser"));
    $("#role").html(crnUser.role);

    let carddata = [
        {Photo:"images/girl.jpg", Name:"first", Count:"12"},
        {Photo:"images/girl.jpg", Name:"first", Count:"12"},
        {Photo:"images/girl.jpg", Name:"first", Count:"12"},
        {Photo:"images/girl.jpg", Name:"first", Count:"12"},
        // {Photo:"images/girl.jpg", Name:"first", Count:"12"},
        // {Photo:"images/girl.jpg", Name:"first", Count:"12"},
        // {Photo:"images/girl.jpg", Name:"first", Count:"12"},
        // {Photo:"images/girl.jpg", Name:"first", Count:"12"},
        // {Photo:"images/girl.jpg", Name:"first", Count:"12"},
        // {Photo:"images/girl.jpg", Name:"first", Count:"12"},
        // {Photo:"images/girl.jpg", Name:"first", Count:"12"},
        // {Photo:"images/girl.jpg", Name:"first", Count:"12"},

    ];
    $.each(carddata,function(key,value){
        $(` <div> <img src="${value.Photo}"> <h5>${value.Name} </h5> <h4> ${value.Count} </h4> </div> </div>`).appendTo('#make-card');
    });

};