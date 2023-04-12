let createMask =()=>{
    if(document.getElementById("mask")){
        return true;
    }
    let mask =document.createElement("div");
    mask.id="mask";
    mask.className="mask";
    document.body.appendChild(mask);
    document.documentElement.classList.add("htmlMask");
    
    
    
};
let mask;
let deleteMask =()=>{
    
    if(mask=document.getElementById("mask")){
        mask.removeEventListener("click",deleteMask);
        mask.parentNode.removeChild(mask);
        document.documentElement.classList.remove("htmlMask");
        check.style.display="none";
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

var a =true;
Useravatar.addEventListener("click", () => {
    a=!a;
    if(a){
        usermenu.classList.add("show");
        rentermenu.classList.add("show");
        publishermenu.classList.add("show");
        adminmenu.classList.add("show");
    }else{
        usermenu.classList.remove("show");
        rentermenu.classList.remove("show");
        publishermenu.classList.remove("show");
        adminmenu.classList.remove("show");
    }
});


let check=document.getElementById("check");
let check_btn1=document.getElementById("check_btn1");
let check_btn2=document.getElementById("check_btn2");
let delete_checkbtn=document.getElementById("delete_checkbtn");

check_btn1.addEventListener("click",function(){
    createMask();
    check.style.display="block";
});


check_btn2.addEventListener("click",function(){
    createMask();
    check.style.display="block";
});

delete_checkbtn.onclick=function(){
    deleteMask();
}
