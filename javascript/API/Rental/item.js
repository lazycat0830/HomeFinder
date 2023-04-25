function viewnewitem(rental_id){
    axios({
        method:'get',
        url:`http://localhost:5190/api/HomeAny/${rental_id}`,
        headers:{
            "Content-Type": "application/json",
            "Accept": "application/json",
            // "Authorization": `Bearer ${LoginData.token}`, 
        },
    }).then(( { data } ) => {
        console.log(data);
        
    })
    .catch(error => {
        console.log(error);
    });
}