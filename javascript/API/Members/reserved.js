

let deleteX_btn=document.getElementById('deleteX_btn');
let delete_btn=document.getElementById('delete_btn');
let nodelete_btn=document.getElementById('nodelete_btn');
let delete_confirm=document.getElementById('delete_confirm');
let content_in=document.getElementById('content_in');
function viewAllReserved(data){
    
    let item_content=document.createElement('div');
    item_content.classList='flexbetween item_content';
    // if(data.isDelete){
        
    // }
    item_content.innerHTML=`
                <div class="item_content_img"><img width="100%" src="${data.img1}"></div>
                <div class="flexcolumn" style='width:500px'>
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