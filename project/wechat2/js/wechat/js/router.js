$(function(){

    // $("#title").load("../page/title/title-home.html")

    // $("#dynamic").load("../wechat/home-dynamic.html")



    // 切换
    $(".menu-item").click(function() {

        $("#dynamic").load($(this).data("post"))

    })




})