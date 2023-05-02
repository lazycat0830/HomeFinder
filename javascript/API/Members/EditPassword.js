

console.log(LoginData);


function submit(){
    const Password = document.getElementById("Password");
    const NewPassword = document.getElementById("NewPassword");
    const CheckNewPassword = document.getElementById("CheckNewPassword");
    
    validatatext_signup.innerHTML=''
    if(Password.value==''){
        validatatext_signup.innerHTML='請填寫舊密碼';
    }else if(NewPassword.value==''){
        validatatext_signup.innerHTML='請填寫新密碼';
    }else if(CheckNewPassword.value==''){
        validatatext_signup.innerHTML='請填寫新密碼確認';
    }else if(CheckNewPassword.value!=NewPassword.value){
        validatatext_signup.innerHTML='新密碼不一致';
    }else{
        axios({
        method: "post",
        url: "http://localhost:5190/api/Auth/changePassword",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            'Authorization': `Bearer ${LoginData.token}`,
        },
        data: {
            Account:LoginData.members.account,
            Password:Password.value,
            NewPassword:NewPassword.value,
            CheckNewPassword:CheckNewPassword.value,
        },
        })
        .then((response) => {
            if(response=='舊密碼輸入錯誤'){
                validatatext_signup.innerHTML='舊密碼輸入錯誤';
            }else{
            Password.value='';
            NewPassword.value='';
            CheckNewPassword.value='';
            console.log(response.data);
            Logoutaxios();
            sessionStorage.clear();
            location.reload();
            window.location.href = '/通用/index.html';
            }
            
            // let validatatext_signup=document.getElementById('validatatext_signup');
            // validatatext_signup.innerHTML=response.data;
            
        })
        .catch((error) => {
            console.error(error);
        });
    }
        
    };


    function reset(){
        Password.value='';
        NewPassword.value='';
        CheckNewPassword.value='';
    };