$(function(){
  $("#slider").slick({
      slidesToShow: 3,
      // appendDots: $('.dots-2'),
	    autoplay: false,         //自動再生
	    autoplaySpeed: 2000,    //自動再生のスピード
	    speed: 800,	            //スライドするスピード
	    dots: true,             //スライドしたのドット
	    arrows: true,           //左右の矢印
	    infinite: true,         //スライドのループ
  });

  // 要修正:スライドにtabフォーカスを当てない。しかし矢印でカルーセルを回すと動的にtabindex=0になるので当たってしまう
  // スライドにフォーカス当たっていいならこれいらない
  // $('#slider .slick-slide').attr('tabindex', '-1')
});



$(function() {
  $('#slider-2').slick({
    slidesToShow: 3,
    // autoplay: true,
    dots: true,
    centerMode: true,
    centerPadding: '0px',
    accessibility: true,
  });
});
