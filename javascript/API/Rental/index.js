
let createMask =()=>{
    if(document.getElementById("mask")){
        return true;
    }
    let mask =document.createElement("div");
    mask.id="mask";
    mask.className="mask";
    document.body.appendChild(mask);
    document.documentElement.classList.add("htmlMask");
    mask.addEventListener("click",deleteMask);
    
    
};


let login =document.getElementById("login");
let deleteMask =()=>{
    let mask;
    if(mask=document.getElementById("mask")){
        mask.removeEventListener("click",deleteMask);
        mask.parentNode.removeChild(mask);
        document.documentElement.classList.remove("htmlMask");
        login.style.display="none";
        forgetpassword.style.display="none";
    }
};




let Useravatar=document.getElementById("Useravatar");
let usermenu=document.getElementById("usermenu");
let rentermenu=document.getElementById("rentermenu");
let publishermenu=document.getElementById("publishermenu");
let adminmenu=document.getElementById("adminmenu");
console.log(Useravatar);
console.log(usermenu);
console.log(rentermenu);
console.log(publishermenu);
console.log(adminmenu);





let form=document.querySelector("form");
let allfilter_btn=document.getElementById('allfilter_btn');
let rent1=document.getElementById('rent1');
let rent2=document.getElementById('rent2');
let town=document.getElementById('town');
let Page=document.getElementById('Page');



let genre_wholefloorhome=document.getElementById('genre_wholefloorhome');
let genre_independentsuite=document.getElementById('genre_independentsuite');
let genre_SubletSuite=document.getElementById('genre_SubletSuite');
let genre_elegantroom=document.getElementById('genre_elegantroom');


let pattern_1room=document.getElementById('pattern_1room');
let pattern_2room=document.getElementById('pattern_2room');
let pattern_3room=document.getElementById('pattern_3room');
let pattern_4room=document.getElementById('pattern_4room');



let type_apartment=document.getElementById('type_apartment');
let type_elevator_building=document.getElementById('type_elevator_building');
let type_Tutiancuo=document.getElementById('type_Tutiancuo');
let type_villa=document.getElementById('type_villa');


let equipmentname_parkingspace=document.getElementById('equipmentname_parkingspace');
let equipmentname_elevator=document.getElementById('equipmentname_elevator');
let equipmentname_Canpartner=document.getElementById('equipmentname_Canpartner');
let equipmentname_bed=document.getElementById('equipmentname_bed');
let equipmentname_tablesandchairs=document.getElementById('equipmentname_tablesandchairs');
let equipmentname_waterheater=document.getElementById('equipmentname_waterheater');
let equipmentname_airconditioner=document.getElementById('equipmentname_airconditioner');
let equipmentname_washingmachine=document.getElementById('equipmentname_washingmachine');
let equipmentname_Wardrobe=document.getElementById('equipmentname_Wardrobe');
let equipmentname_refrigerator=document.getElementById('equipmentname_refrigerator');
let equipmentname_naturalgas=document.getElementById('equipmentname_naturalgas');
let equipmentname_Thefourthstation=document.getElementById('equipmentname_Thefourthstation');
let equipmentname_sofa=document.getElementById('equipmentname_sofa');
let equipmentname_balcony=document.getElementById('equipmentname_balcony');
