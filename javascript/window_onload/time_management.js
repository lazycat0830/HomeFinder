window.onload = function() {
    console.log(LoginData);
    if(LoginData!=null){
        avatarimg.src=`${LoginData.members.img}`;
    }else{
        avatarimg.src='/image/default_avatar.jpeg';
    }
        const dateText = document.getElementById('date');
        const datepicker = document.getElementById('datepicker');
        const prevDayBtn = document.getElementById('prev-day');
        const nextDayBtn = document.getElementById('next-day');
        var today = new Date();
        let selectedDate = today;
        const todayString = today.toLocaleDateString();
        dateText.innerHTML = todayString;
        
        var year = today.getFullYear();
        var month = ('0' + (today.getMonth() + 1)).slice(-2); 
        var day = ('0' + today.getDate()).slice(-2); 
        var dateInput = document.getElementById('datepicker'); 
        dateInput.value = year + '-' + month + '-' + day;
        datepicker.addEventListener('change', () => {
        selectedDate = new Date(datepicker.value);
        dateText.innerHTML = selectedDate.toLocaleDateString();
        viewtime_management(dateText.innerHTML);
        });
        prevDayBtn.addEventListener('click', () => {
        selectedDate.setDate(selectedDate.getDate() - 1);
        dateText.innerHTML = selectedDate.toLocaleDateString();
        viewtime_management(dateText.innerHTML);
        updateDatePicker(selectedDate);
        });
        nextDayBtn.addEventListener('click', () => {
        selectedDate.setDate(selectedDate.getDate() + 1);
        dateText.innerHTML = selectedDate.toLocaleDateString();
        viewtime_management(dateText.innerHTML);
        updateDatePicker(selectedDate);
        });
        
        viewtime_management(dateText.innerHTML);
        handleLogoutData(LoginData);
        console.log(LoginData);
        LoginData = JSON.parse(sessionStorage.getItem('LoginData'));   
        function updateDatePicker(date) {
            const dateString = date.toISOString().split('T')[0];
            datepicker.value = dateString;
            dateText.innerHTML = date.toLocaleDateString();
            // viewtime_management(date.toLocaleDateString());
        }
        // 初始化
        updateDatePicker(selectedDate);
        
    
};


function view_AjaxEdittime(changedate,validatatext){


    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function() {
        if (this.readyState === 4 && this.status === 200) {
            document.getElementById("AjaxEdittime").innerHTML = this.responseText;
            getDataTimeinput(changedate,validatatext);
        }
    };

    xhttp.open("GET", "/publisher房東/Ajaxtime.html", true);
    xhttp.send();
}

function getDataTimeinput(changedate,validatatext){
    console.log('BookOfDay date:',changedate.replace(/\//g, '-').replace(/\b(\d)\b/g, '0$1'));
    console.log('BookOfDay account:',LoginData.members.account);

    let formData=new FormData();
    formData.append('date',changedate.replace(/\//g, '-').replace(/\b(\d)\b/g, '0$1'));
    formData.append('account',LoginData.members.account);

    axios({
        method:'post',
        url:'http://localhost:5190/api/Time/BookOfDayTool',
        headers:{
            "Content-Type": "multipart/form-data",
            "Accept": "application/json",
            "Authorization": `Bearer ${LoginData.token}`,
        },data:formData,
    }).then(({ data })=> {
        let Edittime=document.getElementById('Edittime');
        for(var i=0;i<6;i++){
            let addgetTime=document.createElement('li');
            addgetTime.id=`Timeli${i}`;
            addgetTime.innerHTML=`
            <div class="flexcolumn">
                <label id="start_time${i}" style="margin:3px 0px;font-size: 16px;text-align: center;">--:--</label>
                <label id="end_time${i}" style="margin:3px 0px;font-size: 16px;text-align: center;">--:--</label>
                <input style="margin: 0px 20px;" id="Editbtn_time${i}" onclick='EditTimebtn(event)' type="button"  value="修改" >
            </div>
            `;
        Edittime.appendChild(addgetTime);

            // let EditTimebtn=document.getElementById(`Editbtn_time${i}`);
            // EditTimebtn.onclick=function(event){
            //     console.log(event.target);
            //     var id=event.target.id.replace('Editbtn_time','');
            //     addgetTime.innerHTML=`
            //     <div class="flexcolumn">
            //         <input id="start_time${id}" type='time' style="font-size: 16px;text-align: center;"/>
            //         <input id="end_time${id}" type='time' style="font-size: 16px;text-align: center;"/>
            //         <input style="margin: 0px 20px;" id="Savebtn_time${id}" onclick='SaveTimebtn(event)' type="button"  value="完成">
            //         <input style="margin: 0px 20px;" id="Clearbtn_time${id}" onclick='ClearTimebtn(event)' type="button"  value="清除">
            //     </div>
            //     `;
            //     console.log(data.availableTimesArray[0]);
            //     let allTime=data.availableTimesArray[0].split(',')
            //     let list_onetime=allTime[id].split('-');
            //     let start_time=document.getElementById(`start_time${id}`);
            //     let end_time=document.getElementById(`end_time${id}`);
            //     start_time.value=list_onetime[0];
            //     end_time.value=list_onetime[1];
            // }
        }
        console.log(data.availableTimesArray);
        var id=0;
        
        data.availableTimesArray.forEach(function(){
            if(data.availableTimesArray[id]!=""){
                let list_onetime=data.availableTimesArray[id].split('-');
                let start_time=document.getElementById(`start_time${id}`);
                let end_time=document.getElementById(`end_time${id}`);
                start_time.innerHTML=list_onetime[0];
                end_time.innerHTML=list_onetime[1];

            }
            id++;

            if(validatatext){
                disabledtrue_btn();
                document.getElementById('AjaxEdittime_Validata').style.display='block';
            }else{
                disabledfalse_btn();
                document.getElementById('AjaxEdittime_Validata').style.display='none';
            }
        });



    //     if(monlist!=""){
    //         monlist.forEach(function(){
    //        console.log(monlist[i]);
    //        let monlist_onetime=monlist[i].split('-');
    //        console.log(monlist_onetime);
    //        let monup=document.getElementById(`monup${i+1}`);
    //        monup.value=monlist_onetime[0];
    //        let mondown=document.getElementById(`mondown${i+1}`);
    //        mondown.value=monlist_onetime[1];
    //        i++;
    //    });

    }).catch(error=>{
        console.log(error);
    })
}

let clearbtn_start,clearbtn_end;
function EditTimebtn(event){
    disabledtrue_btn();
    var id=event.target.id.replace('Editbtn_time','');
    

    var start_time=document.getElementById(`start_time${id}`).innerHTML;
    var end_time=document.getElementById(`end_time${id}`).innerHTML;
    console.log(start_time,end_time);
    let Timeli=document.getElementById(`Timeli${id}`);
    if(start_time=='--:--'&&end_time=='--:--'){
        Timeli.innerHTML=`
        <div class="flexcolumn">
            <input id="start_time${id}" type='time' style="font-size: 16px;text-align: center;" />
            <input id="end_time${id}" type='time' style="font-size: 16px;text-align: center;" />
            <input style="margin: 3px 20px;" id="Savebtn_time${id}" onclick='SaveTimebtn(event)' type="button"  value="完成">
            <input style="margin: 3px 20px;" id="Clearbtn_time${id}" onclick='ClearTimebtn(event)' type="button"  value="清除">
            <input style="margin: 3px 20px;" id="NoTimebtn_time${id}" onclick='NoTimebtn(event)' type="button"  value="取消">
        </div>
        `;
    }else{
        Timeli.innerHTML=`
        <div class="flexcolumn">
            <input id="start_time${id}" type='time' style="font-size: 16px;text-align: center;" value='${start_time}'/>
            <input id="end_time${id}" type='time' style="font-size: 16px;text-align: center;" value='${end_time}'/>
            <input style="margin: 3px 20px;" id="Savebtn_time${id}" onclick='SaveTimebtn(event)' type="button"  value="完成">
            <input style="margin: 3px 20px;" id="Clearbtn_time${id}" onclick='ClearTimebtn(event)' type="button"  value="清除">
            <input style="margin: 3px 20px;" id="NoTimebtn_time${id}" onclick='NoTimebtn(event)' type="button"  value="取消">
        </div>
        `;
    }
    clearbtn_start=document.getElementById(`start_time${id}`).value;
    clearbtn_end=document.getElementById(`end_time${id}`).value;
                

}

function SaveTimebtn(event){
    clearbtn_start='',clearbtn_end='';
    console.log(event.target.id);
    var id=event.target.id.replace('Savebtn_time','');
    console.log(id);
    let data='';
    for(var i=0;i<6;i++){
        if(i==id){
            let start=document.getElementById(`start_time${id}`).value;
            let end=document.getElementById(`end_time${id}`).value;
            if(start!=''&&end!=''){
                data+=start+'-'+end+';';
            }
            console.log(data);
        }else{
            let start=document.getElementById(`start_time${i}`).innerHTML;
            let end=document.getElementById(`end_time${i}`).innerHTML;
            data+=start+'-'+end+';';
            console.log(data);
        }
    }
    // console.log(changedate);
    // console.log(changedate.replace(/\//g, '-').replace(/\b(\d)\b/g, '0$1'));
    console.log(document.getElementById('datepicker').value);
    console.log(data.replace(/--:-----:--;/g,"").slice('0',-1));
    axios({
        method:'post',
        url:'http://localhost:5190/api/Time/SetSpecialTime',
        headers:{
            "Content-Type": "application/json",
            "Accept": "application/json",
            "Authorization": `Bearer ${LoginData.token}`,
        },data:{
            date:document.getElementById('datepicker').value,
            newtime:data.replace(/--:-----:--;/g,"").slice('0',-1),
        },
    }).then(({ data })=> {
        document.getElementById('Edittime').innerHTML='';
        console.log(data);
        var startTime,endTime;
        if(data=='此時段有被預約，若要修改請先至預約總表取消預約'){
            
        }else{
            var newtime=data.newtime.split(';');
            for(var j=0;j<6;j++){
                if(data.newtime==""){
                    console.log(newtime);
                    startTime='--:--';
                    endTime='--:--';
                }else if(j<newtime.length){
                    console.log(newtime[j]);
                    var onenewTime=newtime[j].split('-');
                    startTime=onenewTime[0];
                    endTime=onenewTime[1];
                
                }else{
                    console.log(j);
                    startTime='--:--';
                    endTime='--:--';
                }
                let appendli= document.createElement('li');
                    appendli.id=`Timeli${j}`;
                    appendli.innerHTML=`
                        <div class="flexcolumn">
                            <label id="start_time${j}" style="margin:3px 0px;font-size: 16px;text-align: center;">${startTime}</label>
                            <label id="end_time${j}" style="margin:3px 0px;font-size: 16px;text-align: center;">${endTime}</label>
                            <input style="margin: 0px 20px;" id="Editbtn_time${j}" onclick='EditTimebtn(event)' type="button" value="修改" >
                        </div>
                    `;
                document.getElementById('Edittime').appendChild(appendli);
            };
            disabledfalse_btn();
        }
        
        

    }).catch(error=>{
        console.log(error);
    })
    
}


function ClearTimebtn(event){
    var id=event.target.id.replace('Clearbtn_time','');
    document.getElementById(`start_time${id}`).value="";
    document.getElementById(`end_time${id}`).value="";
}

function NoTimebtn(event){

    var id=event.target.id.replace('NoTimebtn_time','');
    
    console.log(clearbtn_start,clearbtn_end);
    var start_time=clearbtn_start;
    var end_time=clearbtn_end;
    console.log(start_time,end_time);
    let Timeli=document.getElementById(`Timeli${id}`);
    if((start_time==undefined&&end_time==undefined)||(start_time==""&&end_time=="")){
        Timeli.innerHTML=`
        <div class="flexcolumn">
            <label id="start_time${id}" style="margin:3px 0px;font-size: 16px;text-align: center;">--:--</label>
            <label id="end_time${id}" style="margin:3px 0px;font-size: 16px;text-align: center;">--:--</label>
            <input style="margin: 0px 20px;" id="Editbtn_time${id}" onclick='EditTimebtn(event)' type="button" value="修改" >
        </div>
        `;
    }else{
        Timeli.innerHTML=`
        <div class="flexcolumn">
            <label id="start_time${id}" style="margin:3px 0px;font-size: 16px;text-align: center;">${start_time}</label>
            <label id="end_time${id}" style="margin:3px 0px;font-size: 16px;text-align: center;">${end_time}</label>
            <input style="margin: 0px 20px;" id="Editbtn_time${id}" onclick='EditTimebtn(event)' type="button" value="修改" >
        </div>
        `;
    }
    disabledfalse_btn();
}

function disabledtrue_btn(){
    for(var i=0;i<6;i++){
        let Editbtn_disabled=document.getElementById(`Editbtn_time${i}`);
        Editbtn_disabled.disabled=true;
    }
}

function disabledfalse_btn(){
    for(var i=0;i<6;i++){
        let Editbtn=document.getElementById(`Editbtn_time${i}`);
        Editbtn.disabled=false;
    }
}

