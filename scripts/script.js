//sidebar button ----------------------------
$(".btn-sidebar").on("click", function(){
  var sideWrap = $(".sidebar-container");
  if ($(this).hasClass("show")) {
      $(this).removeClass("show");
      $(this).animate({left: '0'});   
      sideWrap.removeClass("show");
      sideWrap.animate({width: '0'});
  }
  else {
    $(this).addClass("show")
    $(this).animate({left: '163px'});
    sideWrap.addClass("show");
    sideWrap.animate({width: '180px'});
  }
})
//--------------------------------------------
//start tab-------------------------------------------------
  const li = $(".tab .tab-menu");
  li.click(function () {
    li.removeClass("on");
    $(this).addClass("on");
    
    var left = $('.tab .tab-menu.on').offset().left;  
    var tabLeft = $('.tab .tab-menu.on').position().left;  
    var curLeft = $('.tab').scrollLeft();
    var menuWidth = $('.tab .tab-menu.on').width();    
    var right = left + menuWidth;
    var maxRight = $('.tab-container').width();
    var scrMove = curLeft;

    if (right > maxRight) { // 보이는 마지막 탭을 클릭했을때 클릭한 항목 모두 보이게 왼쪽으로 스크롤 
      scrMove = curLeft + menuWidth;
    } else if (tabLeft < 0) { // 보이는 첫번째 탭을 클릭했을때 클릭한 항목 모두 보이게 오른쪽으로 스크롤
      scrMove = curLeft + tabLeft;
    }

    $('.tab').animate({scrollLeft : scrMove}, 400);    

    setTabArrowBtn(Math.floor(scrMove));    
  });

  $(".btn-tab-arrow").click(function(){    
    var curLeft = $('.tab').scrollLeft();
    if ($(this).hasClass("left")) curLeft = curLeft - 100
    else if ($(this).hasClass("right")) curLeft = curLeft + 100;

    $('.tab').animate({scrollLeft : curLeft}, 400);
    
    setTabArrowBtn(curLeft);
  })  
  
  function setTabArrowBtn(curLeft){
    var leftBtn = $(".btn-tab-arrow.left");
    var rightBtn = $(".btn-tab-arrow.right");        

    if (curLeft <= 0) leftBtn.removeClass("on") ;
    else leftBtn.addClass("on") ;  

    elConWidth = document.querySelector(".tab").clientWidth;  
    elWidth = document.querySelector(".tab").scrollWidth - curLeft;

    if (elWidth <= elConWidth) rightBtn.removeClass("on");
    else rightBtn.addClass("on");
  }
//end tab--------------------------------------------------------
// search detail button ---------------------------------------
$(".btn-search-detail").on("click", function(){
  if ($(this).hasClass("open")) {
    $(this).removeClass("open");
    $(".search-conditions").animate({height: '82px'});
  }
  else {
    $(this).addClass("open");
    var elHeight = document.querySelector(".setting-grid").scrollHeight + 20;
    $(".search-conditions").animate({height: elHeight});
  }
})