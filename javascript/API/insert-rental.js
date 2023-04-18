// shelfbtn.onclick = function(){
//     const file1 = document.getElementById('file1').files[0]; // 获取文件对象
//     //     const reader = new FileReader(); // 创建FileReader对象
//     //     reader.readAsDataURL(file1); // 将文件读取为Base64编码字符串
//     //     reader.onload = function() { // 当读取完成时
//     //       const base64String = reader.result.replace(/^data:.+;base64,/, ''); // 获取Base64编码的字符串



// axios({
//     method: 'post',
//     url: 'http://localhost:5190/api/Home/InsertRental',
//     headers: {
//         "Content-Type": "application/json",
//         "Accept": "application/json",
//         // "Authorization": `Bearer ${token}`, 
//     },
//     data: { // 提交给服务器的数据
//         // 这里可以添加要更新的数据属性和值
//         img1:'E:\\程式\\圖片\\1.webp',
//         img2:'E:\\程式\\圖片\\2.webp',
//         type:'公寓',
//         floor:'2/200',
//         genre:'整層住家',
//         title:'嘿嘿',
//         address:'台中市',
//         content:'拜託來買',
//     },
    
// })
// .then(({ data }) => {
//     // 处理服务器响应的数据
//     console.log(data);
// })
// .catch(error => {
//     // 处理请求过程中的错误
//     console.error(error);
// });
// }


    shelfbtn.onclick = function(){
        // const file1 = document.getElementById('file1').files[0]; // 获取文件对象
        // const reader = new FileReader(); // 创建FileReader对象
        // reader.readAsDataURL(file1); // 将文件读取为Base64编码字符串
        // reader.onload = function() { // 当读取完成时
        // const base64String = reader.result.replace(/^data:.+;base64,/, ''); // 获取Base64编码的字符串
        axios({
            method: 'post',
            url: 'http://localhost:5190/api/Home/InsertRental',
            headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            // "Authorization": `Bearer ${token}`, 
            },
            data: {
                img1:'E:\\程式\\圖片\\1.webp',
                img2:'E:\\程式\\圖片\\2.webp',
            type: '公寓',
            floor: '2/200',
            genre: '整層住家',
            title: '嘿嘿',
            address: '台中市',
            content: '拜託來買',
            pattern:'3房',
            content: '沒東西可悲200',
            pattern:'200',
            },
        })
        .then(({ data }) => {
            console.log(data);
        })
        .catch(error => {
            console.error(error);
        });
        };
    // };