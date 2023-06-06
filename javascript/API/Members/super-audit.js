function addRental(data,id) {
    console.log(data);
    console.log(data);
    let allrental=data;
    let superaudit_table = document.getElementById('superaudit_table');
    let superaudit_onerental = document.createElement('tr');
    superaudit_onerental.innerHTML=`
    <td>${id+1}</td>
    <td>${data.rentalBlock[id].allData.title}</td>
    <td ><span class="rad">${data.rentalBlock[id].allData.rent}</span>/月</td>
    <td><a href="https://www.google.com/maps/search/?api=1&query=${data.rentalBlock[id].allData.address}"><img width="15%" src="/image/圖片2.png"></a></td>
    <td><button id="check_${data.rentalBlock[id].allData.rental_id}" >查看</button></td>
    <td>${data.rentalBlock[id].allData.publisher}</td>
    <td class='flexcenter'>
    <div><input id='review_true_${data.rentalBlock[id].allData.rental_id}' class="Ok" type="button" value="通過"><input id='review_false_${data.rentalBlock[id].allData.rental_id}' class="On" type="button" value="不通過"></div>
    </td>
        `;
        superaudit_table.appendChild(superaudit_onerental);
    
        let check_btn=document.getElementById(`check_${data.rentalBlock[id].allData.rental_id}`)
        check_btn.onclick=function(){
            console.log(data.rentalBlock[id].allData.rental_id);
            axios({
                method:'get',
                url:`http://localhost:5190/api/HomeDetail/${data.rentalBlock[id].allData.rental_id}`,
                headers:{
                    'Content-Type':'application/json',
                    "Accept": "application/json",
                    "Authorization": `Bearer ${LoginData.token}`, 
                },
        
            })
            .then(({data})=>{
                console.log(data);
                console.log(allrental.rentalBlock[id].image);
                viewonRental(data,allrental.rentalBlock[id].image);
            })
            .catch(error => {
                console.log(error);
            });
        }
        
        let review_true=document.getElementById(`review_true_${data.rentalBlock[id].allData.rental_id}`);
        let review_false=document.getElementById(`review_false_${data.rentalBlock[id].allData.rental_id}`);
        var check;
        review_true.onclick=function(){
            check=1;
            reasontext='';
            review(data.rentalBlock[id].allData.rental_id,check,reasontext);
        }
        review_false.onclick=function(){
            let Review=document.getElementById('Review');
            Review.style.display='block';
            let Review_btn=document.getElementById('Review_btn');
            let reason=document.getElementById('reason');
            Review_btn.onclick=function(){
                check=2;
                reasontext=reason.value;
                review(data.rentalBlock[id].allData.rental_id,check,reasontext);
                reason.value='';
                Review.style.display='none';
            }
            
        }

    }

function viewallRental(){
    console.log(LoginData);

    axios({
        method:'get',
        url:'http://localhost:5190/api/HomeDetail/AdminCheck',
        headers:{
            'Content-Type':'application/json',
            "Accept": "application/json",
            "Authorization": `Bearer ${LoginData.token}`, 
        },

    })
    .then(({data})=>{
        console.log(data);
        var rental_Id=0;
        console.log(data.rentalBlock[0].allData);
        data.idList.forEach(function(){
            addRental(data,rental_Id);
            rental_Id++;
        });
    })
    .catch(error => {
        console.log(error);
    });
}

function viewonRental(data,imglist){
    console.log(data);
    let check =document.getElementById('check');
    let delete_checkbtn =document.getElementById('delete_checkbtn');
    createMask();
    check.style.display='block';
    let check_title=document.getElementById('check_title');
    let check_address=document.getElementById('check_address');
    let check_rent=document.getElementById('check_rent');
    let check_floor=document.getElementById('check_floor');
    let check_area=document.getElementById('check_area');
    let check_content=document.getElementById('check_content');
    let check_uploadtime=document.getElementById('check_uploadtime');
    check_title.value=data.title;
    check_address.value=data.address;
    check_rent.value=data.rent+'/月';
    check_floor.value=data.floor;
    check_area.value=data.area+'坪';
    check_content.innerHTML=data.content.replace(/<br>/g, '\n');
    check_uploadtime.value=data.uploadtime.replace('T','　');

    let rentalul=document.getElementById('rentalul');
    rentalul.innerHTML=`
    <li  id="img0_${data.rental_id}" style="display: block;width: 100%;height:100%"><img height="100%" width="100%" src="${data.titledeed}" /></li>
    `;
    
    for(var j=1;j<=imglist.length;j++){
        let addimg=document.createElement('li');
        addimg.id=`img${j}_${data.rental_id}`;
        addimg.style.display='none';
        addimg.innerHTML=`
            <img height="100%" width="100%" src="${imglist[j-1]}" />
        `;
        console.log(rentalul);
        console.log(addimg);
        rentalul.appendChild(addimg);
    }
    
    let lastimg_btn=document.getElementById(`lastimg`);
    lastimg_btn.onclick=function(){
        let imgblock='';
            for(var i=0;i<imglist.length+1;i++){
                console.log(document.getElementById(`img${i}_${data.rental_id}`).style.display)
                if(document.getElementById(`img${i}_${data.rental_id}`).style.display=='block'){
                    imgblock=`img${i}_${data.rental_id}`;
                }
            }
                console.log(imgblock);
                console.log(parseInt(imgblock.replace('img','').replace(`_${data.rental_id}`,''))-1);
                console.log(`img${parseInt(imgblock.replace('img','').replace(`_${data.rental_id}`,''))-1}_${data.rental_id}`);
                console.log(document.getElementById(imgblock).style.display=='block');

                if(document.getElementById(imgblock).style.display=='block'){
                    if((imgblock.replace('img','').replace(`_${data.rental_id}`,''))>0){
                        document.getElementById(imgblock).style.display='none'
                        document.getElementById(`img${parseInt(imgblock.replace('img','').replace(`_${data.rental_id}`,''))-1}_${data.rental_id}`).style.display='block';
                    }
    
            }   
    }

    let nextimg_btn=document.getElementById(`nextimg`);
    nextimg_btn.onclick=function(){
        
        for(var i=0;i<imglist.length+1;i++){
            console.log(document.getElementById(`img${i}_${data.rental_id}`).style.display)
            if(document.getElementById(`img${i}_${data.rental_id}`).style.display=='block'){
                imgblock=`img${i}_${data.rental_id}`;
            }else if(document.getElementById(`img${i}_${data.rental_id}`).style.display=='none'){
                console.log(imgblock);
            }
        }
            console.log(imgblock);
            console.log(parseInt(imgblock.replace('img','').replace(`_${data.rental_id}`,''))+1);
            console.log(`img${parseInt(imgblock.replace('img','').replace(`_${data.rental_id}`,''))+1}_${data.rental_id}`);
            console.log(document.getElementById(imgblock).style.display=='block');

            if(document.getElementById(imgblock).style.display=='block'){
                if((imgblock.replace('img','').replace(`_${data.rental_id}`,''))<imglist.length){
                    document.getElementById(imgblock).style.display='none';
                    document.getElementById(`img${parseInt(imgblock.replace('img','').replace(`_${data.rental_id}`,''))+1}_${data.rental_id}`).style.display='block';
                }
            
        } 
    }
    
    delete_checkbtn.onclick=function(){
        deleteMask();
        check.style.display='none';
    }

}

function review(id,check,reasontext){

    axios({
        method:'put',
        url:`http://localhost:5190/api/HomeDetail/Check`,
        headers:{
            'Content-Type':'application/json',
            "Accept": "application/json",
            "Authorization": `Bearer ${LoginData.token}`, 
        },data:{
            Id:`${id}`,
            Type:`${check}`,
            Reason:`${reasontext}`,
        }
    })
    .then(({data})=>{
        console.log(data);
        location.reload()
    })
    .catch(error => {
        console.log(error);
    });
}

let delete_Review =document.getElementById('delete_Review');
delete_Review.onclick=function(){
    Review.style.display='none';
    reason.value='';
}