


function getReservedData(LoginData){
    axios({
        method:'get',
        url:'http://localhost:5190/api/List',
        headers:{
            "Content-Type": "application/json",
            "Accept": "application/json",
            "Authorization": `Bearer ${LoginData.token}`,
        },
    }).then(({ data })=> {
        console.log(data);
        var id=0;
        data.forEach(function(){
            viewAllReserved(data[id]);
            id++;
        });
        
    }).catch(error=>{
        console.error(error);
    });
}

window.onload = function() {
    
    console.log("token",LoginData);
    // if(LoginData==null){
    //     let content_in=document.getElementById('content_in');
    //     content_in.innerHTML='請先登入';
    //     content_in.style.textAlign='center';
    // }else{
        // let content_in=document.getElementById('content_in');
        // content_in.innerHTML=``;

        getReservedData(LoginData);
        // handleLogoutData(LoginData);
        console.log(LoginData);
        // LoginData = JSON.parse(sessionStorage.getItem('LoginData'));
    // }

    
};