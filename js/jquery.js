// Return to top button logic 
$(document).ready(function () {
    //fshehja e butonit
    $('.return-to-top').hide();

    //kur faqja leviz (on scroll)
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.return-to-top').fadeIn();//shfaq butonin
        } else {
            $('.return-to-top').fadeOut();
        }
    });

    //kur perdoruesi prek butonin
    $('.return-to-top').click(function () {
        $('html,body').animate({ scrollTop: 0 }, 600);//levize faqen ne krye per 600 milisekonda
        return false;
    });
});