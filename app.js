let texbox = document.getElementById('qrcode');
let imgbox = document.getElementById('imgbox');
let qrimg = document.getElementById('qrimg');

function gencode(){
    if(texbox.value.length > 0){
        qrimg.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + texbox.value;
        qrimg.style.visibility = "visible";
        imgbox.classList.add('viewqrcodeimgbox');
    }else{
        confirm('TO generate a QRCode, you must enter a value');

    }
    
}

function resetcode(){
    texbox.value= "";
    texbox.focus = true;
    imgbox.classList.remove('viewqrcodeimgbox');
}