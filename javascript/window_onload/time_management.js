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


function view_AjaxEdittime(booldata){
    
    
    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function() {
        if (this.readyState === 4 && this.status === 200) {
            document.getElementById("AjaxEdittime").innerHTML = this.responseText;
            getDataTimeinput(booldata);
        }
    };
    
    xhttp.open("GET", "/publisher房東/Ajaxtime.html", true);
    xhttp.send();
}

function getDataTimeinput(booldata){
    console.log('BookOfDay date:',date.innerHTML.replace(/\//g, '-').replace(/\b(\d)\b/g, '0$1'));
    console.log('BookOfDay account:',LoginData.members.account);

    let formData=new FormData();
    formData.append('date',date.innerHTML.replace(/\//g, '-').replace(/\b(\d)\b/g, '0$1'));
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
                <label id="start_time${i}" style="font-size: 16px;text-align: center;">--:--</label>
                <label id="end_time${i}" style="font-size: 16px;text-align: center;">--:--</label>
                <input style="margin: 0px 20px;" id="Editbtn_time${i}" type="button"  value="修改">
            </div>
            `;
        Edittime.appendChild(addgetTime);

            let EditTimebtn=document.getElementById(`Editbtn_time${i}`);
            EditTimebtn.onclick=function(event){
                console.log(event.target);
                addgetTime.innerHTML=`
                <div class="flexcolumn">
                    <input id="start_time${event.target.id.replace('Editbtn_time','')}" type='time' style="font-size: 16px;text-align: center;"/>
                    <input id="end_time${event.target.id.replace('Editbtn_time','')}" type='time' style="font-size: 16px;text-align: center;"/>
                    <input style="margin: 0px 20px;" id="Savebtn_time${event.target.id.replace('Editbtn_time','')}" onclick='SaveTimebtn(event)' type="button"  value="完成">
                    <input style="margin: 0px 20px;" id="Clearbtn_time${event.target.id.replace('Editbtn_time','')}" onclick='ClearTimebtn(event)' type="button"  value="清除">
                    <input style="margin: 0px 20px;" id="noEditTimebtn_time${event.target.id.replace('Editbtn_time','')}"  type="button"  value="取消">
                </div>
                `;
                if(data.availableTimesArray[event.target.id.replace('Editbtn_time','')]!=undefined){
                    let list_onetime=data.availableTimesArray[event.target.id.replace('Editbtn_time','')].split('-');
                    let start_time=document.getElementById(`start_time${event.target.id.replace('Editbtn_time','')}`);
                    let end_time=document.getElementById(`end_time${event.target.id.replace('Editbtn_time','')}`);
                    start_time.value=list_onetime[0];
                    end_time.value=list_onetime[1];
                    
                    let noEditTimebtn_time=document.getElementById(`noEditTimebtn_time${event.target.id.replace('Editbtn_time','')}`);
                        noEditTimebtn_time.onclick=function(){
                            addgetTime.innerHTML=`
                        <div class="flexcolumn">
                            <label id="start_time${event.target.id.replace('Editbtn_time','')}" style="font-size: 16px;text-align: center;">${list_onetime[0]}</label>
                            <label id="end_time${event.target.id.replace('Editbtn_time','')}" style="font-size: 16px;text-align: center;">${list_onetime[1]}</label>
                            <input style="margin: 0px 20px;" id="Editbtn_time${event.target.id.replace('Editbtn_time','')}" type="button"  value="修改">
                        </div>
                        `;
                        for(var j=0;j<6;j++){
                            
                                let edit_timebtn=document.getElementById(`Editbtn_time${j}`)
                                console.log(edit_timebtn);
                                edit_timebtn.disabled=false;
                            
                        }
                        }
                        for(var j=0;j<6;j++){
                            if(j!=event.target.id.replace('Editbtn_time','')){
                                let edit_timebtn=document.getElementById(`Editbtn_time${j}`)
                                console.log(edit_timebtn);
                                edit_timebtn.disabled=true;
                            }
                        }
                }
                
                


            }
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
        });
        if(booldata){
            for(var j=0;j<6;j++){
                    let edit_timebtn=document.getElementById(`Editbtn_time${j}`)
                    console.log(edit_timebtn);
                    edit_timebtn.disabled=true;
                    document.getElementById('validataText_Ajaxtime').style.display='block';
            }
        }else{
            for(var j=0;j<6;j++){
                let edit_timebtn=document.getElementById(`Editbtn_time${j}`)
                console.log(edit_timebtn);
                edit_timebtn.disabled=false;
                document.getElementById('validataText_Ajaxtime').style.display='none';
        }
        }

    }).catch(error=>{
        console.log(error);
    })
}


function SaveTimebtn(event){
    window.onload();
    console.log(event.target.id);
    var id=event.target.id.replace('Savebtn_time','');
    console.log(id);
    let data='';
    for(var i=0;i<6;i++){
        if(i==id){
            let start=document.getElementById(`start_time${id}`).value;
            let end=document.getElementById(`end_time${id}`).value;
            console.log(start);
            console.log(end);
            if(start!=''&&end!=''){
                data+=start+'-'+end+';';
            }
        }else{
            let start=document.getElementById(`start_time${i}`).innerHTML;
            let end=document.getElementById(`end_time${i}`).innerHTML;
            data+=start+'-'+end+';';
        }
    }

    console.log(date.innerHTML.replace(/\//g, '-').replace(/\b(\d)\b/g, '0$1'));
    // console.log(changedate);
    // console.log(changedate.replace(/\//g, '-').replace(/\b(\d)\b/g, '0$1'));
    console.log(data.replace(/--:-----:--;/g,'').slice('0',-1));
    axios({
        method:'post',
        url:'http://localhost:5190/api/Time/SetSpecialTime',
        headers:{
            "Content-Type": "application/json",
            "Accept": "application/json",
            "Authorization": `Bearer ${LoginData.token}`,
        },data:{
            date:date.innerHTML.replace(/\//g, '-').replace(/\b(\d)\b/g, '0$1'),
            newtime:data.replace(/--:-----:--;/g,'').slice('0',-1),
        },
    }).then(({ data })=> {
        console.log(data);
        console.log(data.newtime.includes(';'));
        if(data.newtime!=""){
            if(data.newtime.includes(';')){
                var newtime=data.newtime.split(';');
                var newtime_id=newtime[id].split('-');
                console.log(newtime[id]);
                    addgetTime=document.getElementById(`Timeli${id}`)
                    addgetTime.innerHTML=`
                    <div class="flexcolumn">
                        <label id="start_time${id}" style="font-size: 16px;text-align: center;">${newtime_id[0]}</label>
                        <label id="end_time${id}" style="font-size: 16px;text-align: center;">${newtime_id[1]}</label>
                        <input style="margin: 0px 20px;" id="Editbtn_time${id}" type="button"  value="修改">
                    </div>
                    `;
            }else{
                var newtime_id=data.newtime.split('-');
                    addgetTime=document.getElementById(`Timeli${id}`)
                    addgetTime.innerHTML=`
                    <div class="flexcolumn">
                        <label id="start_time${id}" style="font-size: 16px;text-align: center;">${newtime_id[0]}</label>
                        <label id="end_time${id}" style="font-size: 16px;text-align: center;">${newtime_id[1]}</label>
                        <input style="margin: 0px 20px;" id="Editbtn_time${id}" type="button"  value="修改">
                    </div>
                    `;
            }
        }else{
            addgetTime=document.getElementById(`Timeli${id}`)
            addgetTime.innerHTML=`
                    <div class="flexcolumn">
                        <label id="start_time${id}" style="font-size: 16px;text-align: center;">--:--</label>
                        <label id="end_time${id}" style="font-size: 16px;text-align: center;">--:--</label>
                        <input style="margin: 0px 20px;" id="Editbtn_time${id}" type="button"  value="修改">
                    </div>
                    `;
        }
        for(var j=0;j<6;j++){
            if(j!=id){
                let edit_timebtn=document.getElementById(`Editbtn_time${j}`)
                console.log(edit_timebtn);
                edit_timebtn.disabled=false;
            }
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
