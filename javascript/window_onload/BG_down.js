let content_td7_div_input3;
var all=0;

window.onload = function() {
    console.log(LoginData);
    viewalldowndata();
    
    handleLogoutData(LoginData);
    console.log(LoginData);
}


function viewalldowndata(){
    console.log(LoginData);
        axios({
        method: 'get',
        url: 'http://localhost:5190/api/Home/HomeDown',
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
                    addonBG_down(data,rental_Id);
                    rental_Id++;
                });
            })
            .catch(error => {
                console.log(error);
            });

    }