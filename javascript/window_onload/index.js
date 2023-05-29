let DownTimeallData=document.getElementById('DownTimeallData');
let UpTimeallData=document.getElementById('UpTimeallData');
let genre_wholefloorhome1=document.getElementById('genre_wholefloorhome1');
let genre_independentsuite1=document.getElementById('genre_independentsuite1');
let genre_elegantroom1=document.getElementById('genre_elegantroom1');
let genre_SubletSuite1=document.getElementById('genre_SubletSuite1');
let type_elevatorbuilding1=document.getElementById('type_elevatorbuilding1');
let type_apartment1=document.getElementById('type_apartment1');
let type_Tutiancuo1=document.getElementById('type_Tutiancuo1');
let type_villa1=document.getElementById('type_villa1');
let equipmentname_parkingspace1=document.getElementById('equipmentname_parkingspace1');
let equipmentname_elevator1=document.getElementById('equipmentname_elevator1');
let equipmentname_Canpartner1=document.getElementById('equipmentname_Canpartner1');
let equipmentname_network1=document.getElementById('equipmentname_network1');
let equipmentname_bed1=document.getElementById('equipmentname_bed1');
let equipmentname_tablesandchairs1=document.getElementById('equipmentname_tablesandchairs1');
let equipmentname_waterheater1=document.getElementById('equipmentname_waterheater1');
let equipmentname_airconditioner1=document.getElementById('equipmentname_airconditioner1');
let equipmentname_washingmachine1=document.getElementById('equipmentname_washingmachine1');
let equipmentname_Wardrobe1=document.getElementById('equipmentname_Wardrobe1');
let equipmentname_refrigerator1=document.getElementById('equipmentname_refrigerator1');
let pattern_room11=document.getElementById('pattern_room11');
let pattern_room21=document.getElementById('pattern_room21');
let pattern_room31=document.getElementById('pattern_room31');
let pattern_room41=document.getElementById('pattern_room41');
let equipmentname_naturalgas1=document.getElementById('equipmentname_naturalgas1');
let equipmentname_Thefourthstation1=document.getElementById('equipmentname_Thefourthstation1');
let equipmentname_sofa1=document.getElementById('equipmentname_sofa1');
let equipmentname_balcony1=document.getElementById('equipmentname_balcony1');

let onfilter=document.getElementById('onfilter');
let townSelect=document.getElementById('townSelect');

let filter_view=document.getElementById('filter_view');
let show_filter=document.getElementById('show_filter');
let locationbtn=document.getElementById('locationbtn');
let Viewingtimebtn=document.getElementById('Viewingtimebtn');
let otherbtn=document.getElementById('otherbtn');


window.onload=function(){
    
    console.log(LoginData);
    console.log(collectData);
    if(LoginData!=null){
        avatarimg.src=`${LoginData.members.img}`;
    }else{
        avatarimg.src='/image/default_avatar.jpeg';
    }
    viewDownTimeallData();
    oncombination();
    // if(LoginData!=null){
    //     if(LoginData.members.identity==2){
    //         collectAllData(LoginData);
    //     }
    // }
    handleLogoutData(LoginData);
    console.log(LoginData);
    //LoginData = JSON.parse(sessionStorage.getItem('LoginData'));   
    
    // filter_btn1.onclick=function(){
    //     content_in.innerHTML='';
    //     offallnavbtn();
    //     viewDownTimeallData();
    // }

    filter_btn.onclick=function(){
        filter_view.style.display="none";
        divnav.style.display='none';
        show_filter.style.display='block';
        filter_mask.style.display='block';
        filter_view_content.style.display='flex';
        // filter_nav_locationbtn.classList='filter_nav_btn';
        // filter_nav_Viewingtimebtn.classList='filter_nav_btn';
        // filter_nav_otherbtn.classList='filter_nav_btn';
    }

    locationbtn.onclick=function(){
        onlocationbtn();

    }

    Viewingtimebtn.onclick=function(){
        onViewingtimebtn();
    }

    otherbtn.onclick=function(){
        onotherbtn();
    }
    content.onclick=function(){
        show_filter.style.display='none';
            filter_view.style.display="block";
            divnav.style.display='block';
            filter_mask.style.display='none';
            filter_view_content.style.display='none';
            allfilter_contentClose();
            allfilter_btnClass();
    }

    filter_nav_locationbtn.onclick=function(){
        allfilter_navClose();
        filter_nav_locationbtn.classList='onfilter_nav_btn';
        allfilter_btnClass();
        filter_locationbtn.classList='onfilter_nav';
        allfilter_contentClose();
        filter_location_content.style.display='block';

    }
    filter_nav_Viewingtimebtn.onclick=function(){
        allfilter_navClose();
        filter_nav_Viewingtimebtn.classList='onfilter_nav_btn';
        allfilter_btnClass();
        filter_minimumebtn.classList='onfilter_nav';
        allfilter_contentClose();
        filter_minimumebtn_content.style.display='block';
        viewminimume();

    }
    filter_nav_otherbtn.onclick=function(){
        allfilter_navClose();
        filter_nav_otherbtn.classList='onfilter_nav_btn';
        allfilter_btnClass();
        filter_otherbtn.classList='onfilter_nav';
        allfilter_contentClose();
        filter_otherbtn_content.style.display='block';
    }
   
        
    onfilterbtn();

    DownTimeallData.onclick=function(){
        sessionStorage.setItem("nowPage",1);
        content_in.innerText='';
        pagination.innerHTML='';
        offallnavbtn();
        DownTimeallData.classList="onnavbtn";
        viewDownTimeallData();
    }
    UpTimeallData.onclick=function(){
        sessionStorage.setItem("nowPage",1);
        content_in.innerText='';
        pagination.innerHTML='';
        offallnavbtn();
        UpTimeallData.classList="onnavbtn";
        viewUpTimeallData();
    }
    genre_wholefloorhome1.onclick=function(){
        sessionStorage.setItem("nowPage",1);
        content_in.innerText='';
        pagination.innerHTML='';
        offallnavbtn();
        genre_wholefloorhome1.classList="onnavbtn";
        genre="整層住家";
        view_genre(genre);
    }
    genre_independentsuite1.onclick=function(){
        sessionStorage.setItem("nowPage",1);
        content_in.innerText='';
        pagination.innerHTML='';
        offallnavbtn();
        genre_independentsuite1.classList="onnavbtn";
        genre="獨立套房";
        view_genre(genre);
    }
    genre_elegantroom1.onclick=function(){
                sessionStorage.setItem("nowPage",1);
        content_in.innerText='';
        pagination.innerHTML='';
        offallnavbtn();
        genre_elegantroom1.classList="onnavbtn";
        genre="雅房";
        view_genre(genre);
    }
    genre_SubletSuite1.onclick=function(){
                sessionStorage.setItem("nowPage",1);
        content_in.innerText='';
        pagination.innerHTML='';
        offallnavbtn();
        genre_SubletSuite1.classList="onnavbtn";
        genre="分租套房";
        view_genre(genre);
    }
    type_apartment1.onclick=function(){
                sessionStorage.setItem("nowPage",1);
        content_in.innerText='';
        pagination.innerHTML='';
        offallnavbtn();
        type_apartment1.classList="onnavbtn";
        type="公寓";
        view_type(type);
    }
    type_elevatorbuilding1.onclick=function(){
                sessionStorage.setItem("nowPage",1);
        content_in.innerText='';
        pagination.innerHTML='';
        offallnavbtn();
        type_elevatorbuilding1.classList="onnavbtn";
        type="電梯大樓";
        view_type(type);
    }
    type_Tutiancuo1.onclick=function(){
                sessionStorage.setItem("nowPage",1);
        content_in.innerText='';
        pagination.innerHTML='';
        offallnavbtn();
        type_Tutiancuo1.classList="onnavbtn";
        type="透天厝";
        view_type(type);
    }
    type_villa1.onclick=function(){
                sessionStorage.setItem("nowPage",1);
        content_in.innerText='';
        pagination.innerHTML='';
        offallnavbtn();
        type_villa1.classList="onnavbtn";
        type="別墅";
        view_type(type);
    }
    equipmentname_parkingspace1.onclick=function(){
                sessionStorage.setItem("nowPage",1);
        content_in.innerText='';
        pagination.innerHTML='';
        offallnavbtn();
        equipmentname_parkingspace1.classList="onnavbtn";
        equipmentname="車位";
        view_equipmentname(equipmentname);
    }
    equipmentname_elevator1.onclick=function(){
                sessionStorage.setItem("nowPage",1);
        content_in.innerText='';
        pagination.innerHTML='';
        offallnavbtn();
        equipmentname_elevator1.classList="onnavbtn";
        equipmentname="電梯";
        view_equipmentname(equipmentname);
    }
    equipmentname_Canpartner1.onclick=function(){
                sessionStorage.setItem("nowPage",1);
        content_in.innerText='';
        pagination.innerHTML='';
        offallnavbtn();
        equipmentname_Canpartner1.classList="onnavbtn";
        equipmentname="可開伙";
        view_equipmentname(equipmentname);
    }
    equipmentname_network1.onclick=function(){
                sessionStorage.setItem("nowPage",1);
        content_in.innerText='';
        pagination.innerHTML='';
        offallnavbtn();
        equipmentname_network1.classList="onnavbtn";
        equipmentname="網路";
        view_equipmentname(equipmentname);
    }
    equipmentname_bed1.onclick=function(){
                sessionStorage.setItem("nowPage",1);
        content_in.innerText='';
        pagination.innerHTML='';
        offallnavbtn();
        equipmentname_bed1.classList="onnavbtn";
        equipmentname="床";
        view_equipmentname(equipmentname);
    }
    equipmentname_tablesandchairs1.onclick=function(){
                sessionStorage.setItem("nowPage",1);
        content_in.innerText='';
        pagination.innerHTML='';
        offallnavbtn();
        equipmentname_tablesandchairs1.classList="onnavbtn";
        equipmentname="桌椅";
        view_equipmentname(equipmentname);
    }
    equipmentname_waterheater1.onclick=function(){
                sessionStorage.setItem("nowPage",1);
        content_in.innerText='';
        pagination.innerHTML='';
        offallnavbtn();
        equipmentname_waterheater1.classList="onnavbtn";
        equipmentname="熱水器";
        view_equipmentname(equipmentname);
    }
    equipmentname_airconditioner1.onclick=function(){
                sessionStorage.setItem("nowPage",1);
        content_in.innerText='';
        pagination.innerHTML='';
        offallnavbtn();
        equipmentname_airconditioner1.classList="onnavbtn";
        equipmentname="冷氣";
        view_equipmentname(equipmentname);
    }
    equipmentname_washingmachine1.onclick=function(){
                sessionStorage.setItem("nowPage",1);
        content_in.innerText='';
        pagination.innerHTML='';
        offallnavbtn();
        equipmentname_washingmachine1.classList="onnavbtn";
        equipmentname="洗衣機";
        view_equipmentname(equipmentname);
    }
    equipmentname_Wardrobe1.onclick=function(){
                sessionStorage.setItem("nowPage",1);
        content_in.innerText='';
        pagination.innerHTML='';
        offallnavbtn();
        equipmentname_Wardrobe1.classList="onnavbtn";
        equipmentname="衣櫃";
        view_equipmentname(equipmentname);
    }
    equipmentname_refrigerator1.onclick=function(){
                sessionStorage.setItem("nowPage",1);
        content_in.innerText='';
        pagination.innerHTML='';
        offallnavbtn();
        equipmentname_refrigerator1.classList="onnavbtn";
        equipmentname="冰箱";
        view_equipmentname(equipmentname);
    }
    pattern_room11.onclick=function(){
                sessionStorage.setItem("nowPage",1);
        content_in.innerText='';
        pagination.innerHTML='';
        offallnavbtn();
        pattern_room11.classList="onnavbtn";
        pattern="1房";
        view_pattern(pattern);
    }
    pattern_room21.onclick=function(){
                sessionStorage.setItem("nowPage",1);
        content_in.innerText='';
        pagination.innerHTML='';
        offallnavbtn();
        pattern_room21.classList="onnavbtn";
        pattern="2房";
        view_pattern(pattern);
    }
    pattern_room31.onclick=function(){
                sessionStorage.setItem("nowPage",1);
        content_in.innerText='';
        pagination.innerHTML='';
        offallnavbtn();
        pattern_room31.classList="onnavbtn";
        pattern="3房";
        view_pattern(pattern);
    }
    pattern_room41.onclick=function(){
                sessionStorage.setItem("nowPage",1);
        content_in.innerText='';
        pagination.innerHTML='';
        offallnavbtn();
        pattern_room41.classList="onnavbtn";
        pattern="4房以上";
        view_pattern(pattern);
    }
    equipmentname_naturalgas1.onclick=function(){
                sessionStorage.setItem("nowPage",1);
        content_in.innerText='';
        pagination.innerHTML='';
        offallnavbtn();
        equipmentname_naturalgas1.classList="onnavbtn";
        equipmentname="天然瓦斯";
        view_equipmentname(equipmentname);
    }
    equipmentname_Thefourthstation1.onclick=function(){
                sessionStorage.setItem("nowPage",1);
        content_in.innerText='';
        pagination.innerHTML='';
        offallnavbtn();
        equipmentname_Thefourthstation1.classList="onnavbtn";
        equipmentname="第四台";
        view_equipmentname(equipmentname);
    }
    equipmentname_sofa1.onclick=function(){
                sessionStorage.setItem("nowPage",1);
        content_in.innerText='';
        pagination.innerHTML='';
        offallnavbtn();
        equipmentname_sofa1.classList="onnavbtn";
        equipmentname="沙發";
        view_equipmentname(equipmentname);
    }
    equipmentname_balcony1.onclick=function(){
                sessionStorage.setItem("nowPage",1);
        content_in.innerText='';
        pagination.innerHTML='';
        offallnavbtn();
        equipmentname_balcony1.classList="onnavbtn";
        equipmentname="陽台";
        view_equipmentname(equipmentname);
    }

    

}


    


function offallnavbtn(){
    DownTimeallData.classList="navbtn";
    UpTimeallData.classList="navbtn";
    genre_wholefloorhome1.classList="navbtn";
    genre_independentsuite1.classList="navbtn";
    genre_elegantroom1.classList="navbtn";
    genre_SubletSuite1.classList="navbtn";
    type_apartment1.classList="navbtn";
    type_elevatorbuilding1.classList="navbtn";
    type_Tutiancuo1.classList="navbtn";
    type_villa1.classList="navbtn";
    equipmentname_parkingspace1.classList="navbtn";
    equipmentname_elevator1.classList="navbtn";
    equipmentname_Canpartner1.classList="navbtn";
    equipmentname_network1.classList="navbtn";
    equipmentname_bed1.classList="navbtn";
    equipmentname_tablesandchairs1.classList="navbtn";
    equipmentname_waterheater1.classList="navbtn";
    equipmentname_airconditioner1.classList="navbtn";
    equipmentname_washingmachine1.classList="navbtn";
    equipmentname_Wardrobe1.classList="navbtn";
    equipmentname_refrigerator1.classList="navbtn";
    pattern_room11.classList="navbtn";
    pattern_room21.classList="navbtn";
    pattern_room31.classList="navbtn";
    pattern_room41.classList="navbtn";
    equipmentname_naturalgas1.classList="navbtn";
    equipmentname_Thefourthstation1.classList="navbtn";
    equipmentname_sofa1.classList="navbtn";
    equipmentname_balcony1.classList="navbtn";
}



