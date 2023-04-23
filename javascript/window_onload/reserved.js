window.onload = function() {
    
    console.log(LoginData);
    if(LoginData==null){
        let content_in=document.getElementById('content_in');
        content_in.innerHTML='請先登入';
        content_in.style.textAlign='center';
    }else{
        let content_in=document.getElementById('content_in');
        content_in.innerHTML=` <div id="content_in">
        <div class="upload_img">
            <!-- <form id="form" method="POST" enctype="multipart/form-data"> -->
            <div class="title">上傳照片</div>
            
            <div class="upload_img_content">
                <div class="flexcolumn relative">封面(圖1)<a id="inputImageview1" href="javascript:;" class="upload_img_btn">+</a><input id="inputImage1" class="change"  type="file" multiple="multiple"></div>
                <div class="flexcolumn relative">圖2<a id="inputImageview2" href="javascript:;" class="upload_img_btn">+</a><input id="inputImage2" class="change"  type="file" multiple="multiple"></div>
                <div class="flexcolumn relative">圖3<a id="inputImageview3" href="javascript:;" class="upload_img_btn">+</a><input id="inputImage3" class="change"  type="file" multiple="multiple"></div>
                <div class="flexcolumn relative">圖4<a id="inputImageview4" href="javascript:;" class="upload_img_btn">+</a><input id="inputImage4" class="change"  type="file" multiple="multiple"></div>
                <div class="flexcolumn relative">圖5<a id="inputImageview5" href="javascript:;" class="upload_img_btn">+</a><input id="inputImage5" class="change"  type="file" multiple="multiple"></div>
                

                
                
                
            </div>
            <div id="validateimg" class="validatatext"></div>
        <!-- </form> -->
        </div>
        <hr>
        <div class="housing_label">
            <div class="title">房屋標籤</div>
            <div class="Label flexcolumn">
                <ul class="flexrow">
                    <li class="Label_title">類型</li>
                    <li><a href="#">整層住家</a></li>
                    <li><a href="#">獨立套房</a></li>
                    <li><a href="#">分租套房</a></li>
                    <li><a href="#">雅房</a></li>
                </ul>
            </div>
            <div class="Label flexcolumn">
                <ul class="flexrow">
                    <li  class="Label_title">格局</li>
                    <li><a href="#">1房</a></li>
                    <li><a href="#">2房</a></li>
                    <li><a href="#">3房</a></li>
                    <li><a href="#">4房以上</a></li>
                </ul>
            </div>
            <div class="Label flexcolumn">
                <ul class="flexrow">
                    <li  class="Label_title">型態</li>
                    <li><a href="#">公寓</a></li>
                    <li><a href="#">電梯大樓</a></li>
                    <li><a href="#">透天厝</a></li>
                    <li><a href="#">別墅</a></li>
                </ul>
            </div>
            <div class="Label flexcolumn">
                <ul class="flexrow">
                    <li  class="Label_title">限制</li>
                    <li><a href="#">男女皆可</a></li>
                    <li><a href="#">限男生</a></li>
                    <li><a href="#">限女生</a></li>
                </ul>
            </div>
        </div>
        <hr>
        <div class="housing_information">
            <div class="title">房屋資訊</div>
            <div class="housing_information_content">
                <label class="housing_information_title" for="title">標題：</label>
                <input id="title" class="housing_information_text" name="title" type="text">
            </div>
            <div class="housing_information_content">
                <label class="housing_information_title">地址：</label>
                <input id="address" class="housing_information_text" type="text" >
            </div>
            <div class="housing_information_content">
                <label class="housing_information_title">價錢：</label>
                <input id="rent" class="housing_information_text" type="text">/月
            </div>
            <div class="flexrow right">
                <div class="housing_information_content">
                    <label class="housing_information_title">水費：</label>
                    <input id="waterfee" class="housing_information_text" type="text">
                </div>
                <div class="housing_information_content">
                    <label class="housing_information_title" >電費：</label>
                    <input id="electricitybill" class="housing_information_text" type="text">
                </div>
                <div class="housing_information_content">
                    <label class="housing_information_title" >管理費：</label>
                    <input id="adminfee" class="housing_information_text" type="text">
                </div>
            </div>
            <div class="flexrow right">
                <div class="housing_information_content">
                    <label class="housing_information_title" >樓層：</label>
                    <input id="pattern" class="housing_information_text" type="text" placeholder="例：當前樓層/總樓層">
                </div>
                <div class="housing_information_content">
                    <label class="housing_information_title">面積：</label>
                    <input id="floor" class="housing_information_text" type="text">
                </div>
            </div>
            <div class="housing_information_content">
                <div style="padding-bottom: 10px;"><label class="housing_information_title">設備：</label></div>
                <div class="housing_information_label">
                    <input id="refrigerator" type="checkbox"><label for="refrigerator">冰箱</label>
                    <input id="Washing_machine" type="checkbox"><label for="Washing_machine">洗衣機</label>
                    <input id="TV" type="checkbox"><label for="TV">電視</label>
                    <input id="air_conditioner" type="checkbox"><label for="air_conditioner">冷氣</label>
                    <input id="Can_partner" type="checkbox"><label for="Can_partner">可開伙</label>
                    <input id="water_heater" type="checkbox"><label for="water_heater">熱水器</label>
                    <input id="bed" type="checkbox"><label for="bed">床</label>
                    <input id="clothes" type="checkbox"><label for="clothes">衣</label>
                    <input id="fourth_unit" type="checkbox"><label for="fourth_unit">第四台</label>
                    <input id="Network" type="checkbox"><label for="Network">網路</label>
                    <input id="natural_gas" type="checkbox"><label for="natural_gas">天然瓦斯</label>
                    <input id="sofa" type="checkbox"><label for="sofa">沙發</label>
                    <input id="tables_chairs" type="checkbox"><label for="tables_chairs">桌椅</label>
                    <input id="balcony" type="checkbox"><label for="balcony">陽台</label>
                    <input id="Elevator" type="checkbox"><label for="Elevator">電梯</label>
                    <input id="parking_space" type="checkbox"><label for="parking_space">車位</label>
                </div>
            </div>
            <div class="housing_information_content">
                <label class="housing_information_title" for="title">介紹：</label><br>
                <textarea id="housingcontent"></textarea>
            </div>
        </div>
    </div>`;

        
        handleLogoutData(LoginData);
        console.log(LoginData);
        LoginData = JSON.parse(sessionStorage.getItem('LoginData'));
    }

    
};