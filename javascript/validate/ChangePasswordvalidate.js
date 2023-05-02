let updata_submit=document.getElementById("updata_submit");

updata_submit.onclick=function(){
    let oldpass=document.getElementById("Password").value;
    let newpass=document.getElementById("NewPassword").value;
    let newpasscheck=document.getElementById("CheckNewPassword");
    let validataLogintext=document.getElementById("validatatext_signup");
    console.log(oldpass);
    console.log(newpass);
    console.log(newpasscheck);


    if((oldpass=="")&&(newpass=="")&&(newpasscheck=="")){
        validataLogintext.style.display="block";
        validataLogintext.innerHTML="*請輸入資料";
    }else if(oldpass==""){
        validataLogintext.style.display="block";
        validataLogintext.innerHTML="*請輸入舊密碼";
    }else if(newpass==""){
        validataLogintext.style.display="block";
        validataLogintext.innerHTML="*請輸入新密碼";
    }else if(newpasscheck==""){
        validataLogintext.style.display="block";
        validataLogintext.innerHTML="*請輸入新密碼確認";
    }
    else{
        validataLogintext.style.display="none";
        validataLogintext.innerHTML="";
    }

}
