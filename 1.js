$(function () {
    $('.gicungduoc').click(function (e) { 
        e.preventDefault();
        $('.gicungduoc').removeClass('active');
        $(this).addClass('active');

        $('html').animate({
            // chuyen dong gi thi go o day
            scrollTop: 1000
        }, 1000);
        console.log($('.khoi3').offset().top);
        


    });
});