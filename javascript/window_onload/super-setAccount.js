window.onload = function() {
    
    let content_in=document.getElementById('content_in');
        content_in.innerHTML=`
            <div class="nav">
                <div class="nav_field flexrow">
                    <a class="on" href="/admin管理者/super-setAccount.html">帳號管理</a>
                    <a class="off" href="/admin管理者/super-audit.html">房屋審核</a>
                </div>
            </div>
            <div class="Accountcentent flexcenter">
                <table id="superaccount_table">
                <tr>
                        <th>編號</th>
                        <th>帳號</th>
                        <th>身分</th>
                        <th>信用分數</th>
                        <th>房屋數</th>
                        <th>檢舉次數</th>
                        <th style="width: 56px;"></th>
                </tr>
                <tr><td colspan="8" style="padding: 0px;"><hr></td></tr>

                    
                </table>
            </div>
        `

        viewallAccount();
        handleLogoutData(LoginData);
        console.log(LoginData);
    // LoginData = JSON.parse(sessionStorage.getItem('LoginData'));   
};