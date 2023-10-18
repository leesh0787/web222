$('.nav>ul>li').mouseover(function(){
    $(this).find('.submenu').stop().slideDown();
});

$('.nav>ul>li').mouseout(function(){
    $(this).find('.submenu').stop().slideUp();
});



let currentIndex=0;

setInterval(function(){
    if (currentIndex<2) {
        currentIndex++;
    }
    
    else {
        currentIndex=0
    }
    let slidePosition=currentIndex * (-1000)+"px";
    //console.log(slidePosition)

    $('.slideList').animate({left:slidePosition},1000)
},3000)


$(".btn").click(function(){
    $(".layer-bg").fadeIn();
})

$(".close").click(function(){
    $(".layer-bg").fadeOut();
})


// Window 창 열기

$(".contact").click(function(){
    window.open("contact.html", "_child", "top=0,left=0,width=400,height=400");
})

//tab menu

let tabBtn=$('.tab_menu ul li');

let tabCont=$('.tab_cont>div');

//.eq() ==> equivalent(동등)

tabCont.hide().eq(0).show();

tabBtn.click(function(e)
{e.preventDefault();
    let index=$(this).index()
    console.log(index)
    tabCont.hide().eq(index).show();
    tabBtn.removeClass('active')
    $(this).addClass('active')
})

