window.onload = function() {
    if(LoginData==null){
        let content_in=document.getElementById('content_in');
        content_in.innerHTML='請先登入';
        content_in.style.textAlign='center';
    }else{
        let content_in=document.getElementById('content_in');
        content_in.innerHTML=`
        <div class="nav">
                <div class="nav_field flexrow">
                    <a class="off" href="/admin管理者/super-setAccount.html">帳號管理</a>
                    <a class="on" href="/admin管理者/super-audit.html">房屋審核</a>
                </div>
            </div>
            <div class="reviewcentent flexcenter">
                <table id="superaudit_table">
                    <tr>
                            <th>編號</th>
                            <th>房屋名稱</th>
                            <th>價錢</th>
                            <th>地址</th>
                            <th>房屋內容</th>
                            <th>出租者</th>
                            <th>審核</th>
                    </tr>
                    <tr><td colspan="8" style="padding: 0px;"><hr></td></tr>

                    
                </table>
            </div>
        `

        viewallRental();
        handleLogoutData(LoginData);
        console.log(LoginData);
        // LoginData = JSON.parse(sessionStorage.getItem('LoginData'));   
    }
    
    
};

