

$(document).ready(function () {
  ///// Section-1 CSS-Slider /////    
  // 換圖輪播Auto Switching Images for CSS-Slider
  function bannerSwitcher() {
    next = $('.sec-1-input').filter(':checked').next('.sec-1-input');
    if (next.length) next.prop('checked', true);
    else $('.sec-1-input').first().prop('checked', true);
  }

  var bannerTimer = setInterval(bannerSwitcher, 5000);

  $('nav .controls label').click(function() {
    clearInterval(bannerTimer);
    bannerTimer = setInterval(bannerSwitcher, 5000);
  });

  //---漢堡按鈕---
  $('.hamburger').click(function () {
    $(this).toggleClass('is-active');
    $('.navigation').toggleClass('show');
  });


  //---滑動至指定位置區塊---
  $('.menu a').click(function(){
    var btn = $(this).attr('href'); // 返回取得屬性與值
    var pos = $(btn).offset(); // 抓取相對的座標位置
    $('html,body').animate({scrollTop:pos.top},1500); // 變數pos的top(y軸)
  });
  
  


  //---置頂按鈕淡出淡入---
  $(window).scroll(function(){
    if($(this).scrollTop() > 200){
      $('#gotop').stop().fadeTo('fast',1);
    }else{
      $('#gotop').stop().fadeOut('fast');
    }
  });

    //---滑動至頂---
    $('#gotop').click(function(){
      $('html,body').animate({scrollTop:0},1500); // 變數pos的top(y軸)
    });
  


  //---滑動載入---
  $('.smoove').smoove({
    offset:'30%'
  });
});
