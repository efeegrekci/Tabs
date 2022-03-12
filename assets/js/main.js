$(document).ready(function () {

    // Resize Page Refresh
    $(window).bind('resize', function (e) {
        if (window.RT) clearTimeout(window.RT);
        window.RT = setTimeout(function () {
            this.location.reload(false);
        }, 100);
    });
    // Resize Page Refresh

    // Tabs
    $('.tabMenu .tabButtons ul li').click(function () {
        var index = $(this).index();
        $(".tabMenu .tabButtons ul li").removeClass("active");
        $(this).addClass("active");
        $(".tabMenu .tabTexts ul li").removeClass("active");
        $(".tabMenu .tabTexts ul li").eq(index).addClass("active");
    });
    // Tabs

});