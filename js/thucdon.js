document.addEventListener("DOMContentLoaded",
function(){ 
    // bắt đầu hàm click vào menu mon
    var x = document.getElementsByClassName('btnBac');
    var y = document.getElementsByClassName('btnTrung');
    var z =document.getElementsByClassName('btnNam');
    var x1 = document.getElementsByClassName('menu-mb');
    var y1 = document.getElementsByClassName('menu-mt');
    var z1 =document.getElementsByClassName('menu-mn');
    var menu = document.getElementsByClassName('menu');
    var goup = document.getElementsByClassName('goup');
    x[0].classList.add('hienbg');
    y1[0].classList.add('anMenu');
    z1[0].classList.add('anMenu');
    x[0].onclick=function(){
        x1[0].classList.remove('anMenu');
        y1[0].classList.add('anMenu');
        z1[0].classList.add('anMenu');
        x[0].classList.add('hienbg');
        y[0].classList.remove('hienbg');
        z[0].classList.remove('hienbg');
    }   
    y[0].onclick=function(){
        y1[0].classList.remove('anMenu');
        x1[0].classList.add('anMenu');
        z1[0].classList.add('anMenu');
        y[0].classList.add('hienbg');
        x[0].classList.remove('hienbg');
        z[0].classList.remove('hienbg');
    }
    z[0].onclick=function(){
        // console.log('nuoc uong');
        z1[0].classList.remove('anMenu');
        x1[0].classList.add('anMenu');
        y1[0].classList.add('anMenu');
        z[0].classList.add('hienbg');
        y[0].classList.remove('hienbg');
        x[0].classList.remove('hienbg');
        
    }
    $('.goup').click(function () { 
        console.log("chien222");
        $("html,body").animate({scrollTop:0},1500); 
    });
    // $(window).scroll(function(){
    window.addEventListener('scroll',function(){
        if($('html,body').scrollTop()>200){
            menu[0].classList.remove('before_menu');
            menu[0].classList.add('after_menu');
            goup[0].classList.add('hiennut');
        }
        else{
            menu[0].classList.add('before_menu');
            menu[0].classList.remove('after_menu');
            goup[0].classList.remove('hiennut');
            
        }
        })
},false)