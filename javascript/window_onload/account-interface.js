window.onload = function() {
    console.log(LoginData);
    if(LoginData==null){
        let content_in=document.getElementById('content_in');
        content_in.innerHTML='請先登入';
        content_in.style.textAlign='center';
    }else{
        let content_in=document.getElementById('content_in');
        content_in.innerHTML=`<div id="content_in" >
        <div class="Accont_content_100w flexcenter">
            <div class="Accont_content flexrow">
                <div class="Accountimg">
                    <img id="oneAccountimg">
                </div>
                <div class="Accounttext flexcolumn">
                    <span id="oneAccountName" class="flexbetween"></span>
                    <span id="oneAccountPhome"></span>
                    <span id="oneAccountEmail"></span>
                </div>
                <div id="Account_updataAccount_btn" class="flexend">

                </div>
                <div>
                    <button id="report_btn" class="report_btn">檢舉</button>
                </div>
            </div>
        </div>
        <div class="Account_collect_title">租屋</div>
        <div class="Account_collect">
            <div class="Housing_Profile">
                <div class="Housing_Profile_content flexcolumn">
                    <a href="/通用/item.html"><div class="Houseimg relative">
                        <img width="100%" src="/image/1.webp">
                        <a id="likebtn" class="absolute Like"><img id="like" width="30px" src="/image/heart.png"></a>
                    </div></a>
                    <span class="text1">免仲介費/全新完工/獨洗曬/嚴選房客</span>
                    <span class="text2 flexbetween">出租者： 顏小姐 <span style="color: #e48500;font-size: 12px;font-weight: bolder;">尚未有信用分數</span></span>
                    <span class="text3">上架日期： 2023/03/27 | 15:23</span>
                    <span class="text4">價格： <span style="color: #ff0000;font-weight: bolder;">11000<span style="font-size: 12px;font-weight: bolder;">元/月</span></span></span>
                </div>
            </div>
            
            
            
        </div>
    </div>`;
        oneAccount(LoginData);
        handleLogoutData(LoginData);
        console.log(LoginData);
        LoginData = JSON.parse(sessionStorage.getItem('LoginData'));   
    }
    
    
};