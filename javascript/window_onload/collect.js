window.onload = function() {
    console.log(LoginData);
    if(LoginData!=null){
        avatarimg.src=`${LoginData.members.img}`;
    }else{
        avatarimg.src='/image/default_avatar.jpeg';
    }
    // if(LoginData==null){
    //     let content_in=document.getElementById('content_in');
    //     content_in.innerHTML='請先登入';
        
    // }else{
    //     let content_in=document.getElementById('content_in');
    //     content_in.innerHTML=` <div class="Housing_Profile">
        
    // </div>
    // `;
        viewcollect();
        
        handleLogoutData(LoginData);
        console.log(LoginData);
        // LoginData = JSON.parse(sessionStorage.getItem('LoginData'));   


    
    
};
