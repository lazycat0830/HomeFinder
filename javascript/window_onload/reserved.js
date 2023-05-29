


function getReservedData(LoginData){
    axios({
        method:'get',
        url:'http://localhost:5190/api/List/',
        headers:{
            "Content-Type": "application/json",
            "Accept": "application/json",
            "Authorization": `Bearer ${LoginData.token}`,
        },
    }).then(({ data })=> {
        console.log(data);
        console.log(data.dataList1=="");
        if(data.dataList1==""){
            content_in.innerHTML=`<div class='flexcenter noreservedtext'>無預約資料</div>`
        }else{

            content_in.innerHTML=``
            var id=0;
            data.dataList1.forEach(function(){
                viewAllReserved(data.dataList1[id]);
                id++;
            });
        }
    }).catch(error=>{
        console.error(error);
    });
}

window.onload = function() {
    
    console.log("token",LoginData);
    if(LoginData!=null){
        avatarimg.src=`${LoginData.members.img}`;
    }else{
        avatarimg.src='/image/default_avatar.jpeg';
    }
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