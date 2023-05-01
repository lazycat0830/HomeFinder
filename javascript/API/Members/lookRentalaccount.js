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
    
    delete_report.addEventListener("click",function(){
        deleteMask();
        report.style.display="none";
    
    });
    report_btn2.addEventListener("click",function(){
        deleteMask();
        report.style.display="none";
    
    });


    console.log(data);
    oneAccountimg.setAttribute('width','100%');
    oneAccountimg.setAttribute('src',`${data.img}`);
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


let report_btn1=document.getElementById('report_btn1');
report_btn1.addEventListener("click",function(){
    reason();
    deleteMask();
    report.style.display="none";

});

console.log(newRantalRenter);


let Report_reason=document.getElementById('Report_reason');
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
            <a id="rental_id${data.rentalBlock[id].allData.rental_id}" class="Houseimg" href="/通用/item.html">
                <img width="100%" hight="100%" src="${data.rentalBlock[id].allData.img1}"/>
                ${like}
            </a>
            </a>
        <a class="text1" href="/通用/item.html">${data.rentalBlock[id].allData.title}</a>
        <span class="text2 flexbetween" href="/通用/account-interface.html">出租者：${data.rentalBlock[id].allData.publisher}</span>
        <span class="text3">上架日期：${data.rentalBlock[id].allData.uploadtime.replace(/T.*/,'')}</span>
        <span class="text4">價格：<span class="price">${data.rentalBlock[id].allData.rent}<span class="unit">元/月</span></span></span>
    </div>
    `;
    Account_Rental.appendChild(Account_onRental);

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