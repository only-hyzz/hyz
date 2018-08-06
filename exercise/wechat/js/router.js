$(function(){

       $("#title").load("../page/title/title-home.html")

    $("#dynamic").load("../wechat/dynamic-home.html")



    // 切换
    $(".menu-item").click(function() {
        $("#title").load($(this).data("first"))
        $("#dynamic").load($(this).data("second"))

    })
})