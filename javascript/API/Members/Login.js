let LoginData= JSON.parse(sessionStorage.getItem('LoginData'));
let collectData= JSON.parse(sessionStorage.getItem('collectData'));


function handleLoginData(data) {
    LoginData = data;
}

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
        console.log(data.token);
        LoginData=data;
        sessionStorage.setItem('LoginData', JSON.stringify(data));
        // window.location.href = '/通用/index.html';
        accountinput.value='';
        passwordinput.value='';
        deleteMask();


        
        //設定可預約時間
        if(data.members.identity==1){
            postBookTime(LoginData);
        }
        
        location.reload();
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
            if(data=='忘記密碼解決'){
                forget_validatatext.innerHTML="請去信箱收取新密碼，再重新修改密碼";
            }
            console.log(data);
        }).catch(error => {
        // 处理请求过程中的错误
        console.error(error);
        forget_validatatext.innerHTML=`${error}`;
    });
    }


    function postBookTime(LoginData){
        console.log(LoginData);
        axios({
        method: 'post',
        url: 'http://localhost:5190/api/Time/SetBookTime',
        headers:{
            "Content-Type": "application/json",
            "Accept": "application/json",
            "Authorization": `Bearer ${LoginData.token}`, 
        },data:{
            mon: "07:00-09:00;10:00-12:00;14:00-16:00;17:00-19:00;20:00-22:00", 
            tue: "07:00-09:00;10:00-12:00;14:00-16:00;17:00-19:00;20:00-22:00" ,
            wed: "07:00-09:00;10:00-12:00;14:00-16:00;17:00-19:00;20:00-22:00",
            thu: "07:00-09:00;10:00-12:00;14:00-16:00;17:00-19:00;20:00-22:00",
            fri: "07:00-09:00;10:00-12:00;14:00-16:00;17:00-19:00;20:00-22:00",
            sat: "07:00-09:00;10:00-12:00;14:00-16:00;17:00-19:00;20:00-22:00",
            sun: "07:00-09:00;10:00-12:00;14:00-16:00;17:00-19:00;20:00-22:00",
        }
    })
            .then(( { data } ) => {
                console.log(data);
    
            })
            .catch(error => {
                console.log(error);
            });
    }