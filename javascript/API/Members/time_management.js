


let item_content=document.getElementById('item_content');
function addtime_management(data,changedate){
    
    let item_data=document.createElement('div');
    changedate=changedate.replace(/\//g, '-').replace(/\b(\d)\b/g, '0$1');
    console.log(changedate);
    console.log(data.bookdate);
    if(changedate==data.bookdate){
        item_data.classList='flexbetween item_content';
        item_data.innerHTML=`
    
        <div class="item_content_img"><img width="100%" src="/image/1.webp"></div>
        <div class="flexcolumn">
            <span class="text1">${data.title}</span>
            <span class="text2">${data.bookdate} ${data.booktime}</span>
            <span class="text5">${data.address}</span>
            <div class="flexbetween"><span class="text3">出租者：${data.publisher}</span></div>
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
        deleteBook(booking);
        
        }
    }
}

function viewtime_management(changedate){
    item_content.innerHTML=``;
    axios({
        method:'get',
        url:'http://localhost:5190/api/List/',
        headers:{
            "Content-Type": "application/json",
            "Accept": "application/json",
            "Authorization": `Bearer ${LoginData.token}`,
        },
    }).then(({ data })=> {
        var id=0;
        data.forEach(function(){
            addtime_management(data[id],changedate);
            id++;
        });
        console.log(data);
        
    }).catch(error=>{
        console.error(error);
    });
}

