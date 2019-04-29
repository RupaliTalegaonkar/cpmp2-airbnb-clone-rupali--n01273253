// Get Inpit element
let findTemp = document.getElementById('find');

// Add event listnear


function search(){
// Get value of Input
let findValue=document.getElementById('find').value.toUpperCase();
//get data from ul
let ul=document.getElementById('city ');
//get its value from city

let li=ul.querySelectorAll('li.city');
// loop through collection item li
for(let i=0; i<li.length;i++ ){
    let a=li[i].getElementsByTagName('')[0];
    // if match 
    if(a.innerHTML.toUpperCase().indexOf(find)>-1){
        li[i].style.display='';
    }
    else
    {
        li[i].style.display='none';
    }
}


}