
let validataText_time=document.getElementById('validataText_time');
let deleteX_btn=document.getElementById('deleteX_btn');
let delete_btn=document.getElementById('delete_btn');
let nodelete_btn=document.getElementById('nodelete_btn');
let delete_confirm=document.getElementById('delete_confirm');
let item_content=document.getElementById('item_content');
function addtime_management(data){
    
    let item_data=document.createElement('div');
    
    console.log(data);
    
        item_data.classList='flexbetween item_content';
        item_data.innerHTML=`
    
        <div class="item_content_img"><img width="100%" src="${data.img1}"></div>
        <div class="flexcolumn" style='width:500px'>
            <span class="text1">${data.title}</span>
            <span class="text2">${data.bookdate} ${data.booktime}</span>
            <span class="text5">${data.address}</span>
            <span class="text3">預約者：${data.renter}</span>
        </div>
        <div class="flexcolumn">
            <a href='https://www.google.com/maps/search/?api=1&query=${data.address}' class="flexcenter" style="padding-bottom: 20px;"><img height="60px" src="/image/圖片2.png"></a>
            <button id='deleteBooking_${data.booklist_id}' class="cancel_appointment_btn">取消預約</button>
        </div>
    
        `;
    
        item_content.appendChild(item_data);
        let booking;
        let deleteBooking=document.getElementById(`deleteBooking_${data.booklist_id}`)
        booking=deleteBooking.id.replace('deleteBooking_','')
        console.log(booking);
        deleteBooking.onclick=function(){
            createMask();
            delete_confirm.style.display='block';
        }
        delete_btn.onclick=function(){
            deleteBook(booking);
        }
}
nodelete_btn.onclick=function(){
    deleteMask();
    delete_confirm.style.display='none';
}
    
deleteX_btn.onclick=function(){
    deleteMask();
    delete_confirm.style.display='none';
}

function viewtime_management(changedate){
    // getDataTimeinput(changedate);
    
    item_content.innerHTML=``;
    validataText_time.style.display='none';
    axios({
        method:'get',
        url:'http://localhost:5190/api/List/',
        headers:{
            "Content-Type": "application/json",
            "Accept": "application/json",
            "Authorization": `Bearer ${LoginData.token}`,
        },
    }).then(({ data })=> {
        
        
        console.log(data);
        if(data.dataList0==""){
            validataText_time.style.display='block';
        }else{
            var i=0,id=0;
            let bookdateTime='';
            data.dataList1.forEach(function(){
                bookdateTime+=data.dataList1[id].booktime+',';
                id++;
            });
            changedate=changedate.replace(/\//g, '-').replace(/\b(\d)\b/g, '0$1');
            var validatatext=false;
            data.dataList1.forEach(function(){
                console.log(data.dataList1[i].bookdate);
                console.log(changedate);
                console.log(data.dataList1[i].bookdate==changedate);
                
                if(data.dataList1[i].bookdate==changedate){
                    validatatext=false;
                    console.log(bookdateTime);
                    console.log(bookdateTime.includes(data.dataList1[i].booktime));
                    
                    if(bookdateTime.includes(data.dataList1[i].booktime)){
                        validatatext=true;
                        addtime_management(data.dataList1[i]);
                        
                    }
                    
                }
                i++;
            });
            if(validatatext){
                validataText_time.style.display='none';
                
            }else{
                validataText_time.style.display='block';
                
            }
           
            view_AjaxEdittime(changedate,validatatext);
        }
    }).catch(error=>{
        console.error(error);
    });
}

// function getDataTimeinput(changedate){
//     console.log('BookOfDay date:',changedate.replace(/\//g, '-').replace(/\b(\d)\b/g, '0$1'));
//     console.log('BookOfDay account:',LoginData.members.account);

//     let formData=new FormData();
//     formData.append('date',changedate.replace(/\//g, '-').replace(/\b(\d)\b/g, '0$1'));
//     formData.append('account',LoginData.members.account);

//     axios({
//         method:'post',
//         url:'http://localhost:5190/api/Time/BookOfDayTool',
//         headers:{
//             "Content-Type": "multipart/form-data",
//             "Accept": "application/json",
//             "Authorization": `Bearer ${LoginData.token}`,
//         },data:formData,
//     }).then(({ data })=> {
//         let Edittime=document.getElementById('Edittime');
//         for(var i=0;i<7;i++){
//             let addgetTime=document.createElement('li');
//             addgetTime.id=`Timeli${i}`;
//             addgetTime.innerHTML=`
//             <div class="flexcolumn">
//                 <label id="start_time${i}" style="font-size: 16px;text-align: center;">--:--</label>
//                 <label id="end_time${i}" style="font-size: 16px;text-align: center;">--:--</label>
//                 <input style="margin: 0px 20px;" id="Editbtn_time${i}" type="button"  value="修改">
//             </div>
//             `;
//         Edittime.appendChild(addgetTime);

//             let EditTimebtn=document.getElementById(`Editbtn_time${i}`);
//             EditTimebtn.onclick=function(event){
//                 console.log(event.target);
//                 addgetTime.innerHTML=`
//                 <div class="flexcolumn">
//                     <input id="start_time${event.target.id.replace('Editbtn_time','')}" type='time' style="font-size: 16px;text-align: center;"/>
//                     <input id="end_time${event.target.id.replace('Editbtn_time','')}" type='time' style="font-size: 16px;text-align: center;"/>
//                     <input style="margin: 0px 20px;" id="Savebtn_time${event.target.id.replace('Editbtn_time','')}" onclick='SaveTimebtn(event,${changedate})' type="button"  value="完成">
//                     <input style="margin: 0px 20px;" id="Clearbtn_time${event.target.id.replace('Editbtn_time','')}" onclick='ClearTimebtn(event,${changedate})' type="button"  value="清除">
//                 </div>
//                 `;
//                 let list_onetime=data.availableTimesArray[event.target.id.replace('Editbtn_time','')].split('-');
//                 let start_time=document.getElementById(`start_time${event.target.id.replace('Editbtn_time','')}`);
//                 let end_time=document.getElementById(`end_time${event.target.id.replace('Editbtn_time','')}`);
//                 start_time.value=list_onetime[0];
//                 end_time.value=list_onetime[1];
//             }
//         }
//         console.log(data.availableTimesArray);
//         var id=0;
//         data.availableTimesArray.forEach(function(){
//             if(data.availableTimesArray[id]!=""){
//                 let list_onetime=data.availableTimesArray[id].split('-');
//                 let start_time=document.getElementById(`start_time${id}`);
//                 let end_time=document.getElementById(`end_time${id}`);
//                 start_time.innerHTML=list_onetime[0];
//                 end_time.innerHTML=list_onetime[1];

//             }
//             id++;
//         });



//     //     if(monlist!=""){
//     //         monlist.forEach(function(){
//     //        console.log(monlist[i]);
//     //        let monlist_onetime=monlist[i].split('-');
//     //        console.log(monlist_onetime);
//     //        let monup=document.getElementById(`monup${i+1}`);
//     //        monup.value=monlist_onetime[0];
//     //        let mondown=document.getElementById(`mondown${i+1}`);
//     //        mondown.value=monlist_onetime[1];
//     //        i++;
//     //    });

//     }).catch(error=>{
//         console.log(error);
//     })
// }


// function postoneTime(){


// }

// function SaveTimebtn(event,changedate){
//     console.log(event.target.id);
//     var id=event.target.id.replace('Savebtn_time','');
//     let data;
//     for(var i=0;i<6;i++){
//        let start=document.getElementById(`start_time${i}`);
//        let end=document.getElementById(`end_time${i}`);
//        data+=start+'-'+end+',';

//     }
//     console.log(changedate.replace(/\//g, '-').replace(/\b(\d)\b/g, '0$1'));
//     console.log(data);
//     axios({
//         method:'post',
//         url:'http://localhost:5190/api/Time/SetSpecialTime',
//         headers:{
//             "Content-Type": "application/json",
//             "Accept": "application/json",
//             "Authorization": `Bearer ${LoginData.token}`,
//         },data:{
//             date:changedate.replace(/\//g, '-').replace(/\b(\d)\b/g, '0$1'),
//             newtime:'',
//         },
//     }).then(({ data })=> {
//         console.log(data);


//     }).catch(error=>{
//         console.log(error);
//     })
// }