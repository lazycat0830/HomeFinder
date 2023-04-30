let UPDataRetal= JSON.parse(sessionStorage.getItem('UPDataRetal'));


function addonBG_up(data,id){
    let upRental_table=document.getElementById('upRental_table');
    let upRental_onerental = document.createElement('tr');
    upRental_onerental.innerHTML=`
            <td>${id+1}</td>
            <td><div class="flexcenter BG_img"><img src="${data.rentalBlock[id].allData.img1}" width="100%"></div></td>
            <td>${data.rentalBlock[id].allData.title}</td>
            <td>${data.rentalBlock[id].allData.rent}</td>
            <td>${data.rentalBlock[id].allData.address}</td>
            <td>${data.rentalBlock[id].allData.uploadtime.replace('T',' | ')}</td>
            <td>
                <div class="flexcolumn">
                    <input id="updata_${data.rentalBlock[id].allData.rental_id}" type="button" class="updateallbtn" value="修改">
                    <input id="down_${data.rentalBlock[id].allData.rental_id}" type="button" class="updateallbtn" value="下架">
                    <input id="delete_${data.rentalBlock[id].allData.rental_id}" type="button" class="updateallbtn" value="刪除">
                </div>
            </td>
    `;
    upRental_table.appendChild(upRental_onerental);
    
    let updatabtn =document.getElementById(`updata_${data.rentalBlock[id].allData.rental_id}`);
    let downbtn =document.getElementById(`down_${data.rentalBlock[id].allData.rental_id}`);
    let deletebtn =document.getElementById(`delete_${data.rentalBlock[id].allData.rental_id}`);
    updatabtn.onclick=function(){
        window.location.href = '/publisher房東/updataitem.html';
        console.log(data.rentalBlock[id].allData);
        UPDataRetal=sessionStorage.setItem('UPDataRetal', JSON.stringify(data.rentalBlock[id].allData));
    }
    deletebtn.onclick=function(){
        let delete_confirm=document.getElementById('delete_confirm');
        delete_confirm.style.display='block';
        createMask();
        
        let nodelete_btn=document.getElementById('nodelete_btn');
        nodelete_btn.onclick=function(){
            delete_confirm.style.display='none';
            deleteMask();
        }
        let deleteX_btn=document.getElementById('deleteX_btn');
        deleteX_btn.onclick=function(){
            delete_confirm.style.display='none';
            deleteMask();
        }
        let delete_btn=document.getElementById('delete_btn');
        delete_btn.onclick=function(){
            axios({
                method: 'delete',
                url: `http://localhost:5190/api/Home/${data.rentalBlock[id].allData.rental_id}`,
                headers:{
                    "Content-Type": "multipart/form-data",
                    "Accept": "application/json",
                    "Authorization": `Bearer ${LoginData.token}`, 
                },
            })
                    .then(( { data } ) => {
                        console.log(data);
                    })
                    .catch(error => {
                        console.log(error);
                    });
                    location.reload();
                }
        
    }
    downbtn.onclick=function(){
        axios({
            method: 'put',
            url: `http://localhost:5190/api/Home/HomeUpToDown/${data.rentalBlock[id].allData.rental_id}`,
            headers:{
                "Content-Type": "multipart/form-data",
                "Accept": "application/json",
                "Authorization": `Bearer ${LoginData.token}`, 
            },
        })
                .then(( { data } ) => {
                    console.log(data);
                })
                .catch(error => {
                    console.log(error);
                });

                location.reload();
    }
    

}