




function viewAllReserved(){
    let content_in=document.getElementById('content_in');
    let item_content=document.createElement('div');
    item_content.classList='flexbetween item_content';
    item_content.innerHTML=`
                <div class="item_content_img"><img width="100%" src="/image/1.webp"></div>
                <div class="flexcolumn">
                    <span class="text1">免仲介費/全新完工/獨洗曬/嚴選房客</span>
                    <span class="text2">2023/03/27 10:00-11:30</span>
                    <span class="text5">地址：406台中市北屯區一新一街5巷2-14</span>
                    <div class="flexbetween"><span class="text3">出租者：顏小姐</span><span class="text4">尚未有信用分數</span></div>
                </div>
                <div class="flexcolumn">
                    <div class="flexcenter" style="padding-bottom: 20px;"><img height="60px" src="/image/圖片2.png"></div>
                    <button class="cancel_appointment_btn">取消預約</button>
                </div>
    `;
}