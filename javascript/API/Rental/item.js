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
let equipment_img_food;
let styleclass_1,styleclass_2,styleclass_3,styleclass_4,styleclass_5,styleclass_6,styleclass_7,styleclass_8,styleclass_9,styleclass_10,styleclass_11,styleclass_12,styleclass_13,styleclass_14,styleclass_15;
let Combination="";
let reserveText=document.getElementById('reserveText');
let deleteX_btn=document.getElementById('deleteX_btn');

function viewnewitem(rental_id){
    if(LoginData!=null){
        axios({
            method:'get',
            url:`http://localhost:5190/api/HomeAny/${rental_id}`,
            headers:{
                "Content-Type": "application/json",
                "Accept": "application/json",
                "Authorization": `Bearer ${LoginData.token}`, 
            },
        }).then(( { data } ) => {
            console.log(data);
            Editviewitemcontent(data,rental_id);
        })
        .catch(error => {
            console.log(error);
        });
    }else{
        axios({
            method:'get',
            url:`http://localhost:5190/api/HomeAny/${rental_id}`,
            headers:{
                "Content-Type": "application/json",
                "Accept": "application/json",
                //  "Authorization": `Bearer ${LoginData.token}`, 
            },
        }).then(( { data } ) => {
            console.log(data);
            Editviewitemcontent(data,rental_id);
        })
        .catch(error => {
            console.log(error);
        });
    }
}




function Editviewitemcontent(data,rental_id){
    console.log(data);
    let adminfee,waterfee,electricitybill;
    if(data.allData.adminfee==0){
        adminfee="無";
    }else{
        adminfee='$'+data.allData.adminfee+' /月';
    }
    if(data.allData.waterfee==0){
        waterfee="無";
    }else{
        waterfee='$'+data.allData.waterfee+' /月';
    }
    if(data.allData.electricitybill==0){
        electricitybill="無";
    }else{
        electricitybill='$'+data.allData.electricitybill+'元 /度';
    }

    if(LoginData==null){
        like=``;
    }else{
        if(LoginData.members.identity==2){
            if(data.isCollected){
                like=`<div id='like_content' class='absolute'><button id="likebtn_${data.allData.rental_id}" class="item_like"><img id="likeheart_${data.allData.rental_id}" width="30px" src="/image/like.png"></button></div>`;
            }else{
                like=`<div id='like_content' class='absolute'><button id="likebtn_${data.allData.rental_id}" class="item_like"><img id="likeheart_${data.allData.rental_id}" width="30px" src="/image/heart.png"></button></div>`;
            }

            
        }else{
            like=``;
        }
    }


    judgment_equipment(data.allData.equipmentname);
    Combinationtags(data);
    var img1,img2,img3,img4,img5;
    
    // if(data.allData.img1==''){
    //     while(data.allData.img1)
    // }

    if(data.allData.img1==''){
        img1='/image/noRenterImg.png';
    }else{
        img1=data.allData.img1;
    }
    if(data.allData.img2==''){
        img2='/image/noRenterImg.png';
    }else{
        img2=data.allData.img2;
    }
    if(data.allData.img3==''){
        img3='/image/noRenterImg.png';
    }else{
        img3=data.allData.img3;
    }
    if(data.allData.img4==''){
        img4='/image/noRenterImg.png';
    }else{
        img4=data.allData.img4;
    }
    if(data.allData.img5==''){
        img5='/image/noRenterImg.png';
    }else{
        img5=data.allData.img5;
    }
    let data_time=data.allData.uploadtime.replace(/\..*/g, "").replace("T", " | ");
    let content_in=document.getElementById('content_in');
    content_in.innerHTML=`
            <div id='View_oneimg'>
                <div class="flexcenter relative Houseimg" style="z-index: 0;height: auto;" >
                    <div id="rental_id${data.allData.rental_id}"style='width:100%;' href="/通用/item.html">
                    <ul id="rentalul_id${data.allData.rental_id}">
                        <li id="img0_${data.allData.rental_id}" style="display: block;"><img height="100%" width="100%" src="${data.image[0]}" /></li>
                    </ul>
                    
                    </div>
                    <!--${like}-->
                    <input id='lastimg_${data.allData.rental_id}' class='absolute Carousellastbtn' style="display: none;"  value="<" type="button" >
                    <input id='nextimg_${data.allData.rental_id}' class='absolute Carouselnextbtn' value=">" type="button">
                
                </div>  
            </div>

            <div id='View_allimg' class="img1-8 flexcenter relative">
                <div class="img1-8_img1_width">
                    <img id='img1-5_img1' class='img1-8_img1 width_img1' src="${img1}">
                </div>
                <div class="flexcolumn">
                    <div class="flexrow">
                        <img id='img1-5_img2' class='width_img2' src="${img2}">
                        <img id='img1-5_img3' class="img1-8_img2 width_img2" src="${img3}">
                    </div >
                    <div class="flexrow">
                        <img id='img1-5_img4' class='width_img2' src="${img4}">
                        <img id='img1-5_img5' class="img1-8_img3 width_img2" src="${img5}">
                    </div>
                    
                </div>
                ${like}
            </div>
            <div class="puttime">上架時間：${data_time}</div>
            <div id="housing_information" class="flexcenter">
                <div id="content_left" class="flexcolumn">
                    <div class="house_title">${data.allData.title}</div>
                    <div class="house_type">
                        ${Combination}
                    </div>
                    <div class="house_amount">
                        $${data.allData.rent}<span class="amount_unit">元/月</span>
                        <div> 
                        <div class='cost'>
                            管理費：${adminfee}<span> | </span>
                            水費：${waterfee}<span> | </span>
                            電費：${electricitybill}<span> </span>
                        </div>
                        </div>

                    </div>
                    
                    
                    <div class="address">
                        <span class='title'>地址：</span>
                        <div class="addressborder flexrow">
                        <div><a href="https://www.google.com/maps/search/?api=1&query=${data.allData.address}"><img width=30px src='/image/圖片2.png' style='padding:10px ;'></a></div>
                            <div>${data.allData.address}</div>
                            <!-- https://www.google.com/maps/search/?api=1&query=google map -->
                        </div>
                    </div>
                    <div>
                        <div class="equipment">
                            <span class='title'>設備與服務</span>
                            <div class="equipment_label">
                                <ul style='width:535px;'>
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
                                    <li>
                                        <div><img height=50px src="${equipment_img_food}"></div>
                                        <div style='${styleclass_15}'>可開伙</div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="house_content">
                        <span class='title'>房屋介紹</span>
                        <div class="house_content_text">
                            ${data.allData.content}
                        </div>
                        <!--<span><a href="#">顯示更多內容</a></span>--!>
                    </div>
                </div>
                <div id="content_right" class="flexcolumn" >
                    <div class="Choose_time">
                        <span class="Choose_time flexcolumn">選擇預約時間</span>
                        <input type='date' id='changedata'>
                        <div class="Choose_time_btn flexcenter">
                            <ul id='Choosetime'>
                            </ul>
                        </div>
                        <div class="Choose_time_button"><input id='reservedate' type="submit" value="我要預約"></div>
                    </div>
                    <div class="publisher_Information flexrow">
                    <div class="publisher_Information_img flexcolumn">
                        <div class="flexcenter"><a id='Accountimg_btn' class="avatar flexcenter" href="/通用/lookRentalaccount-interface.html"><img width="55px" src="${data.allData.member.img}"></a></div>
                    </div>
                    <div class="publisher_Information_text">
                        出租者：<span class="subtitle">${data.allData.member.name}</span><br>
                        電話：<span class="subtitle">${data.allData.member.phone}</span>
                    </div>
                    </div>
                </div>  
                </div>
    `

    if(LoginData==null){
        like=``;
    }else{
        if(LoginData.members.identity==2){
            likebtn=`likebtn_${data.allData.rental_id}`;
            likeheart=`likeheart_${data.allData.rental_id}`;
            console.log(likebtn);
            console.log(likeheart);
            clicklike(likebtn,likeheart);
        }
        if((LoginData.members.identity==1)||(LoginData.members.identity==0)){
            let reservedate=document.getElementById('reservedate');
            reservedate.style.display='none';
        }
    }
    // reservedate.style.display='block';
    let Rental_ul=document.getElementById(`rentalul_id${data.allData.rental_id}`);
    for(var j=1;j<=data.image.length-1;j++){
        let addimg=document.createElement('li');
        addimg.id=`img${j}_${data.allData.rental_id}`;
        addimg.style.display='none';
        addimg.innerHTML=`
            <img height="100%" width="100%" src="${data.image[j]}" />
        `;
        console.log(Rental_ul);
        console.log(addimg);
        Rental_ul.appendChild(addimg);
    }

    let lastimg_btn=document.getElementById(`lastimg_${data.allData.rental_id}`);
    let nextimg_btn=document.getElementById(`nextimg_${data.allData.rental_id}`);

    if(data.image.length==1){
        lastimg_btn.style.display="none";
        nextimg_btn.style.display="none";
    }
    
    
    lastimg_btn.onclick=function(){
        let imgblock='';
        nextimg_btn.style.display='block';
            for(var i=0;i<data.image.length;i++){
                console.log(document.getElementById(`img${i}_${data.allData.rental_id}`).style.display)
                if(document.getElementById(`img${i}_${data.allData.rental_id}`).style.display=='block'){
                    imgblock=`img${i}_${data.allData.rental_id}`;
                }
                
            }
                console.log(imgblock);
                console.log(parseInt(imgblock.replace('img','').replace(`_${data.allData.rental_id}`,''))-1);
                console.log(`img${parseInt(imgblock.replace('img','').replace(`_${data.allData.rental_id}`,''))-1}_${data.allData.rental_id}`);
                console.log(document.getElementById(imgblock).style.display=='block');
                if((parseInt(imgblock.replace('img','').replace(`_${data.allData.rental_id}`,''))-1)==0){
                    lastimg_btn.style.display="none";
                }
                if(document.getElementById(imgblock).style.display=='block'){
                    if((imgblock.replace('img','').replace(`_${data.allData.rental_id}`,''))>0){
                        document.getElementById(imgblock).style.display='none'
                        document.getElementById(`img${parseInt(imgblock.replace('img','').replace(`_${data.allData.rental_id}`,''))-1}_${data.allData.rental_id}`).style.display='block';
                    }
    
            }   
    }

    
    nextimg_btn.onclick=function(){
        lastimg_btn.style.display='block';
        for(var i=0;i<data.image.length;i++){
            console.log(document.getElementById(`img${i}_${data.allData.rental_id}`).style.display)
            if(document.getElementById(`img${i}_${data.allData.rental_id}`).style.display=='block'){
                imgblock=`img${i}_${data.allData.rental_id}`;
            }else if(document.getElementById(`img${i}_${data.allData.rental_id}`).style.display=='none'){
                console.log(imgblock);
            }
            
        }
            console.log(imgblock);
            console.log(parseInt(imgblock.replace('img','').replace(`_${data.allData.rental_id}`,''))+1);
            console.log(`img${parseInt(imgblock.replace('img','').replace(`_${data.allData.rental_id}`,''))+1}_${data.allData.rental_id}`);
            console.log(document.getElementById(imgblock).style.display=='block');
            if((parseInt(imgblock.replace('img','').replace(`_${data.allData.rental_id}`,''))+1)==data.image.length-1){
                nextimg_btn.style.display="none";
            }
            if(document.getElementById(imgblock).style.display=='block'){
                if((imgblock.replace('img','').replace(`_${data.allData.rental_id}`,''))<data.image.length-1){
                    document.getElementById(imgblock).style.display='none';
                    document.getElementById(`img${parseInt(imgblock.replace('img','').replace(`_${data.allData.rental_id}`,''))+1}_${data.allData.rental_id}`).style.display='block';
                }
            
        } 
    }
    
    var today = new Date();
    var year = today.getFullYear(); // 年份
    var month = ('0' + (today.getMonth() + 1)).slice(-2); // 月份，补0到两位数
    var day = ('0' + today.getDate()).slice(-2); // 日期，补0到两位数
    var dateInput = document.getElementById('changedata'); // 将myDateInput替换成你的<input type='date'/>元素的ID
    dateInput.value = year + '-' + month + '-' + day;
    

    let changedata=document.getElementById('changedata');
    console.log(changedata);
    changedata.addEventListener('change', function(){
    console.log(true);
    ViewBookOfDay();
    })

    ViewBookOfDay();
    
    let Accountimg_btn=document.getElementById('Accountimg_btn');
    Accountimg_btn.onclick=function(){
        sessionStorage.setItem('newRantalRenter',data.allData.member.account);
    }
    // reserve(rental_id);
    // if(LoginData!=null){
    //     if(LoginData.members.identity==2){
    //         getReservedData();
    //     }
    // }
}

function clicklike(likebtn,likeheart){
    like_btn=document.getElementById(likebtn);
    likeheart=document.getElementById(likeheart);
    console.log(like_btn);
    console.log(likeheart);
    like_btn.onclick=function(){
        console.log(likeheart.getAttribute("src"))
        if(likeheart.src=="/image/heart.png"){
            likeheart.src='/image/like.png';
            collect(likeheart);
    
        }else if(likeheart.src=="/image/like.png"){
            likeheart.src='/image/heart.png';
            deletecollect(likeheart);
        }
    }
    }
    
    function deletecollect(likeheart){
        console.log(likeheart.id);
        Id=likeheart.id.replace('likeheart_','')
        console.log(Id);
        console.log(LoginData);
        axios({
            method: 'delete',
            url: `http://localhost:5190/api/HomeAny/RemoveCollect/${Id}`,
            headers:{
                "Content-Type": "multipart/form-data",
                "Accept": "application/json",
                "Authorization": `Bearer ${LoginData.token}`, 
            },
        })
                .then(( { data } ) => {
                    console.log(data);
                    
                })
                .catch(error => {
                    console.log(error);
                });
    }
    
    function collect(likeheart){
        console.log(likeheart.id);
        Id=likeheart.id.replace('likeheart_','');
        console.log(Id);
        console.log(LoginData);
        axios({
            method: 'post',
            url: `http://localhost:5190/api/HomeAny/AddCollect?rental_id=${Id}`,
            headers:{
                "Content-Type": "multipart/form-data",
                "Accept": "application/json",
                "Authorization": `Bearer ${LoginData.token}`, 
            },
        })
                .then(( { data } ) => {
                    console.log(data);
                    
                })
                .catch(error => {
                    console.log(error);
                });
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
        equipment_img_washingmachine='/image/equipmentname_img/have/洗衣機.png';
    }else{
        equipment_img_washingmachine='/image/equipmentname_img/nohave/洗衣機.png';
        styleclass_2="text-decoration: line-through;color:#919191;"
    }
    if(equipmentname.includes('電視')){
        equipment_img_TV='/image/equipmentname_img/have/電視.png';
    }else{
        equipment_img_TV='/image/equipmentname_img/nohave/電視.png';
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
        equipment_img_bed='/image/equipmentname_img/have/床.png';
    }else{
        equipment_img_bed='/image/equipmentname_img/nohave/床.png';
        styleclass_6="text-decoration: line-through;color:#919191;"
    }
    if(equipmentname.includes('衣櫃')){
        equipment_img_Wardrobe='/image/equipmentname_img/have/衣櫃.png';
    }else{
        equipment_img_Wardrobe='/image/equipmentname_img/nohave/衣櫃.png';
        styleclass_7="text-decoration: line-through;color:#919191;"
    }
    if(equipmentname.includes('第四台')){
        equipment_img_Fourth='/image/equipmentname_img/have/第四台.jpg';
    }else{
        equipment_img_Fourth='/image/equipmentname_img/nohave/第四台.png';
        styleclass_8="text-decoration: line-through;color:#919191;"
    }
    if(equipmentname.includes('網路')){
        equipment_img_network='/image/equipmentname_img/have/網路.png';
    }else{
        equipment_img_network='/image/equipmentname_img/nohave/網路.png';
        styleclass_9="text-decoration: line-through;color:#919191;"
    }
    if(equipmentname.includes('天然瓦斯')){
        equipment_img_naturalgas='/image/equipmentname_img/have/天然瓦斯.png';
    }else{
        equipment_img_naturalgas='/image/equipmentname_img/nohave/天然瓦斯.png';
        styleclass_10="text-decoration: line-through;color:#919191;"
    }
    if(equipmentname.includes('沙發')){
        equipment_img_sofa='/image/equipmentname_img/have/沙發.png';
    }else{
        equipment_img_sofa='/image/equipmentname_img/nohave/沙發.png';
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
        equipment_img_elevator='/image/equipmentname_img/have/電梯.png';
    }else{
        equipment_img_elevator='/image/equipmentname_img/nohave/電梯.png';
        styleclass_14="text-decoration: line-through;color:#919191;"
    }
    if(equipmentname.includes('車位')){
        equipment_img_parkingspace='/image/equipmentname_img/have/車位.jpg';
    }else{
        equipment_img_parkingspace='/image/equipmentname_img/nohave/車位.png';
        styleclass_15="text-decoration: line-through;color:#919191;"
    }
    if(equipmentname.includes('可開伙')){
        equipment_img_food='/image/equipmentname_img/have/可開火.png';
    }else{
        equipment_img_food='/image/equipmentname_img/nohave/可開火.png';
        styleclass_15="text-decoration: line-through;color:#919191;"
    }
}