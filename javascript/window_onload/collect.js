window.onload = function() {
    console.log(LoginData);
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
