window.onload = function() {
    
    console.log(LoginData);
    if(LoginData!=null){
        console.log(LoginData.members.img);
        avatarimg.src=`${LoginData.members.img}`;
    }else{
        avatarimg.src='/image/default_avatar.jpeg';
    }
    
    if(LoginData==null){
        let content_in=document.getElementById('content_in');
        content_in.innerHTML='請先登入';
        content_in.style.textAlign='center';
        let footer_in=document.querySelector("footer");
        footer_in.style.display='none';

    }else{
        genre_combination();
        type_combination();
        pattern_combination();
        equipmentname_combination();


        let footer_in=document.querySelector("footer");
        footer_in.style.display='block';

        
        handleLogoutData(LoginData);
        console.log(LoginData);
        LoginData = JSON.parse(sessionStorage.getItem('LoginData'));   

        createitem(LoginData);

    }

};


function AjaxImgCut(src,num){
    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function() {
        if (this.readyState === 4 && this.status === 200) {
            document.getElementById("cutimg_body_content_body_content").innerHTML = this.responseText;
            viewAjaxCutImg(src,num);
        }
    };
    
    xhttp.open("GET", "/通用/CutImg.html", true);
    xhttp.send();
}
let file_CutImg;
function viewAjaxCutImg(src,num){
    createMask();
    document.getElementById('catoneimg').style.display='block';

    const image=document.getElementById('view_image');
    image.src=src;
        const cropper=new Cropper(image,{
            aspectRatio:1,
            viewMode:0,

        });

        document.getElementById('cropImageBtn').addEventListener('click', function() {
            var croppedCanvas = cropper.getCroppedCanvas();
            croppedCanvas.toBlob(function(blob) {
                file_CutImg = new File([blob], `image${num}.png`, {
                    type: 'image/png'
                });
                console.log(file_CutImg);
                var croppedImage=URL.createObjectURL(file_CutImg);
                putfile(file_CutImg,num,croppedImage);
            }, 'image/png');
        });

}
let img1file,img2file,img3file,img4file,img5file;

function putfile(file,num,src){
    document.getElementById('catoneimg').style.display='none';
    deleteMask();
    console.log(num);
    if(num==1){
        img1file=file;
        console.log(img1file);
        inputImageview1.style.backgroundImage= 'url(' + src + ')';
        inputImageview1.style.backgroundSize ='cover';
        inputImageview1.innerHTML ="";
    }else if(num==2){
        img2file=file;
        inputImageview2.style.backgroundImage= 'url(' + src + ')';
        inputImageview2.style.backgroundSize ='cover';
        inputImageview2.innerHTML ="";
    }else if(num==3){
        img3file=file;
        inputImageview3.style.backgroundImage= 'url(' + src + ')';
        inputImageview3.style.backgroundSize ='cover';
        inputImageview3.innerHTML ="";
    }else if(num==4){
        img4file=file;
        inputImageview4.style.backgroundImage= 'url(' + src + ')';
        inputImageview4.style.backgroundSize ='cover';
        inputImageview4.innerHTML ="";
    }else if(num==5){
        img5file=file;
        inputImageview5.style.backgroundImage= 'url(' + src + ')';
        inputImageview5.style.backgroundSize ='cover';
        inputImageview5.innerHTML ="";
    }
    
}

document.getElementById('delete_CutImgbtn').onclick=function(){
    document.getElementById('catoneimg').style.display='none';
    deleteMask();
}