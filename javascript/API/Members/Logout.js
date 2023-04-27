let rentermenubtnlogout=document.getElementById('rentermenubtnlogout');
let publishermenubtnlogout=document.getElementById('publishermenubtnlogout');
let adminmenubtnlogout=document.getElementById('adminmenubtnlogout');


function handleLogoutData(data) {
    LoginData = data;
};


rentermenubtnlogout.onclick=function(){
    sessionStorage.clear();
    Logoutaxios();
    location.reload();
    window.location.href = '/通用/index.html';
};
publishermenubtnlogout.onclick=function(){
    sessionStorage.clear();
    Logoutaxios();
    location.reload();
    window.location.href = '/通用/index.html';
};
adminmenubtnlogout.onclick=function(){
    sessionStorage.clear();
    Logoutaxios();
    location.reload();
    window.location.href = '/通用/index.html';

};



function Logoutaxios(){
    axios({
        method: 'post',
        url: 'http://localhost:5190/api/Auth/Logout',
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            "Authorization": `Bearer ${LoginData.token}`, 
        },
    }).then((response) => {
        
        removeshowcss();
        console.log(a);
        console.log(response.data);
        LoginData=null;
        handleLoginData(LoginData);
        
        console.log(LoginData);

    }).catch((error) => {
            console.error(error);
    });
}