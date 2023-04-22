window.onload = function() {
    
    oneAccount(LoginData);
    handleLogoutData(LoginData);
    console.log(LoginData);
    LoginData = JSON.parse(sessionStorage.getItem('LoginData'));   
    
};