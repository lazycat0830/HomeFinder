goitem_id=sessionStorage.getItem('goitem_id');

window.onload = function() {
    if(LoginData!=null){
        avatarimg.src=`${LoginData.members.img}`;
    }else{
        avatarimg.src='/image/default_avatar.jpeg';
    }
   

    console.log(goitem_id);
    handleLogoutData(LoginData);
    console.log(LoginData);
    
    // LoginData = JSON.parse(sessionStorage.getItem('LoginData'));   
    viewnewitem(goitem_id);
};