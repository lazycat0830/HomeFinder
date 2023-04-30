let content_in=document.getElementById('content_in');
    

function addonRental(data,id){
    collectData= JSON.parse(sessionStorage.getItem('collectData'));
    var rentalId=0;
    let likesrc;
    let scoretext;
    console.log(id);
    console.log(data);
    console.log(collectData);
    
    if(LoginData==null){
        like=``;
    }else{
        if(LoginData.members.identity==2){
            if(data.rentalBlock[id].isCollected){
                like=`
                <a class="Like absolute" id="likebtn_${data.rentalBlock[id].allData.rental_id}">
                <img id="likeheart_${data.rentalBlock[id].allData.rental_id}" width="30px" src="/image/like.png">
                </a>`;
            }
            // console.log(collectData.idList);
            like=`
                <a class="Like absolute" id="likebtn_${data.rentalBlock[id].allData.rental_id}">
                <img id="likeheart_${data.rentalBlock[id].allData.rental_id}" width="30px" src="/image/heart.png">
                </a>`;
            //     collectData.idList.forEach(function(){
            //         console.log(rentalId);
            //         rentalId++;
            // });
            
        }else{
            like=``;
        }
    }

    
    let update;
    update=data.rentalBlock[id].allData.uploadtime;
    

    let Houseimg_Profile=document.createElement('div');
    Houseimg_Profile.classList='Housing_Profile';
    Houseimg_Profile.innerHTML=`

    <div class="Housing_Profile_content flexcolumn relative">
        
            <a id="rental_id${data.rentalBlock[id].allData.rental_id}" class="Houseimg" href="/通用/item.html">
                <img width="100%" hight="100%" src="${data.rentalBlock[id].allData.img1}"/>
                ${like}
            </a>
            </a>
        
        <a class="text1" href="/通用/item.html">${data.rentalBlock[id].allData.title}</a>
        <span class="text2 flexbetween" href="/通用/account-interface.html">出租者：${data.rentalBlock[id].allData.publisher}</span>
        <span class="text3">上架日期：${update.replace(/T.*/, "")}</span>
        <span class="text4">價格：<span class="price">${data.rentalBlock[id].allData.rent}<span class="unit">元/月</span></span></span>
    </div>

`;
    
content_in.appendChild(Houseimg_Profile);

// // if(LoginData!=null){
// //     likebtn=`likebtn_${data.rentalBlock[id].allData.rental_id}`;
// //     likeheart=`likeheart_${data.rentalBlock[id].allData.rental_id}`;
    
// //     clicklike(likebtn,likeheart);
// // }

if(LoginData==null){
    like=``;
}else{
    if(LoginData.members.identity==2){
        likebtn=`likebtn_${data.rentalBlock[id].allData.rental_id}`;
        likeheart=`likeheart_${data.rentalBlock[id].allData.rental_id}`;
        
        clicklike(likebtn,likeheart);
    }
}

let rental_id=document.getElementById(`rental_id${data.rentalBlock[id].allData.rental_id}`);



rental_id.onclick=function(){
    let rental_Id=`rental_id${data.rentalBlock[id].allData.rental_id}`;
    rental_Id=rental_Id.replace('rental_id','')
    sessionStorage.setItem('goitem_id', rental_Id);
}

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
        url: `http://localhost:5190/api/HomeAny/RemoveCollect?rental_id=${Id}`,
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


function viewDownTimeallData(){

    console.log(LoginData);
    axios({
    method: 'get',
    url: 'http://localhost:5190/api/HomeAny/HomeAnyDownTime',
    headers:{
        "Content-Type": "application/json",
        "Accept": "application/json",
        "Authorization": `Bearer ${LoginData.token}`, 
    },
})
        .then(( { data } ) => {
            console.log(data);
            var rental_Id=0;
            console.log(data.idList);
            data.idList.forEach(function(){
                    
                    console.log(rental_Id);
                    addonRental(data,rental_Id);
                    rental_Id++;
            });
        })
        .catch(error => {
            console.log(error);
        });

}

function viewUpTimeallData(){

    console.log(LoginData);
    axios({
    method: 'get',
    url: 'http://localhost:5190/api/HomeAny/HomeAnyUpTime',
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
                addonRental(data,rental_Id);
                rental_Id++;
            });
        })
        .catch(error => {
            console.log(error);
        });

}

function view_genre(genre){
    const formData = new FormData();
    
    formData.append('county',"");
    formData.append('township',"");
    formData.append('street',"");
    formData.append('rent1',"");
    formData.append('rent2',"");
    formData.append('genre',genre);
    formData.append('pattern',"");
    formData.append('type',"");
    formData.append('equipmentname',"");
    formData.append('uploadtime',"");


    
    console.log(LoginData);
    console.log(formData.get('genre'));
    axios({
    method: 'post',
    url: 'http://localhost:5190/api/HomeAny/HomeAnySearchDown',
    headers:{
        "Content-Type": "multipart/form-data",
        "Accept": "application/json",
        // "Authorization": `Bearer ${LoginData.token}`, 
    },
     data: formData,
})
        .then(( { data } ) => {
            console.log(data);
            var rental_Id=0;
            console.log(data);
            data.idList.forEach(function(){
                addonRental(data,rental_Id);
                rental_Id++;
            });
        })
        .catch(error => {
            console.log(error);
        });
}

function view_type(type){
    const formData = new FormData();
    
    formData.append('county',"");
    formData.append('township',"");
    formData.append('street',"");
    formData.append('rent1',"");
    formData.append('rent2',"");
    formData.append('genre',"");
    formData.append('pattern',"");
    formData.append('type',type);
    formData.append('equipmentname',"");
    formData.append('uploadtime',"");


    
    console.log(LoginData);
    console.log(formData.get('genre'));
    axios({
    method: 'post',
    url: 'http://localhost:5190/api/HomeAny/HomeAnySearchDown',
    headers:{
        "Content-Type": "multipart/form-data",
        "Accept": "application/json",
        // "Authorization": `Bearer ${LoginData.token}`, 
    },
     data: formData,
})
        .then(( { data } ) => {
            console.log(data);
            var rental_Id=0;
            console.log(data);
            data.idList.forEach(function(){
                addonRental(data,rental_Id);
                rental_Id++;
            });
        })
        .catch(error => {
            console.log(error);
        });
}

function view_pattern(pattern){
    const formData = new FormData();
    
    formData.append('county',"");
    formData.append('township',"");
    formData.append('street',"");
    formData.append('rent1',"");
    formData.append('rent2',"");
    formData.append('genre',"");
    formData.append('pattern',pattern);
    formData.append('type',"");
    formData.append('equipmentname',"");
    formData.append('uploadtime',"");


    
    console.log(LoginData);
    console.log(formData.get('genre'));
    axios({
    method: 'post',
    url: 'http://localhost:5190/api/HomeAny/HomeAnySearchDown',
    headers:{
        "Content-Type": "multipart/form-data",
        "Accept": "application/json",
        "Authorization": `Bearer ${LoginData.token}`, 
    },
     data: formData,
})
        .then(( { data } ) => {
            console.log(data);
            var rental_Id=0;
            console.log(data);
            data.idList.forEach(function(){
                addonRental(data,rental_Id);
                rental_Id++;
            });
        })
        .catch(error => {
            console.log(error);
        });
}

function view_equipmentname(equipmentname){
    const formData = new FormData();
    
    formData.append('county',"");
    formData.append('township',"");
    formData.append('street',"");
    formData.append('rent1',"");
    formData.append('rent2',"");
    formData.append('genre',"");
    formData.append('pattern',"");
    formData.append('type',"");
    formData.append('equipmentname',equipmentname);
    formData.append('uploadtime',"");


    
    console.log(LoginData);
    console.log(formData.get('equipmentname'));
    axios({
    method: 'post',
    url: 'http://localhost:5190/api/HomeAny/HomeAnySearchDown',
    headers:{
        "Content-Type": "multipart/form-data",
        "Accept": "application/json",
        "Authorization": `Bearer ${LoginData.token}`, 
    },
     data: formData,
})
        .then(( { data } ) => {
            console.log(data);
            var rental_Id=0;
            console.log(data);
            data.idList.forEach(function(){
                addonRental(data,rental_Id);
                rental_Id++;
            });
        })
        .catch(error => {
            console.log(error);
        });
}


