window.onload = function() {
    
    console.log(LoginData);
    if(LoginData!=null){
        avatarimg.src=`${LoginData.members.img}`;
    }else{
        avatarimg.src='/image/default_avatar.jpeg';
    }
        viewGetBookTime();
        
        handleLogoutData(LoginData);
        console.log(LoginData);
        // LoginData = JSON.parse(sessionStorage.getItem('LoginData'));  
        booltime()
    
};

function viewGetBookTime(){
    axios({
        method: 'get',
        url: 'http://localhost:5190/api/Time/BookTime',
        headers:{
            "Content-Type": "application/json",
            "Accept": "application/json",
            "Authorization": `Bearer ${LoginData.token}`, 
        }
    })
            .then(( { data } ) => {
                console.log(data);
                console.log(data.mon);
                let monlist=data.mon.split(';');
                console.log(monlist);
                var i=0;
                if(monlist!=""){
                     monlist.forEach(function(){
                    console.log(monlist[i]);
                    let monlist_onetime=monlist[i].split('-');
                    console.log(monlist_onetime);
                    let monup=document.getElementById(`monup${i+1}`);
                    monup.value=monlist_onetime[0];
                    let mondown=document.getElementById(`mondown${i+1}`);
                    mondown.value=monlist_onetime[1];
                    i++;
                });
                }
               
                
                let tuelist=data.tue.split(';');
                var i=0;
                if(tuelist!=""){
                    tuelist.forEach(function(){
                    console.log(tuelist[i]);
                    let tuelist_onetime=tuelist[i].split('-');
                    console.log(tuelist_onetime);
                    let tueup=document.getElementById(`tueup${i+1}`);
                    tueup.value=tuelist_onetime[0];
                    let tuedown=document.getElementById(`tuedown${i+1}`);
                    tuedown.value=tuelist_onetime[1];
                    i++;
                });

                }
                
                let wedlist=data.wed.split(';');
                var i=0;
                if(wedlist!=""){
                     wedlist.forEach(function(){
                    console.log(wedlist[i]);
                    let wedlist_onetime=wedlist[i].split('-');
                    console.log(wedlist_onetime);
                    let wedup=document.getElementById(`wedup${i+1}`);
                    wedup.value=wedlist_onetime[0];
                    let weddown=document.getElementById(`weddown${i+1}`);
                    weddown.value=wedlist_onetime[1];
                    i++;
                });
                }
               

                let thulist=data.thu.split(';');
                var i=0;
                if(thulist!=""){
                    thulist.forEach(function(){
                    console.log(thulist[i]);
                    let thulist_onetime=thulist[i].split('-');
                    console.log(thulist_onetime);
                    let thuup=document.getElementById(`thuup${i+1}`);
                    thuup.value=thulist_onetime[0];
                    let thudown=document.getElementById(`thudown${i+1}`);
                    thudown.value=thulist_onetime[1];
                    i++;
                });
                }
                

                let frilist=data.fri.split(';');
                var i=0;
                if(frilist!=""){
                    frilist.forEach(function(){
                    console.log(frilist[i]);
                    let frilist_onetime=frilist[i].split('-');
                    console.log(frilist_onetime);
                    let friup=document.getElementById(`friup${i+1}`);
                    friup.value=frilist_onetime[0];
                    let fridown=document.getElementById(`fridown${i+1}`);
                    fridown.value=frilist_onetime[1];
                    i++;
                });
                }
                

                let satlist=data.sat.split(';');
                var i=0;
                if(satlist!=""){
                     satlist.forEach(function(){
                    console.log(satlist[i]);
                    let satlist_onetime=satlist[i].split('-');
                    console.log(satlist_onetime);
                    let satup=document.getElementById(`satup${i+1}`);
                    satup.value=satlist_onetime[0];
                    let satdown=document.getElementById(`satdown${i+1}`);
                    satdown.value=satlist_onetime[1];
                    i++;
                });
                }
               

                let sunlist=data.sun.split(';');
                var i=0;
                if(sunlist!=""){
                    sunlist.forEach(function(){
                    console.log(sunlist[i]);
                    let sunlist_onetime=sunlist[i].split('-');
                    console.log(sunlist_onetime);
                    let sunup=document.getElementById(`sunup${i+1}`);
                    sunup.value=sunlist_onetime[0];
                    let sundown=document.getElementById(`sundown${i+1}`);
                    sundown.value=sunlist_onetime[1];
                    i++;
                });
                }
                
    
            })
            .catch(error => {
                console.log(error);
            });
}

