// window.onload = function(){
//     let data1 =document.getElementById('data');


//     axios({
//         method: 'get',
//         url: 'https://datacenter.taichung.gov.tw/Swagger/OpenData/817083dc-989b-47e8-a8df-2c37213b9484',
//         headers:{
//             "Content-Type": "application/json",
//             "Accept": "application/json",
//             // "Authorization": `Bearer ${token}`, 
//         },
//         params:{
//             limit: 2,
//         },
//     })
//     .then(( { data } ) => {
//         data1.innerHTML = JSON.stringify(data);
//     })
//     .catch((error) => console.log(error))
// }


let btnlogin =document.getElementById("btnlogin");
let delete1 =document.getElementById("delete1");
let login =document.getElementById("login");
console.log(btnlogin);
console.log(login);

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
        login.style.display="none"
        filter.style.display="none"
    }
};

btnlogin.addEventListener("click",function(){
    createMask();
    login.style.display="block"
});

delete1.onclick=function(){
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
    filter.style.display="block"
});

filter_delete.addEventListener("click",function(){
    deleteMask();
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
})
