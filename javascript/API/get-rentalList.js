window.onload = function(){
    let data1 =document.getElementById('data1');
    
    axios({
        method: 'get',
        url: 'http://localhost:5190/api/Rental/AllRentalList?search=&page=1&filter=Unchecked',
        headers:{
            "Content-Type": "application/json",
            "Accept": "application/json",
            // "Authorization": `Bearer ${token}`, 
        },
        
    })
            .then(( { data } ) => {
                
                data1.innerHTML = JSON.stringify(data);
            })
            .catch(error => {
                console.log(error);
            });
    
        }