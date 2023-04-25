let DownTimeallData=document.getElementById('DownTimeallData');
let UpTimeallData=document.getElementById('UpTimeallData');
let genre_wholefloorhome=document.getElementById('genre_wholefloorhome');
let genre_independentsuite=document.getElementById('genre_independentsuite');
let genre_elegantroom=document.getElementById('genre_elegantroom');
let genre_SubletSuite=document.getElementById('genre_SubletSuite');
let type_elevatorbuilding=document.getElementById('type_elevatorbuilding');
let type_apartment=document.getElementById('type_apartment');
let type_Tutiancuo=document.getElementById('type_Tutiancuo');
let type_villa=document.getElementById('type_villa');
let equipmentname_parkingspace=document.getElementById('equipmentname_parkingspace');
let equipmentname_elevator=document.getElementById('equipmentname_elevator');
let equipmentname_Canpartner=document.getElementById('equipmentname_Canpartner');
let equipmentname_network=document.getElementById('equipmentname_network');
let equipmentname_bed=document.getElementById('equipmentname_bed');
let equipmentname_tablesandchairs=document.getElementById('equipmentname_tablesandchairs');
let equipmentname_waterheater=document.getElementById('equipmentname_waterheater');
let equipmentname_airconditioner=document.getElementById('equipmentname_airconditioner');
let equipmentname_washingmachine=document.getElementById('equipmentname_washingmachine');
let equipmentname_Wardrobe=document.getElementById('equipmentname_Wardrobe');
let equipmentname_refrigerator=document.getElementById('equipmentname_refrigerator');
let pattern_room1=document.getElementById('pattern_room1');
let pattern_room2=document.getElementById('pattern_room2');
let pattern_room3=document.getElementById('pattern_room3');
let pattern_room4=document.getElementById('pattern_room4');
let equipmentname_naturalgas=document.getElementById('equipmentname_naturalgas');
let equipmentname_Thefourthstation=document.getElementById('equipmentname_Thefourthstation');
let equipmentname_sofa=document.getElementById('equipmentname_sofa');
let equipmentname_balcony=document.getElementById('equipmentname_balcony');
let genre,pattern,equipmentname,type;


window.onload=function(){
    console.log(LoginData);
    viewDownTimeallData();
    
    handleLogoutData(LoginData);
    console.log(LoginData);
    // LoginData = JSON.parse(sessionStorage.getItem('LoginData'));   
    
    
    DownTimeallData.onclick=function(){
        content_in.innerHTML='';
        offallnavbtn();
        DownTimeallData.classList="onnavbtn";
        viewDownTimeallData();
    }
    UpTimeallData.onclick=function(){
        content_in.innerHTML='';
        offallnavbtn();
        UpTimeallData.classList="onnavbtn";
        viewUpTimeallData();
    }
    genre_wholefloorhome.onclick=function(){
        
        content_in.innerHTML='';
        offallnavbtn();
        genre_wholefloorhome.classList="onnavbtn";
        genre="整層住家";
        view_genre(genre);
    }
    genre_independentsuite.onclick=function(){
        content_in.innerHTML='';
        offallnavbtn();
        genre_independentsuite.classList="onnavbtn";
        genre="獨立套房";
        view_genre(genre);
    }
    genre_elegantroom.onclick=function(){
        content_in.innerHTML='';
        offallnavbtn();
        genre_elegantroom.classList="onnavbtn";
        genre="雅房";
        view_genre(genre);
    }
    genre_SubletSuite.onclick=function(){
        content_in.innerHTML='';
        offallnavbtn();
        genre_SubletSuite.classList="onnavbtn";
        genre="分租套房";
        view_genre(genre);
    }
    type_apartment.onclick=function(){
        content_in.innerHTML='';
        offallnavbtn();
        type_apartment.classList="onnavbtn";
        type="公寓";
        view_type(type);
    }
    type_elevatorbuilding.onclick=function(){
        content_in.innerHTML='';
        offallnavbtn();
        type_elevatorbuilding.classList="onnavbtn";
        type="電梯大樓";
        view_type(type);
    }
    type_Tutiancuo.onclick=function(){
        content_in.innerHTML='';
        offallnavbtn();
        type_Tutiancuo.classList="onnavbtn";
        type="透天厝";
        view_type(type);
    }
    type_villa.onclick=function(){
        content_in.innerHTML='';
        offallnavbtn();
        type_villa.classList="onnavbtn";
        type="別墅";
        view_type(type);
    }
    equipmentname_parkingspace.onclick=function(){
        content_in.innerHTML='';
        offallnavbtn();
        equipmentname_parkingspace.classList="onnavbtn";
        equipmentname="車位";
        view_equipmentname(equipmentname);
    }
    equipmentname_elevator.onclick=function(){
        content_in.innerHTML='';
        offallnavbtn();
        equipmentname_elevator.classList="onnavbtn";
        equipmentname="電梯";
        view_equipmentname(equipmentname);
    }
    equipmentname_Canpartner.onclick=function(){
        content_in.innerHTML='';
        offallnavbtn();
        equipmentname_Canpartner.classList="onnavbtn";
        equipmentname="可開伙";
        view_equipmentname(equipmentname);
    }
    equipmentname_network.onclick=function(){
        content_in.innerHTML='';
        offallnavbtn();
        equipmentname_network.classList="onnavbtn";
        equipmentname="網路";
        view_equipmentname(equipmentname);
    }
    equipmentname_bed.onclick=function(){
        content_in.innerHTML='';
        offallnavbtn();
        equipmentname_bed.classList="onnavbtn";
        equipmentname="床";
        view_equipmentname(equipmentname);
    }
    equipmentname_tablesandchairs.onclick=function(){
        content_in.innerHTML='';
        offallnavbtn();
        equipmentname_tablesandchairs.classList="onnavbtn";
        equipmentname="桌椅";
        view_equipmentname(equipmentname);
    }
    equipmentname_waterheater.onclick=function(){
        content_in.innerHTML='';
        offallnavbtn();
        equipmentname_waterheater.classList="onnavbtn";
        equipmentname="熱水器";
        view_equipmentname(equipmentname);
    }
    equipmentname_airconditioner.onclick=function(){
        content_in.innerHTML='';
        offallnavbtn();
        equipmentname_airconditioner.classList="onnavbtn";
        equipmentname="冷氣";
        view_equipmentname(equipmentname);
    }
    equipmentname_washingmachine.onclick=function(){
        content_in.innerHTML='';
        offallnavbtn();
        equipmentname_washingmachine.classList="onnavbtn";
        equipmentname="洗衣機";
        view_equipmentname(equipmentname);
    }
    equipmentname_Wardrobe.onclick=function(){
        content_in.innerHTML='';
        offallnavbtn();
        equipmentname_Wardrobe.classList="onnavbtn";
        equipmentname="衣櫃";
        view_equipmentname(equipmentname);
    }
    equipmentname_refrigerator.onclick=function(){
        content_in.innerHTML='';
        offallnavbtn();
        equipmentname_refrigerator.classList="onnavbtn";
        equipmentname="冰箱";
        view_equipmentname(equipmentname);
    }
    pattern_room1.onclick=function(){
        content_in.innerHTML='';
        offallnavbtn();
        pattern_room1.classList="onnavbtn";
        pattern="1房";
        view_pattern(pattern);
    }
    pattern_room2.onclick=function(){
        content_in.innerHTML='';
        offallnavbtn();
        pattern_room2.classList="onnavbtn";
        pattern="2房";
        view_pattern(pattern);
    }
    pattern_room3.onclick=function(){
        content_in.innerHTML='';
        offallnavbtn();
        pattern_room3.classList="onnavbtn";
        pattern="3房";
        view_pattern(pattern);
    }
    pattern_room4.onclick=function(){
        content_in.innerHTML='';
        offallnavbtn();
        pattern_room4.classList="onnavbtn";
        pattern="4房以上";
        view_pattern(pattern);
    }
    equipmentname_naturalgas.onclick=function(){
        content_in.innerHTML='';
        offallnavbtn();
        equipmentname_naturalgas.classList="onnavbtn";
        equipmentname="天然瓦斯";
        view_equipmentname(equipmentname);
    }
    equipmentname_Thefourthstation.onclick=function(){
        content_in.innerHTML='';
        offallnavbtn();
        equipmentname_Thefourthstation.classList="onnavbtn";
        equipmentname="第四台";
        view_equipmentname(equipmentname);
    }
    equipmentname_sofa.onclick=function(){
        content_in.innerHTML='';
        offallnavbtn();
        equipmentname_sofa.classList="onnavbtn";
        equipmentname="沙發";
        view_equipmentname(equipmentname);
    }
    equipmentname_balcony.onclick=function(){
        content_in.innerHTML='';
        offallnavbtn();
        equipmentname_balcony.classList="onnavbtn";
        equipmentname="陽台";
        view_equipmentname(equipmentname);
    }



}

function offallnavbtn(){
    
    DownTimeallData.classList="navbtn";
    UpTimeallData.classList="navbtn";
    genre_wholefloorhome.classList="navbtn";
    genre_independentsuite.classList="navbtn";
    genre_elegantroom.classList="navbtn";
    genre_SubletSuite.classList="navbtn";
    type_apartment.classList="navbtn";
    type_elevatorbuilding.classList="navbtn";
    type_Tutiancuo.classList="navbtn";
    type_villa.classList="navbtn";
    equipmentname_parkingspace.classList="navbtn";
    equipmentname_elevator.classList="navbtn";
    equipmentname_Canpartner.classList="navbtn";
    equipmentname_network.classList="navbtn";
    equipmentname_bed.classList="navbtn";
    equipmentname_tablesandchairs.classList="navbtn";
    equipmentname_waterheater.classList="navbtn";
    equipmentname_airconditioner.classList="navbtn";
    equipmentname_washingmachine.classList="navbtn";
    equipmentname_Wardrobe.classList="navbtn";
    equipmentname_refrigerator.classList="navbtn";
    pattern_room1.classList="navbtn";
    pattern_room2.classList="navbtn";
    pattern_room3.classList="navbtn";
    pattern_room4.classList="navbtn";
    equipmentname_naturalgas.classList="navbtn";
    equipmentname_Thefourthstation.classList="navbtn";
    equipmentname_sofa.classList="navbtn";
    equipmentname_balcony.classList="navbtn";
}