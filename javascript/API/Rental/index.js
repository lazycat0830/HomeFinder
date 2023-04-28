
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

});

filter_delete.onclick=function(){
    deleteMask();
}

let data=document.querySelector("form");
let allfilter_btn=document.getElementById('allfilter_btn');

allfilter_btn.onclick=function(){
    let formData=new FormData(data);
    axios({
        method:'post',
        url:'http://localhost:5190/api/HomeAny/HomeAnySearchDown',
        headers:{
            'Content-Type':"multipart/form-data",
            'Accept': "application/json",
            // Authorization: `Bearer ${token}`,
        },data:formData,
    }).then((response) => {
        console.log(response.data);
    })
    .catch((error) => {
        console.error(error);
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

