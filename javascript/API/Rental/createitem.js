let genre;
let pattern;
let type;
let equipmentname='';


function createitem(data){
    const submit = document.getElementById("submit");
    const form = document.querySelector("form");

    submit.addEventListener("click", (event) => {
    event.preventDefault();
    const formData = new FormData(form);
    // formData.append('img1_1','');
    // formData.append('img1_2','');
    formData.append('type',`${type}`);
    formData.append('genre',`${genre}`);
    formData.append('pattern',`${pattern}`);
    
    formData.append('equipmentname',`${equipmentname}`);
    formData.append('publisher',`${data.members.account}`);
    
    console.log(type);
    console.log(genre);
    console.log(pattern);
    console.log(equipmentname);
    console.log(data.members.account);
    // formData.append('waterfee','');
    // formData.append('electricitybill','');
    // formData.append('adminfee','');
    // formData.append('rent','');
    // formData.append('title','');
    // formData.append('address','');
    // formData.append('content','');


    axios({
        method: "post",
        url: "http://localhost:5190/api/Home/InsertRental",
        headers: {
        "Content-Type": "multipart/form-data",
        'Accept': "application/json",
        'Authorization': `Bearer ${data.token}`,
        },
        data: formData,
    })
        .then((response) => {
        console.log(response.data);

        let validatatext_signup=document.getElementById('validatatext_signup');
        validatatext_signup.innerHTML=response.data.message;
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
            equipmentname+=refrigerator.value;
        }else{
            equipmentname =equipmentname.replace(refrigerator.value,'')
        }
        
    }
    Washing_machine.onclick=function(){
        if(Washing_machine.checked){
            equipmentname+=Washing_machine.value;
        }else{
            equipmentname =equipmentname.replace(Washing_machine.value,'')
        }
        
    }
    TV.onclick=function(){
        if(TV.checked){
            equipmentname+=TV.value;
        }else{
            equipmentname =equipmentname.replace(TV.value,'')
        }
        
    }
    air_conditioner.onclick=function(){
        if(air_conditioner.checked){
            equipmentname+=air_conditioner.value;
        }else{
            equipmentname =equipmentname.replace(air_conditioner.value,'')
        }
        
    }
    Can_partner.onclick=function(){
        if(Can_partner.checked){
            equipmentname+=Can_partner.value;
        }else{
            equipmentname =equipmentname.replace(Can_partner.value,'')
        }
        
    }
    water_heater.onclick=function(){
        if(water_heater.checked){
            equipmentname+=water_heater.value;
        }else{
            equipmentname =equipmentname.replace(water_heater.value,'')
        }
        
    }
    bed.onclick=function(){
        if(bed.checked){
            equipmentname+=bed.value;
        }else{
            equipmentname =equipmentname.replace(bed.value,'')
        }
        
    }
    clothes.onclick=function(){
        if(clothes.checked){
            equipmentname+=clothes.value;
        }else{
            equipmentname =equipmentname.replace(clothes.value,'')
        }
        
    }
    fourth_unit.onclick=function(){
        if(fourth_unit.checked){
            equipmentname+=fourth_unit.value;
        }else{
            equipmentname =equipmentname.replace(fourth_unit.value,'')
        }
        
    }
    Network.onclick=function(){
        if(Network.checked){
            equipmentname+=Network.value;
        }else{
            equipmentname =equipmentname.replace(Network.value,'')
        }
        
    }
    natural_gas.onclick=function(){
        if(natural_gas.checked){
            equipmentname+=natural_gas.value;
        }else{
            equipmentname =equipmentname.replace(natural_gas.value,'')
        }
        
    }
    sofa.onclick=function(){
        if(sofa.checked){
            equipmentname+=sofa.value;
        }else{
            equipmentname =equipmentname.replace(sofa.value,'')
        }
        
    }
    tables_chairs.onclick=function(){
        if(tables_chairs.checked){
            equipmentname+=tables_chairs.value;
        }else{
            equipmentname =equipmentname.replace(tables_chairs.value,'')
        }
        
    }
    balcony.onclick=function(){
        if(balcony.checked){
            equipmentname+=balcony.value;
        }else{
            equipmentname =equipmentname.replace(balcony.value,'')
        }
        
    }
    Elevator.onclick=function(){
        if(Elevator.checked){
            equipmentname+=Elevator.value;
        }else{
            equipmentname =equipmentname.replace(Elevator.value,'')
        }
        
    }
    parking_space.onclick=function(){
        if(parking_space.checked){
            equipmentname+=parking_space.value;
        }else{
            equipmentname =equipmentname.replace(parking_space.value,'')
        }
        
    }
    
}