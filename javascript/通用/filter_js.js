let filter_mask=document.getElementById('filter_mask');
let filter_locationbtn=document.getElementById('filter_locationbtn');
let filter_minimumebtn=document.getElementById('filter_minimumebtn');
let filter_maximumebtn=document.getElementById('filter_maximumebtn');
let filter_otherbtn=document.getElementById('filter_otherbtn');
let filter_location_content=document.getElementById('filter_location_content');
let filter_minimumebtn_content=document.getElementById('filter_minimumebtn_content');
let filter_otherbtn_content=document.getElementById('filter_otherbtn_content');
let filter_view_content=document.getElementById('filter_view_content');
let filter_btn=document.getElementById('filter_btn');
let filter_nav_locationbtn=document.getElementById('filter_nav_locationbtn');
let filter_nav_Viewingtimebtn=document.getElementById('filter_nav_Viewingtimebtn');
let filter_nav_otherbtn=document.getElementById('filter_nav_otherbtn');
var genre='',pattern='',type='',equipmentname='';

    function onlocationbtn(){
        allfilter_navClose();
        filter_nav_locationbtn.classList='onfilter_nav_btn';
        filter_view.style.display="none";
        divnav.style.display='none';
        show_filter.style.display='block';
        filter_mask.style.display='block';
        filter_view_content.style.display='flex';
        allfilter_btnClass();
        filter_locationbtn.classList='onfilter_nav';
        allfilter_contentClose();
        filter_location_content.style.display='block';
        addEventListener('wheel',function(){
            show_filter.style.display='none';
            filter_view.style.display="block";
            divnav.style.display='block';
            filter_mask.style.display='none';
            filter_view_content.style.display='none';
            allfilter_contentClose()
            allfilter_btnClass()
        })
    }

    function onViewingtimebtn(){
        allfilter_navClose();
        filter_nav_Viewingtimebtn.classList='onfilter_nav_btn';
        filter_view.style.display="none";
        divnav.style.display='none';
        show_filter.style.display='block';
        filter_mask.style.display='block';
        filter_view_content.style.display='flex';
        allfilter_btnClass();
        filter_minimumebtn.classList='onfilter_nav';
        allfilter_contentClose();
        filter_minimumebtn_content.style.display='block';
        viewminimume();
        addEventListener('wheel',function(){
            show_filter.style.display='none';
            filter_view.style.display="block";
            divnav.style.display='block';
            filter_mask.style.display='none';
            filter_view_content.style.display='none';
            allfilter_contentClose()
            allfilter_btnClass()
        })
    }

    function onotherbtn(){
        allfilter_navClose();
        filter_nav_otherbtn.classList='onfilter_nav_btn';
        filter_view.style.display="none";
        divnav.style.display='none';
        show_filter.style.display='block';
        filter_mask.style.display='block';
        filter_view_content.style.display='flex';
        allfilter_btnClass();
        filter_otherbtn.classList='onfilter_nav';
        allfilter_contentClose();
        filter_otherbtn_content.style.display='block';

        addEventListener('wheel',function(){
            show_filter.style.display='none';
            filter_view.style.display="block";
            divnav.style.display='block';
            filter_mask.style.display='none';
            filter_view_content.style.display='none';
            allfilter_contentClose()
            allfilter_btnClass()
        })
    }
    function allfilter_navClose(){
        filter_nav_locationbtn.classList='filter_nav_btn';
        filter_nav_Viewingtimebtn.classList='filter_nav_btn';
        filter_nav_otherbtn.classList='filter_nav_btn';
    }

    function allfilter_contentClose(){
        filter_location_content.style.display='none';
        filter_minimumebtn_content.style.display='none';
        filter_otherbtn_content.style.display='none';
    }

    function allfilter_btnClass(){
        filter_locationbtn.classList='filter_nav';
        filter_minimumebtn.classList='filter_nav';
        filter_maximumebtn.classList='filter_nav';
        filter_otherbtn.classList='filter_nav';
        
    }
    
    function onfilterbtn(){
        filter_locationbtn.onclick=function(){
            allfilter_btnClass();
            filter_locationbtn.classList='onfilter_nav';
            allfilter_contentClose();
            filter_location_content.style.display='block';
            allfilter_navClose();
            filter_nav_locationbtn.classList='onfilter_nav_btn';
        }
        filter_minimumebtn.onclick=function(){
            allfilter_btnClass();
            filter_minimumebtn.classList='onfilter_nav';
            allfilter_contentClose();
            filter_minimumebtn_content.style.display='block';
            viewminimume();
            allfilter_navClose();
            filter_nav_Viewingtimebtn.classList='onfilter_nav_btn';
        }
        filter_maximumebtn.onclick=function(){
            allfilter_btnClass();
            filter_maximumebtn.classList='onfilter_nav';
            allfilter_contentClose();
            filter_minimumebtn_content.style.display='block';
            viewminimume();
            allfilter_navClose();
            filter_nav_Viewingtimebtn.classList='onfilter_nav_btn';
        }
        filter_otherbtn.onclick=function(){
            allfilter_btnClass();
            filter_otherbtn.classList='onfilter_nav';
            allfilter_contentClose();
            filter_otherbtn_content.style.display='block';

            allfilter_navClose();
            filter_nav_otherbtn.classList='onfilter_nav_btn';
        }
    }

    CountChange();

let submit_location=document.getElementById('submit_location');
submit_location.onclick=function(){

    document.getElementById('County_value').innerHTML=`${document.getElementById('County').value}`;
    if((document.getElementById('County').value!="")&&(document.getElementById('townSelect').value!="")){
        document.getElementById('Township_value').innerHTML=`${document.getElementById('townSelect').value}`;
    }else if(document.getElementById('townSelect').value==""){
        document.getElementById('Township_value').innerHTML=``;
    }
    filter_location_content.style.display='none';
    filter_locationbtn.classList='filter_nav';
    if((document.getElementById('County').value!="")&&(document.getElementById('townSelect').value!="")){
        document.getElementById('delete_locationbtn').style.display='block';
    }else if(document.getElementById('County').value!=""){
        document.getElementById('delete_locationbtn').style.display='block';
    }
}



let submit_minimume=document.getElementById('submit_minimume');
submit_minimume.onclick=function(){
    document.getElementById('minimum_value').innerHTML=`$${document.getElementById('minimum').value}`;
    document.getElementById('maximume_value').innerHTML=`$${document.getElementById('maximume').value}`;
    filter_minimumebtn_content.style.display='none';
    filter_minimumebtn.classList='filter_nav';
    filter_maximumebtn.classList='filter_nav';
    document.getElementById('delete_miniamount').style.display='block';
    document.getElementById('delete_maxamount').style.display='block';

}

function viewminimume(){
    let min= document.getElementById('minimum');
    let max= document.getElementById('maximume');
    let changemin= document.getElementById('changemin');
    let changemax= document.getElementById('changemax');

    min.addEventListener('input',function(){
        allfilter_btnClass();
        filter_minimumebtn.classList='onfilter_nav';
        document.getElementById('changemin').value=`${document.getElementById('minimum').value}`;
        document.getElementById('maximume').min=document.getElementById('minimum').value;
        document.getElementById('maximume').value=document.getElementById('minimum').value;
        document.getElementById('changemax').value=`${document.getElementById('minimum').value}`;
    });

    max.addEventListener('input',function(){
        allfilter_btnClass();
        filter_maximumebtn.classList='onfilter_nav';
        document.getElementById('changemax').value=`${document.getElementById('maximume').value}`;

    });

    changemin.addEventListener('input',function(){
        allfilter_btnClass();
        filter_minimumebtn.classList='onfilter_nav';
        min.value=changemin.value;
    });

    changemax.addEventListener('input',function(){
        allfilter_btnClass();
        filter_maximumebtn.classList='onfilter_nav';
        console.log(changemax.value);
        console.log(changemin.value);
        console.log(parseInt(changemax.value)<parseInt(changemin.value));
        if(parseInt(changemax.value)<parseInt(changemin.value)){
            max.value=changemin.value;
            changemax.value=changemin.value;
        }else{
            max.value=changemax.value;
        }
        
    });


}



function oncombination(){
    genre_wholefloorhome.onclick=function(){
        genre_Label_btn_off();
        genre_wholefloorhome.classList='Label_btn_on';
        genre=genre_wholefloorhome.value;
    }
    genre_independentsuite.onclick=function(){
        genre_Label_btn_off();
        genre_independentsuite.classList='Label_btn_on';
        genre=genre_independentsuite.value;
    }
    genre_SubletSuite.onclick=function(){
        genre_Label_btn_off();
        genre_SubletSuite.classList='Label_btn_on';
        genre=genre_SubletSuite.value;
    }
    genre_elegantroom.onclick=function(){
        genre_Label_btn_off();
        genre_elegantroom.classList='Label_btn_on';
        genre=genre_elegantroom.value;
    }

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

    equipmentname_parkingspace.onclick=function(){
        equipmentname_Label_btn_off()
        equipmentname_parkingspace.classList='Label_btn_on';
        equipmentname=equipmentname_parkingspace.value;
    }
    equipmentname_elevator.onclick=function(){
        equipmentname_Label_btn_off()
        equipmentname_elevator.classList='Label_btn_on';
        equipmentname=equipmentname_elevator.value;
    }
    equipmentname_Canpartner.onclick=function(){
        equipmentname_Label_btn_off()
        equipmentname_Canpartner.classList='Label_btn_on';
        equipmentname=equipmentname_Canpartner.value;
    }
    equipmentname_bed.onclick=function(){
        equipmentname_Label_btn_off()
        equipmentname_bed.classList='Label_btn_on';
        equipmentname=equipmentname_bed.value;
    }
    equipmentname_tablesandchairs.onclick=function(){
        equipmentname_Label_btn_off()
        equipmentname_tablesandchairs.classList='Label_btn_on';
        equipmentname=equipmentname_tablesandchairs.value;
    }
    equipmentname_waterheater.onclick=function(){
        equipmentname_Label_btn_off()
        equipmentname_waterheater.classList='Label_btn_on';
        equipmentname=equipmentname_waterheater.value;
    }
    equipmentname_airconditioner.onclick=function(){
        equipmentname_Label_btn_off()
        equipmentname_airconditioner.classList='Label_btn_on';
        equipmentname=equipmentname_airconditioner.value;
    }
    equipmentname_washingmachine.onclick=function(){
        equipmentname_Label_btn_off()
        equipmentname_washingmachine.classList='Label_btn_on';
        equipmentname=equipmentname_washingmachine.value;
    }
    equipmentname_Wardrobe.onclick=function(){
        equipmentname_Label_btn_off()
        equipmentname_Wardrobe.classList='Label_btn_on';
        equipmentname=equipmentname_Wardrobe.value;
    }
    equipmentname_refrigerator.onclick=function(){
        equipmentname_Label_btn_off()
        equipmentname_refrigerator.classList='Label_btn_on';
        equipmentname=equipmentname_refrigerator.value;
    }
    equipmentname_naturalgas.onclick=function(){
        equipmentname_Label_btn_off()
        equipmentname_naturalgas.classList='Label_btn_on';
        equipmentname=equipmentname_naturalgas.value;
    }
    equipmentname_Thefourthstation.onclick=function(){
        equipmentname_Label_btn_off()
        equipmentname_Thefourthstation.classList='Label_btn_on';
        equipmentname=equipmentname_Thefourthstation.value;
    }
    equipmentname_sofa.onclick=function(){
        equipmentname_Label_btn_off()
        equipmentname_sofa.classList='Label_btn_on';
        equipmentname=equipmentname_sofa.value;
    }
    equipmentname_balcony.onclick=function(){
        equipmentname_Label_btn_off()
        equipmentname_balcony.classList='Label_btn_on';
        equipmentname=equipmentname_balcony.value;
    }
    equipmentname_TV.onclick=function(){
        equipmentname_Label_btn_off()
        equipmentname_TV.classList='Label_btn_on';
        equipmentname=equipmentname_TV.value;
    }
    equipmentname_network.onclick=function(){
        equipmentname_Label_btn_off()
        equipmentname_network.classList='Label_btn_on';
        equipmentname=equipmentname_network.value;
    }

    let submit_other=document.getElementById('submit_other');
    let other_value=document.getElementById('other_value');
    submit_other.onclick=function(){
        let total="";
        if(genre!=''){
            total+=genre+',';
        }else{
            total.replace(`${genre},`,'');
        }
        if(pattern!=''){
            total+=pattern+',';
        }else{
            total.replace(`${pattern},`,'');
        }
        if(type!=''){
            total+=type+',';
        }else{
            total.replace(`${type},`,'');
        }
        if(equipmentname!=''){
            total+=equipmentname+',';
        }else{
            total.replace(`${equipmentname},`,'');
        }
        other_value.innerHTML=total.slice(0,-1);
        filter_otherbtn_content.style.display='none';
        filter_otherbtn.classList='filter_nav';
        if(other_value.innerHTML!=''){
            document.getElementById('delete_other').style.display='block';
        }
    }

}   

function genre_Label_btn_off(){
    genre_wholefloorhome.classList='Label_btn_off';
    genre_independentsuite.classList='Label_btn_off';
    genre_SubletSuite.classList='Label_btn_off';
    genre_elegantroom.classList='Label_btn_off';
}

function pattern_Label_btn_off(){
    pattern_1room.classList='Label_btn_off';
    pattern_2room.classList='Label_btn_off';
    pattern_3room.classList='Label_btn_off';
    pattern_4room.classList='Label_btn_off';
}

function type_Label_btn_off(){
    type_apartment.classList='Label_btn_off';
    type_elevator_building.classList='Label_btn_off';
    type_Tutiancuo.classList='Label_btn_off';
    type_villa.classList='Label_btn_off';
}

function equipmentname_Label_btn_off(){
    equipmentname_parkingspace.classList='Label_btn_off';
    equipmentname_elevator.classList='Label_btn_off';
    equipmentname_Canpartner.classList='Label_btn_off';
    equipmentname_bed.classList='Label_btn_off';
    equipmentname_tablesandchairs.classList='Label_btn_off';
    equipmentname_waterheater.classList='Label_btn_off';
    equipmentname_airconditioner.classList='Label_btn_off';
    equipmentname_washingmachine.classList='Label_btn_off';
    equipmentname_Wardrobe.classList='Label_btn_off';
    equipmentname_refrigerator.classList='Label_btn_off';
    equipmentname_naturalgas.classList='Label_btn_off';
    equipmentname_Thefourthstation.classList='Label_btn_off';
    equipmentname_sofa.classList='Label_btn_off';
    equipmentname_balcony.classList='Label_btn_off';
    equipmentname_TV.classList='Label_btn_off';
    equipmentname_network.classList='Label_btn_off';
}

function CloseAllfilter(){
    show_filter.style.display='none';
    filter_view.style.display="block";
    divnav.style.display='block';
    filter_mask.style.display='none';
    filter_view_content.style.display='none';
    allfilter_contentClose();
    allfilter_btnClass();
}

let submit_allfilter=document.getElementById('submit_allfilter');
submit_allfilter.onclick=function(){
    

    let rent1_value,rent2_value;
    sessionStorage.setItem("nowPage",1);
    content_in.innerText='';
    pagination.innerHTML='';
    if((document.getElementById('minimum_value').innerHTML=='$0')&&(document.getElementById('maximume_value').innerHTML=='$0')){
        rent1_value='';
        rent2_value='';
    }else{
        rent1_value=document.getElementById('minimum_value').innerHTML.replace('$','');
        rent2_value=document.getElementById('maximume_value').innerHTML.replace('$','');
    }
    console.log(genre);
    console.log(pattern);
    console.log(type);
    console.log(equipmentname);

    const formData = new FormData();
    formData.append('county',document.getElementById('County_value').innerHTML);
    formData.append('township',document.getElementById('Township_value').innerHTML);
    formData.append('rent1',rent1_value);
    formData.append('rent2',rent2_value);
    formData.append('genre',genre);
    formData.append('pattern',pattern);
    formData.append('type',type);
    formData.append('equipmentname',equipmentname);
    formData.append('uploadtime',"");

    if(LoginData!=null){
        nowPage=sessionStorage.getItem("nowPage");
        axios({
            method:'post',
            url:`http://localhost:5190/api/HomeAny/HomeAnySearchDown?Page=${nowPage}`,
            headers:{
                'Content-Type':"multipart/form-data",
                'Accept': "application/json",
                Authorization: `Bearer ${LoginData.token}`,
            },data:formData,
        }).then(( { data } ) => {
            CloseAllfilter();
            content_in.innerHTML='';
            console.log(data);
            if(data=='查無此資料'){
                noDataText.style.display='block';
                noDataText.innerHTML='查無此資料';
            }else{
                noDataText.style.display='none';
                console.log(data.idList);
                var rental_Id=0;
                data.idList.forEach(function(){
                    console.log(rental_Id);
                    addonRental(data,rental_Id);
                    rental_Id++;
                });
                for(var onPage=1;onPage<=data.paging.maxPage;onPage++){
                    let addPage=document.createElement('li');
                     if(onPage==nowPage){
                        addPage.innerHTML=`<a href="#" class="NowPage" onclick="NowPage(this)">${onPage}</a>`;
                    }else{
                        addPage.innerHTML=`<a href="#" class='otherPage' onclick="NowPage(this)">${onPage}</a>`;
                    }
                    pagination.appendChild(addPage);
                }
                    
                
            }

        })
        .catch((error) => {
            console.error(error);
        });
    }else{
        nowPage=sessionStorage.getItem("nowPage");
        axios({
            method:'post',
            url:`http://localhost:5190/api/HomeAny/HomeAnySearchDown?Page=${nowPage}`,
            headers:{
                'Content-Type':"multipart/form-data",
                'Accept': "application/json",
                // Authorization: `Bearer ${LoginData.token}`,
            },data:formData,
        }).then(( { data } ) => {
            CloseAllfilter();
            content_in.innerHTML='';
            console.log(data);
            if(data=='查無此資料'){
                noDataText.style.display='block';
                noDataText.innerHTML='查無此資料';
            }else{
                noDataText.style.display='none';
                
                var rental_Id=0;
                console.log(data.idList);
                data.idList.forEach(function(){
                    console.log(rental_Id);
                    addonRental(data,rental_Id);
                    rental_Id++;
                });
                for(var onPage=1;onPage<=data.paging.maxPage;onPage++){
                    let addPage=document.createElement('li');
                     if(onPage==nowPage){
                        addPage.innerHTML=`<a href="#" class="NowPage" onclick="NowPage(this)">${onPage}</a>`;
                    }else{
                        addPage.innerHTML=`<a href="#" class='otherPage' onclick="NowPage(this)">${onPage}</a>`;
                    }
                    pagination.appendChild(addPage);
                }
            }
            
        })
        .catch((error) => {
            console.error(error);
        });
    }
}

document.getElementById('delete_locationbtn').onclick=function(){
    document.getElementById('County_value').innerHTML='';
    document.getElementById('Township_value').innerHTML='';
    document.getElementById('filter_location_content').style.display='none';
    document.getElementById('delete_locationbtn').style.display='none';
    document.getElementById('County').value="";
    document.getElementById('townSelect').innerHTML="<option>--請選擇--</option>";
}

document.getElementById('delete_miniamount').onclick=function(){
    document.getElementById('minimum_value').innerHTML='';
    document.getElementById('filter_minimumebtn_content').style.display='none';
    document.getElementById('delete_miniamount').style.display='none';
    document.getElementById('changemin').value='';
    document.getElementById('minimum').value=0;
    
}

document.getElementById('delete_maxamount').onclick=function(){
    document.getElementById('minimum_value').innerHTML='';
    document.getElementById('maximume_value').innerHTML='';
    document.getElementById('filter_minimumebtn_content').style.display='none';
    document.getElementById('delete_maxamount').style.display='none';
    document.getElementById('delete_miniamount').style.display='none';
    document.getElementById('changemin').value='';
    document.getElementById('changemax').value='';
    document.getElementById('minimum').value=0;
    document.getElementById('maximume').value=0;
    document.getElementById('maximume').min=0;
}

document.getElementById('delete_other').onclick=function(){
    document.getElementById('other_value').innerHTML='';
    document.getElementById('filter_otherbtn_content').style.display='none';
    document.getElementById('delete_other').style.display='none';
    equipmentname_Label_btn_off();
    type_Label_btn_off();
    pattern_Label_btn_off();
    genre_Label_btn_off();
    genre='';
    pattern='';
    type='';
    equipmentname='';
}

