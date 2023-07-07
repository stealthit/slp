//------------------ tab --------------------------
$(function () {
  const li = $(".tab .tab-menu");
  li.click(function () {
    const tabId = $(this).attr("data-tab");

    li.removeClass("active");
    $(".tab-content").removeClass("active");

    $(this).addClass("active");
    $("#" + tabId).addClass("active");
  });
});
//--------------------------------------------------------