$(function(){
    // 切换
    $("#pyq").click(function() {
        $("#signal").load($(this).data("xinhao"))
        $("#title").load($(this).data("biaoti"))
        $("#dynamic").load($(this).data("zhuti"))
        $("#menu").toggle()
        $("#signal").css("background-color","gainsboro");
        $("#title").css("background-color","gainsboro");
    })

})