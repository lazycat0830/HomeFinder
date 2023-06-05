

function onclickAccount(account){
    console.log(account);
    sessionStorage.setItem('newRantalRenter',account);
    window.location.href = '/通用/lookRentalaccount-interface.html';
}