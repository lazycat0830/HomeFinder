let content_in=document.getElementById('content_in');
let noLogin=document.getElementById('noLogin');
window.onload = function() {
    console.log(LoginData);
    if(LoginData!=null){
        avatarimg.src=`${LoginData.members.img}`;
    }else{
        avatarimg.src='/image/default_avatar.jpeg';
    }
    // if(LoginData==null){
    //     content_in.style.display='none';
    //     noLogin.style.display='block';

    // }else{
        content_in.style.display='block';
        noLogin.style.display='none';
    
        handleLogoutData(LoginData);
        oneAccount(LoginData);
        console.log(LoginData);
        LoginData = JSON.parse(sessionStorage.getItem('LoginData'));   
    // }
    
    
};