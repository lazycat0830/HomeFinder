window.onload=function(){
    let data1=document.getElementById('data1');
axios({
    method: 'get',
    url: 'http://localhost:5190/api/Home/RentalIndex',
    headers:{
        "Content-Type": "application/json",
        "Accept": "application/json",
        // "Authorization": `Bearer ${token}`, 
    },
    
})
        .then(( { data } ) => {
            
            var all=1;

            data.idList.forEach(function(currentValue) {
            console.log(currentValue);
                all++;
            });
            let audittable=document.getElementById("audittable");
            


            for(var i=0;i<all;i++){

            // console.log(data.rentalBlock[i].allData);

            let content_tr =document.createElement('tr');
            let content_td1=document.createElement('td');
            content_td1.innerHTML=i+1;
            let content_td2=document.createElement('td');
            let content_td2_div=document.createElement('div');
            content_td2_div.classList.add('flexcenter');
            content_td2_div.classList.add('BG_img');
            let content_td2_div_img=document.createElement('img');
            //api取得img
            content_td2_div_img.setAttribute('src','/image/'+(i+1)+'.webp');
            content_td2_div_img.setAttribute('width','100%')
            let content_td3=document.createElement('td');
            content_td3.innerHTML=data.rentalBlock[i].allData.title;
            let content_td4=document.createElement('td');
            content_td4.innerHTML=data.rentalBlock[i].allData.rent;
            let content_td5=document.createElement('td');
            content_td5.innerHTML=data.rentalBlock[i].allData.address;
            let content_td6=document.createElement('td');
            content_td6.innerHTML=data.rentalBlock[i].allData.uploadtime;
            let content_td7=document.createElement('td');
            let content_td7_div=document.createElement('div');
            content_td7_div.classList.add('flexcolumn');
            let content_td7_div_input1=document.createElement('input');
            content_td7_div_input1.setAttribute('type','button');
            content_td7_div_input1.classList.add('updateallbtn');
            content_td7_div_input1.setAttribute('value','修改');
            let content_td7_div_input2=document.createElement('input');
            content_td7_div_input2.setAttribute('type','button');
            content_td7_div_input2.classList.add('updateallbtn');
            content_td7_div_input2.setAttribute('value','下架');
            let content_td7_div_input3=document.createElement('input');
            content_td7_div_input3.setAttribute('type','button');
            content_td7_div_input3.classList.add('updateallbtn');
            content_td7_div_input3.setAttribute('value','刪除');
            let content_td8=document.createElement('td');
            content_td8.classList.add("content_td8_divwidth");

            


            audittable.appendChild(content_tr);
            content_tr.appendChild(content_td1);
            content_tr.appendChild(content_td2);
            content_td2.appendChild(content_td2_div);
            content_td2_div.appendChild(content_td2_div_img);
            content_tr.appendChild(content_td3);
            content_tr.appendChild(content_td4);
            content_tr.appendChild(content_td5);
            content_tr.appendChild(content_td6);
            content_tr.appendChild(content_td7);
            content_td7.appendChild(content_td7_div);
            content_td7_div.appendChild(content_td7_div_input1);
            content_td7_div.appendChild(content_td7_div_input2);
            content_td7_div.appendChild(content_td7_div_input3);


    };


            

            })
        .catch(error => {
            console.log(error);
        });





        

    }
    
