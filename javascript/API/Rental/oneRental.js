let content_in=document.getElementById('content_in');
let noDataText=document.getElementById('noDataText');
var nowPage=sessionStorage.setItem("nowPage",1);
let imgblock='';
function addonRental(data,id){
    console.log(data);
    collectData= JSON.parse(sessionStorage.getItem('collectData'));
    var rentalId=0;
    let like;
    let scoretext;
    console.log(id);
    console.log(data.rentalBlock[id]);
    console.log(collectData);
    
    if(LoginData==null){
        like=``;
    }else{
        if(LoginData.members.identity==2){
            console.log(data.rentalBlock[id].isCollected);
            if(data.rentalBlock[id].isCollected){
                like=`
                <a class="Like absolute" id="likebtn_${data.rentalBlock[id].allData.rental_id}">
                <img id="likeheart_${data.rentalBlock[id].allData.rental_id}" width=30px   src="/image/like.png">
                </a>`;
            }else{
                like=`
                <a class="Like absolute" id="likebtn_${data.rentalBlock[id].allData.rental_id}">
                <img id="likeheart_${data.rentalBlock[id].allData.rental_id}" width=30px  src="/image/heart.png">
                </a>`;
            }
            // console.log(collectData.idList);
            
            //     collectData.idList.forEach(function(){
            //         console.log(rentalId);
            //         rentalId++;
            // });
            
        }else{
            like=``;
        }
    }

    
    let update=data.rentalBlock[id].allData.uploadtime;
    

   
    
    

    let Houseimg_Profile=document.createElement('div');
    Houseimg_Profile.classList='Housing_Profile';
    Houseimg_Profile.innerHTML=`

    <div class="Housing_Profile_content flexcolumn relative">
            
            
        <div class="flexcenter relative Houseimg" style="z-index: 0;height: auto;" >
            <a id="rental_id${data.rentalBlock[id].allData.rental_id}" width="100%;" href="/通用/item.html">
            <ul id="rentalul_id${data.rentalBlock[id].allData.rental_id}">
                <li id="img0_${data.rentalBlock[id].allData.rental_id}" style="display: block;"><img height="100%" width="100%" src="${data.rentalBlock[id].image[0]}" /></li>
            </ul>
            
            </a>
            ${like}
            <input id='lastimg_${data.rentalBlock[id].allData.rental_id}' class='absolute Carousellastbtn' style="display: none;"  value="<" type="button" >
            <input id='nextimg_${data.rentalBlock[id].allData.rental_id}' class='absolute Carouselnextbtn' value=">" type="button">
         
        </div>
        
        <a class="text1" onclick="onclickitem('${data.rentalBlock[id].allData.rental_id}')">${data.rentalBlock[id].allData.title}</a>
        <a class="text2 flexbetween" onclick="onclickAccount('${data.rentalBlock[id].allData.publisher}')">出租者：${data.rentalBlock[id].allData.publisher}</a>
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

    let Rental_ul=document.getElementById(`rentalul_id${data.rentalBlock[id].allData.rental_id}`);
    for(var j=1;j<=data.rentalBlock[id].image.length-1;j++){
        let addimg=document.createElement('li');
        addimg.id=`img${j}_${data.rentalBlock[id].allData.rental_id}`;
        addimg.style.display='none';
        addimg.innerHTML=`
            <img height="100%" width="100%" src="${data.rentalBlock[id].image[j]}" />
        `;
        console.log(Rental_ul);
        console.log(addimg);
        Rental_ul.appendChild(addimg);
    }

    
    
    let lastimg_btn=document.getElementById(`lastimg_${data.rentalBlock[id].allData.rental_id}`);
    let nextimg_btn=document.getElementById(`nextimg_${data.rentalBlock[id].allData.rental_id}`);

    if(data.rentalBlock[id].image.length==1){
        lastimg_btn.style.display="none";
        nextimg_btn.style.display="none";
    }

    lastimg_btn.onclick=function(){
        let imgblock='';
        nextimg_btn.style.display='block';
            for(var i=0;i<data.rentalBlock[id].image.length;i++){
                console.log(document.getElementById(`img${i}_${data.rentalBlock[id].allData.rental_id}`).style.display)
                if(document.getElementById(`img${i}_${data.rentalBlock[id].allData.rental_id}`).style.display=='block'){
                    imgblock=`img${i}_${data.rentalBlock[id].allData.rental_id}`;
                }
                
            }
                console.log(imgblock);
                console.log(parseInt(imgblock.replace('img','').replace(`_${data.rentalBlock[id].allData.rental_id}`,''))-1);
                console.log(`img${parseInt(imgblock.replace('img','').replace(`_${data.rentalBlock[id].allData.rental_id}`,''))-1}_${data.rentalBlock[id].allData.rental_id}`);
                console.log(document.getElementById(imgblock).style.display=='block');
                if((parseInt(imgblock.replace('img','').replace(`_${data.rentalBlock[id].allData.rental_id}`,''))-1)==0){
                    lastimg_btn.style.display="none";
                }
                if(document.getElementById(imgblock).style.display=='block'){
                    if((imgblock.replace('img','').replace(`_${data.rentalBlock[id].allData.rental_id}`,''))>0){
                        document.getElementById(imgblock).style.display='none'
                        document.getElementById(`img${parseInt(imgblock.replace('img','').replace(`_${data.rentalBlock[id].allData.rental_id}`,''))-1}_${data.rentalBlock[id].allData.rental_id}`).style.display='block';
                    }
    
            }   
    }

    
    nextimg_btn.onclick=function(){
        lastimg_btn.style.display='block';
        for(var i=0;i<data.rentalBlock[id].image.length;i++){
            console.log(document.getElementById(`img${i}_${data.rentalBlock[id].allData.rental_id}`).style.display)
            if(document.getElementById(`img${i}_${data.rentalBlock[id].allData.rental_id}`).style.display=='block'){
                imgblock=`img${i}_${data.rentalBlock[id].allData.rental_id}`;
            }else if(document.getElementById(`img${i}_${data.rentalBlock[id].allData.rental_id}`).style.display=='none'){
                console.log(imgblock);
            }
            
        }
            console.log(imgblock);
            console.log(parseInt(imgblock.replace('img','').replace(`_${data.rentalBlock[id].allData.rental_id}`,''))+1);
            console.log(`img${parseInt(imgblock.replace('img','').replace(`_${data.rentalBlock[id].allData.rental_id}`,''))+1}_${data.rentalBlock[id].allData.rental_id}`);
            console.log(document.getElementById(imgblock).style.display=='block');
            if((parseInt(imgblock.replace('img','').replace(`_${data.rentalBlock[id].allData.rental_id}`,''))+1)==data.rentalBlock[id].image.length-1){
                nextimg_btn.style.display="none";
            }
            if(document.getElementById(imgblock).style.display=='block'){
                if((imgblock.replace('img','').replace(`_${data.rentalBlock[id].allData.rental_id}`,''))<data.rentalBlock[id].image.length-1){
                    document.getElementById(imgblock).style.display='none';
                    document.getElementById(`img${parseInt(imgblock.replace('img','').replace(`_${data.rentalBlock[id].allData.rental_id}`,''))+1}_${data.rentalBlock[id].allData.rental_id}`).style.display='block';
                }
            
        } 
    }
    

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
    nowPage=sessionStorage.getItem("nowPage");
    console.log(nowPage);
    console.log(LoginData);
    if(LoginData!=null){
        axios({
            method: 'get',
            url: `http://localhost:5190/api/HomeAny/HomeAnyDownTime?Page=${nowPage}`,
            headers:{
                "Content-Type": "application/json",
                "Accept": "application/json",
                "Authorization": `Bearer ${LoginData.token}`, 
            },
        })
                .then(( { data } ) => {
                    console.log(data);
                    if(data=='無資料'){
                        noDataText.style.display='block';
                        noDataText.innerHTML='無資料';
                    }else{
                        noDataText.style.display='none';
                        var rental_Id=0;
                        console.log(data.idList);
                        data.idList.forEach(function(){
                            console.log(rental_Id);
                            addonRental(data,rental_Id);
                            rental_Id++;
                        });
                        for(var onPage=1;onPage<=data.paging.maxPage;onPage++){
                            let addPage=document.createElement('li');
                            if(onPage==nowPage){
                                addPage.innerHTML=`<a href="#" class="NowPage" onclick="NowPage(this)">${onPage}</a>`;
                            }else{
                                addPage.innerHTML=`<a href="#" class='otherPage' onclick="NowPage(this)">${onPage}</a>`;
                            }
                            pagination.appendChild(addPage);
                        }
                        
                    }
                })
                .catch(error => {
                    console.log(error);
                });
        
        }else{
            nowPage=sessionStorage.getItem("nowPage");
            console.log(nowPage);
        axios({
            method: 'get',
            url: `http://localhost:5190/api/HomeAny/HomeAnyDownTime?Page=${nowPage}`,
            headers:{
                "Content-Type": "application/json",
                "Accept": "application/json",
            },
        })
                .then(( { data } ) => {
                    console.log(data);
                    if(data=='無資料'){
                        noDataText.style.display='block';
                        noDataText.innerHTML='無資料';
                    }else{
                        noDataText.style.display='none';
                        var rental_Id=0;
                        console.log(data.idList);

                        data.idList.forEach(function(){
                            console.log(rental_Id);
                            addonRental(data,rental_Id);
                            rental_Id++;
                        });
                        for(var onPage=1;onPage<=data.paging.maxPage;onPage++){
                            let addPage=document.createElement('li');
                            
                            if(onPage==nowPage){
                                addPage.innerHTML=`<a href="#" class="NowPage" onclick="NowPage(this)">${onPage}</a>`;
                            }else{
                                addPage.innerHTML=`<a href="#" class='otherPage' onclick="NowPage(this)">${onPage}</a>`;
                            }
                            pagination.appendChild(addPage);
                        }
                    }
                })
                .catch(error => {
                    console.log(error);
                });
        
        }
    }
let pagination=document.getElementById('pagination');
function viewUpTimeallData(){

    nowPage=sessionStorage.getItem("nowPage");
    console.log(LoginData);
    if(LoginData!=null){
        axios({
            method: 'get',
            url: `http://localhost:5190/api/HomeAny/HomeAnyUpTime?Page=${nowPage}`,
            headers:{
                "Content-Type": "application/json",
                "Accept": "application/json",
                "Authorization": `Bearer ${LoginData.token}`, 
            },
        })
                .then(( { data } ) => {
                    if(data=='無資料'){
                        noDataText.style.display='block';
                        noDataText.innerHTML='無資料';
                    }else{
                        noDataText.style.display='none';

                        var rental_Id=0;
                        console.log(data.idList);
                        data.idList.forEach(function(){
                            console.log(rental_Id);
                            addonRental(data,rental_Id);
                            rental_Id++;
                        });
                        for(var onPage=1;onPage<=data.paging.maxPage;onPage++){
                            let addPage=document.createElement('li');
                            if(onPage==nowPage){
                                addPage.innerHTML=`<a href="#" class="NowPage" onclick="NowPage(this)">${onPage}</a>`;
                            }else{
                                addPage.innerHTML=`<a href="#" class='otherPage' onclick="NowPage(this)">${onPage}</a>`;
                            }
                            pagination.appendChild(addPage);
                        }
                    }
                })
                .catch(error => {
                    console.log(error);
                });
    }else{
        nowPage=sessionStorage.getItem("nowPage");
        axios({
            method: 'get',
            url: `http://localhost:5190/api/HomeAny/HomeAnyUpTime?Page=${nowPage}`,
            headers:{
                "Content-Type": "application/json",
                "Accept": "application/json",

            },
        })
                .then(( { data } ) => {
                    if(data=='無資料'){
                        noDataText.style.display='block';
                        noDataText.innerHTML='無資料';
                    }else{
                        noDataText.style.display='none';

                        var rental_Id=0;
                        console.log(data.idList);
                        data.idList.forEach(function(){
                            console.log(rental_Id);
                            addonRental(data,rental_Id);
                            rental_Id++;
                        });
                        for(var onPage=1;onPage<=data.paging.maxPage;onPage++){
                            let addPage=document.createElement('li');
                            if(onPage==nowPage){
                                addPage.innerHTML=`<a href="#" class="NowPage" onclick="NowPage(this)">${onPage}</a>`;
                            }else{
                                addPage.innerHTML=`<a href="#" class='otherPage' onclick="NowPage(this)">${onPage}</a>`;
                            }
                            pagination.appendChild(addPage);
                        }
                    }
                })
                .catch(error => {
                    console.log(error);
                });
    }

}

function view_genre(genre){
    nowPage=sessionStorage.getItem("nowPage");
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
    if(LoginData!=null){
        axios({
            method: 'post',
            url: `http://localhost:5190/api/HomeAny/HomeAnySearchDown?Page=${nowPage}`,
            headers:{
                "Content-Type": "multipart/form-data",
                "Accept": "application/json",
                "Authorization": `Bearer ${LoginData.token}`, 
            },
             data: formData,
        })
                .then(( { data } ) => {
                    if(data=='查無此資料'){
                        noDataText.style.display='block';
                        noDataText.innerHTML='查無此資料';
                    }else{
                        noDataText.style.display='none';
                        var rental_Id=0;
                        console.log(data.idList);
                        data.idList.forEach(function(){
                            console.log(rental_Id);
                            addonRental(data,rental_Id);
                            rental_Id++;
                        });
                        for(var onPage=1;onPage<=data.paging.maxPage;onPage++){
                            let addPage=document.createElement('li');
                             if(onPage==nowPage){
                                addPage.innerHTML=`<a href="#" class="NowPage" onclick="NowPage(this)">${onPage}</a>`;
                            }else{
                                addPage.innerHTML=`<a href="#" class='otherPage' onclick="NowPage(this)">${onPage}</a>`;
                            }
                            pagination.appendChild(addPage);
                        }
                    }
                })
                .catch(error => {
                    console.log(error);
                });
    }else{
        nowPage=sessionStorage.getItem("nowPage");
        axios({
            method: 'post',
            url: `http://localhost:5190/api/HomeAny/HomeAnySearchDown?Page=${nowPage}`,
            headers:{
                "Content-Type": "multipart/form-data",
                "Accept": "application/json",
                // "Authorization": `Bearer ${LoginData.token}`, 
            },
             data: formData,
        })
                .then(( { data } ) => {
                    if(data=='查無此資料'){
                        noDataText.style.display='block';
                        noDataText.innerHTML='查無此資料';
                    }else{
                        noDataText.style.display='none';
                        var rental_Id=0;
                        console.log(data.idList);
                        data.idList.forEach(function(){
                            console.log(rental_Id);
                            addonRental(data,rental_Id);
                            rental_Id++;
                        });
                        for(var onPage=1;onPage<=data.paging.maxPage;onPage++){
                            let addPage=document.createElement('li');
                             if(onPage==nowPage){
                                addPage.innerHTML=`<a href="#" class="NowPage" onclick="NowPage(this)">${onPage}</a>`;
                            }else{
                                addPage.innerHTML=`<a href="#" class='otherPage' onclick="NowPage(this)">${onPage}</a>`;
                            }
                            pagination.appendChild(addPage);
                        }
                    }
                })
                .catch(error => {
                    console.log(error);
                });
    }
}

function view_type(type){
    nowPage=sessionStorage.getItem("nowPage");
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
    if(LoginData!=null){
        axios({
            method: 'post',
            url: `http://localhost:5190/api/HomeAny/HomeAnySearchDown?Page=${nowPage}`,
            headers:{
                "Content-Type": "multipart/form-data",
                "Accept": "application/json",
                "Authorization": `Bearer ${LoginData.token}`, 
            },
             data: formData,
        })
                .then(( { data } ) => {
                    if(data=='查無此資料'){
                        noDataText.style.display='block';
                        noDataText.innerHTML='查無此資料';
                    }else{
                        noDataText.style.display='none';
                        var rental_Id=0;
                        console.log(data.idList);
                        data.idList.forEach(function(){
                            console.log(rental_Id);
                            addonRental(data,rental_Id);
                            rental_Id++;
                        });
                        for(var onPage=1;onPage<=data.paging.maxPage;onPage++){
                            let addPage=document.createElement('li');
                             if(onPage==nowPage){
                                addPage.innerHTML=`<a href="#" class="NowPage" onclick="NowPage(this)">${onPage}</a>`;
                            }else{
                                addPage.innerHTML=`<a href="#" class='otherPage' onclick="NowPage(this)">${onPage}</a>`;
                            }
                            pagination.appendChild(addPage);
                        }
                    }
                })
                .catch(error => {
                    console.log(error);
                });
    }else{
        nowPage=sessionStorage.getItem("nowPage");
        axios({
            method: 'post',
            url: `http://localhost:5190/api/HomeAny/HomeAnySearchDown?Page=${nowPage}`,
            headers:{
                "Content-Type": "multipart/form-data",
                "Accept": "application/json",
                // "Authorization": `Bearer ${LoginData.token}`, 
            },
             data: formData,
        })
                .then(( { data } ) => {
                    if(data=='查無此資料'){
                        noDataText.style.display='block';
                        noDataText.innerHTML='查無此資料';
                    }else{
                        noDataText.style.display='none';
                        var rental_Id=0;
                        console.log(data.idList);
                        data.idList.forEach(function(){
                            console.log(rental_Id);
                            addonRental(data,rental_Id);
                            rental_Id++;
                        });
                        for(var onPage=1;onPage<=data.paging.maxPage;onPage++){
                            let addPage=document.createElement('li');
                             if(onPage==nowPage){
                                addPage.innerHTML=`<a href="#" class="NowPage" onclick="NowPage(this)">${onPage}</a>`;
                            }else{
                                addPage.innerHTML=`<a href="#" class='otherPage' onclick="NowPage(this)">${onPage}</a>`;
                            }
                            pagination.appendChild(addPage);
                        }
                    }
                })
                .catch(error => {
                    console.log(error);
                });
    }
}

function view_pattern(pattern){
    nowPage=sessionStorage.getItem("nowPage");
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
    if(LoginData!=null){
        axios({
            method: 'post',
            url: `http://localhost:5190/api/HomeAny/HomeAnySearchDown?Page=${nowPage}`,
            headers:{
                "Content-Type": "multipart/form-data",
                "Accept": "application/json",
                "Authorization": `Bearer ${LoginData.token}`, 
            },
             data: formData,
        })
                .then(( { data } ) => {
                    if(data=='查無此資料'){
                        noDataText.style.display='block';
                        noDataText.innerHTML='查無此資料';
                    }else{
                        noDataText.style.display='none';
                        var rental_Id=0;
                        console.log(data.idList);
                        data.idList.forEach(function(){
                            console.log(rental_Id);
                            addonRental(data,rental_Id);
                            rental_Id++;
                        });
                        for(var onPage=1;onPage<=data.paging.maxPage;onPage++){
                            let addPage=document.createElement('li');
                             if(onPage==nowPage){
                                addPage.innerHTML=`<a href="#" class="NowPage" onclick="NowPage(this)">${onPage}</a>`;
                            }else{
                                addPage.innerHTML=`<a href="#" class='otherPage' onclick="NowPage(this)">${onPage}</a>`;
                            }
                            pagination.appendChild(addPage);
                        }
                    }
                })
                .catch(error => {
                    console.log(error);
                });
    }else{
        nowPage=sessionStorage.getItem("nowPage");
        axios({
            method: 'post',
            url: `http://localhost:5190/api/HomeAny/HomeAnySearchDown?Page=${nowPage}`,
            headers:{
                "Content-Type": "multipart/form-data",
                "Accept": "application/json",
                // "Authorization": `Bearer ${LoginData.token}`, 
            },
             data: formData,
        })
                .then(( { data } ) => {
                    if(data=='查無此資料'){
                        noDataText.style.display='block';
                        noDataText.innerHTML='查無此資料';
                    }else{
                        noDataText.style.display='none';
                        var rental_Id=0;
                        console.log(data.idList);
                        data.idList.forEach(function(){
                            console.log(rental_Id);
                            addonRental(data,rental_Id);
                            rental_Id++;
                        });
                        for(var onPage=1;onPage<=data.paging.maxPage;onPage++){
                            let addPage=document.createElement('li');
                             if(onPage==nowPage){
                                addPage.innerHTML=`<a href="#" class="NowPage" onclick="NowPage(this)">${onPage}</a>`;
                            }else{
                                addPage.innerHTML=`<a href="#" class='otherPage' onclick="NowPage(this)">${onPage}</a>`;
                            }
                            pagination.appendChild(addPage);
                        }
                    }
                })
                .catch(error => {
                    console.log(error);
                });
    }
}

function view_equipmentname(equipmentname){
    nowPage=sessionStorage.getItem("nowPage");
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
    if(LoginData!=null){
        axios({
            method: 'post',
            url: `http://localhost:5190/api/HomeAny/HomeAnySearchDown?Page=${nowPage}`,
            headers:{
                "Content-Type": "multipart/form-data",
                "Accept": "application/json",
                "Authorization": `Bearer ${LoginData.token}`, 
            },
             data: formData,
        })
                .then(( { data } ) => {
                    if(data=='查無此資料'){
                        noDataText.style.display='block';
                        noDataText.innerHTML='查無此資料';
                    }else{
                        noDataText.style.display='none';
                        var rental_Id=0;
                        console.log(data.idList);
                        data.idList.forEach(function(){
                            console.log(rental_Id);
                            addonRental(data,rental_Id);
                            rental_Id++;
                        });
                        for(var onPage=1;onPage<=data.paging.maxPage;onPage++){
                            let addPage=document.createElement('li');
                             if(onPage==nowPage){
                                addPage.innerHTML=`<a href="#" class="NowPage" onclick="NowPage(this)">${onPage}</a>`;
                            }else{
                                addPage.innerHTML=`<a href="#" class='otherPage' onclick="NowPage(this)">${onPage}</a>`;
                            }
                            pagination.appendChild(addPage);
                        }
                    }
                })
                .catch(error => {
                    console.log(error);
                });
    }else{
        nowPage=sessionStorage.getItem("nowPage");
        axios({
            method: 'post',
            url: `http://localhost:5190/api/HomeAny/HomeAnySearchDown?Page=${nowPage}`,
            headers:{
                "Content-Type": "multipart/form-data",
                "Accept": "application/json",
                // "Authorization": `Bearer ${LoginData.token}`, 
            },
             data: formData,
        })
                .then(( { data } ) => {
                    if(data=='查無此資料'){
                        noDataText.style.display='block';
                        noDataText.innerHTML='查無此資料';
                    }else{
                        noDataText.style.display='none';
                        var rental_Id=0;
                        console.log(data.idList);
                        data.idList.forEach(function(){
                            console.log(rental_Id);
                            addonRental(data,rental_Id);
                            rental_Id++;
                        });
                        for(var onPage=1;onPage<=data.paging.maxPage;onPage++){
                            let addPage=document.createElement('li');
                             if(onPage==nowPage){
                                addPage.innerHTML=`<a href="#" class="NowPage" onclick="NowPage(this)">${onPage}</a>`;
                            }else{
                                addPage.innerHTML=`<a href="#" class='otherPage' onclick="NowPage(this)">${onPage}</a>`;
                            }
                            pagination.appendChild(addPage);
                        }
                    }
                })
                .catch(error => {
                    console.log(error);
                });
    }
}


function nextimg(Id){
    let imgblock='';
for(var i=1;i<=5;i++){
    if(document.getElementById(`img${i}_${Id}`).style.display=='block'){
        imgblock=`img${i}_${Id}`;
    }
}
    console.log(imgblock);
    console.log(parseInt(imgblock.replace('img','').replace(`_${Id}`,''))+1);
    console.log(`img${parseInt(imgblock.replace('img','').replace(`_${Id}`,''))+1}_${Id}`);
    console.log(document.getElementById(imgblock).style.display=='block');

    if(document.getElementById(imgblock).style.display=='block'){
        if((imgblock.replace('img','').replace(`_${Id}`,''))<5){
            document.getElementById(imgblock).style.display='none';
            document.getElementById(`img${parseInt(imgblock.replace('img','').replace(`_${Id}`,''))+1}_${Id}`).style.display='block';
        }
    
}
}
function lastimg(Id){
let imgblock='';
for(var i=1;i<=5;i++){
    if(document.getElementById(`img${i}_${Id}`).style.display=='block'){
        imgblock=`img${i}_${Id}`;
    }
}
    console.log(imgblock);
    console.log(parseInt(imgblock.replace('img','').replace(`_${Id}`,''))-1);
    console.log(`img${parseInt(imgblock.replace('img','').replace(`_${Id}`,''))-1}_${Id}`);
    console.log(document.getElementById(imgblock).style.display=='block');

    if(document.getElementById(imgblock).style.display=='block'){
        if((imgblock.replace('img','').replace(`_${Id}`,''))>1){
            document.getElementById(imgblock).style.display='none'
            document.getElementById(`img${parseInt(imgblock.replace('img','').replace(`_${Id}`,''))-1}_${Id}`).style.display='block';
        }
    
}
}