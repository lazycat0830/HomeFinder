let submit=document.getElementById('submit');


submit.onclick = function(){
    let name =document.getElementById('name').value;
    let account =document.getElementById('account').value;
    let password =document.getElementById('password').value;
    let passwordcheck =document.getElementById('passwordcheck').value;
    let phone =document.getElementById('phone').value;
    let email =document.getElementById('email').value;
    
    axios({
        method: 'post',
        url: 'http://localhost:5190/api/Auth/register',
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            // "Authorization": `Bearer ${token}`, 
        },
        data: { 
            account:account,
            password:password,
            name:name,
            email:email,
            phone:phone,
            authcode:null,
            identity:0,
            score:50,
        },
        
    })
    .then(({ data }) => {
        // 处理服务器响应的数据
        console.log(data);
    })
    .catch(error => {
        // 处理请求过程中的错误
        console.error(error);
    });
    }