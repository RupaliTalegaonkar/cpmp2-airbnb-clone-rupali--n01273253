const homes=[
    { city  : "Toronto",     Rooms : "8 guests  :   2 bedroom    :   4 beds   : 2 bath",amenities:" Kitchen   :  Microwave  :  Iron  :  Morning Breakfast",facilities="Free Parking   :  Pet Allowed  :  smoking Allowed",  }
    { city  : "Montreal",    Rooms : "3 guests  :   1 bedroom    :   2 beds   : 1 bath",amenities:" Kitchen   :  Microwave  :  Iron  ",facilities="Free Parking   :  Pet Allowed  :  smoking Allowed",  }
    { city  : "Ottawa",      Rooms : "4 guests  :   2 bedroom    :   3 beds   : 1 bath",amenities:" Kitchen   :  Microwave  :  Iron  ",facilities="Free Parking   :  Pet Allowed  :  smoking Allowed",  }
    { city  : "Niagara",     Rooms : "6 guests  :   2 bedroom    :   3 beds   : 2 bath",amenities:" Kitchen   :  Microwave  :  Iron  ",facilities="Free Parking   :  Pet Allowed  :  smoking Allowed", }
    { city  : "Tobermory",   Rooms : "2 guests  :   1 bedroom    :   2 beds   : 1 bath",amenities:" Kitchen   :  Microwave  :  Iron  ",facilities="Free Parking   :  Pet Allowed  :  smoking Allowed", }
    { city  : "Ottawa",      Rooms : "3 guests  :   1 bedroom    :   2 beds   : 1 bath",amenities:" Kitchen   :  Microwave  :  Iron  ",facilities="Free Parking   :  Pet Allowed  :  smoking Allowed",  }
    { city  : "Montreal",    Rooms : "5 guests  :   2 bedroom    :   3 beds   : 2 bath",amenities:" Kitchen   :  Microwave  :  Iron  ",facilities="Free Parking   :  Pet Allowed  :  smoking Allowed",  }
    { city  : "Toronto",     Rooms : "8 guests  :   2 bedroom    :   4 beds   : 2 bath",amenities:" Kitchen   :  Microwave  :  Iron  ",facilities="Free Parking   :  Pet Allowed  :  smoking Allowed",  }
    ,
    ]





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