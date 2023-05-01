
function addonBG_audit(data,id){
    if((data.rentalBlock[id].allData.check==0)&&(data.rentalBlock[id].allData.tenant==false)){
        audittext='審核中';
    }else{
        audittext='審核通過';
    }

    let audit_table=document.getElementById('audit_table');
    let auditRental_onerental = document.createElement('tr');
    auditRental_onerental.innerHTML=`
            <td>${id+1}</td>
            <td><div class="flexcenter BG_img"><img src="${data.rentalBlock[id].allData.img1}" width="100%"></div></td>
            <td>${data.rentalBlock[id].allData.title}</td>
            <td>${data.rentalBlock[id].allData.rent}</td>
            <td>${data.rentalBlock[id].allData.address}</td>
            <td>${data.rentalBlock[id].allData.uploadtime.replace(/\..*/g, "").replace("T", " | ")}</td>
            <td>
                <div>
                    ${audittext}
                </div>
            </td>
    `;
    audit_table.appendChild(auditRental_onerental);

}