
   
    

  
$(function(){
    

    let userdetail = [
        {userid : "a" , password : "a123" , name: "a1", role: "Reception"},
        {userid : "b" , password : "b123", name: "b1", role: "Addmin"},
        {userid : "c" , password : "c123", name: "c1", role: "Security"},

    ];
    
    $('#login-btn').click(()=>{
        


            var txtid = document.getElementById('user-id').value;
            var txtpassword = document.getElementById('user-password').value;

    

        var currentU = userdetail.filter((data)=> 
                    data.userid === txtid && data.password === txtpassword);
        //for(var data of userdetail){debugger;
            if(currentU.length > 0){

               
                    let currentUserData = currentU[0];
                    localStorage.setItem("currentuser",JSON.stringify(currentUserData));

                    localStorage.setItem("userdetail",JSON.stringify(userdetail));

                if(currentUserData.role == "Reception"){

                    currentuser = {};
                    window.location=("case.html");
                }

                if(currentUserData.role == "Addmin"){
                    window.location=("dashboard.html");
                    return;
                
                }
                if(currentUserData.role == "Security"){
                    window.location=("report.html")
                    return;
                }
            }
            else {
                alert("Wrong id & password");                
            }

        

        
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

function bodyload(){
    let crnUser = JSON.parse(localStorage.getItem("currentuser"));
    $("#role").html(crnUser.role);
    
    if(crnUser.role === 'Reception') {
            hideSomeFunctions();
    }

    let carddata = [
        {Photo:"images/girl.jpg", Name:"first", Count:"12"},
        {Photo:"images/girl.jpg", Name:"first", Count:"13"},
        {Photo:"images/girl.jpg", Name:"first", Count:"14"},
        {Photo:"images/girl.jpg", Name:"first", Count:"15"},
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
        $(` <div> <img src="${value.Photo}"> 
        <h5>${value.Name} </h5> 
        <h4> ${value.Count} </h4> 
        </div> </div>`).appendTo('#make-card');
    });

};
function hideSomeFunctions() {
    document.getElementById('forms').style.display='none';
    document.getElementById('key-contacts').style.display='none' ;               
}
