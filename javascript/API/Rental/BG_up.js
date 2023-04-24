



function viewallupdata(){
    console.log(LoginData);
        axios({
        method: 'get',
        url: 'http://localhost:5190/api/Home/HomeUp',
        headers:{
            "Content-Type": "application/json",
            "Accept": "application/json",
            "Authorization": `Bearer ${LoginData.token}`, 
        },
    })
            .then(( { data } ) => {
                console.log(data);
                var rental_Id=0;
                console.log(data);
                data.idList.forEach(function(){
                    addonBG_up(data,rental_Id);
                    rental_Id++;
                });
            })
            .catch(error => {
                console.log(error);
            });

    }


