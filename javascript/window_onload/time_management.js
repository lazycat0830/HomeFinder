window.onload = function() {
    console.log(LoginData);
    if(LoginData!=null){
        avatarimg.src=`${LoginData.members.img}`;
    }else{
        avatarimg.src='/image/default_avatar.jpeg';
    }

        const dateText = document.getElementById('date');
        const datepicker = document.getElementById('datepicker');
        const prevDayBtn = document.getElementById('prev-day');
        const nextDayBtn = document.getElementById('next-day');


        var today = new Date();

        let selectedDate = today;
        const todayString = today.toLocaleDateString();
        dateText.innerHTML = todayString;
        
        var year = today.getFullYear(); // 年份
        var month = ('0' + (today.getMonth() + 1)).slice(-2); // 月份，补0到两位数
        var day = ('0' + today.getDate()).slice(-2); // 日期，补0到两位数
        var dateInput = document.getElementById('datepicker'); // 将myDateInput替换成你的<input type='date'/>元素的ID
        dateInput.value = year + '-' + month + '-' + day;


        datepicker.addEventListener('change', () => {
        selectedDate = new Date(datepicker.value);
        dateText.innerHTML = selectedDate.toLocaleDateString();
        viewtime_management(dateText.innerHTML);
        });


        prevDayBtn.addEventListener('click', () => {
        selectedDate.setDate(selectedDate.getDate() - 1);
        dateText.innerHTML = selectedDate.toLocaleDateString();
        viewtime_management(dateText.innerHTML);
        updateDatePicker(selectedDate);
        });

        nextDayBtn.addEventListener('click', () => {
        selectedDate.setDate(selectedDate.getDate() + 1);
        dateText.innerHTML = selectedDate.toLocaleDateString();
        viewtime_management(dateText.innerHTML);
        updateDatePicker(selectedDate);
        });
        

        viewtime_management(dateText.innerHTML);

        handleLogoutData(LoginData);
        console.log(LoginData);
        LoginData = JSON.parse(sessionStorage.getItem('LoginData'));   

        function updateDatePicker(date) {
            const dateString = date.toISOString().split('T')[0];
            datepicker.value = dateString;
            dateText.innerHTML = date.toLocaleDateString();
            viewtime_management(date.toLocaleDateString());
        }

        // 初始化
        updateDatePicker(selectedDate);
        
    
};


