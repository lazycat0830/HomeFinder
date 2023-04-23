window.onload = function() {
    viewallAccount();
    
    handleLogoutData(LoginData);
    console.log(LoginData);
    
    // LoginData = JSON.parse(sessionStorage.getItem('LoginData'));   
};