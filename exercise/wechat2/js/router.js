$(function(){

       $("#title").load("../wechat/title/title-home.html")

    $("#dynamic").load("../wechat/dynamic-home.html")



    // 切换
    $(".menu-item").click(function() {
        $("#title").load($(this).data("first"))
        $("#dynamic").load($(this).data("second"))

    })
    // $(".pyq-item").click(function () {
    //     $("#pyqsignal").load($(this).data("third"))
    //     $("#pyqtitle").load($(this).data("forth"))
    //     $("#pyqdynamic").load($(this).data("fifth"))
    // })
})