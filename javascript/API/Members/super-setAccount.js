let reporting_look=document.getElementById('reporting_look');
let delete_reporting=document.getElementById('delete_reporting');

function addAccount(data,id) {
    let superaccount_table = document.getElementById('superaccount_table');
    let superaccount_onerental = document.createElement('tr');
    let identity,score,report;
    if(data[id].identity==0){
        identity='管理者';
    }else if(data[id].identity==1){
        identity='房東';
    }else if(data[id].identity==2){
        identity='一般使用者';
    }
    
    if(data[id].isBlock){
        report=`<button id='lifted_${id}' style='background-color: #ff0000;'>解禁</button>`
    }else{
        report=`<button id='stop_${id}'>停用</button>`
    }

    superaccount_onerental.innerHTML=`
        <td>${id+1}</td>
        <td>${data[id].account}</td>
        <td>${identity}</td>
        <td>${data[id].rentalCount}筆</td>
        <td><button id='reporting_${id}' >${data[id].reportCount}</button></td>
        <td class="flexbetween" style="width: 56px;">
            ${report}
        </td>
        `;
        
        superaccount_table.appendChild(superaccount_onerental);

        

        let account,isBlock,reporting;
        


        if(data[id].isBlock){
            console.log(id);
            reporting='lifted_'+id;
            console.log(reporting);
            let lifted_btn=document.getElementById(reporting);
            console.log(lifted_btn);
            lifted_btn.onclick=function(){
                console.log(data);
                account=data[id].account;
                isBlock=true;
                IsBlock(account,isBlock);
            }
            
        }else{
            console.log(data[id].isBlock);
            reporting='stop_'+id;
            let stop_btn=document.getElementById(`stop_${id}`);
            console.log(stop_btn);
            stop_btn.onclick=function(){
                console.log(data);
                account=data[id].account;
                isBlock=false;
                IsBlock(account,isBlock);
            }
        }

        let reporting_btn=document.getElementById(`reporting_${id}`);
        console.log(reporting_btn);
        console.log(reporting_btn);
        
        reporting_btn.onclick=function(){
            createMask();
        var reportingonAccountRows = document.querySelectorAll("tr.reportingonAccount");
        for (var i = 0; i < reportingonAccountRows.length; i++) {
        reportingonAccountRows[i].parentNode.removeChild(reportingonAccountRows[i]);
        }

            reporting_look.style.display='block';
            axios({
                method:'get',
                url:`http://localhost:5190/api/Report/ReportRecord?Account=${data[id].account}`,
                headers:{
                    'Content-Type':'application/json',
                    "Accept": "application/json",
                    "Authorization": `Bearer ${LoginData.token}`, 
                },
        
            })
            .then(({data})=>{
                console.log(data);
                var num=0;
                data.forEach(function(){
                    console.log(data[num]);
                    viewReportreason(data[num]);
                    num++;
                });
            })
            .catch(error => {
                console.log(error);
            });
        };
    }
    
    function viewReportreason(data){
        let reporting_table=document.getElementById('reporting_table');
        let reporting_content=document.createElement('tr');
        reporting_content.classList='reportingonAccount';
        reporting_content.innerHTML=`
            <td>${data.reporter}</td>
            <td>${data.reason}</td>
        `;

        reporting_table.appendChild(reporting_content);
    }

    

    function viewallAccount(){
        console.log(LoginData);
    
        axios({
            method:'get',
            url:'http://localhost:5190/api/Auth/memberList',
            headers:{
                'Content-Type':'application/json',
                "Accept": "application/json",
                "Authorization": `Bearer ${LoginData.token}`, 
            },
    
        })
        .then(({data})=>{
            console.log(data[0]);
            var rental_Id=0;
            
            data.forEach(function(){
                addAccount(data,rental_Id);
                rental_Id++;
            });
        })
        .catch(error => {
            console.log(error);
        });
    }

    function IsBlock(account,isBlock){
        axios({
            method:'post',
            url:`http://localhost:5190/api/Report/isBlock`,
            headers:{
                'Content-Type':'application/json',
                "Accept": "application/json",
                "Authorization": `Bearer ${LoginData.token}`, 
            },data:{
                reported: account,
                isBlock: isBlock,
            },
    
        })
        .then(({data})=>{
            console.log(data);
            location.reload();
        })
        .catch(error => {
            console.log(error);
        });
    }

    
    delete_reporting.onclick=function(){
        reporting_look.style.display='none';
        deleteMask();
    }


