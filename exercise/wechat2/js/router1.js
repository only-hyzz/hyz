$(function(){

    // $("#title").load("../wechat/title/title-home.html")
    //
    // $("#dynamic").load("../wechat/dynamic-home.html")



    // 切换
    // $(".menu-item").click(function() {
    //     $("#title").load($(this).data("first"))
    //     $("#dynamic").load($(this).data("second"))
    //
    // })
    $("#py").click(function () {
        $("#signal").load($(this).data("third"))
        $("#title").load($(this).data("forth"))
        $("#dynamic发现").load($(this).data("fifth"))
        // $("menu").toggle()
    })
})