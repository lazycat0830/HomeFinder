let imgbtn1=document.getElementById("imgbtn1");
let imgbtn2=document.getElementById("imgbtn2");
let imgbtn3=document.getElementById("imgbtn3");
let imgbtn4=document.getElementById("imgbtn4");
let imgbtn5=document.getElementById("imgbtn5");
console.log(imgbtn1);
console.log(imgbtn2);
console.log(imgbtn3);
console.log(imgbtn4);
console.log(imgbtn5);

let img1 = new FileReader();
let img2 = new FileReader();
let img3 = new FileReader();
let img4 = new FileReader();
let img5 = new FileReader();

imgbtn1.addEventListener('click', function() {
    let input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*';
    input.onchange = function(event) {
    
        img1.readAsDataURL(event.target.files[0]);
        img1.onload = function() {
        imgbtn1.style.backgroundImage = 'url(' + img1.result + ')';
        imgbtn1.style.backgroundSize ='cover';
        document.getElementById("imgbtn1").innerHTML ="";
    }
    };
    input.click();
});


imgbtn2.addEventListener('click', function() {
    let input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*';
    input.onchange = function(event) {
    
        img2.readAsDataURL(event.target.files[0]);
        img2.onload = function() {
        imgbtn2.style.backgroundImage = 'url(' + img2.result + ')';
        imgbtn2.style.backgroundSize ='cover';
        document.getElementById("imgbtn2").innerHTML ="";
    }
    };
    input.click();
});

imgbtn3.addEventListener('click', function() {
    let input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*';
    input.onchange = function(event) {
    
        img3.readAsDataURL(event.target.files[0]);
        img3.onload = function() {
        imgbtn3.style.backgroundImage = 'url(' + img3.result + ')';
        imgbtn3.style.backgroundSize ='cover';
        document.getElementById("imgbtn3").innerHTML ="";
    }
    };
    input.click();
});

imgbtn4.addEventListener('click', function() {
    let input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*';
    input.onchange = function(event) {
    
        img4.readAsDataURL(event.target.files[0]);
        img4.onload = function() {
        imgbtn4.style.backgroundImage = 'url(' + img4.result + ')';
        imgbtn4.style.backgroundSize ='cover';
        document.getElementById("imgbtn4").innerHTML ="";
    }
    };
    input.click();
});

imgbtn5.addEventListener('click', function() {
    let input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*';
    input.onchange = function(event) {
    
        img5.readAsDataURL(event.target.files[0]);
        img5.onload = function() {
        imgbtn5.style.backgroundImage = 'url(' + img5.result + ')';
        imgbtn5.style.backgroundSize ='cover';
        document.getElementById("imgbtn5").innerHTML ="";
    }
    };
    input.click();
});


let shelfbtn=document.getElementById('shelfbtn');
let Reviewbtn=document.getElementById('Reviewbtn');
let validateimg=document.getElementById('validateimg')
console.log(shelfbtn);
console.log(Reviewbtn);
console.log(validateimg);




// shelfbtn.onclick=function(){
//     if(imgbtn1.innerHTML=='+'){
//         validateimg.innerHTML="*請上傳封面圖片";
//         validateimg.style.display="block";
//     }else if(imgbtn1.innerHTML==''){
//         validateimg.innerHTML="";
//         validateimg.style.display="none";
//     }
// }

Reviewbtn.onclick=function(){
    if(imgbtn1.innerHTML=='+'){
        validateimg.innerHTML="*請上傳封面圖片";
        validateimg.style.display="block";
    }else if(imgbtn1.innerHTML==''){
        validateimg.innerHTML="";
        validateimg.style.display="none";
    }
}




shelfbtn.onclick = function(){
    let title =document.getElementById('title').value;
    let address =document.getElementById('address').value;
    let rent =document.getElementById('rent').value;
    let waterfee =document.getElementById('waterfee').value;
    let electricitybill =document.getElementById('electricitybill').value;
    let adminfee =document.getElementById('adminfee').value;
    let pattern =document.getElementById('pattern').value;
    let floor =document.getElementById('floor').value;
    let housingcontent =document.getElementById('housingcontent').value;
    // const file1 = document.getElementById('imgbtn1').files[0]; // 获取文件对象
    //     const reader = new FileReader(); // 创建FileReader对象
    //     reader.readAsDataURL(file1); // 将文件读取为Base64编码字符串
    //     reader.onload = function() { // 当读取完成时
    console.log(img1.result);
    console.log(img2.result);
    console.log(img3.result);
    console.log(img4.result);
    console.log(img5.result);
    const base64String1 = img1.result.replace(/^data:.+;base64,/, ''); // 获取Base64编码的字符串
    const base64String2 = img2.result.replace(/^data:.+;base64,/, '');
    // const formData = new FormData(document.getElementById('form'));
    // formData.append('avatar', img1.target.files[0]);
    // formData.get('imgbtn1file'); 
    // formData.get('imgbtn2file'); 
//     const formData = new FormData();
//     formData.append('img1_1', input1.files[0]);
    
    axios({
        method: 'post',
        url: 'http://localhost:5190/api/Home/InsertRental',
        headers: {
            // "Content-Type": "multipart/form-data",
            "Content-Type": "multipart/form-data",
            "Accept": "application/json",
            // "Authorization": `Bearer ${token}`, 
        },
        data: { // 提交给服务器的数据
            // 这里可以添加要更新的数据属性和值
            img1_1:base64String1,
            img1_2:base64String2,
            type:'公寓',
            floor:floor,
            genre:'整層住家',
            title:title,
            address:address,
            content:housingcontent,
            pattern:pattern,
            equipmentname:'沒東西可悲200',
            publisher:'200',
            rent:rent,
            waterfee:waterfee,
            electricitybill:electricitybill,
            adminfee:adminfee,
        },
        // formData,
        })
        .then(({ data }) => {
        // 处理服务器响应的数据
        console.log(data);
        })
        .catch(error => {
        // 处理请求过程中的错误
        console.error(error);
        });

 }
