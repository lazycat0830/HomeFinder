window.onload = function() {
    console.log(LoginData);
    if(LoginData!=null){
        avatarimg.src=`${LoginData.members.img}`;
    }else{
        avatarimg.src='/image/default_avatar.jpeg';
    }

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
        <input class="updata_submit" onclick="submit()" value="修改" type="button"></br>
                        <input class="updata_reset" onclick="reset()" value="清除" type="button">

        </div>
    
</div>`;
        
        handleLogoutData(LoginData);
        console.log(LoginData);

        
        // EditPassword(LoginData);
    }
    
    
};