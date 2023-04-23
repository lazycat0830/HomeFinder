window.onload = function() {
    console.log(LoginData);
    if(LoginData==null){
        let content_in=document.getElementById('content_in');
        content_in.innerHTML='請先登入';
        
    }else{
        let content_in=document.getElementById('content_in');
        content_in.innerHTML=` <div class="Housing_Profile">
        <div class="Housing_Profile_content flexcolumn">
            <a href="/通用/item.html"><div class="Houseimg relative">
                <img width="100%" src="/image/1.webp">
                <a id="likebtn" class="absolute Like"><img id="like" width="30px" src="/image/like.png"></a>
            </div></a>
            <span class="text1">免仲介費/全新完工/獨洗曬/嚴選房客</span>
            <span class="text2">出租者： 顏小姐 <span style="color: #e48500;font-size: 12px;font-weight: bolder;">尚未有信用分數</span></span>
            <span class="text3">上架日期： 2023/03/27 | 15:23</span>
            <span class="text4">價格： <span style="color: #ff0000;font-weight: bolder;">11000<span style="font-size: 12px;font-weight: bolder;">元/月</span></span></span>
        </div>
    </div>
    `;

        
        handleLogoutData(LoginData);
        console.log(LoginData);
        LoginData = JSON.parse(sessionStorage.getItem('LoginData'));   

        }
    
    
};