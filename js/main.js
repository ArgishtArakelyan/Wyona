$(document).ready(function(){
    if($("#exampleModalCenter1").length !== 0) {
        setTimeout(function(){
            $('#exampleModalCenter1').modal('show');
        }, 2000);
        setTimeout(function(){
            $('#exampleModalCenter1').modal('hide');
        }, 8000);
        setTimeout(function(){
            $('#exampleModalCenter2').modal('show');
        }, 8000);
        setTimeout(function(){
            $('#exampleModalCenter2').modal('hide');
        }, 16000);
        setTimeout(function(){
            $('#exampleModalCenter3').modal('show');
        }, 16000);
        setTimeout(function(){
            $('#exampleModalCenter3').modal('hide');
        }, 22000);
        setTimeout(function(){
            $('#exampleModalCenter4').modal('show');
        }, 22000);
        setTimeout(function(){
            $('#exampleModalCenter4').modal('hide');
        }, 28000);
        setTimeout(function(){
            $('#exampleModalCenter5').modal('show');
        }, 28000);
        setTimeout(function(){
            $('#exampleModalCenter5').modal('hide');
        }, 34000);
        setTimeout(function(){
            $('#exampleModalCenter6').modal('show');
        }, 34000);
        setTimeout(function(){
            $('#exampleModalCenter6').modal('hide');
        }, 40000);
    };
    if($(".teacher-category").length !== 0) {
        $(".firstTitle").click(function() {
            // $(this).parent().parent().find('.firstTitle.active').removeClass("active");
            $(this).find('i').toggleClass("rotateClass");
            $(this).addClass("active");
            $(this).parent().find('.closeSublist').toggleClass("openSublist");
        });
        $(".thirdList").click(function() {
            $(this).find('i').toggleClass("rotateClass");
            // $(this).parent().parent().find('.thirdSubList.active').removeClass("active");
            $(this).find('.thirdSubList').addClass("active");
            $(this).find('.closeThirdList').toggleClass("openThirdList");
        });
    };
});
