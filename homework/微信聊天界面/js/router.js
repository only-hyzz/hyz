$(function(){
    $("#signal").load("../wechat/signal-home.html")
    $("#title").load("../wechat/title-home.html")

    $("#dynamic").load("../wechat/dynamic-home.html")



    // 切换
    $(".menu-item").click(function() {
        $("#signal").load($(this).data("xinhao"))
        $("#title").load($(this).data("biaoti"))
        $("#dynamic").load($(this).data("zhuti"))

    })




})