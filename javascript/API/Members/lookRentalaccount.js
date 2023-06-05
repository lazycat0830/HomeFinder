let update_Account=document.getElementById("update_Account");
let updataAccount_btn=document.getElementById("updataAccount_btn");
let delete_updateAccount=document.getElementById("delete_updateAccount");

let report=document.getElementById("report");
let report_btn=document.getElementById("report_btn");
let delete_report=document.getElementById("delete_report");
let report_btn2=document.getElementById('report_btn2');

let Report_text1=document.getElementById('Report_text1');

let updataoneAccount_btn=document.getElementById('updataoneAccount_btn');
const form = document.querySelector("form");

let report_judge=document.getElementById('report_judge');

let score;

function oneAccount(data){

    if(LoginData==null){
        report_judge.style.display='none';
    }else{
        report_judge.style.display='block';
    }

    report_btn.addEventListener("click",function(){
        Report_text1.innerHTML=`是否要檢舉${data.name}`;
        createMask();
        report.style.display="block";
    });
    
    // delete_report.addEventListener("click",function(){
    //     deleteMask();
    //     report.style.display="none";
    
    // });
    report_btn2.addEventListener("click",function(){
        deleteMask();
        report.style.display="none";
    
    });


    console.log(data);
    oneAccountimg.style.backgroundImage=`url(${data.img})`;
    oneAccountName.innerHTML=`姓名：${data.name}`;
    oneAccountPhome.innerHTML=`電話：${data.phone}`;
    oneAccountEmail.innerHTML=`E-mail：${data.email}`;

    newRenterRentalAPI();
}

function viewRentalAccount(Account){
    axios({
        method: 'get',
        url: `http://localhost:5190/api/Auth/profile/${Account}`,
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            // "Authorization": `Bearer ${token}`, 
        },
    }).then(({data})=>{
        console.log(data);
        oneAccount(data);

    }).catch(error=>{
        console.log(error);
    });
}

let Report_reason=document.getElementById('Report_reason');
let report_btn1=document.getElementById('report_btn1');
let Reportvalidate=document.getElementById('Reportvalidate');
report_btn1.addEventListener("click",function(){
    console.log(Report_reason);
    if(Report_reason.value==""){
        console.log(Report_reason);
        Reportvalidate.innerHTML='不能沒有原因';
    }else{
        console.log(Report_reason);
        Reportvalidate.innerHTML='';
        reason();
        deleteMask();
        report.style.display="none";
    }

});

console.log(newRantalRenter);

function reason(){
    axios({
        method: 'post',
        url: `http://localhost:5190/api/Report/AddReport`,
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            "Authorization": `Bearer ${LoginData.token}`, 
        },data:{
            reported:newRantalRenter,
            reason:Report_reason.value,
        }
    }).then(({data})=>{
        console.log(data);
        

    }).catch(error=>{
        console.log(error);
    });
}
let Account_Rental=document.getElementById('Account_Rental');
function newRenterRental(data,id){
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
        
        <a class="text1" onclick="onclickitem('${data.rentalBlock[id].allData.rental_id}')">${data.rentalBlock[id].allData.title}</a>
        <a class="text2 flexbetween" onclick="onclickAccount('${data.rentalBlock[id].allData.publisher}')">出租者：${data.rentalBlock[id].allData.publisher}</a>
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



}

function newRenterRentalAPI(){
    if(LoginData!=null){
        axios({
            method: 'get',
            url: `http://localhost:5190/api/HomeAny/HomeAnySeePublisher?publisher=${newRantalRenter}`,
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "Authorization": `Bearer ${LoginData.token}`, 
            },
        }).then(({data})=>{
            console.log(data);
            rental_Id=0;
            data.idList.forEach(function(){
                newRenterRental(data,rental_Id);
                rental_Id++;
            });
    
        }).catch(error=>{
            console.log(error);
        });
    }else{
        axios({
            method: 'get',
            url: `http://localhost:5190/api/HomeAny/HomeAnySeePublisher?publisher=${newRantalRenter}`,
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                // "Authorization": `Bearer ${LoginData.token}`, 
            },
        }).then(({data})=>{
            console.log(data);
            rental_Id=0;
            data.idList.forEach(function(){
                newRenterRental(data,rental_Id);
                rental_Id++;
            });
    
        }).catch(error=>{
            console.log(error);
        });
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