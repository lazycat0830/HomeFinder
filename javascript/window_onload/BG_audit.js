let content_td7_div_input3;
var all=0;

window.onload = function() {
    console.log(LoginData);
    viewallauditdata();
    
    handleLogoutData(LoginData);
    console.log(LoginData);
    
}

function viewallauditdata(){
    console.log(LoginData);
        axios({
        method: 'get',
        url: 'http://localhost:5190/api/Home/HomeCheck',
        headers:{
            "Content-Type": "application/json",
            "Accept": "application/json",
            "Authorization": `Bearer ${LoginData.token}`, 
        },
    })
            .then(( { data } ) => {
                console.log(data);
                var rental_Id=0;

                data.idList.forEach(function(){
                    addonBG_audit(data,rental_Id);
                    rental_Id++;
                });
            })
            .catch(error => {
                console.log(error);
            });

    }
