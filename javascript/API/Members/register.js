const submit = document.getElementById("submit");
const form = document.querySelector("form");
let validatatext_signup=document.getElementById('validatatext_signup');



submit.addEventListener("click", (event) => {

  event.preventDefault();
  // validatatext_signup.innerHTML='';
  const formData = new FormData(form);
  
  if(formData.get("password")!=formData.get("passwordCheck")){
    validatatext_signup.innerHTML='密碼不一致';
    validatatext_signup.style.display='block';
  }else{
    console.log(formData.get("newMember.identity"));

    formData.append('newMember.authcode','0');
    formData.append('newMember.score','0');
    formData.append('newMember.img','0');
    console.log(formData.get("ProfileImage"));
    // if(formData.get(ProfileImage)==null)
  
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
        
        validatatext_signup.innerHTML=response.data.message;
      })
      .catch((error) => {
        console.error(error);
        validatatext_signup.innerHTML='全部必填';
        validatatext_signup.style.display='block';
      });
  }
  
});

