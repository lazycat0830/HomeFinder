goitem_id=sessionStorage.getItem('goitem_id');

window.onload = function() {
    console.log(goitem_id);
    handleLogoutData(LoginData);
    console.log(LoginData);
    // LoginData = JSON.parse(sessionStorage.getItem('LoginData'));   
    viewnewitem(goitem_id);
};