
let btnlogin =document.getElementById("btnlogin");
let delete_longinbtn =document.getElementById("delete_longinbtn");
let login =document.getElementById("login");
console.log(btnlogin);
console.log(login);
console.log(delete_longinbtn);

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

let deleteMask =()=>{
    let mask;
    if(mask=document.getElementById("mask")){
        mask.removeEventListener("click",deleteMask);
        mask.parentNode.removeChild(mask);
        document.documentElement.classList.remove("htmlMask");
        login.style.display="none";
        update_Account.style.display="none";
        report.style.display="none";
        forgetpassword.style.display="none";
    }
};

btnlogin.addEventListener("click",function(){
    createMask();
    login.style.display="block";
});

delete_longinbtn.onclick=function(){
    deleteMask();
}


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







let likebtn=document.getElementById("likebtn");
let like=document.getElementById("like");
console.log(likebtn);
console.log(like);

likebtn.addEventListener("click",function(){
    if (like.src.match("/image/heart.png")) {
        like.src = "/image/like.png";
        } else {
        like.src = "/image/heart.png";
        }
});




let forgetpassword=document.getElementById("forgetpassword");
let forgetpassword_btn=document.getElementById("forgetpassword_btn");
let delete_forgetbtn=document.getElementById("delete_forgetbtn")
console.log(forgetpassword);
console.log(forgetpassword_btn);
console.log(delete_forgetbtn);

forgetpassword_btn.addEventListener("click",function(){
    createMask();
    forgetpassword.style.display="block";
    login.style.display="none";
});

delete_forgetbtn.onclick=function(){
    deleteMask();
}
