




function viewAllReserved(data){
    let content_in=document.getElementById('content_in');
    let item_content=document.createElement('div');
    item_content.classList='flexbetween item_content';
    if(data.isDelete){
        
    }
    item_content.innerHTML=`
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
    content_in.appendChild(item_content);
    let booking;
    let deleteBooking=document.getElementById(`deleteBooking_${data.booklist_id}`)
    booking=deleteBooking.id.replace('deleteBooking_','')
    console.log(booking);
    deleteBooking.onclick=function(){
        deleteBook(booking);
    }
}

function deleteBook(booking){
    axios({
        method:'post',
        url:'http://localhost:5190/api/List/CancelBooking',
        headers:{
            "Content-Type": "application/json",
            "Accept": "application/json",
            "Authorization": `Bearer ${LoginData.token}`,
        },data:{
            BookList_id:booking,
        },
    }).then(({ data })=> {
        console.log(data);
        
    }).catch(error=>{
        console.error(error);
    });
}