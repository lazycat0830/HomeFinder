let inputImage1 = document.getElementById('inputImage1');
let inputImage2 = document.getElementById('inputImage2');
let inputImage3 = document.getElementById('inputImage3');
let inputImage4 = document.getElementById('inputImage4');
let inputImage5 = document.getElementById('inputImage5');
let inputImageview1 = document.getElementById('inputImageview1');
let inputImageview2 = document.getElementById('inputImageview2');
let inputImageview3 = document.getElementById('inputImageview3');
let inputImageview4 = document.getElementById('inputImageview4');
let inputImageview5 = document.getElementById('inputImageview5');



inputImage1.addEventListener('change', () => {
    const file1 = inputImage1.files[0];
    const img1 = new FileReader();
    
    img1.onload = (event) => {
        AjaxImgCut(event.target.result,1);
        
    };
    
    img1.readAsDataURL(file1);
    console.log(file1);
    });   

    inputImage2.addEventListener('change', () => {
        const file2 = inputImage2.files[0];
        const img2 = new FileReader();
        
        img2.onload = (event) => {
            AjaxImgCut(event.target.result,2);
        };
        
        img2.readAsDataURL(file2);
        console.log(file2);
        });   
    
    inputImage3.addEventListener('change', () => {
        const file3 = inputImage3.files[0];
        const img3 = new FileReader();
        
        img3.onload = (event) => {
            AjaxImgCut(event.target.result,3);

        };
        
        img3.readAsDataURL(file3);
        console.log(file3);
        });   
    
    inputImage4.addEventListener('change', () => {
        const file4 = inputImage4.files[0];
        const img4 = new FileReader();
        
        img4.onload = (event) => {
            AjaxImgCut(event.target.result,4);
        };
        
        img4.readAsDataURL(file4);
        console.log(file4);
        });   

        inputImage5.addEventListener('change', () => {
        const file5 = inputImage5.files[0];
        const img5 = new FileReader();
        
        img5.onload = (event) => {
            AjaxImgCut(event.target.result,5);
        };
        
        img5.readAsDataURL(file5);
        console.log(file5);
        });   



