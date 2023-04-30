
let createMask =()=>{
    if(document.getElementById("mask")){
        return true;
    }
    let mask =document.createElement("div");
    mask.id="mask";
    mask.className="mask";
    document.body.appendChild(mask);
    document.documentElement.classList.add("htmlMask");
    mask.addEventListener("click",deleteMask);
    
    
};


let login =document.getElementById("login");
let deleteMask =()=>{
    let mask;
    if(mask=document.getElementById("mask")){
        mask.removeEventListener("click",deleteMask);
        mask.parentNode.removeChild(mask);
        document.documentElement.classList.remove("htmlMask");
        login.style.display="none";
        filter.style.display="none";
        forgetpassword.style.display="none";
    }
};




let Useravatar=document.getElementById("Useravatar");
let usermenu=document.getElementById("usermenu");
let rentermenu=document.getElementById("rentermenu");
let publishermenu=document.getElementById("publishermenu");
let adminmenu=document.getElementById("adminmenu");
console.log(Useravatar);
console.log(usermenu);
console.log(rentermenu);
console.log(publishermenu);
console.log(adminmenu);





let filter=document.getElementById("filter");
let filter_btn=document.getElementById("filter_btn");
let filter_delete=document.getElementById("filter_delete")
console.log(filter);
console.log(filter_btn);
console.log(filter_delete);

filter_btn.addEventListener("click",function(){
    createMask();
    filter.style.display="block";
    genre_combination();
    type_combination();
    pattern_combination();
    equipmentname_combination();
    CountChange();

});

filter_delete.onclick=function(){
    deleteMask();
}

let data=document.querySelector("form");
let allfilter_btn=document.getElementById('allfilter_btn');
let rent1=document.getElementById('rent1');
let rent2=document.getElementById('rent2');
let town=document=document.getElementById('town');

// town.addEventListener('change', () => {
//     console.log(town.value);
// });

allfilter_btn.onclick=function(){
    let formData=new FormData();

    console.log(County.value);
    console.log(townSelect.value);
    console.log(rent1.value);
    console.log(rent2.value);
    console.log(genre);
    console.log(pattern);
    console.log(type);
    console.log(equipmentname);

    formData.append('county',County.value);
    formData.append('township',townSelect.value);
    formData.append('rent1',rent1.value);
    formData.append('rent2',rent2.value);
    formData.append('genre',genre);
    formData.append('pattern',pattern);
    formData.append('type',type);
    formData.append('equipmentname',equipmentname);
    formData.append('uploadtime',"");
    
    
    

    if(LoginData!=null){
        axios({
            method:'post',
            url:'http://localhost:5190/api/HomeAny/HomeAnySearchDown',
            headers:{
                'Content-Type':"multipart/form-data",
                'Accept': "application/json",
                Authorization: `Bearer ${LoginData.token}`,
            },data:formData,
        }).then(( { data } ) => {
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
            }

        })
        .catch((error) => {
            console.error(error);
        });
    }else{
        axios({
            method:'post',
            url:'http://localhost:5190/api/HomeAny/HomeAnySearchDown',
            headers:{
                'Content-Type':"multipart/form-data",
                'Accept': "application/json",
                // Authorization: `Bearer ${LoginData.token}`,
            },data:formData,
        }).then(( { data } ) => {
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
            }
        })
        .catch((error) => {
            console.error(error);
        });
    }
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

let equipmentname_parkingspace=document.getElementById('equipmentname_parkingspace');
let equipmentname_elevator=document.getElementById('equipmentname_elevator');
let equipmentname_Canpartner=document.getElementById('equipmentname_Canpartner');
let equipmentname_bed=document.getElementById('equipmentname_bed');
let equipmentname_tablesandchairs=document.getElementById('equipmentname_tablesandchairs');
let equipmentname_waterheater=document.getElementById('equipmentname_waterheater');
let equipmentname_airconditioner=document.getElementById('equipmentname_airconditioner');
let equipmentname_washingmachine=document.getElementById('equipmentname_washingmachine');
let equipmentname_Wardrobe=document.getElementById('equipmentname_Wardrobe');
let equipmentname_refrigerator=document.getElementById('equipmentname_refrigerator');
let equipmentname_naturalgas=document.getElementById('equipmentname_naturalgas');
let equipmentname_Thefourthstation=document.getElementById('equipmentname_Thefourthstation');
let equipmentname_sofa=document.getElementById('equipmentname_sofa');
let equipmentname_balcony=document.getElementById('equipmentname_balcony');

function equipmentname_combination(){
    equipmentname_parkingspace.onclick=function(){
        equipmentname_Label_btn_off()
        equipmentname_parkingspace.classList='Label_btn_on';
        type=equipmentname_parkingspace.value;
    }
    equipmentname_elevator.onclick=function(){
        equipmentname_Label_btn_off()
        equipmentname_elevator.classList='Label_btn_on';
        type=equipmentname_elevator.value;
    }
    equipmentname_Canpartner.onclick=function(){
        equipmentname_Label_btn_off()
        equipmentname_Canpartner.classList='Label_btn_on';
        type=equipmentname_Canpartner.value;
    }
    equipmentname_bed.onclick=function(){
        equipmentname_Label_btn_off()
        equipmentname_bed.classList='Label_btn_on';
        type=equipmentname_bed.value;
    }
    equipmentname_tablesandchairs.onclick=function(){
        equipmentname_Label_btn_off()
        equipmentname_tablesandchairs.classList='Label_btn_on';
        type=equipmentname_tablesandchairs.value;
    }
    equipmentname_waterheater.onclick=function(){
        equipmentname_Label_btn_off()
        equipmentname_waterheater.classList='Label_btn_on';
        type=equipmentname_waterheater.value;
    }
    equipmentname_airconditioner.onclick=function(){
        equipmentname_Label_btn_off()
        equipmentname_airconditioner.classList='Label_btn_on';
        type=equipmentname_airconditioner.value;
    }
    equipmentname_washingmachine.onclick=function(){
        equipmentname_Label_btn_off()
        equipmentname_washingmachine.classList='Label_btn_on';
        type=equipmentname_washingmachine.value;
    }
    equipmentname_Wardrobe.onclick=function(){
        equipmentname_Label_btn_off()
        equipmentname_Wardrobe.classList='Label_btn_on';
        type=equipmentname_Wardrobe.value;
    }
    equipmentname_refrigerator.onclick=function(){
        equipmentname_Label_btn_off()
        equipmentname_refrigerator.classList='Label_btn_on';
        type=equipmentname_refrigerator.value;
    }
    equipmentname_naturalgas.onclick=function(){
        equipmentname_Label_btn_off()
        equipmentname_naturalgas.classList='Label_btn_on';
        type=equipmentname_naturalgas.value;
    }
    equipmentname_Thefourthstation.onclick=function(){
        equipmentname_Label_btn_off()
        equipmentname_Thefourthstation.classList='Label_btn_on';
        type=equipmentname_Thefourthstation.value;
    }
    equipmentname_sofa.onclick=function(){
        equipmentname_Label_btn_off()
        equipmentname_sofa.classList='Label_btn_on';
        type=equipmentname_sofa.value;
    }
    equipmentname_balcony.onclick=function(){
        equipmentname_Label_btn_off()
        equipmentname_balcony.classList='Label_btn_on';
        type=equipmentname_balcony.value;
    }

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
}