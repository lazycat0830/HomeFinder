window.onload = function() {
    console.log(LoginData);
    if(LoginData==null){
        let content_in=document.getElementById('content_in');
        content_in.innerHTML='請先登入';
        content_in.style.textAlign='center';
    }else{
        let content_in=document.getElementById('content_in');
        content_in.innerHTML=`<div class="signup">
        <div class="inner2 flexcolumn" >
            <div class="al"><label>舊密碼：</label><div><input type="password" id="Password"></div></div>
            <div class="al"><label>新密碼：</label><div><input type="password" id="NewPassword"></div></div>
            <div class="al"><label>新密碼確認：</label><div><input type="password" id="CheckNewPassword"></div></div>
        </div>
        <div id="validatatext_signup" style="font-size: 1rem;text-align: center;color: #ff0000;font-weight: bolder;padding-bottom: 20px;"></div>
        <div class="inner3">
            <input type="button" value="修改" id="submit"/><br>
            <input type="reset" value="清除" id="reset"/>
        </div>
    
</div>`;

        oneAccount(LoginData);
        handleLogoutData(LoginData);
        console.log(LoginData);
        LoginData = JSON.parse(sessionStorage.getItem('LoginData'));   
    }
    
    
};