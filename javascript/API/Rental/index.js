
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
        filter.style.display="none";
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





let filter=document.getElementById("filter");
let filter_btn=document.getElementById("filter_btn");
let filter_delete=document.getElementById("filter_delete")
console.log(filter);
console.log(filter_btn);
console.log(filter_delete);

filter_btn.addEventListener("click",function(){
    createMask();
    filter.style.display="block";
});

filter_delete.onclick=function(){
    deleteMask();
}



// let likebtn=document.getElementById("likebtn");
// let like=document.getElementById("like");
// console.log(likebtn);
// console.log(like);

// likebtn.addEventListener("click",function(){
//     if (like.src.match("/image/heart.png")) {
//         like.src = "/image/like.png";
//         } else {
//         like.src = "/image/heart.png";
//         }
// })





