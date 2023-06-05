let monup1=document.getElementById('monup1');
let mondown1=document.getElementById('mondown1');
let monup2=document.getElementById('monup2');
let mondown2=document.getElementById('mondown2');
let monup3=document.getElementById('monup3');
let mondown3=document.getElementById('mondown3');
let monup4=document.getElementById('monup4');
let mondown4=document.getElementById('mondown4');
let monup5=document.getElementById('monup5');
let mondown5=document.getElementById('mondown5');
let monup6=document.getElementById('monup6');
let mondown6=document.getElementById('mondown6');
let tueup1=document.getElementById('tueup1');
let tuedown1=document.getElementById('tuedown1');
let tueup2=document.getElementById('tueup2');
let tuedown2=document.getElementById('tuedown2');
let tueup3=document.getElementById('tueup3');
let tuedown3=document.getElementById('tuedown3');
let tueup4=document.getElementById('tueup4');
let tuedown4=document.getElementById('tuedown4');
let tueup5=document.getElementById('tueup5');
let tuedown5=document.getElementById('tuedown5');
let tueup6=document.getElementById('tueup6');
let tuedown6=document.getElementById('tuedown6');
let wedup1=document.getElementById('wedup1');
let weddown1=document.getElementById('weddown1');
let wedup2=document.getElementById('wedup2');
let weddown2=document.getElementById('weddown2');
let wedup3=document.getElementById('wedup3');
let weddown3=document.getElementById('weddown3');
let wedup4=document.getElementById('wedup4');
let weddown4=document.getElementById('weddown4');
let wedup5=document.getElementById('wedup5');
let weddown5=document.getElementById('weddown5');
let wedup6=document.getElementById('wedup6');
let weddown6=document.getElementById('weddown6');
let thuup1=document.getElementById('thuup1');
let thudown1=document.getElementById('thudown1');
let thuup2=document.getElementById('thuup2');
let thudown2=document.getElementById('thudown2');
let thuup3=document.getElementById('thuup3');
let thudown3=document.getElementById('thudown3');
let thuup4=document.getElementById('thuup4');
let thudown4=document.getElementById('thudown4');
let thuup5=document.getElementById('thuup5');
let thudown5=document.getElementById('thudown5');
let thuup6=document.getElementById('thuup6');
let thudown6=document.getElementById('thudown6');
let friup1=document.getElementById('friup1');
let fridown1=document.getElementById('fridown1');
let friup2=document.getElementById('friup2');
let fridown2=document.getElementById('fridown2');
let friup3=document.getElementById('friup3');
let fridown3=document.getElementById('fridown3');
let friup4=document.getElementById('friup4');
let fridown4=document.getElementById('fridown4');
let friup5=document.getElementById('friup5');
let fridown5=document.getElementById('fridown5');
let friup6=document.getElementById('friup6');
let fridown6=document.getElementById('fridown6');
let satup1=document.getElementById('satup1');
let satdown1=document.getElementById('satdown1');
let satup2=document.getElementById('satup2');
let satdown2=document.getElementById('satdown2');
let satup3=document.getElementById('satup3');
let satdown3=document.getElementById('satdown3');
let satup4=document.getElementById('satup4');
let satdown4=document.getElementById('satdown4');
let satup5=document.getElementById('satup5');
let satdown5=document.getElementById('satdown5');
let satup6=document.getElementById('satup6');
let satdown6=document.getElementById('satdown6');
let sunup1=document.getElementById('sunup1');
let sundown1=document.getElementById('sundown1');
let sunup2=document.getElementById('sunup2');
let sundown2=document.getElementById('sundown2');
let sunup3=document.getElementById('sunup3');
let sundown3=document.getElementById('sundown3');
let sunup4=document.getElementById('sunup4');
let sundown4=document.getElementById('sundown4');
let sunup5=document.getElementById('sunup5');
let sundown5=document.getElementById('sundown5');
let sunup6=document.getElementById('sunup6');
let sundown6=document.getElementById('sundown6');

let save=document.getElementById('save');
let mon='',tue='',wed='',thu='',fri='',sat='',sun='';

let validataTimetext=document.getElementById('validataTimetext');

save.onclick=function(){
    console.log(monup1.value);
    console.log(mondown1.value);
    mon=monup1.value+'-'+mondown1.value+';'+monup2.value+'-'+mondown2.value+';'+monup3.value+'-'+mondown3.value+';'+monup4.value+'-'+mondown4.value+';'+monup5.value+'-'+mondown5.value+';'+monup6.value+'-'+mondown6.value+';'
    mon=mon.replace(/-;/g,'').slice(0, -1);
    tue=tueup1.value+'-'+tuedown1.value+';'+tueup2.value+'-'+tuedown2.value+';'+tueup3.value+'-'+tuedown3.value+';'+tueup4.value+'-'+tuedown4.value+';'+tueup5.value+'-'+tuedown5.value+';'+tueup6.value+'-'+tuedown6.value+';'
    tue=tue.replace(/-;/g,'').slice(0, -1);
    wed=wedup1.value+'-'+weddown1.value+';'+wedup2.value+'-'+weddown2.value+';'+wedup3.value+'-'+weddown3.value+';'+wedup4.value+'-'+weddown4.value+';'+wedup5.value+'-'+weddown5.value+';'+wedup6.value+'-'+weddown6.value+';'
    wed=wed.replace(/-;/g,'').slice(0, -1);
    thu=thuup1.value+'-'+thudown1.value+';'+thuup2.value+'-'+thudown2.value+';'+thuup3.value+'-'+thudown3.value+';'+thuup4.value+'-'+thudown4.value+';'+thuup5.value+'-'+thudown5.value+';'+thuup6.value+'-'+thudown6.value+';'
    thu=thu.replace(/-;/g,'').slice(0, -1);
    fri=friup1.value+'-'+fridown1.value+';'+friup2.value+'-'+fridown2.value+';'+friup3.value+'-'+fridown3.value+';'+friup4.value+'-'+fridown4.value+';'+friup5.value+'-'+fridown5.value+';'+friup6.value+'-'+fridown6.value+';'
    fri=fri.replace(/-;/g,'').slice(0, -1);
    sat=satup1.value+'-'+satdown1.value+';'+satup2.value+'-'+satdown2.value+';'+satup3.value+'-'+satdown3.value+';'+satup4.value+'-'+satdown4.value+';'+satup5.value+'-'+satdown5.value+';'+satup6.value+'-'+satdown6.value+';'
    sat=sat.replace(/-;/g,'').slice(0, -1);
    sun=sunup1.value+'-'+sundown1.value+';'+sunup2.value+'-'+sundown2.value+';'+sunup3.value+'-'+sundown3.value+';'+sunup4.value+'-'+sundown4.value+';'+sunup5.value+'-'+sundown5.value+';'+sunup6.value+'-'+sundown6.value+';'
    sun=sun.replace(/-;/g,'').slice(0, -1);
    postBookTime(LoginData);
    location.reload();
}

let reset=document.getElementById('reset');
reset.onclick=function(){
    mon='';
    tue='';
    wed='';
    thu='';
    fri='';
    sat='';
    sun='';
}

function postBookTime(LoginData){
    console.log(mon);
    console.log(tue);
    console.log(wed);
    console.log(thu);
    console.log(fri);
    console.log(sat);
    console.log(sun);


    console.log(LoginData);
    axios({
    method: 'post',
    url: 'http://localhost:5190/api/Time/SetBookTime',
    headers:{
        "Content-Type": "application/json",
        "Accept": "application/json",
        "Authorization": `Bearer ${LoginData.token}`, 
    },data:{
        mon: mon, 
        tue: tue ,
        wed: wed,
        thu: thu,
        fri: fri,
        sat: sat,
        sun: sun,
    }
})
        .then(( { data } ) => {
            console.log(data);

        })
        .catch(error => {
            console.log(error);
        });
}

let week=['mon','tue','wed','thu','fri','sat','sun'];
let nowstart;
let nowend;


function booltime(){
    for(var i=1;i<=6;i++){
        let monup=document.getElementById(`monup${i}`);
        let mondown=document.getElementById(`mondown${i}`);
        let validata=document.getElementById(`mon${i}validata`);
        let valinum=0;
        

        monup.addEventListener('change',function(){
            let truenum=0;
            let trueallnum=0;
            nowstart=monup.value;
            nowend=mondown.value;
            // console.log('nowstart',nowstart);
            // console.log('nowend',nowend);
            // console.log(monup.value);
            // console.log(mondown.min);
            // mondown.min=monup.value;
            // mondown.max=monup.value+1;
            // console.log(mondown.min);
            // console.log(mondown.max);
            
            console.log('nowstart',nowstart);
            console.log('nowend',nowend);
            for(var b=1;b<=6;b++){
              console.log(monup,mondown);
              if((monup.id.replace('monup',"")==b)||(mondown.id.replace('mondown',"")==b)){
                console.log('跳過當前對比');
              }else{
                
                let otherstart=document.getElementById(`${week[0]}up${b}`).value;
                let otherend=document.getElementById(`${week[0]}down${b}`).value;
                console.log('otherup',otherstart);
                console.log('otherdown',otherend);
                console.log('otherend不為空',otherend !== '' && otherend !== undefined && otherend !== null)
                console.log('otherstart',otherstart !== '' && otherstart !== undefined && otherstart !== null)
                console.log((otherend !== '' && otherend !== undefined && otherend !== null) || (otherstart !== '' && otherstart !== undefined && otherstart !== null));
                if ((otherend !== '' && otherend !== undefined && otherend !== null) || (otherstart !== '' && otherstart !== undefined && otherstart !== null)) {
                    console.log('otherend',otherend);
                    console.log('otherstart',otherstart);
                    trueallnum++;
                    
                    if (nowstart === otherstart || nowend === otherend) {
                      console.log('已有重複時間');
                      
                    } else {
                      if (((nowstart > otherstart) && (nowstart < otherend))) {
                        console.log('開始衝突');

                      } else {
                        console.log('沒有時間衝突');
                        truenum++;
                      }
                    }
                  }
              }
              
          }

          console.log(trueallnum);
          console.log(truenum);
          if(valinum){
            
          }
          if(trueallnum==truenum){
            monup.style.backgroundColor='transparent';
            monup.style.color='#000';
            validataTimetext.style.display='none';
            validataTimetext.innerHTML='';
          }else{
            monup.style.backgroundColor='#ff5858';
            monup.style.color='#fff';
            validataTimetext.style.display='block';
            validataTimetext.innerHTML='時間產生衝突';
          }

        })
        mondown.addEventListener('change',function(){
            let truenum=0;
            let trueallnum=0;
            nowstart=monup;
            nowend=mondown;
            
            console.log('nowstart',nowstart);
            console.log('nowend',nowend);
                for(var b=1;b<=6;b++){
                    if((monup.id.replace('monup',"")==b)||(mondown.id.replace('mondown',"")==b)){
                      console.log('跳過當前對比');
                    }else{
                      
                      let otherstart=document.getElementById(`${week[0]}up${b}`).value;
                      let otherend=document.getElementById(`${week[0]}down${b}`).value;
                      console.log('otherup',document.getElementById(`${week[0]}up${b}`));
                      console.log('otherdown',document.getElementById(`${week[0]}down${b}`));
                      
  
                      if ((otherend !== '' && otherend !== undefined && otherend !== null) || (otherstart !== '' && otherstart !== undefined && otherstart !== null)) {
                          console.log(otherend);
                          console.log(otherstart);
                          trueallnum++;
                          
                          if (nowstart === otherstart || nowend === otherend) {
                            console.log('已有重複時間');
                          } else {
                              if (nowend > otherstart && nowend < otherend) {
                              console.log('結束時間衝突');
                              
                            } else if (nowstart > otherstart && nowstart < otherend) {
                              console.log('開始時間衝突');
                              
                            } else {
                              console.log('沒有時間衝突');
                              truenum++;
                            }
                          }
                        }
                    }
                    
                }
                console.log(trueallnum);
                console.log(truenum);

                if(trueallnum==truenum){
                  mondown.style.backgroundColor='transparent';
                  mondown.style.color='#000';
                  validataTimetext.style.display='none';
                  validataTimetext.innerHTML='';
                }else{
                  mondown.style.backgroundColor='#ff5858';
                  mondown.style.color='#fff';
                  validataTimetext.style.display='block';
                  validataTimetext.innerHTML='時間產生衝突';
                }
            
            
        })
    }
}


