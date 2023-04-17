let imgbtn1 = document.getElementById('imgbtn1');

imgbtn1.addEventListener('click', function() {
    let input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*';
    input.onchange = function(event) {
    let reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);
    reader.onload = function() {
        imgbtn1.style.backgroundImage = 'url(' + reader.result + ')';
        imgbtn1.style.backgroundSize ='cover';
        document.getElementById("imgbtn1").innerHTML ="";
    }
    };
    input.click();
});

let imgbtn2 = document.getElementById('imgbtn2');

imgbtn2.addEventListener('click', function() {
    let input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*';
    input.onchange = function(event) {
    let reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);
    reader.onload = function() {
        imgbtn2.style.backgroundImage = 'url(' + reader.result + ')';
        imgbtn2.style.backgroundSize ='cover';
        document.getElementById("imgbtn2").innerHTML ="";
    }
    };
    input.click();
});