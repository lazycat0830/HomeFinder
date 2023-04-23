window.onload = function() {
    console.log(LoginData);
    if(LoginData==null){
        let content_in=document.getElementById('content_in');
        content_in.innerHTML='請先登入';
        content_in.style.textAlign='center';
        content_in.classList.remove('flexbetween');
    }else{
        let content_in=document.getElementById('content_in');
        content_in.innerHTML=`<div id="content_left">
        <div class="notifytitle">房屋通知</div>
        
        <div class="roll">
            <div class="Accountnotify ">
                <div class="flexrow background">
                    <div class="flexcolumn">
                        <div class="Accountnotify_img"><img width="100%" src="/image/98f1ad5373cccf33efac27876f088cb0ea46f127.jpg@760w_738h_progressive.webp"></div>
                        <div class="Accountnotify_imgAccount">User</div>
                    </div>
                    <div class="flexcolumn Accountnotify_text relative">
                        <span class="text1">已預約-房屋</span>
                        <span class="text2">內容</span>
                        <span class="text3">送出日期</span>
                        <div class="absolute" style="right: 10px;;color: #ff0000;font-weight: bolder;">new</div>
                    </div>
                </div>
            </div>
            <div class="Accountnotify ">
                <div class="flexrow background1">
                    <div class="flexcolumn">
                        <div class="Accountnotify_img"><img width="100%" height="100%" src="/image/98f1ad5373cccf33efac27876f088cb0ea46f127.jpg@760w_738h_progressive.webp"></div>
                        <div class="Accountnotify_imgAccount">User</div>
                    </div>
                    <div class="flexcolumn Accountnotify_text">
                        <span class="text1">已預約-房屋</span>
                        <span class="text2">內容</span>
                        <span class="text3">送出日期</span>
                    </div>
                </div>
            </div>
            <div class="Accountnotify ">
                <div class="flexrow background1">
                    <div class="flexcolumn">
                        <div class="Accountnotify_img"><img width="100%" height="100%" src="/image/98f1ad5373cccf33efac27876f088cb0ea46f127.jpg@760w_738h_progressive.webp"></div>
                        <div class="Accountnotify_imgAccount">User</div>
                    </div>
                    <div class="flexcolumn Accountnotify_text">
                        <span class="text1">已預約-房屋</span>
                        <span class="text2">內容</span>
                        <span class="text3">送出日期</span>
                    </div>
                </div>
            </div>
            <div class="Accountnotify ">
                <div class="flexrow background1">
                    <div class="flexcolumn">
                        <div class="Accountnotify_img"><img width="100%" height="100%" src="/image/98f1ad5373cccf33efac27876f088cb0ea46f127.jpg@760w_738h_progressive.webp"></div>
                        <div class="Accountnotify_imgAccount">User</div>
                    </div>
                    <div class="flexcolumn Accountnotify_text">
                        <span class="text1">已預約-房屋</span>
                        <span class="text2">內容</span>
                        <span class="text3">送出日期</span>
                    </div>
                </div>
            </div>
            
        </div>
    </div>
    <div id="content_right">
        <div class="notifytitle">評分通知</div>
        
        <div class="roll">
            <div class="Accountnotify ">
                <div class="flexrow background">
                    <div class="flexcolumn">
                        <div class="Accountnotify_img"><img width="100%" src="/image/98f1ad5373cccf33efac27876f088cb0ea46f127.jpg@760w_738h_progressive.webp"></div>
                        <div class="Accountnotify_imgAccount">User</div>
                    </div>
                    <div class="flexcolumn Accountnotify_text relative">
                        <span class="text1">{{User}}給予您評分</span>
                        <span class="text2">內容</span>
                        <span class="text3">送出日期</span>
                        <div class="absolute" style="right: 10px;;color: #ff0000;font-weight: bolder;">new</div>
                    </div>
                </div>
            </div>
        </div>
        
    </div>`;
        
        handleLogoutData(LoginData);
        console.log(LoginData);
        LoginData = JSON.parse(sessionStorage.getItem('LoginData'));   
    }
    
    
};