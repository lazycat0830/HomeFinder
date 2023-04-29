let equipment_img_refrigerator;
let equipment_img_washingmachine;
let equipment_img_TV;
let equipment_img_airconditioner;
let equipment_img_waterheater;
let equipment_img_bed;
let equipment_img_Fourth;
let equipment_img_Wardrobe;
let equipment_img_network;
let equipment_img_naturalgas;
let equipment_img_sofa;
let equipment_img_tablesandchairs;
let equipment_img_balcony;
let equipment_img_elevator;
let equipment_img_parkingspace;
let styleclass_1,styleclass_2,styleclass_3,styleclass_4,styleclass_5,styleclass_6,styleclass_7,styleclass_8,styleclass_9,styleclass_10,styleclass_11,styleclass_12,styleclass_13,styleclass_14,styleclass_15;
let Combination="";

function viewnewitem(rental_id){
    axios({
        method:'get',
        url:`http://localhost:5190/api/HomeAny/${rental_id}`,
        headers:{
            "Content-Type": "application/json",
            "Accept": "application/json",
            // "Authorization": `Bearer ${LoginData.token}`, 
        },
    }).then(( { data } ) => {
        console.log(data);
        Editviewitemcontent(data,rental_id);
    })
    .catch(error => {
        console.log(error);
    });
}




function Editviewitemcontent(data,rental_id){
    console.log(data);
    let scoretext;
    if(data.member.score==null){
        scoretext='尚未有信用分數';
    }else{
        scoretext=data.member.score;
    }

    judgment_equipment(data.equipmentname);
    Combinationtags(data);
    let data_time=data.uploadtime.replace(/\..*/g, "").replace("T", " | ");
    let content_in=document.getElementById('content_in');
    content_in.innerHTML=`
            <div class="img1-8 flexcenter">
                <div class="img1-8_img1_width"><img class="img1-8_img1" src="/image/6-1.webp"></div>
                <div class="flexcolumn">
                    <div class="flexrow">
                        <img src="/image/6-2.webp">
                        <img class="img1-8_img2" src="/image/6-3.webp">
                    </div >
                    <div class="flexrow">
                        <img src="/image/6-4.webp">
                        <img  class="img1-8_img3" src="/image/6-5.webp">
                    </div>
                    <div class="puttime">上架時間：${data_time}</div>
                </div>
            </div>
            
            <div id="housing_information" class="flexcenter">
                <div id="content_left flexcolumn">
                    <div class="house_title">${data.title}</div>
                    <div class="house_type">
                       ${Combination}
                    </div>
                    <div class="house_amount">
                        $${data.rent}<span class="amount_unit">元/月</span>
                        <div> 
                        <div class='cost'>
                            管理費：$${data.adminfee}<span> 元 | </span>
                            水費：$${data.waterfee}<span> /月 | </span>
                            電費費：$${data.electricitybill}<span> /月</span>
                        </div>
                        </div>

                    </div>
                    
                    
                    <div class="address">
                        <span>地址：</span>
                        <div class="addressborder flexrow">
                        <div><a href="https://www.google.com/maps/search/?api=1&query=${data.address}"><img width=30px src='/image/圖片2.png' style='padding:10px ;'></a></div>
                            <div>${data.address}</div>
                            <!-- https://www.google.com/maps/search/?api=1&query=google map -->
                        </div>
                    </div>
                    <div>
                        <div class="equipment">
                            <span>設備與服務</span>
                            <div class="equipment_label">
                                <ul>
                                    <li>
                                        <div><img height=50px src="${equipment_img_refrigerator}"></div>
                                        <div style='${styleclass_1}'>冰箱</div>
                                    </li>
                                    <li>
                                        <div><img height=50px src="${equipment_img_washingmachine}"></div>
                                        <div style='${styleclass_2}'>洗衣機</div>
                                    </li>
                                    <li>
                                        <div><img height=50px src="${equipment_img_TV}"></div>
                                        <div style='${styleclass_3}'>電視</div>
                                    </li>
                                    <li>
                                        <div><img height=50px src="${equipment_img_airconditioner}"></div>
                                        <div style='${styleclass_4}'>冷氣</div>
                                    </li>
                                    <li>
                                        <div><img height=50px src="${equipment_img_waterheater}"></div>
                                        <div style='${styleclass_5}'>熱水器</div>
                                    </li>
                                    <li>
                                        <div><img height=50px src="${equipment_img_bed}"></div>
                                        <div style='${styleclass_6}'>床</div>
                                    </li>
                                    <li>
                                        <div><img height=50px src="${equipment_img_Wardrobe}"></div>
                                        <div style='${styleclass_7}'>衣櫃</div>
                                    </li>
                                    <li>
                                        <div><img height=50px src="${equipment_img_Fourth}"></div>
                                        <div style='${styleclass_8}'>第四台</div>
                                    </li>
                                    <li>
                                        <div><img height=50px src="${equipment_img_network}"></div>
                                        <div style='${styleclass_9}'>網路</div>
                                    </li>
                                    <li>
                                        <div><img height=50px src="${equipment_img_naturalgas}"></div>
                                        <div style='${styleclass_10}'>天然瓦斯</div>
                                    </li>
                                    <li>
                                        <div><img height=50px src="${equipment_img_sofa}"></div>
                                        <div style='${styleclass_11}'>沙發</div>
                                    </li>
                                    <li>
                                        <div><img height=50px src="${equipment_img_tablesandchairs}"></div>
                                        <div style='${styleclass_12}'>桌椅</div>
                                    </li>
                                    <li>
                                        <div><img height=50px src="${equipment_img_balcony}"></div>
                                        <div style='${styleclass_13}'>陽台</div>
                                    </li>
                                    <li>
                                        <div><img height=50px src="${equipment_img_elevator}"></div>
                                        <div style='${styleclass_14}'>電梯</div>
                                    </li>
                                    <li>
                                        <div><img height=50px src="${equipment_img_parkingspace}"></div>
                                        <div style='${styleclass_15}'>車位</div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="house_content">
                        <span>房屋介紹</span>
                        <div class="house_content_text">
                            ${data.content}
                        </div>
                        <!--<span><a href="#">顯示更多內容</a></span>--!>
                    </div>
                </div>
                <div id="content_right" class="flexcolumn" >
                    <div class="Choose_time">
                        <span class="Choose_time flexcolumn">選擇預約時間</span>
                        <input type='date' id='changedata'>
                        <div class="Choose_time_btn flexcenter">
                            <ul>
                                <li>
                                    <a  id='changetime1' class='Choose_time_btn_true'>07:00-09:00</a>
                                </li>
                                <li>
                                    <a  id='changetime2' class='Choose_time_btn_true'>10:00-12:00</a>
                                </li>
                                <li>
                                    <a  id='changetime3' class='Choose_time_btn_true'>14:00-16:00</a>
                                </li>
                                <li>
                                    <a  id='changetime4' class='Choose_time_btn_true'>17:00-19:00</a>
                                </li>
                                <li>
                                    <a id='changetime5' class='Choose_time_btn_true'>20:00-22:00</a>
                                </li>
                            </ul>
                        </div>
                        <div class="Choose_time_button"><input id='reservedate' type="submit" value="我要預約"></div>
                    </div>
                    <div class="publisher_Information flexrow">
                    <div class="publisher_Information_img flexcolumn">
                        <div class="flexcenter"><a id='Accountimg_btn' class="avatar" href="/通用/lookRentalaccount-interface.html"><img width="55px" src="/image/98f1ad5373cccf33efac27876f088cb0ea46f127.jpg@760w_738h_progressive.webp"></a></div>
                    </div>
                    <div class="publisher_Information_text">
                        出租者：<span class="subtitle">${data.member.name}</span><span class="credit_score">信用:${scoretext}分</span><br>
                        電話：<span class="subtitle">${data.member.phone}</span>
                    </div>
                    </div>
                </div>  
                </div>
    `
    let Accountimg_btn=document.getElementById('Accountimg_btn');
    Accountimg_btn.onclick=function(){
        sessionStorage.setItem('newRantalRenter',data.member.account);
    }
    reserve(rental_id)
}

function reserve(rental_id){
    let time;
    let changetime1=document.getElementById('changetime1');
    let changetime2=document.getElementById('changetime2');
    let changetime3=document.getElementById('changetime3');
    let changetime4=document.getElementById('changetime4');
    let changetime5=document.getElementById('changetime5');
    let reservedate=document.getElementById('reservedate');
    changetime1.onclick=function(){
        cssfalse();
        changetime1.classList='Choose_time_btn_false';
        time=changetime1.innerHTML;
    }
    changetime2.onclick=function(){
        cssfalse();
        changetime2.classList='Choose_time_btn_false';
        time=changetime2.innerHTML;
    }
    changetime3.onclick=function(){
        cssfalse();
        changetime3.classList='Choose_time_btn_false';
        time=changetime3.innerHTML;
    }
    changetime4.onclick=function(){
        cssfalse();
        changetime4.classList='Choose_time_btn_false';
        time=changetime4.innerHTML;
    }
    changetime5.onclick=function(){
        cssfalse();
        changetime5.classList='Choose_time_btn_false';
        time=changetime5.innerHTML;
    }
    reservedate.onclick=function(){
        let changedata=document.getElementById('changedata');
        console.log(changedata.value);
        console.log(time);
        console.log(rental_id);
        axios({
            method:'post',
            url:'http://localhost:5190/api/List/AddBooking',
            headers:{
                "Content-Type": "application/json",
                "Accept": "application/json",
                "Authorization": `Bearer ${LoginData.token}`, 
            },data:{
                bookdate:changedata.value,
                booktime:time,
                rental_id:rental_id,
            }
        }).then(({ data }) => {
            console.log(data);
        }).catch(error => {
        // 处理请求过程中的错误
        console.error(error);
        
    });
    }

}

function cssfalse(){
    changetime1.classList='Choose_time_btn_true';
    changetime2.classList='Choose_time_btn_true';
    changetime3.classList='Choose_time_btn_true';
    changetime4.classList='Choose_time_btn_true';
    changetime5.classList='Choose_time_btn_true';
}

function Combinationtags(data){
    if(data.type!=null){
        Combination+=data.type+' | '
    }
    if(data.genre!=null){
        Combination+=data.genre+' | '
    }
    if(data.pattern!=null){
        Combination+=data.pattern+' | '
    }
    if(data.floor!=null){
        let floor = data.floor.split("/");
        console.log(floor);
        let floor_add=floor[0]+'層/'+floor[1]+'層';
        Combination+=floor_add+' | ';
    }
    if(data.area!=null){
        Combination+=data.area+'坪 |'
    }
    Combination=Combination.slice(0, -1);
}

function judgment_equipment(equipmentname){
    if(equipmentname.includes('冰箱')){
        equipment_img_refrigerator='/image/equipmentname_img/have/冰箱.png';
    }else{
        equipment_img_refrigerator='/image/equipmentname_img/nohave/冰箱.png';
        styleclass_1="text-decoration: line-through;color:#919191;"
    }
    if(equipmentname.includes('洗衣機')){
        equipment_img_washingmachine='/image/equipmentname_img/have/洗衣機.svg';
    }else{
        equipment_img_washingmachine='/image/equipmentname_img/nohave/洗衣機.svg';
        styleclass_2="text-decoration: line-through;color:#919191;"
    }
    if(equipmentname.includes('電視')){
        equipment_img_TV='/image/equipmentname_img/have/電視.svg';
    }else{
        equipment_img_TV='/image/equipmentname_img/nohave/電視.svg';
        styleclass_3="text-decoration: line-through;color:#919191;"
    }
    if(equipmentname.includes('冷氣')){
        equipment_img_airconditioner='/image/equipmentname_img/have/冷氣.png';
    }else{
        equipment_img_airconditioner='/image/equipmentname_img/nohave/冷氣.png';
        styleclass_4="text-decoration: line-through;color:#919191;"
    }
    if(equipmentname.includes('熱水器')){
        equipment_img_waterheater='/image/equipmentname_img/have/熱水器.png';
    }else{
        equipment_img_waterheater='/image/equipmentname_img/nohave/熱水器.png';
        styleclass_5="text-decoration: line-through;color:#919191;"
    }
    if(equipmentname.includes('床')){
        equipment_img_bed='/image/equipmentname_img/have/床.svg';
    }else{
        equipment_img_bed='/image/equipmentname_img/nohave/床.svg';
        styleclass_6="text-decoration: line-through;color:#919191;"
    }
    if(equipmentname.includes('衣櫃')){
        equipment_img_Wardrobe='/image/equipmentname_img/have/衣櫃.png';
    }else{
        equipment_img_Wardrobe='/image/equipmentname_img/nohave/衣櫃.png';
        styleclass_7="text-decoration: line-through;color:#919191;"
    }
    if(equipmentname.includes('第四台')){
        equipment_img_Fourth='/image/equipmentname_img/have/第四台.png';
    }else{
        equipment_img_Fourth='/image/equipmentname_img/nohave/第四台.png';
        styleclass_8="text-decoration: line-through;color:#919191;"
    }
    if(equipmentname.includes('網路')){
        equipment_img_network='/image/equipmentname_img/have/網路.svg';
    }else{
        equipment_img_network='/image/equipmentname_img/nohave/網路.svg';
        styleclass_9="text-decoration: line-through;color:#919191;"
    }
    if(equipmentname.includes('天然瓦斯')){
        equipment_img_naturalgas='/image/equipmentname_img/have/天然瓦斯.png';
    }else{
        equipment_img_naturalgas='/image/equipmentname_img/nohave/天然瓦斯.png';
        styleclass_10="text-decoration: line-through;color:#919191;"
    }
    if(equipmentname.includes('沙發')){
        equipment_img_sofa='/image/equipmentname_img/have/沙發.svg';
    }else{
        equipment_img_sofa='/image/equipmentname_img/nohave/沙發.svg';
        styleclass_11="text-decoration: line-through;color:#919191;"
    }
    if(equipmentname.includes('桌椅')){
        equipment_img_tablesandchairs='/image/equipmentname_img/have/桌椅.png';
    }else{
        equipment_img_tablesandchairs='/image/equipmentname_img/nohave/桌椅.png';
        styleclass_12="text-decoration: line-through;color:#919191;"
    }
    if(equipmentname.includes('陽台')){
        equipment_img_balcony='/image/equipmentname_img/have/陽台.png';
    }else{
        equipment_img_balcony='/image/equipmentname_img/nohave/陽台.png';
        styleclass_13="text-decoration: line-through;color:#919191;"
    }
    if(equipmentname.includes('電梯')){
        equipment_img_elevator='/image/equipmentname_img/have/電梯.svg';
    }else{
        equipment_img_elevator='/image/equipmentname_img/nohave/電梯.svg';
        styleclass_14="text-decoration: line-through;color:#919191;"
    }
    if(equipmentname.includes('車位')){
        equipment_img_parkingspace='/image/equipmentname_img/have/車位.png';
    }else{
        equipment_img_parkingspace='/image/equipmentname_img/nohave/車位.png';
        styleclass_15="text-decoration: line-through;color:#919191;"
    }
}