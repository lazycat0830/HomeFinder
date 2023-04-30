let update_Account=document.getElementById("update_Account");
let updataAccount_btn=document.getElementById("updataAccount_btn");
let delete_updateAccount=document.getElementById("delete_updateAccount");

let report=document.getElementById("report");
let report_btn=document.getElementById("report_btn");
let delete_report=document.getElementById("delete_report");

let Report_text1=document.getElementById('Report_text1');

let updataoneAccount_btn=document.getElementById('updataoneAccount_btn');
const form = document.querySelector("form");

let score;

function oneAccount(data){


        console.log(data);
        
        oneAccountimg.setAttribute('width','100%');
        oneAccountimg.setAttribute('src','/image/98f1ad5373cccf33efac27876f088cb0ea46f127.jpg@760w_738h_progressive.webp');
        oneAccountName.innerHTML=`姓名：${data.members.name}`;
        oneAccountPhome.innerHTML=`電話：${data.members.phone}`;
        oneAccountEmail.innerHTML=`E-mail：${data.members.email}`;

        newRenterRentalAPI(data.members.account);
    }

    let Account_Rental=document.getElementById('Account_Rental');
    function newRenterRental(data,id){
        console.log(data.rentalBlock[id].allData.member.score)
        let scoretext;
        if(LoginData==null){
            like=``;
        }else{
            if(LoginData.members.identity==2){
                like=`
                <a class="Like absolute" id="likebtn_${data.rentalBlock[id].allData.rental_id}">
                    <img id="likeheart_${data.rentalBlock[id].allData.rental_id}" width="30px" src="/image/heart.png">
                </a>`;
            }else{
                like=``;
            }
        }
    
        let Account_onRental=document.createElement('div');
        Account_onRental.classList="Housing_Profile";
    
        Account_onRental.innerHTML=`
        <div class="Housing_Profile_content flexcolumn relative">
                <a id="rental_id${data.rentalBlock[id].allData.rental_id}" class="Houseimg" href="/通用/item.html">
                    <img width="100%" hight="100%" src="/image/${id+1}.webp"/>
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

    function newRenterRentalAPI(account){
        
        console.log(account);
        axios({
            method: 'get',
            url: `http://localhost:5190/api/HomeAny/HomeAnySeePublisher?publisher=${account}`,
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
            // LoginData.members.img=updata_img.value;
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