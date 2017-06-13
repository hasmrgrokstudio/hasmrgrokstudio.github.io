$(document).ready(function() {            
    $("#arrow").click(function() {
        $('html, body').animate({
            scrollTop: $(".for-why-block").offset().top
        }, 1000);
    });
    $("#want-expirience").click(function() {
        $('html, body').animate({
            scrollTop: $(".start-planning-block").offset().top
        }, 1000);
    });
    $("#content-slider").lightSlider({
        item:1,
        slideMargin: 0,
        speed: 1500,
        pause: 5500,
        auto: true,
        loop: true,
        pager: false,
        mode: 'fade'
    });
    $( "#main-animation img" ).animate({opacity: 1, height: "100%"}, 600, function() {
        $( "#main-animation .arrow" ).animate({height: "32px"}, 1000);
        $( ".languages" ).animate({opacity: 1}, 1000);
        $( "#main-animation .text" ).animate({opacity: 1}, 1000);
    });

    //Popup
    $('.close-btn').on('click', function(event){
        $("#testimonial").animate({opacity: 0}, 600, function() {
            $("#testimonial").css('display', 'none');
            $(".pop-up-bg").css('display', 'none');
        });
        $(".pop-up-bg").animate({opacity: 0}, 600); 
            
    });

    $('.open-popup').on('click', function(event){
        $(".pop-up-bg").animate({opacity: 0.2}, 100, function() {
            $("#testimonial").css('display', 'block');
            $(".pop-up-bg").css('display', 'block');
            $("#testimonial").animate({opacity: 1}, 500);
        });
    });

    $('#open-gallery').on('click', function(event){
        $(".pop-up-bg").animate({opacity: 0.2}, 100, function() {
            $("#gallery").css('display', 'block');
            $(".pop-up-bg").css('display', 'block');
            $("#gallery").animate({opacity: 1}, 500);
            
            $('#imageGallerys').lightSlider({
                gallery:true,
                item:1,
                loop:true,
                thumbItem:9,
                slideMargin:0,
                enableDrag: false,
                currentPagerPosition:'left',
                onSliderLoad: function(el) {
                    el.lightGallery({
                        selector: '#imageGallery .lslide'
                    });
                }   
            }); 
        });
    });

    $('.close-gallery').on('click', function(event){
        $("#gallery").animate({opacity: 0}, 600, function() {
            $("#gallery").css('display', 'none');
            $(".pop-up-bg").css('display', 'none');
        });
        $(".pop-up-bg").animate({opacity: 0}, 600); 
            
    });


    //subscribe
    $('#subscribe').on('click', function(event){
    event.preventDefault();
    var self = $(this);
    var email = $("#sEmail").val();
    var form = 1;

    if (email == '') 
    {
        $("#sEmail").addClass("error");
        $("#sEmail").focus();
        form = 0;
    }           

    var reg = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i); 
    if (!reg.test(email))
    {
        $("#sEmail").addClass("error");
        $("#sEmail").focus();
        form = 0;
    }

    var fields = [{name: "company", value: "sprintodiena.lt"}];

    if (form == 1)
    {
        $("#sEmail").removeClass('error');

        $.ajax({
            type: "POST",
            url: "https://app.mailerlite.com/api/v1/subscribers/1916381/",
            headers: {
              'Content-Type':'application/x-www-form-urlencoded'
            },
            data: {
                apiKey: '3a60451343a72c6d4c997c294d1b00a4',
                id: '1916381',
                email: email,
                fields: fields
            },
            success: function(data) {
                console.log('data', data);
                self.removeClass('show-placeholder');
                $('body').addClass('show-success');
                setTimeout(function(){
                    $('body').removeClass('show-success');
                }, 2000);
            }
        });
    }       
  });

});