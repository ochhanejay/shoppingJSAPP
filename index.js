function bodyload() {
    let crnUser = JSON.parse(localStorage.getItem("currentuser"));
    $("#role").html(crnUser.role);
}
$(function(){
    let userdetail = [
        {userid : "a" , password : "a123" , name: "a1", role: "Reception"},
        {userid : "b" , password : "b123", name: "b1", role: "Addmin"},
        {userid : "c" , password : "c123", name: "c1", role: "Security"},

    ];
    
    $('#login-btn').click(()=>{
        

        let currentuser = {}

    var txtid = document.getElementById('user-id').value;
    var txtpassword = document.getElementById('user-password').value;

    


        for(var data of userdetail){debugger;
            if(data.userid === txtid && data.password === txtpassword){

                currentuser = userdetail.filter(function(item){return item.userid == txtid})

                localStorage.setItem("currentuser",JSON.stringify(data));

                    localStorage.setItem("userdetail",JSON.stringify(userdetail));
                    currentuser = {};
                    //  document.getElementById('role').innerHTML = "xyz";
                    window.location=("case.html");
                return;

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
});