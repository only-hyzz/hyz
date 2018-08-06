$(function(){
    // 切换
    $("#py").click(function() {

        $("#dynamic").load($(this).data("post"))

    })

})