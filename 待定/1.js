window.onload=function(){
axios.get('http://localhost:5190/api/HomeAny/HomeAny')
  .then(function (response) {
    // 取得回應中的資料陣列
    const data = response.data;

    // 存取陣列中的每個項目
    data.forEach(function (item) {
      console.log(item); // 列出陣列中的每個項目
    });
  })
  .catch(function (error) {
    console.log(error);
  });
}