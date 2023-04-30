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

        const today = new Date();
        let selectedDate = today;


        const todayString = today.toLocaleDateString();
        dateText.innerHTML = todayString;

        var a=false;
        dateText.addEventListener('click', () => {
            a=!a;
            if(a){
                datepicker.style.display = 'block';
            }else{
                datepicker.style.display = 'none';
            }
        });


        datepicker.addEventListener('change', () => {
        selectedDate = new Date(datepicker.value);
        dateText.innerHTML = selectedDate.toLocaleDateString();
        a=!a;
        datepicker.style.display = 'none';
        viewtime_management(dateText.innerHTML);
        });


        prevDayBtn.addEventListener('click', () => {
        selectedDate.setDate(selectedDate.getDate() - 1);
        dateText.innerHTML = selectedDate.toLocaleDateString();
        viewtime_management(dateText.innerHTML);
        });

        nextDayBtn.addEventListener('click', () => {
        selectedDate.setDate(selectedDate.getDate() + 1);
        dateText.innerHTML = selectedDate.toLocaleDateString();
        viewtime_management(dateText.innerHTML);
        });
        

        viewtime_management(dateText.innerHTML);

        handleLogoutData(LoginData);
        console.log(LoginData);
        LoginData = JSON.parse(sessionStorage.getItem('LoginData'));   


    
    
};


