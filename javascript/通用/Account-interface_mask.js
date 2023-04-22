
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