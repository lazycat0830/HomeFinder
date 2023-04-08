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
let box =document.getElementById("box");
console.log(btnlogin);
console.log(box);

let Useravatar=document.getElementById("Useravatar");
let usermenu=document.getElementById("usermenu");
console.log(Useravatar);
console.log(usermenu);


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
        box.style.display="none"
    }
};

btnlogin.addEventListener("click",function(){
    createMask();
    box.style.display="block"
});

delete1.onclick=function(){
        deleteMask();
}

var a =true;
Useravatar.onclick=function(){
    a=!a;
    a?usermenu.style.display="block":usermenu.style.display="none"
}



