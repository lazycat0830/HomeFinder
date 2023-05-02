const submit = document.getElementById("submit");
const form = document.querySelector("form");
let validatatext_signup=document.getElementById('validatatext_signup');



submit.addEventListener("click", (event) => {

  event.preventDefault();
  // validatatext_signup.innerHTML='';
  const formData = new FormData(form);
  
  
   
    console.log(formData.get("newMember.identity"));

    formData.append('newMember.authcode','0');
    formData.append('newMember.score','0');
    formData.append('newMember.img','0');
    console.log(formData.get("ProfileImage"));
    // if(formData.get(ProfileImage)==null)
    
    console.log(formData.get("newMember.phone").length>10);
    if(formData.get("newMember.identity")==null){
      validatatext_signup.innerHTML='請選擇身分';
    }else if(formData.get("newMember.name")==""){
      validatatext_signup.innerHTML='名字為必填';
    }else if(formData.get("newMember.account")==""){
      validatatext_signup.innerHTML='帳號為必填';
    }else if(formData.get("password")==""){
      validatatext_signup.innerHTML='密碼為必填';
    }else if(formData.get("passwordCheck")==""){
      validatatext_signup.innerHTML='確認密碼為必填';
    }else if(formData.get("password")!=formData.get("passwordCheck")){
      validatatext_signup.innerHTML='密碼不一致';
    }else if(formData.get("newMember.phone")==""){
      validatatext_signup.innerHTML='電話為必填';
    }else if(formData.get("newMember.phone").length>10){
      validatatext_signup.innerHTML='電話為10字元';
    }else if(formData.get("newMember.email")==""){
      validatatext_signup.innerHTML='email為必填';
    }else if(formData.get("ProfileImage").name==""){
      validatatext_signup.innerHTML='請上傳圖片';
    }else if(!formData.get("newMember.email").includes('@')){
      validatatext_signup.innerHTML='請填寫正確的Email';
    }else{
      validatatext_signup.innerHTML='';
      axios({
        method: "post",
        url: "http://localhost:5190/api/Auth/register",
        headers: {
          "Content-Type": "multipart/form-data",
          'Accept': "application/json",
          // Authorization: `Bearer ${token}`,
        },
        data: formData,
      })
        .then((response) => {
          console.log(response.data);
          if(response.data=='此帳號已被註冊'){
            validatatext_signup.innerHTML='此帳號已被註冊';
          }else if(response.data.message){
            validatatext_signup.innerHTML=response.data.message;
          }
          
          
  
        })
        .catch((error) => {
          console.error(error);
          // validatatext_signup.innerHTML='全部必填';
          // validatatext_signup.style.display='block';
        });
    }
    }

    
  
);

