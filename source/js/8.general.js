 
var validator = $("#Form").validate({
    errorPlacement: function(error, element) {
        // Append error within linked label
        $( element )
            .closest( "form" )
                .find( "label[for='" + element.attr( "id" ) + "']" )
                    .append( error );
    },
    errorElement: "span",
    messages: {
        nombre: {
            required: " (Campo requerido)" 
        },
        correo: {
            required: " (Campo requerido)"   
        },
        celular: {
            required: " (Campo requerido)"   
        },
        mensaje: {
            required: " (Campo requerido)"   
        } 
    }
});
$(document).ready(function() {
 
    // INIT MATERIALIZE 
    $('select').material_select();
    // $('.modal').modal();  
    $('.button-collapse').sideNav();
    // $('ul.tabs').tabs();

 
    /* DROPDOWN */
    $('.dropdown-button').dropdown({ 
        hover: true,
        constrainWidth: 320,
        alignment: 'left'
        }
    );
    $('.slider-lp').slick({
        arrows: true,
        dots: true,
        autoplay: true,
        infinite: true,
        speed: 500,
        prevArrow:"<button type='button' class='slick-prev slick-arrow  '><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
        nextArrow:"<button type='button' class='slick-next slick-arrow  '><i class='fa fa-angle-right' aria-hidden='true'></i></button>"
    });
    $('.slick-productos').slick({
        arrows: true,
        dots: false, 
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        prevArrow:"<button type='button' class='slick-prev slick-arrow  '><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
        nextArrow:"<button type='button' class='slick-next slick-arrow  '><i class='fa fa-angle-right' aria-hidden='true'></i></button>"
    });

    $('.slider-lp').on('beforeChange', function(event, slick, currentSlide, nextSlide){ 
        $('.slick-active .display').removeClass('hidden');
        $('.slick-active .display').removeClass(' fadeIn');
        $('.slick-active .display').addClass('animated opacity');
        
    });
    $('.slider-lp').on('afterChange', function(event, slick, currentSlide, nextSlide){
        $('.slick-active .display').addClass('animated fadeIn');
        $('.slick-active .display').removeClass(' opacity');
        $('.slick-active .display').addClass('hidden');
    }); 
        /* SCROLL */
    var is_chrome = navigator.userAgent.toLowerCase().indexOf('chrome/') > -1;
    var is_firefox = navigator.userAgent.toLowerCase().indexOf('firefox/') > -1;
    var is_safari = navigator.userAgent.toLowerCase().indexOf('safari/') > -1;
    var is_opera = navigator.userAgent.toLowerCase().indexOf('opera/') > -1;
    var is_ie = navigator.userAgent.toLowerCase().indexOf('msie') > -1;
    var isMobile = {
        Android: function () {
            return navigator.userAgent.match(/Android/i);
        },
        BlackBerry: function () {
            return navigator.userAgent.match(/BlackBerry/i);
        },
        iOS: function () {
            return navigator.userAgent.match(/iPhone|iPad|iPod/i);
        },
        Opera: function () {
            return navigator.userAgent.match(/Opera Mini/i);
        },
        Windows: function () {
            return navigator.userAgent.match(/IEMobile/i);
        },
        any: function () {
            return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
        }
    };
    if (isMobile.any()) {
    } else { 
    $("html").niceScroll({
        touchbehavior:false,
        cursorcolor:"#00b737",
        cursoropacitymax:16,
        cursorborder:"0px dashed #ffffff",
        cursorwidth:15,
        cursorborderradius:"8px",
        background:"#ffffff",
        zindex:9999
    });
        switch (true) {
            case (is_chrome):
                break;
            case (is_firefox):
                break;
            case (is_safari):
                break;
            case (is_opera):
                break;
            default:
                $('body').addClass('iexplorer');
                break;
        }
    } 
    function initMail() {
        $('form#Form').on('submit', function(e) {
            e.preventDefault();
            var form = $(this);
            $("#submit").attr('disabled', 'disabled');
            var post_data = form.serialize(); 
            $.ajax({
                type: 'POST',
                url: $(form).attr('action'),
                data: post_data
            }).done(function() {
                var nombre = document.getElementById("nombre"); 
                var telefono = document.getElementById("celular");  
                var correo = document.getElementById("email"); 
                var mensaje = document.getElementById("consulta");    
                sendMessage(nombre.value ,correo.value ,telefono.value ,"Congreso Oncología");
                Materialize.toast('Mensaje enviado! En breve te responderemos, Gracias.', 10000);
                Materialize.updateTextFields();
                $("#submit").removeAttr('disabled', 'disabled');
                // $("form#Form")[0].reset();
                
                
            }).fail(function() { 
                Materialize.toast('Disculpa! Ocurrio un error, Intentelo de nuevo.', 10000);
                $("#submit").removeAttr('disabled', 'disabled');
            });
        });
    } 
    initMail(); 

    
}); 
 
/* RECONOCER EL ACTIVE DEL MENU*/
$(function() {
     
    var pgurl = window.location.href.substr(window.location.href.lastIndexOf("/")+1);  
    
    $("nav ul li a").each(function(){
        if($(this).attr("href") == pgurl || $(this).attr("href") == '' )
        $(this).addClass("active");
    })

    var pgurl2 = window.location.href.substr(window.location.href);  
    
    $("nav ul li a").each(function(){
        if($(this).attr("href") == pgurl2 || $(this).attr("href") == '' )
        $(this).addClass("active");
    })


});
$(document).on("scroll",function(){
    if($(document).scrollTop()> 530 && screen.width > 993 ){ 
        $(".navbar").addClass("navbar-fixed");  
    } 
    else{
        $(".navbar").removeClass("navbar-fixed"); 
    }  
});
console.log("test")