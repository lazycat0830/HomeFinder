let update_Account=document.getElementById("update_Account");
let updataAccount_btn=document.getElementById("updataAccount_btn");
let delete_updateAccount=document.getElementById("delete_updateAccount");

let report=document.getElementById("report");
let report_btn=document.getElementById("report_btn");
let delete_report=document.getElementById("delete_report");

let Report_text1=document.getElementById('Report_text1');

let updataoneAccount_btn=document.getElementById('updataoneAccount_btn');
const form = document.querySelector("form");

let inputImageview1=document.getElementById('inputImageview1')
let updata_img=document.getElementById('updata_img');
let oneAccountimg=document.getElementById('oneAccountimg');
let score;



function oneAccount(data){


        console.log(data);
        
        // oneAccountimg.setAttribute('width','100%');
        oneAccountimg.style.backgroundImage=`url(${data.members.img})`;
        oneAccountimg.style.backgroundSize ='cover';
        oneAccountName.innerHTML=`姓名：${data.members.name}`;
        oneAccountPhome.innerHTML=`電話：${data.members.phone}`;
        oneAccountEmail.innerHTML=`E-mail：${data.members.email}`;
        inputImageview1.style.backgroundImage=`url(${data.members.img})`;
        inputImageview1.style.backgroundSize ='cover';
        console.log(LoginData.members.identity);
        if(LoginData.members.identity==1){
            newRenterRentalAPI(data.members.account);
        }else if(LoginData.members.identity==2){
            likeRentalAPI();
        }


        
        updata_img.addEventListener('change', () => {
            const file1 = updata_img.files[0];
            const img1 = new FileReader();
            
            img1.onload = (event) => {
                inputImageview1.style.backgroundImage= 'url(' + event.target.result + ')';
                inputImageview1.style.backgroundSize ='cover';
                inputImageview1.innerHTML ="";
            };
            
            img1.readAsDataURL(file1);
            console.log(file1);
        })
    }

    let Account_Rental=document.getElementById('Account_Rental');
    function newRenterRental(data,id){
        console.log(data)
        console.log(data.rentalBlock[id].allData.member.score)
        let scoretext;
        if(LoginData==null){
            like=``;
        }else{
            if(LoginData.members.identity==2){
                console.log(data.rentalBlock[id].isCollected);
                if(data.rentalBlock[id].isCollected){
                    like=`
                    <a class="Like absolute" id="likebtn_${data.rentalBlock[id].allData.rental_id}">
                    <img id="likeheart_${data.rentalBlock[id].allData.rental_id}" width="30px" src="/image/like.png">
                    </a>`;
                }else{
                    like=`
                    <a class="Like absolute" id="likebtn_${data.rentalBlock[id].allData.rental_id}">
                    <img id="likeheart_${data.rentalBlock[id].allData.rental_id}" width="30px" src="/image/heart.png">
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
    
        let Account_onRental=document.createElement('div');
        Account_onRental.classList="Housing_Profile";
    
        Account_onRental.innerHTML=`
        <div class="Housing_Profile_content flexcolumn relative">
            <!--
            <a id="rental_id${data.rentalBlock[id].allData.rental_id}" class="Houseimg flexcenter relative" href="/通用/item.html">
                <img width="100%" hight="100%" src="${data.rentalBlock[id].image[0]}"/>
                ${like}
                 <a href='' class='absolute' style='background-color:#ffffffb5;border-radius:100%;left:5px;top:25%;padding: 1px 6px;text-align:center;' ><</a>
                 <a href='' class='absolute' style='background-color:#ffffffb5;border-radius:100%;right:5px;top:25%;padding: 1px 6px;text-align:center;' >></a>
            </a>
            --!>
            
        <div class="flexcenter relative Houseimg" style="z-index: 0;" >
            <a id="rental_id${data.rentalBlock[id].allData.rental_id}" width="100%;" href="/通用/item.html">
            <ul id="rentalul_id${data.rentalBlock[id].allData.rental_id}">
                <li id="img0_${data.rentalBlock[id].allData.rental_id}" style="display: block;"><img height="100%" width="100%" src="${data.rentalBlock[id].image[0]}" /></li>
            </ul>
            
            </a>
            ${like}
            <input id='lastimg_${data.rentalBlock[id].allData.rental_id}' class='absolute Carousellastbtn'  value="<" type="button">
            <input id='nextimg_${data.rentalBlock[id].allData.rental_id}' class='absolute Carouselnextbtn' value=">" type="button">
         
        </div>
        
        <a class="text1" href="/通用/item.html">${data.rentalBlock[id].allData.title}</a>
        <span class="text2 flexbetween" href="/通用/account-interface.html">出租者：${data.rentalBlock[id].allData.publisher}</span>
        <span class="text3">上架日期：${data.rentalBlock[id].allData.uploadtime.replace(/T.*/,'')}</span>
        <span class="text4">價格：<span class="price">${data.rentalBlock[id].allData.rent}<span class="unit">元/月</span></span></span>
    </div>

`;
        Account_Rental.appendChild(Account_onRental);
    
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
    lastimg_btn.onclick=function(){
        let imgblock='';
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

                if(document.getElementById(imgblock).style.display=='block'){
                    if((imgblock.replace('img','').replace(`_${data.rentalBlock[id].allData.rental_id}`,''))>0){
                        document.getElementById(imgblock).style.display='none'
                        document.getElementById(`img${parseInt(imgblock.replace('img','').replace(`_${data.rentalBlock[id].allData.rental_id}`,''))-1}_${data.rentalBlock[id].allData.rental_id}`).style.display='block';
                    }
    
            }   
    }

    let nextimg_btn=document.getElementById(`nextimg_${data.rentalBlock[id].allData.rental_id}`);
    nextimg_btn.onclick=function(){
        
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
                location.reload();
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
    
    }
    let pagination=document.getElementById('pagination');
    function newRenterRentalAPI(account){
        console.log(account);
        console.log(LoginData);
        axios({
            method: 'get',
            url: `http://localhost:5190/api/HomeAny/HomeAnySeePublisher?publisher=${account}`,
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                // "Authorization": `Bearer ${LoginData.token}`, 
            },
        }).then(({data})=>{
            Account_Rental.innerHTML='';
            console.log(data);
            rental_Id=0;
            data.idList.forEach(function(){
                newRenterRental(data,rental_Id);
                rental_Id++;
            });
            totalRenter.innerHTML=`租屋`;
        }).catch(error=>{
            console.log(error);
        });
    }
    
    function likeRentalAPI(){
        nowPage=sessionStorage.getItem("nowPage");
        console.log(nowPage);
        console.log(LoginData);
        axios({
            method: 'post',
            url: `http://localhost:5190/api/HomeAny/AllCollect?Page=${nowPage}`,
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "Authorization": `Bearer ${LoginData.token}`, 
            },
        }).then(({data})=>{
            Account_Rental.innerHTML='';
            console.log(data);
            rental_Id=0;
            data.idList.forEach(function(){
                newRenterRental(data,rental_Id);
                rental_Id++;
            });
            totalRenter.innerHTML=`收藏`;
            for(var onPage=1;onPage<=data.paging.maxPage;onPage++){
                let addPage=document.createElement('li');
                if(onPage==nowPage){
                    addPage.innerHTML=`<a href="#" class="NowPage" onclick="NowPage_like(this)">${onPage}</a>`;
                }else{
                    addPage.innerHTML=`<a href="#" class='otherPage' onclick="NowPage_like(this)">${onPage}</a>`;
                }
                pagination.appendChild(addPage);
            }
            
        }).catch(error=>{
            console.log(error);
            totalRenter.innerHTML=`收藏`;
        });
        
    }

    function NowPage_like(link) {
        var linkText = link.innerText || link.textContent;
            nowPage=linkText;
            console.log(nowPage);
            sessionStorage.setItem("nowPage",nowPage);
            pagination.innerHTML='';
            likeRentalAPI();
        }


    
    updataAccount_btn.onclick=function(){
        createMask();
        update_Account.style.display="block";
        updata_Name.value=LoginData.members.name;
        updata_phone.value=LoginData.members.phone;
        // updata_img.value=LoginData.members.img;
    }

    delete_updateAccount.addEventListener("click",function(){
        deleteMask();
        update_Account.style.display="none";
        
    });


updataoneAccount_btn.addEventListener("click", (event) => {
    event.preventDefault();
    
    const formData = new FormData(form);
    console.log(formData.get('name'));
    console.log(formData.get('phone'));
    console.log(formData.get('img_upload'));
    formData.append('img','');
    
        axios({
        method: "post",
        url: "http://localhost:5190/api/Auth/EditProfile",
        headers: {
            "Content-Type": "multipart/form-data",
            " Accept": "application/json",
            "Authorization": `Bearer ${LoginData.token}`,
        },
        data: formData,
        })
        .then((response) => {
            console.log(response.data);
            LoginData.members.name=updata_Name.value;
            LoginData.members.phone=updata_phone.value;
            LoginData.members.img=response.data.replace('修改成功,','');
            avatarimg.src=response.data.replace('修改成功,','');
            console.log(LoginData);
            oneAccount(LoginData);
            deleteMask();
            sessionStorage.setItem('LoginData', JSON.stringify(LoginData));

            //修改後網頁資訊不會變!!!

        })
        .catch((error) => {
            console.error(error);
        });
    });