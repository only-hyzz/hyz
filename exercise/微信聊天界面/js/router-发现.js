$(function(){
    // 切换
    $(".faxian").click(function() {
        $("#signal").load($(this).data("xinhao"))
        $("#title").load($(this).data("biaoti"))
        $("#dynamic").load($(this).data("zhuti"))
        $("#menu").toggle()
        $("#signal").css("background-color","rgba(4,14,6,0.9)");
        $("#title").css("background-color","rgba(4,14,6,0.9)");
    })

})