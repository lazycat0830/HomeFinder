let content_in =document.getElementById('content_in');

function addoncollect(){
    let Houseimg_Profile=document.createElement('div');
    Houseimg_Profile.classList='Housing_Profile';
    Houseimg_Profile.innerHTML=`
    <div class="Housing_Profile_content flexcolumn">
    <a href="/通用/item.html"><div class="Houseimg relative">
        <img width="100%" src="/image/1.webp">
        <a id="likebtn" class="absolute Like"><img id="like" width="30px" src="/image/like.png"></a>
    </div></a>
    <span class="text1">免仲介費/全新完工/獨洗曬/嚴選房客</span>
    <span class="text2">出租者： 顏小姐 <span style="color: #e48500;font-size: 12px;font-weight: bolder;">尚未有信用分數</span></span>
    <span class="text3">上架日期： 2023/03/27 | 15:23</span>
    <span class="text4">價格： <span style="color: #ff0000;font-weight: bolder;">11000<span style="font-size: 12px;font-weight: bolder;">元/月</span></span></span>
    </div>

    `;


    content_in.appendChild(Houseimg_Profile);

    clicklike(likebtn,likeheart);
}


function viewcollect(){
    console.log(LoginData);
    axios({
    method: 'get',
    url: 'http://localhost:5190/api/HomeAny/AllCollect',
    headers:{
        "Content-Type": "application/json",
        "Accept": "application/json",
        "Authorization": `Bearer ${LoginData.token}`, 
    },
})
        .then(( { data } ) => {
            console.log(data);
            var rental_Id=0;

            // data.idList.forEach(function(){
            //     addoncollect(data,rental_Id);
            //     rental_Id++;
            // }
            // );
        })
        .catch(error => {
            console.log(error);
        });
}

function clicklike(likebtn,likeheart){
    like_btn=document.getElementById(likebtn);
    likeheart=document.getElementById(likeheart);
    console.log(like_btn);
    console.log(likeheart);
    like_btn.onclick=function(){
        console.log(likeheart.getAttribute("src"))
        if(likeheart.getAttribute("src")=="/image/heart.png"){
            likeheart.setAttribute('src','/image/like.png')
            collect(likeheart);
    
        }else if(likeheart.getAttribute("src")=="/image/like.png"){
            likeheart.setAttribute('src','/image/heart.png')
            deletecollect(likeheart);
        }
    }
    }
    
    function deletecollect(likeheart){
        console.log(likeheart.id);
        Id=likeheart.id.replace('likeheart_','')
        console.log(Id);
        console.log(LoginData);
        axios({
            method: 'delete',
            url: `http://localhost:5190/api/HomeAny/RemoveCollect/${Id}`,
            headers:{
                "Content-Type": "multipart/form-data",
                "Accept": "application/json",
                "Authorization": `Bearer ${LoginData.token}`, 
            },
        })
                .then(( { data } ) => {
                    console.log(data);
                    
                })
                .catch(error => {
                    console.log(error);
                });
    }

    function collect(likeheart){
        console.log(likeheart.id);
        Id=likeheart.id.replace('likeheart_','')
        console.log(Id);
        console.log(LoginData);
        axios({
            method: 'post',
            url: `http://localhost:5190/api/HomeAny/AddCollect?rental_id=${Id}`,
            headers:{
                "Content-Type": "multipart/form-data",
                "Accept": "application/json",
                "Authorization": `Bearer ${LoginData.token}`, 
            },
        })
                .then(( { data } ) => {
                    console.log(data);
                    
                })
                .catch(error => {
                    console.log(error);
                });
    }