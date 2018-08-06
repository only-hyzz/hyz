$(function(){
    $("#signal").load("../wechat/nomar_sig.html")
    $("#title").load("../wechat/home_title.html")

     $("#dynamic").load("../wechat/home_dynamic.html")



    // 切换
    $(".menu-item").click(function() {

        $("#dynamic").load($(this).data("post"))

    })

})