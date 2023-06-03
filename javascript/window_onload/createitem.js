window.onload = function() {
    
    console.log(LoginData);
    if(LoginData!=null){
        console.log(LoginData.members.img);
        avatarimg.src=`${LoginData.members.img}`;
    }else{
        avatarimg.src='/image/default_avatar.jpeg';
    }
    
    if(LoginData==null){
        let content_in=document.getElementById('content_in');
        content_in.innerHTML='請先登入';
        content_in.style.textAlign='center';
        let footer_in=document.querySelector("footer");
        footer_in.style.display='none';

    }else{
        genre_combination();
        type_combination();
        pattern_combination();
        equipmentname_combination();


        let footer_in=document.querySelector("footer");
        footer_in.style.display='block';

        
        handleLogoutData(LoginData);
        console.log(LoginData);
        LoginData = JSON.parse(sessionStorage.getItem('LoginData'));   

        createitem(LoginData);

    }

};