let update_Account=document.getElementById("update_Account");
let updataAccount_btn=document.getElementById("updataAccount_btn");
let delete_updateAccount=document.getElementById("delete_updateAccount");

let report=document.getElementById("report");
let report_btn=document.getElementById("report_btn");
let delete_report=document.getElementById("delete_report");



let Account_updataAccount_btn=document.getElementById('Account_updataAccount_btn');
let Account_btn=document.createElement('button');
Account_btn.id='updataAccount_btn';
Account_btn.innerHTML='修改';
let Report_text1=document.getElementById('Report_text1');

let updataoneAccount_btn=document.getElementById('updataoneAccount_btn');
const form = document.querySelector("form");

let score;

function oneAccount(data){
    if(data==null){
        

        
    }else{
        report_btn.addEventListener("click",function(){
            Report_text1.innerHTML=`是否要檢舉${data.members.name}`;
            createMask();
            report.style.display="block";
        });
        
        delete_report.addEventListener("click",function(){
            deleteMask();
            report.style.display="none";
        
        });


        console.log(data);
        if(data.members.score==0){
            score='尚未有信用分數';
        }else{
            score=data.members.score;
        }
        oneAccountimg.setAttribute('width','100%');
        oneAccountimg.setAttribute('src','/image/98f1ad5373cccf33efac27876f088cb0ea46f127.jpg@760w_738h_progressive.webp');
        oneAccountName.innerHTML=`姓名：${data.members.name}<span class="fraction" style="font-size: 14px;align-content: end;padding: 0px;">${score}</span>`;
        oneAccountPhome.innerHTML=`電話：${data.members.phone}`;
        oneAccountEmail.innerHTML=`E-mail：${data.members.email}`;

        Account_updataAccount_btn.appendChild(Account_btn);
        
        let updataAccount_btn=document.getElementById('updataAccount_btn');
        updataAccount_btn.onclick=function(){
            createMask();
            update_Account.style.display="block";
            updata_Name.value=data.members.name;
            updata_phone.value=data.members.phone;
            updata_img.value=data.members.img;
        }
    
        delete_updateAccount.addEventListener("click",function(){
            deleteMask();
            update_Account.style.display="none";
            
        });
        
    }
    
    

}


updataoneAccount_btn.addEventListener("click", (event) => {
    event.preventDefault();
    const formData = new FormData(form);
    formData.append('img','');
    
        axios({
        method: "post",
        url: "http://localhost:5190/api/Auth/EditProfile",
        headers: {
            "Content-Type": "multipart/form-data",
            Accept: "application/json",
            Authorization: `Bearer ${LoginData.token}`,
        },
        data: formData,
        })
        .then((response) => {
            console.log(response.data);
            
            location.reload()
            //修改後網頁資訊不會變!!!

        })
        .catch((error) => {
            console.error(error);
        });
    });