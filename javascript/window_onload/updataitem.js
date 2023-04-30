const form = document.querySelector("form");
let genre;
let pattern;
let type;
let equipmentname = '';


window.onload = function() {
    if(LoginData!=null){
        avatarimg.src=`${LoginData.members.img}`;
    }else{
        avatarimg.src='/image/default_avatar.jpeg';
    }
    
    handleLogoutData(LoginData);
    console.log(LoginData);
    console.log(UPDataRetal);

    genre_combination();
    pattern_combination();
    type_combination();
    equipmentname_combination();
    updata();
    
    updataitem();
}

function updata(){
    inputImageview1.style.backgroundImage='url(' +UPDataRetal.img1+ ')';
    inputImageview1.style.backgroundSize ='cover';
    inputImageview1.innerHTML ="";
    inputImageview2.style.backgroundImage='url(' +UPDataRetal.img2+ ')';
    inputImageview2.style.backgroundSize ='cover';
    inputImageview2.innerHTML ="";
    inputImageview3.style.backgroundImage='url(' +UPDataRetal.img3+ ')';
    inputImageview3.style.backgroundSize ='cover';
    inputImageview3.innerHTML ="";
    inputImageview4.style.backgroundImage='url(' +UPDataRetal.img4+ ')';
    inputImageview4.style.backgroundSize ='cover';
    inputImageview4.innerHTML ="";
    inputImageview5.style.backgroundImage='url(' +UPDataRetal.img5+ ')';
    inputImageview5.style.backgroundSize ='cover';
    inputImageview5.innerHTML ="";
    console.log(UPDataRetal);
    title.value=`${UPDataRetal.title}`;
    address.value=`${UPDataRetal.address}`;
    rent.value=`${UPDataRetal.rent}`;
    waterfee.value=`${UPDataRetal.waterfee}`;
    electricitybill.value=`${UPDataRetal.electricitybill}`;
    adminfee.value=`${UPDataRetal.adminfee}`;
    floor.value=`${UPDataRetal.floor}`;
    area.value=`${UPDataRetal.area}`;
    genre=`${UPDataRetal.genre}`;
    pattern=`${UPDataRetal.pattern}`;
    type=`${UPDataRetal.type}`;
    equipmentname=`${UPDataRetal.equipmentname}`;
    housingcontent.value=`${UPDataRetal.content.replace(/<br>/g, '\n')}}`;
    
    

    judgment_label();
    judgment_equipmentname();
}


function createitem_validatatext(){
    let validataimg=document.getElementById('validataimg');
    let validatagenre=document.getElementById('validatagenre');
    let validatapattern=document.getElementById('validatapattern');
    let validatatype=document.getElementById('validatatype');
    let validatatitle=document.getElementById('validatatitle');
    let validataaddress=document.getElementById('validataaddress');
    let validata_pattern_area=document.getElementById('validata_pattern_area');
    let validata_waterfee_electricitybill_adminfee=document.getElementById('validata_waterfee_electricitybill_adminfee');
    let validata_equipmentname=document.getElementById('validata_equipmentname');
    let validata_content=document.getElementById('validata_content');
    console.log(inputImage1.value);
    
    // if(inputImage1.value==""){
    //     validataimg.innerHTML='※封面(圖1)為必填';
    // }else{
    //     validataimg.innerHTML='';
    // }
    if(genre==null){
        validatagenre.innerHTML='※類型為必填';
    }else{
        validatagenre.innerHTML='';
    }
    if(pattern==null){
        validatapattern.innerHTML='※格局為必填';
    }else{
        validatapattern.innerHTML='';
    }
    if(type==null){
        validatatype.innerHTML='※型態為必填';
    }else{
        validatatype.innerHTML='';
    }
    if(title.value==""){
        validatatitle.innerHTML='※標題為必填';
    }else{
        validatatitle.innerHTML='';
    }
    if(address.value==""){
        validataaddress.innerHTML='※地址為必填';
    }else{
        validataaddress.innerHTML='';
    }
    if(rent.value==""){
        validatarent.innerHTML='※租金為必填';
    }else{
        validatarent.innerHTML='';
    }
    if((waterfee.value=='')||(electricitybill.value=='')||(adminfee.value=='')){
        validata_waterfee_electricitybill_adminfee.innerHTML='※水費、電費、管理費為必填，如果無定價請填0'
    }else{
        validata_waterfee_electricitybill_adminfee.innerHTML='';
    }
    console.log(floor.value);
    console.log(area.value);
    if((floor.value=='')&&(area.value=='')){
        validata_pattern_area.innerHTML='※樓層、坪數為必填'
    }else if(floor.value==''){
        validata_pattern_area.innerHTML='※樓層為必填';
    }else if(area.value==''){
        validata_pattern_area.innerHTML='※坪數為必填';
    }else if(floor.value.includes('/')==false){
        validata_pattern_area.innerHTML='※樓層寫法為當前樓層/總樓層';
    }else{
        validata_pattern_area.innerHTML='';
    }
    if(equipmentname==''){
        validata_equipmentname.innerHTML='※設備最少選一';
    }else{
        validata_equipmentname.innerHTML='';
    }
    if(housingcontent.value==""){
        validata_content.innerHTML='※介紹內容為必填';
    }else{
        validata_content.innerHTML='';
    }

}



function updataitem(){
    const submit = document.getElementById("submit");
    
    
    submit.addEventListener("click", (event) => {
    event.preventDefault();
    createitem_validatatext();

    equipmentname = equipmentname.slice(0, -1);

    const formData = new FormData(form);
    formData.append('updateData.type',`${type}`);
    formData.append('updateData.genre',`${genre}`);
    formData.append('updateData.pattern',`${pattern}`);
    formData.append('updateData.equipmentname',`${equipmentname}`);
    formData.append('updateData.content',`${housingcontent.value.replace(/\n/g, '<br>')}`);

    console.log(type);
    console.log(genre);
    console.log(pattern);
    console.log(equipmentname);
    console.log(formData.get('updateData.img1_1'));

    axios({
        method: "put",
        url: `http://localhost:5190/api/Home/${UPDataRetal.rental_id}`,
        headers: {
        "Content-Type": "multipart/form-data",
        'Accept': "application/json",
        'Authorization': `Bearer ${LoginData.token}`,
        },
        data: formData,
    })
        .then((response) => {
        console.log(response.data);
        // window.location.href = '/publisher房東/BG_audit.html';  
        // goBack();
        // let validatatext_signup=document.getElementById('validatatext_signup');
        // validatatext_signup.innerHTML=response.data.message;
        })
        .catch((error) => {
        console.error(error);
        });
    });


}


let genre_wholefloorhome=document.getElementById('genre_wholefloorhome');
let genre_independentsuite=document.getElementById('genre_independentsuite');
let genre_SubletSuite=document.getElementById('genre_SubletSuite');
let genre_elegantroom=document.getElementById('genre_elegantroom');

function genre_combination(){
    genre_wholefloorhome.onclick=function(){
        genre_Label_btn_off()
        genre_wholefloorhome.classList='Label_btn_on';
        genre=genre_wholefloorhome.value;
    }
    genre_independentsuite.onclick=function(){
        genre_Label_btn_off()
        genre_independentsuite.classList='Label_btn_on';
        genre=genre_independentsuite.value;
    }
    genre_SubletSuite.onclick=function(){
        genre_Label_btn_off()
        genre_SubletSuite.classList='Label_btn_on';
        genre=genre_SubletSuite.value;
    }
    genre_elegantroom.onclick=function(){
        genre_Label_btn_off()
        genre_elegantroom.classList='Label_btn_on';
        genre=genre_elegantroom.value;
    }
}

function genre_Label_btn_off(){
    genre_wholefloorhome.classList='Label_btn_off';
    genre_independentsuite.classList='Label_btn_off';
    genre_SubletSuite.classList='Label_btn_off';
    genre_elegantroom.classList='Label_btn_off';
}



let pattern_1room=document.getElementById('pattern_1room');
let pattern_2room=document.getElementById('pattern_2room');
let pattern_3room=document.getElementById('pattern_3room');
let pattern_4room=document.getElementById('pattern_4room');

function pattern_combination(){
    pattern_1room.onclick=function(){
        pattern_Label_btn_off()
        pattern_1room.classList='Label_btn_on';
        pattern=pattern_1room.value;
    }
    pattern_2room.onclick=function(){
        pattern_Label_btn_off()
        pattern_2room.classList='Label_btn_on';
        pattern=pattern_2room.value;
    }
    pattern_3room.onclick=function(){
        pattern_Label_btn_off()
        pattern_3room.classList='Label_btn_on';
        pattern=pattern_3room.value;
    }
    pattern_4room.onclick=function(){
        pattern_Label_btn_off()
        pattern_4room.classList='Label_btn_on';
        pattern=pattern_4room.value;
    }
}

function pattern_Label_btn_off(){
    pattern_1room.classList='Label_btn_off';
    pattern_2room.classList='Label_btn_off';
    pattern_3room.classList='Label_btn_off';
    pattern_4room.classList='Label_btn_off';
}



let type_apartment=document.getElementById('type_apartment');
let type_elevator_building=document.getElementById('type_elevator_building');
let type_Tutiancuo=document.getElementById('type_Tutiancuo');
let type_villa=document.getElementById('type_villa');

function type_combination(){
    type_apartment.onclick=function(){
        type_Label_btn_off()
        type_apartment.classList='Label_btn_on';
        type=type_apartment.value;
    }
    type_elevator_building.onclick=function(){
        type_Label_btn_off()
        type_elevator_building.classList='Label_btn_on';
        type=type_elevator_building.value;
    }
    type_Tutiancuo.onclick=function(){
        type_Label_btn_off()
        type_Tutiancuo.classList='Label_btn_on';
        type=type_Tutiancuo.value;
    }
    type_villa.onclick=function(){
        type_Label_btn_off()
        type_villa.classList='Label_btn_on';
        type=type_villa.value;
    }
}

function type_Label_btn_off(){
    type_apartment.classList='Label_btn_off';
    type_elevator_building.classList='Label_btn_off';
    type_Tutiancuo.classList='Label_btn_off';
    type_villa.classList='Label_btn_off';
}

let reset=document.getElementById('reset');
reset.onclick=function(){
    emptyform();
}

function emptyform(){
    genre_Label_btn_off();
    pattern_Label_btn_off();
    type_Label_btn_off();
    genre='';
    pattern='';
    type='';
    equipmentname='';
    inputImageview1.style.backgroundImage='none';
    inputImageview1.innerHTML ="+";
    inputImageview2.style.backgroundImage='none';
    inputImageview2.innerHTML ="+";
    inputImageview3.style.backgroundImage='none';
    inputImageview3.innerHTML ="+";
    inputImageview4.style.backgroundImage='none';
    inputImageview4.innerHTML ="+";
    inputImageview5.style.backgroundImage='none';
    inputImageview5.innerHTML ="+";

}


let refrigerator=document.getElementById('refrigerator');
let Washing_machine=document.getElementById('Washing_machine');
let TV=document.getElementById('TV');
let air_conditioner=document.getElementById('air_conditioner');
let Can_partner=document.getElementById('Can_partner');
let water_heater=document.getElementById('water_heater');
let bed=document.getElementById('bed');
let clothes=document.getElementById('clothes');
let fourth_unit=document.getElementById('fourth_unit');
let Network=document.getElementById('Network');
let natural_gas=document.getElementById('natural_gas');
let sofa=document.getElementById('sofa');
let tables_chairs=document.getElementById('tables_chairs');
let balcony=document.getElementById('balcony');
let Elevator=document.getElementById('Elevator');
let parking_space=document.getElementById('parking_space');


function equipmentname_combination(){
    
refrigerator.onclick=function(){
    if(refrigerator.checked){
        equipmentname += refrigerator.value + ',';
    } else {
        equipmentname = equipmentname.replace(refrigerator.value + ',', '');
    }
}

Washing_machine.onclick=function(){
    if(Washing_machine.checked){
        equipmentname += Washing_machine.value + ',';
    } else {
        equipmentname = equipmentname.replace(Washing_machine.value + ',', '');
    }
}

TV.onclick=function(){
    if(TV.checked){
        equipmentname += TV.value + ',';
    } else {
        equipmentname = equipmentname.replace(TV.value + ',', '');
    }
}

air_conditioner.onclick=function(){
    if(air_conditioner.checked){
        equipmentname += air_conditioner.value + ',';
    } else {
        equipmentname = equipmentname.replace(air_conditioner.value + ',', '');
    }
}

Can_partner.onclick=function(){
    if(Can_partner.checked){
        equipmentname += Can_partner.value + ',';
    } else {
        equipmentname = equipmentname.replace(Can_partner.value + ',', '');
    }
}

water_heater.onclick=function(){
    if(water_heater.checked){
        equipmentname += water_heater.value + ',';
    } else {
        equipmentname = equipmentname.replace(water_heater.value + ',', '');
    }
}

bed.onclick=function(){
    if(bed.checked){
        equipmentname += bed.value + ',';
    } else {
        equipmentname = equipmentname.replace(bed.value + ',', '');
    }
}

clothes.onclick=function(){
    if(clothes.checked){
        equipmentname += clothes.value + ',';
    } else {
        equipmentname = equipmentname.replace(clothes.value + ',', '');
    }
}

fourth_unit.onclick=function(){
    if(fourth_unit.checked){
        equipmentname += fourth_unit.value + ',';
    } else {
        equipmentname = equipmentname.replace(fourth_unit.value + ',', '');
    }
}

Network.onclick=function(){
    if(Network.checked){
        equipmentname += Network.value + ',';
    } else {
        equipmentname = equipmentname.replace(Network.value + ',', '');
    }
}

natural_gas.onclick=function(){
    if(natural_gas.checked){
        equipmentname += natural_gas.value + ',';
    } else {
        equipmentname = equipmentname.replace(natural_gas.value + ',', '');
    }
}

sofa.onclick=function(){
    if(sofa.checked){
        equipmentname += sofa.value + ',';
    } else {
        equipmentname = equipmentname.replace(sofa.value + ',', '');
    }
}

tables_chairs.onclick=function(){
    if(tables_chairs.checked){
        equipmentname += tables_chairs.value + ',';
    } else {
        equipmentname = equipmentname.replace(tables_chairs.value + ',', '');
    }
}

balcony.onclick=function(){
    if(balcony.checked){
        equipmentname += balcony.value + ',';
    } else {
        equipmentname = equipmentname.replace(balcony.value + ',', '');
    }
}

Elevator.onclick=function(){
    if(Elevator.checked){
        equipmentname += Elevator.value + ',';
    } else {
        equipmentname = equipmentname.replace(Elevator.value + ',', '');
    }
}

parking_space.onclick=function(){
    if(parking_space.checked){
        equipmentname += parking_space.value + ',';
    } else {
        equipmentname = equipmentname.replace(parking_space.value + ',', '');
    }
}

}

function judgment_label(){
    if(type==type_apartment.value){
        type_apartment.classList=('Label_btn_on');
    }else if(type==type_elevator_building.value){
        type_apartment.classList=('Label_btn_on');
    }else if(type==type_Tutiancuo.value){
        type_apartment.classList=('Label_btn_on');
    }else if(type==type_villa.value){
        type_apartment.classList=('Label_btn_on');
    }

    if(genre==genre_wholefloorhome.value){
        genre_wholefloorhome.classList=('Label_btn_on');
    }else if(genre==genre_independentsuite.value){
        genre_independentsuite.classList=('Label_btn_on');
    }else if(genre==genre_SubletSuite.value){
        genre_SubletSuite.classList=('Label_btn_on');
    }else if(genre==genre_elegantroom.value){
        genre_elegantroom.classList=('Label_btn_on');
    }

    if(pattern==pattern_1room.value){
        pattern_1room.classList=('Label_btn_on');
    }else if(pattern==pattern_2room.value){
        pattern_2room.classList=('Label_btn_on');
    }else if(pattern==pattern_3room.value){
        pattern_3room.classList=('Label_btn_on');
    }else if(pattern==pattern_4room.value){
        pattern_4room.classList=('Label_btn_on');
    }
};

function judgment_equipmentname(){
    if(equipmentname.includes(`${refrigerator.value}`)){
        refrigerator.checked=true;
    }
    if(equipmentname.includes(`${Washing_machine.value}`)){
        Washing_machine.checked=true;
    }
    if(equipmentname.includes(`${TV.value}`)){
        TV.checked=true;
    }
    if(equipmentname.includes(`${air_conditioner.value}`)){
        air_conditioner.checked=true;
    }
    if(equipmentname.includes(`${Can_partner.value}`)){
        Can_partner.checked=true;
    }
    if(equipmentname.includes(`${water_heater.value}`)){
        water_heater.checked=true;
    }
    if(equipmentname.includes(`${bed.value}`)){
        bed.checked=true;
    }
    if(equipmentname.includes(`${clothes.value}`)){
        clothes.checked=true;
    }
    if(equipmentname.includes(`${fourth_unit.value}`)){
        fourth_unit.checked=true;
    }
    if(equipmentname.includes(`${Network.value}`)){
        Network.checked=true;
    }
    if(equipmentname.includes(`${natural_gas.value}`)){
        natural_gas.checked=true;
    }
    if(equipmentname.includes(`${sofa.value}`)){
        sofa.checked=true;
    }
    if(equipmentname.includes(`${tables_chairs.value}`)){
        tables_chairs.checked=true;
    }
    if(equipmentname.includes(`${balcony.value}`)){
        balcony.checked=true;
    }
    if(equipmentname.includes(`${Elevator.value}`)){
        Elevator.checked=true;
    }
    if(equipmentname.includes(`${parking_space.value}`)){
        parking_space.checked=true;
    }
}