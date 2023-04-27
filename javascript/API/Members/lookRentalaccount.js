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
    if(data.score==0){
        score='尚未有信用分數';
    }else{
        score=data.score;
    }
    oneAccountimg.setAttribute('width','100%');
    oneAccountimg.setAttribute('src','/image/98f1ad5373cccf33efac27876f088cb0ea46f127.jpg@760w_738h_progressive.webp');
    oneAccountName.innerHTML=`姓名：${data.name}<span class="fraction" style="font-size: 14px;align-content: end;padding: 0px;">${score}</span>`;
    oneAccountPhome.innerHTML=`電話：${data.phone}`;
    oneAccountEmail.innerHTML=`E-mail：${data.email}`;

    newRenterRental();
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

function newRenterRental(){
    let Account_Rental=document.getElementById('Account_Rental');
    console.log(Account_Rental);
    Account_Rental.innerHTML=`
    <div class="Housing_Profile">
    <div class="Housing_Profile_content flexcolumn">
        <a href="/通用/item.html"><div class="Houseimg relative">
            <img width="100%" src="/image/1.webp">
            <a id="likebtn" class="absolute Like"><img id="like" width="30px" src="/image/heart.png"></a>
        </div></a>
        <span class="text1">免仲介費/全新完工/獨洗曬/嚴選房客</span>
        <span class="text2 flexbetween">出租者： 顏小姐 <span style="color: #e48500;font-size: 12px;font-weight: bolder;">尚未有信用分數</span></span>
        <span class="text3">上架日期： 2023/03/27 | 15:23</span>
        <span class="text4">價格： <span style="color: #ff0000;font-weight: bolder;">11000<span style="font-size: 12px;font-weight: bolder;">元/月</span></span></span>
    </div>
    </div>
    `;
}