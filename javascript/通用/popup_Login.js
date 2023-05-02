
let btnlogin =document.getElementById("btnlogin");
let delete_longinbtn =document.getElementById("delete_longinbtn");

console.log(btnlogin);
console.log(login);
console.log(delete_longinbtn);

btnlogin.addEventListener("click",function(){
    createMask();
    login.style.display="block";
    LoginAccount.value='';
    LoginPassword.value='';
    forget_account.value='';
});

delete_longinbtn.onclick=function(){
    deleteMask();
}

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
