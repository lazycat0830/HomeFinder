let LoginData= JSON.parse(sessionStorage.getItem('LoginData'));
let collectData= JSON.parse(sessionStorage.getItem('collectData'));
let avatarimg=document.getElementById('avatarimg');

// function handleLoginData(data) {
//     LoginData = data;
    
// }

let accountinput =document.getElementById('LoginAccount');
let passwordinput =document.getElementById('LoginPassword');

var a =true;


Useravatar.addEventListener("click", () => { 
    console.log(LoginData);

    console.log(a);
    if(a){
        if(LoginData==null){
            removeshowcss();
            usermenu.classList.add("show");

        }else if(LoginData.members.identity==0){
            //管理員
            removeshowcss();
            adminmenu.classList.add("show");

        }else if(LoginData.members.identity==2){
            //一般使用者
            removeshowcss();
            rentermenu.classList.add("show");
        }else if(LoginData.members.identity==1){
            //房東
            removeshowcss();
            publishermenu.classList.add("show");
        }
    }else{
            removeshowcss();
    }
})


let Loginbtn=document.getElementById('Loginbtn');
Loginbtn.onclick = function(){
    
    usermenu.classList.remove("show");
    a=!a;
    console.log(a);
    let account =LoginAccount.value;
    let password =LoginPassword.value;
    
    axios({
        method: 'post',
        url: 'http://localhost:5190/api/Auth/login',
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            // "Authorization": `Bearer ${token}`, 
        },
        data: { 
            Account:account,
            Password:password,
        },
        
    })
    .then(({ data }) => {
        if(LoginAccount.value==''){
            validataLogintext.style.display='block';
            validataLogintext.innerHTML='請輸入帳號';
        }else if(LoginPassword.value==''){
            console.log(data);
            validataLogintext.style.display='block';
            validataLogintext.innerHTML='請輸入密碼';
        }else if(data=='密碼錯誤'){
            console.log(data);
            validataLogintext.style.display='block';
            validataLogintext.innerHTML='密碼錯誤';
        }else if(data=='尚未驗證，請去EMAIL收驗證信'){
            console.log(data);
            validataLogintext.style.display='block';
            validataLogintext.innerHTML='尚未驗證，請去EMAIL收驗證信';
        }else if(data=='您已被停權'){
            console.log(data);
            validataLogintext.style.display='block';
            validataLogintext.innerHTML='您已被停權';
        }else if(data=='無此會員，請去註冊'){
            console.log(data);
            validataLogintext.style.display='block';
            validataLogintext.innerHTML='無此會員，請去註冊';
        }else{
            validataLogintext.style.display='none';
            console.log(data.token);
            LoginData=data;
            sessionStorage.setItem('LoginData', JSON.stringify(data));
            // window.location.href = '/通用/index.html';
            accountinput.value='';
            passwordinput.value='';
            deleteMask();
    
    
            
            // 設定可預約時間
            // if(data.members.identity==1){
            //     postBookTime(LoginData);
            // }
            
            location.reload();
        }
        
    })
    .catch(error => {
        // 处理请求过程中的错误
        console.error(error);
    });

    
    
    }

    // function collectAllData(LoginData){
    //     console.log(LoginData.token);
    //     axios({
    //         method: 'get',
    //         url: 'http://localhost:5190/api/HomeAny/AllCollectTEST',
    //         headers: {
    //             "Content-Type": "application/json",
    //             "Accept": "application/json",
    //             "Authorization": `Bearer ${LoginData.token}`, 
    //         },
    //     })
    //     .then(({ data }) => {
    //         console.log(data);
    //         collectData=data;
    //         sessionStorage.setItem('collectData', JSON.stringify(data));
    //     }).catch(error => {
    //     // 处理请求过程中的错误
    //     console.error(error);
        
    // });
    // }



    let forget_validatatext=document.getElementById('forget_validatatext');
    let forget_btn=document.getElementById('forget_btn');
    let forget_account=document.getElementById('forget_account');
    forget_btn.onclick=function(){
        forget_validatatext.innerHTML=``;
        if(forget_account.value==''){
            forget_validatatext.innerHTML="請填寫帳號";
        }else{
            console.log(forget_account.value);
            axios({
                method: 'post',
                url: 'http://localhost:5190/api/Auth/forgetPasswordMail',
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json",
                    // "Authorization": `Bearer ${token}`, 
                },
                data: { 
                    Account:forget_account.value,
                },
            })
            .then(({ data }) => {
                if(data=='新密碼已寄出，請收信'){
                    forget_validatatext.innerHTML="新密碼已寄出，請收信";
                    setTimeout(function(){
                        location.reload();
                    }, 5000);
                }
                if(data=='帳號不存在'){
                    forget_validatatext.innerHTML=`帳號不存在`;
                }
                console.log(data);
            }).catch(error => {
            // 处理请求过程中的错误
            console.error(error);
        });
        }
        
    }


    