
   
    

  
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
let cardData = [
    {Photo:"images/1.jpg",Name:"Total Women Centers",Cases:19},
    {Photo:"images/1.jpg",Name:"Total Cases Registered In Women Centers",Cases:423},
    {Photo:"images/3.jpg",Name:"Total Sexual Abuse Cases in PS",Cases:34},
    {Photo:"images/4.jpg",Name:"FIR",Cases:423},
    {Photo:"images/5.jpg",Name:"Medical Test",Cases:26},
    {Photo:"images/6.jpg",Name:"No. 161 Done",Cases:48},
    {Photo:"images/7.jpg",Name:"No. 164 Done",Cases:43},
    {Photo:"images/8.jpg",Name:"FSL",Cases:35},
    {Photo:"images/9.png",Name:"Convicted",Cases:34},
    {Photo:"images/10.png",Name:"Aquitted",Cases:34}

];

function bodyload(){
    let crnUser = JSON.parse(localStorage.getItem("currentuser"));
    $("#role").html(crnUser.role);
    
    if(crnUser.role === 'Reception') {
            hideSomeFunctions();

            
            
    }
    for( index in cardData){
        var cardDash = document.getElementById('make-card');

        var cardDiv = document.createElement('div');
            cardDiv.className = 'card col-3  text-center ';
            cardDiv.style.margin='10px';
            cardDiv.style.width='290px';
            cardDiv.style.height='200px';
            cardDiv.style.borderRadius='20px';

            var bodyDiv = document.createElement('div');
            bodyDiv.className = 'card-body';
            var bodyImg = document.createElement('img');
            bodyImg.src = cardData[index].Photo;
            bodyImg.width = '100';
            bodyImg.height = '100';
            bodyDiv.appendChild(bodyImg);
            var bodyH6= document.createElement('h6');
            bodyH6.innerHTML = cardData[index].Name;
            bodyDiv.appendChild(bodyH6);
            var bodyH2 = document.createElement('h2');
            bodyH2.innerHTML = cardData[index].Cases;
            bodyDiv.appendChild(bodyH2);
            cardDiv.appendChild(bodyDiv);

            cardDash.appendChild(cardDiv);
    }
   
    // $.each(carddata,function(key,value){
        
    //     $(` <div> <img src="${value.Photo}"> 
    //     <h5>${value.Name} </h5> 
    //     <h4> ${value.Count} </h4> 
    //     </div> </div>`).appendTo('#make-card');
    // });

};
function hideSomeFunctions() {
    document.getElementById('forms').style.display='none';
    document.getElementById('key-contacts').style.display='none' ;               
}
