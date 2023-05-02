let forget_btn=document.getElementById("forget_btn");

forget_btn.onclick=function(){
    let forget_account=document.getElementById("forget_account").value;
    let forget_validatatext=document.getElementById("forget_validatatext");
    console.log(forget_account);


    if((forget_account=="")){
        forget_validatatext.style.display="block";
        forget_validatatext.innerHTML="*請輸入帳號";
    }
    else{
        forget_validatatext.style.display="none";
        forget_validatatext.innerHTML="";
    }

}
