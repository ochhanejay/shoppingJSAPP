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
   if(crnUser.role === "Reception"){
    document.getElementById("forms").style.display="none";
    document.getElementById("key-contacts").style.display="none";
    document.getElementById("center-management").style.display="none";
    document.getElementById("user-management").style.display="none";

   }

    
        var number = 1;
    for(index in cardData){
        var card = document.getElementById('make-card');

        var cardDiv = document.createElement('div');
        cardDiv.className="col-3 card text-center";
        cardDiv.style.margin="10px";
        cardDiv.setAttribute('onclick', `findcase(${number})`);

        cardDiv.style.width="290px";
        cardDiv.style.height="200px";
        cardDiv.style.borderRadius="20px";

        var bodyDiv = document.createElement("div");
        bodyDiv.className="card-body";

        var bodyImg = document.createElement('img');
        bodyImg.src = cardData[index].Photo;
        bodyImg.height = 100;
        bodyImg.width = 100;
        bodyDiv.appendChild(bodyImg);

        var bodyH6 = document.createElement("h6");
        bodyH6.innerText=cardData[index].Name;

        bodyDiv.appendChild(bodyH6);

        var bodyH2 = document.createElement("h2");
        bodyH2.innerText = cardData[index].Cases;
        bodyDiv.appendChild(bodyH2);

        cardDiv.appendChild(bodyDiv);

        card.appendChild(cardDiv);
        
        number++;
    }
}
function findcase(number){
    alert(number);
    localStorage.setItem("kapil",number);
    window.location=("case.html");
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
});