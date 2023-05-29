window.onload = function() {
    if(LoginData!=null){
        avatarimg.src=`${LoginData.members.img}`;
    }else{
        avatarimg.src='/image/default_avatar.jpeg';
    }

        viewallRental();
        handleLogoutData(LoginData);
        console.log(LoginData);
        // LoginData = JSON.parse(sessionStorage.getItem('LoginData'));   
    
    
};

