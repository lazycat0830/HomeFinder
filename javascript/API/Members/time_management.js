
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
    
        <a onclick="onclickitem('${data.rental_id}')" class="item_content_img"><img width="100%" src="${data.img1}"></a>
        <div class="flexcolumn" style='width:500px'>
            <span class="text1">${data.title}</span>
            <span class="text2">${data.bookdate} ${data.booktime}</span>
            <span class="text5">${data.address}</span>
            <a onclick="onclickAccount('${data.renter}')" class="text3" style="cursor: pointer;">預約者：${data.renter}</a>
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
        let booldata=false;
        
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
                    booldata=false;
                    console.log(bookdateTime);
                    console.log(bookdateTime.includes(data.dataList1[i].booktime));
                    if(bookdateTime.includes(data.dataList1[i].booktime)){
                        validatatext=true;
                        booldata=true;
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
           
        
        }
        view_AjaxEdittime(booldata);
    }).catch(error=>{
        console.error(error);
    });
}

