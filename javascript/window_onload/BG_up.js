let content_td7_div_input3;
var all=0;

window.onload = function() {

    console.log(LoginData);
    // if(LoginData==null){
    //     let content_in=document.getElementById('content_in');
    //     content_in.innerHTML='請先登入';
    //     content_in.style.textAlign='center';
    // }else{
    //     let content_in=document.getElementById('content_in');
    //     content_in.innerHTML=`<div class="nav flexbetween" >
    //     <div class="nav_field flexrow">
            
    //             <a class="on" href="/publisher房東/BG_up.html">上架</a>
    //             <a class="off" href="/publisher房東/BG_down.html">下架</a>
    //             <a class="off" href="/publisher房東/BG_audit.html">審核中</a>
    //             <a class="off" href="/publisher房東/BG_date.html">設定可預約時間</a>
    //         </div>
    //         <a href="/publisher房東/createitem.html"><button>新增房屋</button></a>
        
    // </div>
    // <div class="Accountcentent flexcenter">
    //     <table id="audittable">
    //         <tr>
    //                 <th>編號</th>
    //                 <th>圖片</th>
    //                 <th>標題</th>
    //                 <th>價錢</th>
    //                 <th>位置</th>
    //                 <th>更新時間</th>
    //                 <th>修改</th>
                    
    //         </tr>
    //         <tr><td colspan="8" style="padding: 0px;"><hr></td></tr>
            
    //     </table>
    // </div>`;
        viewallupdata();
        handleLogoutData(LoginData);
        console.log(LoginData);
        // LoginData = JSON.parse(sessionStorage.getItem('LoginData'));   

        


} 