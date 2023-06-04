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

function view_timeCart(){
    allno_on();
    document.getElementById('Chart_day').style.display='block';
    viewtoday();
    
    document.getElementById('four').classList='onChartbuttonList';
    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function() {
        if (this.readyState === 4 && this.status === 200) {
            document.getElementById("content1").innerHTML = this.responseText;
            timeCart();
        }
    };
    
    xhttp.open("GET", "/Chart/timeChart.html", true);
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
            legend: {
                display: false
            },
            scaleOverride: {
                // 禁用y轴刻度
                scaleSteps: 0,
                scaleStepWidth: 1,
                scaleStartValue: 0
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
            legend: {
                display: false
            },
            scaleOverride: {
                // 禁用y轴刻度
                scaleSteps: 0,
                scaleStepWidth: 1,
                scaleStartValue: 0
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
        options:  {
            legend:  {
                display: false
            },
            scaleOverride: {
                // 禁用y轴刻度
                scaleSteps: 0,
                scaleStepWidth: 1,
                scaleStartValue: 0
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
    document.getElementById('Chart_day').style.display='none';
}
var genreChart1;
var label,timeStart,timeEnd,renter,starttimeString,endtimeString;
function timeCart(){
    
    var ctx = document.getElementById('genreChart');
    // 渲染初始化區塊
    genreChart1 = new Chart(ctx, {
            type: 'bar',
            data: {
                datasets: [{
                    label: '預約時段',
                    data: [],
                }]
            },
            options: {
                indexAxis: 'y',
                scales: {
                    x: {
                        type: 'time',
                        time: {
                            unit: 'hour',
                            displayFormats: {
                                hour: 'HH:mm',
                            },
                        },
                        min: null,
                        max: null
                    }
                },
                plugins: {
                    tooltip: {
                        callbacks: {
                            label: function (context) {
                                 label = context.dataset.label || '';
                                 timeStart = new Date(context.parsed.x[0]).toLocaleTimeString();
                                 timeEnd = new Date(context.parsed.x[1]).toLocaleTimeString();
                                 renter = context.parsed.y;
                                 starttimeString = context.dataset.data[context.dataIndex].starttimeString;
                                 endtimeString = context.dataset.data[context.dataIndex].endtimeString;
                                return label + ': ' + starttimeString + ' - ' + endtimeString ;
                            }
                        }
                    }
                }
            }
        }
    );

        
    // 发送 GET 请求获取数据
    timeChart_data(document.getElementById('datepicker').value);
}

function viewtoday(){

    const datepicker = document.getElementById('datepicker');
    const prevDayBtn = document.getElementById('prev-day');
    const nextDayBtn = document.getElementById('next-day');

    var today = new Date();
    var year = today.getFullYear();
    var month = ('0' + (today.getMonth() + 1)).slice(-2); 
    var day = ('0' + today.getDate()).slice(-2); 
    var dateInput = document.getElementById('datepicker'); 
        dateInput.value = year + '-' + month + '-' + day;


        datepicker.addEventListener('change', (event) => {
            dateInput.value = event.target.value;
            timeChart_data(dateInput.value);
        });

        prevDayBtn.addEventListener('click', () => {
            var nowday=new Date(datepicker.value);
            console.log(('0' + (nowday.getDate()-1)).slice(-2) );
            var prevday=('0' + (nowday.getDate()-1)).slice(-2);
            dateInput.value =year + '-' + month + '-' + prevday;
            timeChart_data(dateInput.value);
        });

        nextDayBtn.addEventListener('click', () => {
            var nowday=new Date(datepicker.value);
            console.log(('0' + (nowday.getDate()+1)).slice(-2) );
            var nextday=('0' + (nowday.getDate()+1)).slice(-2);
            dateInput.value =year + '-' + month + '-' + nextday;
            timeChart_data(dateInput.value);
        });
}

function timeChart_data(day){
    
    fetch(`http://localhost:5190/api/AllData/DataFromBooked?account=${LoginData.members.account}&date=${day}`,{
        method:'GET',
    })
        .then(response => response.json())
        .then(data => {
            console.log(data);
            if(data.length!=0){
                const date = data[0].bookdate;

            // 对从后端获取的数据进行处理
        const chartData = data.map(item => {
            const timeRange = item.booktime.split('-');
            const startTime = new Date(`${date} ${timeRange[0]}`);
            const endTime = new Date(`${date} ${timeRange[1]}`);
            
            var starthours = startTime.getHours().toString().padStart(2, '0');  // 获取小时，并补齐两位数
            var startminutes = startTime.getMinutes().toString().padStart(2, '0');  // 获取分钟，并补齐两位数
            var starttimeString = starthours + ':' + startminutes;
            var endhours = endTime.getHours().toString().padStart(2, '0');  // 获取小时，并补齐两位数
            var endminutes = endTime.getMinutes().toString().padStart(2, '0');  // 获取分钟，并补齐两位数
            var endtimeString = endhours + ':' + endminutes;

            console.log(starttimeString);
            console.log(endtimeString);
            return {
                x: [startTime, endTime],
                y: item.renter,
                starttimeString: starttimeString,
                endtimeString: endtimeString
            };
        });
            console.log(chartData);
            // 更新图表数据和范围
            genreChart1.data.datasets[0].data = chartData;
            genreChart1.options.scales.x.min = `${date} 00:00`;
            genreChart1.options.scales.x.max = `${date} 23:59`;
            genreChart1.update();
        }
        else{
            console.log(data);
            genreChart1.data.datasets[0].data = document.getElementById('datepicker').value;
            genreChart1.options.scales.x.min = `${document.getElementById('datepicker').value} 00:00`;
            genreChart1.options.scales.x.max = `${document.getElementById('datepicker').value} 23:59`;
            genreChart1.update();
        }
        })
        .catch(error => {
            console.error('Error:', error);
        });
}