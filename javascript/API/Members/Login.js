let LoginData= JSON.parse(sessionStorage.getItem('LoginData'));



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
            removeshowcss();
            adminmenu.classList.add("show");

        }else if(LoginData.members.identity==1){
            removeshowcss();
            rentermenu.classList.add("show");
        }else if(LoginData.members.identity==2){
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
    let account =accountinput.value;
    let password =passwordinput.value;
    
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
        
        LoginData=data;
        sessionStorage.setItem('LoginData', JSON.stringify(data));
        // window.location.href = '/通用/index.html';
        location.reload();
        accountinput.value='';
        passwordinput.value='';
        deleteMask();
        oneAccount(LoginData); 
        
    })
    .catch(error => {
        // 处理请求过程中的错误
        console.error(error);
    });

    }
