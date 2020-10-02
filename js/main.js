$(document).ready(function(){
    if($("#exampleModalCenter1").length !== 0) {
        setTimeout(function(){
            // $('.hide-style .modal').addClass('hide-style')
            $('#exampleModalCenter1').modal('show');
        }, 1000);
        setTimeout(function(){
            $('#exampleModalCenter1').modal('hide');
        }, 5000);
        setTimeout(function(){
            $('#exampleModalCenter2').modal('show');
        }, 5000);
        setTimeout(function(){
            $('#exampleModalCenter2').modal('hide');
        }, 7000);
        setTimeout(function(){
            $('#exampleModalCenter3').modal('show');
        }, 7000);
        setTimeout(function(){
            $('#exampleModalCenter3').modal('hide');
        }, 11000);
        setTimeout(function(){
            $('#exampleModalCenter4').modal('show');
        }, 11000);
        setTimeout(function(){
            $('#exampleModalCenter4').modal('hide');
        }, 13000);
        setTimeout(function(){
            $('#exampleModalCenter5').modal('show');
        }, 13000);
        setTimeout(function(){
            $('#exampleModalCenter5').modal('hide');
        }, 17000);
        setTimeout(function(){
            $('#exampleModalCenter6').modal('show');
        }, 17000);
        setTimeout(function(){
            $('#exampleModalCenter6').modal('hide');
        }, 19000);
        setTimeout(function(){
            $('#exampleModalCenter7').modal('show');
        }, 19000);
        setTimeout(function(){
            $('#exampleModalCenter7').modal('hide');
        }, 23000);
        setTimeout(function(){
            $('#exampleModalCenter8').modal('show');
        }, 23000);
        setTimeout(function(){
            $('#exampleModalCenter8').modal('hide');
        }, 25000);
        setTimeout(function(){
            $('#exampleModalCenter9').modal('show');
        }, 25000);
        setTimeout(function(){
            $('#exampleModalCenter9').modal('hide');
        }, 29000);
        setTimeout(function(){
            $('#exampleModalCenter10').modal('show');
        }, 29000);
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
