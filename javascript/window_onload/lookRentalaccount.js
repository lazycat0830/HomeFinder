let newRantalRenter=sessionStorage.getItem('newRantalRenter');
console.log(newRantalRenter);

window.onload = function() {
    console.log(LoginData);
    // if(LoginData==null){
    //     content_in.style.display='none';
    //     noLogin.style.display='block';

    // }else{
        content_in.style.display='block';
        noLogin.style.display='none';
    
        viewRentalAccount(newRantalRenter);
        console.log(LoginData);
        // LoginData = JSON.parse(sessionStorage.getItem('LoginData'));   
        handleLogoutData(LoginData);
        // }
    
    
};