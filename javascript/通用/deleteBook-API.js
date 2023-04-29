function deleteBook(booking){
    axios({
        method:'post',
        url:'http://localhost:5190/api/List/CancelBooking',
        headers:{
            "Content-Type": "application/json",
            "Accept": "application/json",
            "Authorization": `Bearer ${LoginData.token}`,
        },data:{
            BookList_id:booking,
        },
    }).then(({ data })=> {
        console.log(data);
        location.reload();
    }).catch(error=>{
        console.error(error);
    });
}