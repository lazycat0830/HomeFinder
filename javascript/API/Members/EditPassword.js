const submit = document.getElementById("submit");
const reset = document.getElementById("reset");
const Password = document.getElementById("Password");
const NewPassword = document.getElementById("NewPassword");
const CheckNewPassword = document.getElementById("CheckNewPassword");



submit.addEventListener("click", (event) => {
    event.preventDefault();

    
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
            Password.value='';
            NewPassword.value='';
            CheckNewPassword.value='';
            console.log(response.data);
            let validatatext_signup=document.getElementById('validatatext_signup');
            validatatext_signup.innerHTML=response.data;
        })
        .catch((error) => {
            console.error(error);
        });
    });


    reset.addEventListener("click", (event) => {
        event.preventDefault();
        Password.value='';
        NewPassword.value='';
        CheckNewPassword.value='';
    });