function onclickitem(rental_id){
    console.log(rental_id);
    sessionStorage.setItem('goitem_id',rental_id);
    window.location.href = '/通用/item.html';
}