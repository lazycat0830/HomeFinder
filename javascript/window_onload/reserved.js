window.onload = function() {
    
    console.log(LoginData);
    // if(LoginData==null){
    //     let content_in=document.getElementById('content_in');
    //     content_in.innerHTML='請先登入';
    //     content_in.style.textAlign='center';
    // }else{
        // let content_in=document.getElementById('content_in');
        // content_in.innerHTML=``;

        
        handleLogoutData(LoginData);
        console.log(LoginData);
        LoginData = JSON.parse(sessionStorage.getItem('LoginData'));
    // }

    
};