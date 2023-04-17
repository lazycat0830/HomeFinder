window.onload = function(){
let data1 =document.getElementById('data1');


axios({
    method: 'get',
    url: 'http://localhost:5190/api/Rental/123e4567-e89b-12d3-a456-426655440000',
    headers:{
        "Content-Type": "application/json",
        "Accept": "application/json",
        // "Authorization": `Bearer ${token}`, 
    },
    
})
        .then(( { data } ) => {
            
             data1.innerHTML = JSON.stringify(data.genre);
             
         })
        .catch(error => {
            console.log(error);
        });

    }