window.onload = function() {
    
    console.log(LoginData);
    // if(LoginData==null){
        // let content_in=document.getElementById('content_in');
        // content_in.innerHTML='請先登入';
        // content_in.style.textAlign='center';
    // }else{
    //     let content_in=document.getElementById('content_in');
    //     content_in.innerHTML=`<div class="nav flexbetween">
    //     <div class="nav_field flexrow">
    //         <a class="off" href="/publisher房東/BG_up.html">上架</a>
    //         <a class="off" href="/publisher房東/BG_down.html">下架</a>
    //         <a class="off" href="/publisher房東/BG_audit.html">審核中</a>
    //         <a class="on" href="/publisher房東/BG_date.html">設定可預約時間</a>
    //     </div>
    //     <a href="/publisher房東/createitem.html"><button>新增房屋</button></a>
    // </div>
    // <div class="timecentent flexcenter">
    //     <table>
    //         <tr><td colspan="8" class="annotation">註:此處設定的時間為統一時間，如需調單一時間請去<a href="/publisher房東/time_management.html">時間管理</a>調整</td></tr>
    //         <tr>
    //                 <th>星期</th>
    //                 <th style="width: 56px;"></th>
    //                 <th>時間段1</th>
    //                 <th>時間段2</th>
    //                 <th>時間段3</th>
    //                 <th>時間段4</th>
    //                 <th>時間段5</th>
    //                 <th>時間段6</th>
    //         </tr>
    //         <tr><td colspan="8" style="padding: 0px;"><hr></td></tr>
    //         <tr>
    //             <td><div class="week">一</div></td>
    //             <td class="flexcolumn" style="width: 56px;">
    //                 <div class="textright">開始：</div>
    //                 <div class="textright">結束：</div>
    //             </td>
    //             <td>
    //                 <div><input type="time"></div>
    //                 <div><input type="time"></div>
    //             </td>
    //             <td>
    //                 <div><input type="time"></div>
    //                 <div><input type="time"></div>
    //             </td>
    //             <td>
    //                 <div><input type="time"></div>
    //                 <div><input type="time"></div>
    //             </td>
    //             <td>
    //                 <div><input type="time"></div>
    //                 <div><input type="time"></div>
    //             </td>
    //             <td>
    //                 <div><input type="time"></div>
    //                 <div><input type="time"></div>
    //             </td>
    //             <td>
    //                 <div><input type="time"></div>
    //                 <div><input type="time"></div>
    //             </td>
    //         </tr>
    //         <tr><td colspan="8" style="padding: 0px;"><hr></td></tr>
    //         <tr>
    //             <td><div class="week">二</div></td>
    //             <td class="flexcolumn" style="width: 56px;">
    //                 <div class="textright">開始：</div>
    //                 <div class="textright">結束：</div>
    //             </td>
    //             <td>
    //                 <div><input type="time"></div>
    //                 <div><input type="time"></div>
    //             </td>
    //             <td>
    //                 <div><input type="time"></div>
    //                 <div><input type="time"></div>
    //             </td>
    //             <td>
    //                 <div><input type="time"></div>
    //                 <div><input type="time"></div>
    //             </td>
    //             <td>
    //                 <div><input type="time"></div>
    //                 <div><input type="time"></div>
    //             </td>
    //             <td>
    //                 <div><input type="time"></div>
    //                 <div><input type="time"></div>
    //             </td>
    //             <td>
    //                 <div><input type="time"></div>
    //                 <div><input type="time"></div>
    //             </td>
    //         </tr>
    //         <tr><td colspan="8" style="padding: 0px;"><hr></td></tr>
    //         <tr>
    //             <td><div class="week">三</div></td>
    //             <td class="flexcolumn" style="width: 56px;">
    //                 <div class="textright">開始：</div>
    //                 <div class="textright">結束：</div>
    //             </td>
    //             <td>
    //                 <div><input type="time"></div>
    //                 <div><input type="time"></div>
    //             </td>
    //             <td>
    //                 <div><input type="time"></div>
    //                 <div><input type="time"></div>
    //             </td>
    //             <td>
    //                 <div><input type="time"></div>
    //                 <div><input type="time"></div>
    //             </td>
    //             <td>
    //                 <div><input type="time"></div>
    //                 <div><input type="time"></div>
    //             </td>
    //             <td>
    //                 <div><input type="time"></div>
    //                 <div><input type="time"></div>
    //             </td>
    //             <td>
    //                 <div><input type="time"></div>
    //                 <div><input type="time"></div>
    //             </td>
    //         </tr>
    //         <tr><td colspan="8" style="padding: 0px;"><hr></td></tr>
    //         <tr>
    //             <td><div class="week">四</div></td>
    //             <td class="flexcolumn" style="width: 56px;">
    //                 <div class="textright">開始：</div>
    //                 <div class="textright">結束：</div>
    //             </td>
    //             <td>
    //                 <div><input type="time"></div>
    //                 <div><input type="time"></div>
    //             </td>
    //             <td>
    //                 <div><input type="time"></div>
    //                 <div><input type="time"></div>
    //             </td>
    //             <td>
    //                 <div><input type="time"></div>
    //                 <div><input type="time"></div>
    //             </td>
    //             <td>
    //                 <div><input type="time"></div>
    //                 <div><input type="time"></div>
    //             </td>
    //             <td>
    //                 <div><input type="time"></div>
    //                 <div><input type="time"></div>
    //             </td>
    //             <td>
    //                 <div><input type="time"></div>
    //                 <div><input type="time"></div>
    //             </td>
    //         </tr>
    //         <tr><td colspan="8" style="padding: 0px;"><hr></td></tr>
    //         <tr>
    //             <td><div class="week">五</div></td>
    //             <td class="flexcolumn" style="width: 56px;">
    //                 <div class="textright">開始：</div>
    //                 <div class="textright">結束：</div>
    //             </td>
    //             <td>
    //                 <div><input type="time"></div>
    //                 <div><input type="time"></div>
    //             </td>
    //             <td>
    //                 <div><input type="time"></div>
    //                 <div><input type="time"></div>
    //             </td>
    //             <td>
    //                 <div><input type="time"></div>
    //                 <div><input type="time"></div>
    //             </td>
    //             <td>
    //                 <div><input type="time"></div>
    //                 <div><input type="time"></div>
    //             </td>
    //             <td>
    //                 <div><input type="time"></div>
    //                 <div><input type="time"></div>
    //             </td>
    //             <td>
    //                 <div><input type="time"></div>
    //                 <div><input type="time"></div>
    //             </td>
    //         </tr>
    //         <tr><td colspan="8" style="padding: 0px;"><hr></td></tr>
    //         <tr>
    //             <td><div class="week">六</div></td>
    //             <td class="flexcolumn" style="width: 56px;">
    //                 <div class="textright">開始：</div>
    //                 <div class="textright">結束：</div>
    //             </td>
    //             <td>
    //                 <div><input type="time"></div>
    //                 <div><input type="time"></div>
    //             </td>
    //             <td>
    //                 <div><input type="time"></div>
    //                 <div><input type="time"></div>
    //             </td>
    //             <td>
    //                 <div><input type="time"></div>
    //                 <div><input type="time"></div>
    //             </td>
    //             <td>
    //                 <div><input type="time"></div>
    //                 <div><input type="time"></div>
    //             </td>
    //             <td>
    //                 <div><input type="time"></div>
    //                 <div><input type="time"></div>
    //             </td>
    //             <td>
    //                 <div><input type="time"></div>
    //                 <div><input type="time"></div>
    //             </td>
    //         </tr>
    //         <tr><td colspan="8" style="padding: 0px;"><hr></td></tr>
    //         <tr>
    //             <td><div class="week">日</div></td>
    //             <td class="flexcolumn" style="width: 56px;">
    //                 <div class="textright">開始：</div>
    //                 <div class="textright">結束：</div>
    //             </td>
    //             <td>
    //                 <div><input type="time"></div>
    //                 <div><input type="time"></div>
    //             </td>
    //             <td>
    //                 <div><input type="time"></div>
    //                 <div><input type="time"></div>
    //             </td>
    //             <td>
    //                 <div><input type="time"></div>
    //                 <div><input type="time"></div>
    //             </td>
    //             <td>
    //                 <div><input type="time"></div>
    //                 <div><input type="time"></div>
    //             </td>
    //             <td>
    //                 <div><input type="time"></div>
    //                 <div><input type="time"></div>
    //             </td>
    //             <td>
    //                 <div><input type="time"></div>
    //                 <div><input type="time"></div>
    //             </td>
    //         </tr>
    //         <tr>
    //             <td colspan="8">
    //                 <button class="save">保存</button>
    //             </td>
    //         </tr>
    //     </table>
    // </div>`;
        
        
        handleLogoutData(LoginData);
        console.log(LoginData);
        // LoginData = JSON.parse(sessionStorage.getItem('LoginData'));  
        postBookTime();
        

    // }


    
    
};