let Loginbtn=document.getElementById("Loginbtn");

Loginbtn.onclick=function(){
    let LoginAccount=document.getElementById("LoginAccount").value;
    let LoginPassword=document.getElementById("LoginPassword").value;
    let validataLogintext=document.getElementById("validataLogintext");
    console.log(LoginAccount);
    console.log(LoginPassword);


    if((LoginAccount=="")&&(LoginPassword=="")){
        validataLogintext.style.display="block";
        validataLogintext.innerHTML="*請輸入帳號密碼";
    }else if(LoginAccount==""){
        validataLogintext.style.display="block";
        validataLogintext.innerHTML="*請輸入帳號";
    }else if(LoginPassword==""){
        validataLogintext.style.display="block";
        validataLogintext.innerHTML="*請輸入密碼";
    }else{
        validataLogintext.style.display="none";
        validataLogintext.innerHTML="";
    }

}
