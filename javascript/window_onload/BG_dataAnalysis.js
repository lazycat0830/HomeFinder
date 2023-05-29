window.onload = function() {
    let avatarimg=document.getElementById('avatarimg');
    console.log(LoginData);
    if(LoginData!=null){
        avatarimg.src=`${LoginData.members.img}`;
    }else{
        avatarimg.src='/image/default_avatar.jpeg';
    }
    document.getElementById('one').classList='onChartbuttonList';
    allno_on();
    view_addressCart();
    handleLogoutData(LoginData);
    console.log(LoginData);


}


function view_addressCart(){
    allno_on();
    document.getElementById('one').classList='onChartbuttonList';
    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function() {
        if (this.readyState === 4 && this.status === 200) {
            document.getElementById("content1").innerHTML = this.responseText;
            addressChart();
        }
    };
    
    xhttp.open("GET", "/Chart/addressChart.html", true);
    xhttp.send();
}

function view_genreCart(){
    allno_on();
    document.getElementById('two').classList='onChartbuttonList';
    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function() {
        if (this.readyState === 4 && this.status === 200) {
            document.getElementById("content1").innerHTML = this.responseText;
            genreChart();
        }
    };
    
    xhttp.open("GET", "/Chart/addressChart.html", true);
    xhttp.send();
}

function view_typeCart(){
    allno_on();
    document.getElementById('three').classList='onChartbuttonList';
    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function() {
        if (this.readyState === 4 && this.status === 200) {
            document.getElementById("content1").innerHTML = this.responseText;
            typeCart();
        }
    };
    
    xhttp.open("GET", "/Chart/addressChart.html", true);
    xhttp.send();

}

function addressChart() {
    
    var ctx = document.getElementById('genreChart');
        var genreChart = new Chart(ctx, {
            type: 'doughnut',
            data: {
                labels: [],
                datasets: [{
                    backgroundColor: [],
                    borderColor: [],
                    borderWidth: 1,
                    label: '類型',
                    data: []
                }]
            },
            options: {
                layout: {
                    padding: {
                        left: 0, // 調整左側的間距
                        right: 80,
                        top: 0,
                        bottom: 0
                    }
                },
                // legend: {
                //     display: false // 將圖例項目設定為不顯示
                // },
                scales: {
                    // yAxes: [{
                    //     ticks: {
                    //         beginAtZero: true,
                    //         stepSize: 1, // 刻度間的間距設為 1
                    //         precision: 0 // 刻度值的小數位數為 0
                    //     }
                    // }]
                },
                legend: {
                    position: 'right'
                }
            }

        });

        // 從後端獲取數據並更新圖表
        fetch('http://localhost:5190/api/AllData/AllDataHomeaddress', {
            method: 'GET',
        })
        .then(response => response.json())
        .then(data => {
            var labelCount = data.labels.length; // 獲取labels的數量
            var backgroundColors = generateBackgroundColors(labelCount); // 生成對應數量的backgroundColor
            var borderColors = backgroundColors.slice(); // 將backgroundColor複製給borderColor
            genreChart.data.labels = data.labels;
            genreChart.data.datasets[0].data = data.data;
            genreChart.data.datasets[0].backgroundColor = backgroundColors;
            genreChart.data.datasets[0].borderColor = borderColors;
            genreChart.update();
        });

        function generateBackgroundColors(count) {
            var colors = [];
            for (var i = 0; i < count; i++) {
                var color = 'rgba(' +
                Math.floor(Math.random() * 256) + ',' +
                Math.floor(Math.random() * 256) + ',' +
                Math.floor(Math.random() * 256) + ', 0.2)';
                colors.push(color);
            }
        return colors;
        }
}

function genreChart() {
    var ctx = document.getElementById('genreChart');
                var genreChart = new Chart(ctx, {
                    type: 'bar',
                    data: {
                        labels: [],
                        datasets: [{
                            backgroundColor: [],
                            borderColor: [],
                            borderWidth: 1,
                            label: '型態',
                            data: []
                        }]
                    },
                    options: {
                        scales: {
                            yAxes: [{
                                ticks: {
                                    beginAtZero: true,
                                    stepSize: 1, // 刻度間的間距設為 1
                                    precision: 0 // 刻度值的小數位數為 0
                                }
                            }]
                        }
                    }

                });
    
                // 從後端獲取數據並更新圖表
                fetch('http://localhost:5190/api/AllData/AllDataHomegenre', {
                    method: 'GET',
                })
                .then(response => response.json())
                .then(data => {
                    var labelCount = data.labels.length; // 獲取labels的數量
                    var backgroundColors = generateBackgroundColors(labelCount); // 生成對應數量的backgroundColor
                    var borderColors = backgroundColors.slice(); // 將backgroundColor複製給borderColor
                    genreChart.data.labels = data.labels;
                    genreChart.data.datasets[0].data = data.data;
                    genreChart.data.datasets[0].backgroundColor = backgroundColors;
                    genreChart.data.datasets[0].borderColor = borderColors;
                    genreChart.update();
                });

                function generateBackgroundColors(count) {
                    var colors = [];
                    for (var i = 0; i < count; i++) {
                        var color = 'rgba(' +
                        Math.floor(Math.random() * 256) + ',' +
                        Math.floor(Math.random() * 256) + ',' +
                        Math.floor(Math.random() * 256) + ', 0.2)';
                        colors.push(color);
                    }
                return colors;
                }
}

function typeCart() {
    var ctx = document.getElementById('genreChart');
                var genreChart = new Chart(ctx, {
                    type: 'bar',
                    data: {
                        labels: [],
                        datasets: [{
                            backgroundColor: [],
                            borderColor: [],
                            borderWidth: 1,
                            label: '類型',
                            data: []
                        }]
                    },
                    options: {
                        scales: {
                            yAxes: [{
                                ticks: {
                                    beginAtZero: true,
                                    stepSize: 1, // 刻度間的間距設為 1
                                    precision: 0 // 刻度值的小數位數為 0
                                }
                            }]
                        }
                    }

                });
    
                // 從後端獲取數據並更新圖表
                fetch('http://localhost:5190/api/AllData/AllDataHometype', {
                    method: 'GET',
                })
                .then(response => response.json())
                .then(data => {
                    var labelCount = data.labels.length; // 獲取labels的數量
                    var backgroundColors = generateBackgroundColors(labelCount); // 生成對應數量的backgroundColor
                    var borderColors = backgroundColors.slice(); // 將backgroundColor複製給borderColor
                    genreChart.data.labels = data.labels;
                    genreChart.data.datasets[0].data = data.data;
                    genreChart.data.datasets[0].backgroundColor = backgroundColors;
                    genreChart.data.datasets[0].borderColor = borderColors;
                    genreChart.update();
                });

                function generateBackgroundColors(count) {
                    var colors = [];
                    for (var i = 0; i < count; i++) {
                        var color = 'rgba(' +
                        Math.floor(Math.random() * 256) + ',' +
                        Math.floor(Math.random() * 256) + ',' +
                        Math.floor(Math.random() * 256) + ', 0.2)';
                        colors.push(color);
                    }
                return colors;
                }
}

function allno_on(){
    document.getElementById('one').classList='ChartbuttonList';
    document.getElementById('two').classList='ChartbuttonList';
    document.getElementById('three').classList='ChartbuttonList';
    document.getElementById('four').classList='ChartbuttonList';
}