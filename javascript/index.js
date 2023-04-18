window.onload=function(){
    let content_in =document.getElementById("content_in");
    const Housing_Profile_div=document.createElement('div');
    Housing_Profile_div.classList.add('Housing_Profile');

    const Housing_Profile_content_div=document.createElement('div');
    Housing_Profile_content_div.classList.add('Housing_Profile_content');
    Housing_Profile_content_div.classList.add('flexcolumn');

    const  Housing_Profile_a=document.createElement('a');
    Housing_Profile_a.setAttribute('href', '/通用/item.html');

    const Housing_Profile_a_Houseimg=document.createElement('div');
    Housing_Profile_a_Houseimg.classList.add("Houseimg");
    Housing_Profile_a_Houseimg.classList.add("relative");

    const Houseimg_img=document.createElement('img');
    Houseimg_img.setAttribute('width','100%');
    Houseimg_img.setAttribute('src','/image/1.webp');

    const Houseimg_a=document.createElement('a');
    Houseimg_a.classList.add("Like");
    Houseimg_a.classList.add("absolute");
    Houseimg_a.id="likebtn";

    const Houseimg_a_img=document.createElement('img');
    Houseimg_a_img.id="like";
    Houseimg_a_img.setAttribute('width','30px');
    Houseimg_a_img.setAttribute('src','/image/heart.png');

    const Housing_Profile_text1=document.createElement('a');
    Housing_Profile_text1.classList.add('text1');
    Housing_Profile_text1.setAttribute('href', '/通用/item.html');
    Housing_Profile_text1.textContent='免仲介費/全新完工/獨洗曬/嚴選房客';

    const Housing_Profile_text2=document.createElement('a');
    Housing_Profile_text2.classList.add('text2');
    Housing_Profile_text2.classList.add('flexbetween');
    Housing_Profile_text2.setAttribute('href', '/通用/account-interface.html');
    Housing_Profile_text2.textContent='出租者：顏小姐';
    const Housing_Profile_text2_span=document.createElement('span');
    Housing_Profile_text2_span.classList.add('fraction');
    Housing_Profile_text2_span.textContent='尚未有信用分數';

    const Housing_Profile_text3=document.createElement('span');
    Housing_Profile_text3.classList.add('text3');
    Housing_Profile_text3.textContent='上架日期： 2023/03/27 | 15:23';

    const Housing_Profile_text4=document.createElement('span');
    Housing_Profile_text4.classList.add('text4');
    Housing_Profile_text4.textContent='價格：';
    const Housing_Profile_text4_span=document.createElement('span');
    Housing_Profile_text4_span.classList.add('price');
    Housing_Profile_text4_span.textContent='11000';
    const Housing_Profile_text4_span_span=document.createElement('span');
    Housing_Profile_text4_span_span.classList.add('unit');
    Housing_Profile_text4_span_span.textContent='元/月';

    content_in.appendChild(Housing_Profile_div);
    Housing_Profile_div.appendChild(Housing_Profile_content_div);
    Housing_Profile_content_div.appendChild(Housing_Profile_a);
    Housing_Profile_a.appendChild(Housing_Profile_a_Houseimg);
    Housing_Profile_a_Houseimg.appendChild(Houseimg_img);
    Housing_Profile_a_Houseimg.appendChild(Houseimg_a);
    Houseimg_a.appendChild(Houseimg_a_img);
    Housing_Profile_content_div.appendChild(Housing_Profile_text1);
    Housing_Profile_content_div.appendChild(Housing_Profile_text2);
    Housing_Profile_text2.appendChild(Housing_Profile_text2_span);
    Housing_Profile_content_div.appendChild(Housing_Profile_text3);
    Housing_Profile_content_div.appendChild(Housing_Profile_text4);
    Housing_Profile_text4.appendChild(Housing_Profile_text4_span);
    Housing_Profile_text4_span.appendChild(Housing_Profile_text4_span_span);
}


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
    mask.addEventListener("click",deleteMask);
    
    
};

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


let forgetpassword=document.getElementById("forgetpassword");
let forgetpassword_btn=document.getElementById("forgetpassword_btn");
let delete_forgetbtn=document.getElementById("delete_forgetbtn");
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



