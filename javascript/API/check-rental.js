let submit =document.getElementById('submit');

submit.onclick = function(){
    let data1 =document.getElementById('data1');
    

axios({
    method: 'put',
    url: 'http://localhost:5190/api/Rental/Check/',
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
        // "Authorization": `Bearer ${token}`, 
    },
    data: { // 提交给服务器的数据
        // 这里可以添加要更新的数据属性和值
        Id:'123e4567-e89b-12d3-a456-426655440001',
    },
    params: { 
        Id:'123E4567-E89B-12D3-A456-426655440000',
    }
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