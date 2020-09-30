$(document).ready(function(){
    if($("#exampleModalCenter1").length !== 0) {
        setTimeout(function(){
            $('#exampleModalCenter1').modal('show');
        }, 1000);
        setTimeout(function(){
            $('#exampleModalCenter1').modal('hide');
        }, 6000);
        setTimeout(function(){
            $('#exampleModalCenter2').modal('show');
        }, 6000);
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
        setTimeout(function(){
            $('#exampleModalCenter7').modal('show');
        }, 40000);
        setTimeout(function(){
            $('#exampleModalCenter7').modal('hide');
        }, 46000);
        setTimeout(function(){
            $('#exampleModalCenter8').modal('show');
        }, 46000);
        setTimeout(function(){
            $('#exampleModalCenter8').modal('hide');
        }, 52000);
        setTimeout(function(){
            $('#exampleModalCenter9').modal('show');
        }, 52000);
        setTimeout(function(){
            $('#exampleModalCenter9').modal('hide');
        }, 58000);
        setTimeout(function(){
            $('#exampleModalCenter10').modal('show');
        }, 58000);
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
