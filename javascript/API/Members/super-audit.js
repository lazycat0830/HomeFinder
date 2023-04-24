function addRental(data,id) {
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
    <div><input id='review_true' class="Ok" type="button" value="通過"><input id='review_false' class="On" type="button" value="不通過"></div>
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
                viewonRental(data);



            })
            .catch(error => {
                console.log(error);
            });
        }
        
        let review_true=document.getElementById('review_true');
        let review_false=document.getElementById('review_false');
        var check;
        review_true.onclick=function(){
            check=1;
            review(data.rentalBlock[id].allData.rental_id,check);
        }
        review_false.onclick=function(){
            check=0;
            review(data.rentalBlock[id].allData.rental_id,check);
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

function viewonRental(data){
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
    check_content.innerHTML=data.content;
    check_uploadtime.value=data.uploadtime.replace('T','　');
    
    delete_checkbtn.onclick=function(){
        deleteMask();
        check.style.display='none';
    }

}

function review(id,check){
    const formData = new FormData();
    formData.append('check',check);

    axios({
        method:'put',
        url:`http://localhost:5190/api/HomeDetail/${id}`,
        headers:{
            'Content-Type':'multipart/form-data',
            "Accept": "application/json",
            "Authorization": `Bearer ${LoginData.token}`, 
        },
        data: formData,
    })
    .then(({data})=>{
        console.log(data);
        location.reload()
    })
    .catch(error => {
        console.log(error);
    });
}