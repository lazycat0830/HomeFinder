window.onload = function() {
    console.log(LoginData);
    if(LoginData==null){
        let content_in=document.getElementById('content_in');
        content_in.innerHTML='請先登入';
        content_in.style.textAlign='center';
    }else{
        let content_in=document.getElementById('content_in');
        content_in.innerHTML=`<div class="selection_period flexcolumn">
        <div class="flexrow select_date_nav">
            <div class="beforeday"><a href="#"><</a></div>
            <div class="today">2023/03/26　星期日</div>
            <div class="afterday"><a href="#">></a></div>
        </div>
        <div class="flexcenter selection_period_margin">
            <div class="day">
                <div class="selection_period_title">日期</div>
                <div class="yearmonth flexcenter">
                    <select>
                        <option>2023年</option>
                        <option>2024年</option>
                        <option>2025年</option>
                        <option>2026年</option>
                        <option>2027年</option>
                        <option>2028年</option>
                    </select>
                    <select>
                        <option>1月</option>
                        <option>2月</option>
                        <option>3月</option>
                        <option>4月</option>
                        <option>5月</option>
                        <option>6月</option>
                        <option>7月</option>
                        <option>8月</option>
                        <option>9月</option>
                        <option>10月</option>
                        <option>11月</option>
                        <option>12月</option>
                    </select>
                </div>
                <div class="week">
                    <ul class="flexrow">
                        <li><div>一</div></li>
                        <li><div>二</div></li>
                        <li><div>三</div></li>
                        <li><div>四</div></li>
                        <li><div>五</div></li>
                        <li><div>六</div></li>
                        <li><div>日</div></li>
                    </ul>
                </div>
                <div class="calendar flexcolumn">
                    <ul class="flexrow">
                        <a style="cursor: not-allowed" href="#"><li>27</li></a>
                        <a href="#"><li>28</li></a>
                        <a href="#"><li>01</li></a>
                        <a href="#"><li>02</li></a>
                        <a href="#"><li>03</li></a>
                        <a href="#"><li>04</li></a>
                        <a href="#"><li>05</li></a>
                    </ul>
                    <ul class="flexrow">
                        <a href="#"><li>06</li></a>
                        <a href="#"><li>07</li></a>
                        <a href="#"><li>08</li></a>
                        <a href="#"><li>09</li></a>
                        <a href="#"><li>10</li></a>
                        <a href="#"><li>11</li></a>
                        <a href="#"><li>12</li></a>
                    </ul>
                    <ul class="flexrow">
                        <a href="#"><li>13</li></a>
                        <a href="#"><li>14</li></a>
                        <a href="#"><li>15</li></a>
                        <a href="#"><li>16</li></a>
                        <a href="#"><li>17</li></a>
                        <a href="#"><li>18</li></a>
                        <a href="#"><li>19</li></a>
                    </ul>
                    <ul class="flexrow">
                        <a href="#"><li>20</li></a>
                        <a href="#"><li>21</li></a>
                        <a href="#"><li>22</li></a>
                        <a href="#"><li>23</li></a>
                        <a href="#"><li>24</li></a>
                        <a href="#"><li>25</li></a>
                        <a href="#"><li>26</li></a>
                    </ul>
                    <ul class="flexrow">
                        <a href="#"><li>27</li></a>
                        <a href="#"><li>28</li></a>
                        <a href="#"><li>29</li></a>
                        <a href="#"><li>30</li></a>
                        <a href="#"><li>31</li></a>
                        <a href="#"><li>01</li></a>
                        <a href="#"><li>02</li></a>
                    </ul>
                    <ul class="flexrow">
                        <a href="#"><li>03</li></a>
                        <a href="#"><li>04</li></a>
                        <a href="#"><li>05</li></a>
                        <a href="#"><li>06</li></a>
                        <a href="#"><li>07</li></a>
                        <a href="#"><li>08</li></a>
                        <a href="#"><li>09</li></a>
                    </ul>
                </div>
            </div>
            <div class="time flexcolumn">
                <div class="selection_period_title">可預約時間</div>
                <table>
                    <tr class="flexbetween timepadding">
                        <td>07:00</td>
                        <td>-</td>
                        <td>08:30</td>
                        <td><input type="button" value="修改"></td>
                    </tr>
                    <tr class="flexbetween timepadding">
                        <td>07:00</td>
                        <td>-</td>
                        <td>08:30</td>
                        <td><input type="button" value="修改"></td>
                    </tr>
                    <tr class="flexbetween timepadding">
                        <td>07:00</td>
                        <td>-</td>
                        <td>08:30</td>
                        <td><input type="button" value="修改"></td>
                    </tr>
                    <tr class="flexbetween timepadding">
                        <td>07:00</td>
                        <td>-</td>
                        <td>08:30</td>
                        <td><input type="button" value="修改"></td>
                    </tr>
                    <tr class="flexbetween timepadding">
                        <td>07:00</td>
                        <td>-</td>
                        <td>08:30</td>
                        <td><input type="button" value="修改"></td>
                    </tr>
                </table>

            </div>
        </div>
        <hr>
        <div class="Show_reserved_properties">
            <div class="flexbetween title"><span>被預約的房屋</span><button>時間遞增</button></div>
            <div class="booked">
                <div class="flexbetween item_content">
                    <div class="item_content_img"><img width="100%" src="/image/1.webp"></div>
                    <div class="flexcolumn">
                        <span class="text1">免仲介費/全新完工/獨洗曬/嚴選房客</span>
                        <span class="text2">2023/03/27 10:00-11:30</span>
                        <span class="text5">地址：406台中市北屯區一新一街5巷2-14</span>
                        <div class="flexbetween"><span class="text3">預約者：User</span><span class="text4">尚未有信用分數</span></div>
                    </div>
                    <div class="flexcolumn">
                        <div class="flexcenter" style="padding-bottom: 20px;"><img height="60px" src="/image/圖片2.png"></div>
                        <button class="cancel_appointment_btn">取消預約</button>
                    </div>
                </div>
                <div class="flexbetween item_content">
                    <div class="item_content_img"><img width="100%" src="/image/1.webp"></div>
                    <div class="flexcolumn">
                        <span class="text1">免仲介費/全新完工/獨洗曬/嚴選房客</span>
                        <span class="text2">2023/03/27 10:00-11:30</span>
                        <span class="text5">地址：406台中市北屯區一新一街5巷2-14</span>
                        <div class="flexbetween"><span class="text3">預約者：User</span><span class="text4">尚未有信用分數</span></div>
                    </div>
                    <div class="flexcolumn">
                        <div class="flexcenter" style="padding-bottom: 20px;"><img height="60px" src="/image/圖片2.png"></div>
                        <button class="cancel_appointment_btn">取消預約</button>
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