//To create a simple login system utilizing an a array of user object.
//login with email/username and password





const guests =[
    { uName : "rupali",    uPass : "abc123"},
    { uName : "n01273253", uPass : "win2010"},
]

function getInfo() {
    let uName = document.getElementById("uName").value
    let uPass = document.getElementById("uPass").value
    
    for(i=0; i<guests.length; i++)
    {
        if(uName==guests[i].uName && uPass==guests[i].uPass){
            window.location = "index.html";
            return
        }
        else{
            alert("Invalid Username and password");
        }
    }
}
function getCancel() {
          window.location="index.html";
    return
}