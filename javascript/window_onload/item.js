window.onload = function() {
    
    console.log(oneRentaldata);
    handleLogoutData(LoginData);
    console.log(LoginData);
    LoginData = JSON.parse(sessionStorage.getItem('LoginData'));   
    
};