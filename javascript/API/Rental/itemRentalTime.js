function addRentalTime(availableTimesArray,id){
    
    let PublishercanTime=document.createElement('li');
    PublishercanTime.innerHTML=`
        <input type='button'  id='changetime${id}' class='Choose_time_btn_true' value='${availableTimesArray}'/>
    `;
    Choosetime.appendChild(PublishercanTime);

    
    
}


function ViewBookOfDay(){
    let Choosetime=document.getElementById('Choosetime');
    let changedata=document.getElementById('changedata');
    console.log(goitem_id);
    console.log(changedata.value);

    let formdata=new FormData();
    formdata.append('rental_id',goitem_id);
    formdata.append('date',changedata.value);

    axios({
        method:'post',
        url:'http://localhost:5190/api/Time/BookOfDay',
        header:{
            'Content-Type':'multipart/form-data',
            'Accept':'application/json',
            //"Authorization": `Bearer ${LoginData.token}`, 
        },data:formdata,
    }).then(( { data } ) => {
        Choosetime.innerHTML=``;
        console.log(data);
        var rental_Id=0;
        
        if(LoginData!=null){
            if(LoginData.members.identity==2){
                console.log(data);
                getReservedData(data.availableTimesArray);
            }
        }
        console.log(data.availableTimesArray==null);
        if(data.availableTimesArray==""){
            Choosetime.innerHTML=`<li style='width:100%;font-size:16px;color: #f00;'>無預約時間</li>`
        }else{
            var canTime=data.availableTimesArray;
            canTime.forEach(function(){
                
                addRentalTime(canTime[rental_Id],rental_Id);
    
                let changetime=document.getElementById(`changetime${rental_Id}`);
                changetime.onclick=function(){
                    if(changetime.className=='Choose_time_btn_true'){
                        for(var i=0;i<data.availableTimesArray.length;i++){
                            console.log(i);
                            let changetime=document.getElementById(`changetime${i}`);
                            if(changetime.classList!='Choose_time_btn_stop'){
                                changetime.classList='Choose_time_btn_true';
                            }
                        };
                        changetime.classList='Choose_time_btn_false';
                    }else if(changetime.className=='Choose_time_btn_false'){
                        changetime.classList='Choose_time_btn_true';
                    }
                }
                
                rental_Id++;
            });
        }

        onclick_reservedate(data.availableTimesArray);

    }).catch(error => {
        console.log(error);
    })
}

function getReservedData(availableTimesArray){
    axios({
        method: 'get',
        url: 'http://localhost:5190/api/List/',
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            "Authorization": `Bearer ${LoginData.token}`, 
        },
    })
    .then(({ data }) => {

            console.log(data);
            var id=0;
            let renservedData='';
            console.log(changedata.value);

            data.dataList1.forEach(function(){
                console.log(data.dataList1[id].bookdate);
                console.log(data.dataList1[id].bookdate==changedata.value)
                if(data.dataList1[id].bookdate==changedata.value){
                    renservedData+=data.dataList1[id].booktime+';';
                    console.log(renservedData);
                }
                id++;
            });
            console.log(data.dataList1);
            console.log(availableTimesArray);
            for(var i=0;i<availableTimesArray.length;i++){
                let changetime=document.getElementById(`changetime${i}`);
                console.log(changetime.value);
                console.log(renservedData.includes(changetime.value));
                if(renservedData.includes(changetime.value)){
                    changetime.classList='Choose_time_btn_stop';
                    changetime.disabled = true;
                }else{
                    changetime.classList='Choose_time_btn_true';
                    changetime.disabled = false;
                }
            }
        

    }).catch(error => {
    console.error(error);

});
}



function onclick_reservedate(availableTimesArray){
    let text =document.getElementById('text');
    reservedate.onclick=function(){
        let time;

        // if(time==null){
        //     reserveText.style.display='block';
        //     createMask();
        //     text.innerHTML='預約失敗';
        // }

        for(var i=0;i<availableTimesArray.length;i++){
            let changetime=document.getElementById(`changetime${i}`);
            if(changetime.className=='Choose_time_btn_false'){
                time=changetime.value;
                
            }
        }
    
       
        if(LoginData!=null){
            let changedata=document.getElementById('changedata');
            console.log(changedata.value);
            console.log(time);
            console.log(goitem_id);
            axios({
                method:'post',
                url:'http://localhost:5190/api/List/SentBookingCheck',
                headers:{
                    "Content-Type": "application/json",
                    "Accept": "application/json",
                    "Authorization": `Bearer ${LoginData.token}`, 
                },data:{
                    bookdate:changedata.value,
                    booktime:time,
                    rental_id:goitem_id,
                },
            }).then(({ data }) => {
                if(data=='超過預約期間，不可預約'){
                    text.innerHTML='超過預約期間，不可預約';
                }else{
                    console.log(data);
                    text.innerHTML='預約成功，請等待房東確認';
                    
                }
                reserveText.style.display='block';
                createMask();
                
    
            }).catch(error => {
            // 处理请求过程中的错误
            console.error(error);
                reserveText.style.display='block';
                createMask();
                text.innerHTML='預約失敗';
            }); 
        }else{
            login.style.display='block';
            createMask();
        }
    }
    deleteX_btn.onclick=function(){
        reserveText.style.display='none';
        deleteMask();
        text.innerHTML='';
        location.reload();
    }
}
