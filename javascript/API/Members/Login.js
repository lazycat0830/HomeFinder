let Loginbtn=document.getElementById('Loginbtn');
var a =true;

Useravatar.addEventListener("click", () => {
    adminmenu.classList.remove("show");
    rentermenu.classList.remove("show");
    publishermenu.classList.remove("show");
    usermenu.classList.remove("show");
    usermenu.classList.add("show");
    console.log(a);
    a=!a;
    if(a){
    adminmenu.classList.remove("show");
    rentermenu.classList.remove("show");
    publishermenu.classList.remove("show");
    usermenu.classList.remove("show");
    usermenu.classList.add("show");
    }else{
        adminmenu.classList.remove("show");
        rentermenu.classList.remove("show");
        publishermenu.classList.remove("show");
        usermenu.classList.remove("show");
    }
})


Loginbtn.onclick = function(){
    let account =document.getElementById('LoginAccount').value;
    let password =document.getElementById('LoginPassword').value;
    
    
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
        // 处理服务器响应的数据
        deleteMask();
        console.log(data);
        
        Useravatar.addEventListener("click", () => {
            usermenu.classList.remove("show");
            a=!a;
            if(a){
                if(data.members.identity==0){
                    adminmenu.classList.remove("show");
                    rentermenu.classList.remove("show");
                    publishermenu.classList.remove("show");
                    usermenu.classList.remove("show");
                    adminmenu.classList.add("show");

                }else if(data.members.identity==1){
                    adminmenu.classList.remove("show");
                    rentermenu.classList.remove("show");
                    publishermenu.classList.remove("show");
                    usermenu.classList.remove("show");
                    rentermenu.classList.add("show");
                }else if(data.members.identity==2){
                    adminmenu.classList.remove("show");
                    rentermenu.classList.remove("show");
                    publishermenu.classList.remove("show");
                    usermenu.classList.remove("show");
                    publishermenu.classList.add("show");
                }
            }else{
                if(data.members.identity==0){
                    adminmenu.classList.remove("show");
                    rentermenu.classList.remove("show");
                    publishermenu.classList.remove("show");
                    usermenu.classList.remove("show");
                }
            }
        });


    



    })
    .catch(error => {
        // 处理请求过程中的错误
        console.error(error);
    });
    }