const inputImage1 = document.getElementById('inputImage1');
const inputImage2 = document.getElementById('inputImage2');
const inputImage3 = document.getElementById('inputImage3');
const inputImage4 = document.getElementById('inputImage4');
const inputImage5 = document.getElementById('inputImage5');
const inputImageview1 = document.getElementById('inputImageview1');
const inputImageview2 = document.getElementById('inputImageview2');
const inputImageview3 = document.getElementById('inputImageview3');
const inputImageview4 = document.getElementById('inputImageview4');
const inputImageview5 = document.getElementById('inputImageview5');



inputImage1.addEventListener('change', () => {
    const file1 = inputImage1.files[0];
    const img1 = new FileReader();
    
    img1.onload = (event) => {
        inputImageview1.style.backgroundImage= 'url(' + event.target.result + ')';
        inputImageview1.style.backgroundSize ='cover';
        document.getElementById("inputImageview1").innerHTML ="";
        console.log(img1.result);
    };
    
    img1.readAsDataURL(file1);
    console.log(file1);
    });   

    inputImage2.addEventListener('change', () => {
        const file2 = inputImage2.files[0];
        const img2 = new FileReader();
        
        img2.onload = (event) => {
            inputImageview2.style.backgroundImage= 'url(' + event.target.result + ')';
            inputImageview2.style.backgroundSize ='cover';
            document.getElementById("inputImageview2").innerHTML ="";
            console.log(img2.result);
        };
        
        img2.readAsDataURL(file2);
        console.log(file2);
        });   
    
    inputImage3.addEventListener('change', () => {
        const file3 = inputImage3.files[0];
        const img3 = new FileReader();
        
        img3.onload = (event) => {
            inputImageview3.style.backgroundImage= 'url(' + event.target.result + ')';
            inputImageview3.style.backgroundSize ='cover';
            document.getElementById("inputImageview3").innerHTML ="";
            console.log(img3.result);
        };
        
        img3.readAsDataURL(file3);
        console.log(file3);
        });   
    
    inputImage4.addEventListener('change', () => {
        const file4 = inputImage4.files[0];
        const img4 = new FileReader();
        
        img4.onload = (event) => {
            inputImageview4.style.backgroundImage= 'url(' + event.target.result + ')';
            inputImageview4.style.backgroundSize ='cover';
            document.getElementById("inputImageview4").innerHTML ="";
            console.log(img4.result);
        };
        
        img4.readAsDataURL(file4);
        console.log(file4);
        });   

        inputImage5.addEventListener('change', () => {
        const file5 = inputImage5.files[0];
        const img5 = new FileReader();
        
        img5.onload = (event) => {
            inputImageview5.style.backgroundImage= 'url(' + event.target.result + ')';
            inputImageview5.style.backgroundSize ='cover';
            document.getElementById("inputImageview5").innerHTML ="";
            console.log(img5.result);
        };
        
        img5.readAsDataURL(file5);
        console.log(file5);
        });   



