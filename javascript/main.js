;(function($) {

   'use strict'

    var isMobile = {
        Android: function() {
            return navigator.userAgent.match(/Android/i);
        },
        BlackBerry: function() {
            return navigator.userAgent.match(/BlackBerry/i);
        },
        iOS: function() {
            return navigator.userAgent.match(/iPhone|iPad|iPod/i);
        },
        Opera: function() {
            return navigator.userAgent.match(/Opera Mini/i);
        },
        Windows: function() {
            return navigator.userAgent.match(/IEMobile/i);
        },
        any: function() {
            return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
        }
    };

	var responsiveMenu = function() {
        var menuType = 'desktop';

        $(window).on('load resize', function() {
            var currMenuType = 'desktop';

            if ( matchMedia( 'only screen and (max-width: 991px)' ).matches ) {
                currMenuType = 'mobile';
            }

            if ( currMenuType !== menuType ) {
                menuType = currMenuType;

                if ( currMenuType === 'mobile') {
                    var $mobileMenu = $('#mainnav').attr('id', 'mainnav-mobi').hide();
                    var hasChildMenu = $('#mainnav-mobi').find('li:has(ul)');

                    $('#header').after($mobileMenu);
                    hasChildMenu.children('ul').hide();
                    hasChildMenu.children('a').after('<span class="btn-submenu"></span>');
                    $('.btn-menu').removeClass('active');
                } else {
                    var $desktopMenu = $('#mainnav-mobi').attr('id', 'mainnav').removeAttr('style');

                    $desktopMenu.find('.submenu').removeAttr('style');
                    $('#header').find('.nav-wrap').append($desktopMenu);
                    $('.btn-submenu').remove();
                }
            }
        });

        $('.btn-menu').on('click', function() {        	
            $('#mainnav-mobi').slideToggle(300);
            $(this).toggleClass('active');
        });

        $(document).on('click', '#mainnav-mobi li .btn-submenu', function(e) {
            $(this).toggleClass('active').next('ul').slideToggle(300);
            e.stopImmediatePropagation()
        });
    }

    var headerFixed = function() {        

        if ( $('body').hasClass('header-sticky') ) {
            var hd_height = $('#header').height();           
            $(window).on('load scroll', function(){                
                if ( $(window).scrollTop() > hd_height + 200) {
                    $('#header').addClass('downscrolled');                      
                } else {
                    $('#header').removeClass('downscrolled');                   
                }
                if( $(window).scrollTop() > 300) {
                    $('#header').addClass('upscrolled');                    
                } else {
                    $('#header').removeClass('upscrolled');                    
                }
            })            
        }   
    } 

    var simpleSlider = function() { 
        if ( $().flexslider ) {
            $('.featured-slider').each(function() {
                var $this = $(this)
                $this.find('.flexslider').flexslider({
                    animation      :  "slide",
                    direction      :  "horizontal", // vertical
                    pauseOnHover   :  true,
                    useCSS         :  false,
                    easing         :  "swing",
                    animationSpeed :  500,
                    slideshowSpeed :  5000,
                    controlNav     :  false,
                    directionNav   :  true,
                    slideshow      :  true,
                    prevText       :  '<i class="fa fa-angle-left"></i>',
                    nextText       :  '<i class="fa fa-angle-right"></i>',
                    smoothHeight   :  true
                }); // flexslider
            }); // simple-slider
        }
    };     

    var removePreloader = function() {        
        $('.loader').fadeOut('slow',function () {
            $(this).remove();
        });
    };

    var clickFunction = function() {        
        $('.button-show-search').click(function() {
            if ($('.widget-search').hasClass('on')) {
                $('.widget-search').removeClass('on');
            }
            else {
                $('.widget-search').addClass('on');
            }
            $('.widget-search').toggle();
        });
    };
    
    

    var goTop = function() {
        $(window).scroll(function() {
            if ( $(this).scrollTop() > 800 ) {
                $('.go-top').addClass('show');
            } else {
                $('.go-top').removeClass('show');
            }
        }); 

        $('.go-top').on('click', function() {            
            $("html, body").animate({ scrollTop: 0 }, 1000 , 'easeInOutExpo');
            return false;
        });
    };

    var tabGoogleMap = function() {
        $('.button-rent').click(function() {
            $('.wrap-map-rent').removeClass('hidden');
            $('.wrap-map-sale').addClass('hidden');
            $('.tab-googlemap').find('.active').removeClass('active');
            $(this).addClass('active');
        });

        $('.button-sale').click(function() {
            $('.wrap-map-sale').removeClass('hidden');
            $('.wrap-map-rent').addClass('hidden');
            $('.tab-googlemap').find('.active').removeClass('active');
            $(this).addClass('active');
        });
    }

    var responsiveHorderSearch = function() {
        $(window).on('load resize', function() {
            var currMenuType = 'desktop';

            if ( matchMedia( 'only screen and (max-width: 991px)' ).matches ) {
                $('.search-in-slide .input-search').attr('placeholder','Search here');
            }
            else {
                $('.search-in-slide .input-search').attr('placeholder','Search by District, Address, MLS ID or Agent');
            }
        });
    }

    var removePreloader = function() {        
        $('.loader').fadeOut('slow',function () {
            $(this).remove();
        });
    };

    var SliderFeature = function () {
        $('.flexslider-featured').flexslider({
            animation: "slide",
            controlNav: false,
            directionNav: true ,
            nextText: '<span ></span>',
            prevText: '<span ></span>'
        });
    }

    var SliderPoints = function () {
        $('.flexslider-points').flexslider({
            animation: "slide",
            controlNav: false,
            directionNav: true ,
            nextText: '<span class="nav-right" ></span>',
            prevText: '<span class="nav-left" ></span>'
        });
    }

    var SlidesHome = function () {
        $('.flexslider').flexslider({
            animation: "slide",
            controlNav: false,
            directionNav: true ,
            nextText: '<span class="nav-home-right"></span>',
            prevText: '<span class="nav-home-left"></span>'
        });
    }

    var FlexsliderAbout = function () {
        $('.flexslider-vnp').flexslider({
            animation: "slide",
            controlNav: "thumbnails",
            directionNav: true ,
            nextText: '<span class="nav-home-right"></span>',
            prevText: '<span class="nav-home-left"></span>'
        });
    }

    // var MobileFlexsliderAbout = function () {
    //     $('.flexslider-vnp-mobile').flexslider({
    //         animation: "slide",
    //     });
    // }

    var MobileFlexsliderAbout = function() {  
        $('.flat-tabs').each(function() {
            $('.owl-carousel-vnphat').owlCarousel({
                loop:true,
                margin:0,
                nav:false,
                dots: false,
                responsive:{
                    0:{
                        items:1
                    },
                    600:{
                        items:1
                    },
                    1000:{
                        items:1
                    }
                }
            });
        });
    };

    var SliderLatest = function () {
        $('.flexslider-latest').flexslider({
            animation: "slide",
            animationLoop: true,
            directionNav: false ,
            controlNav: false,
            itemWidth: 270,
            initDelay: 1, 
            itemMargin: 30
        });
    }

    var flatTabs = function () {
        $('.flat-tabs').each(function() {

            $(this).children('.content-tab').children().hide();
            $(this).children('.content-tab').children().first().show();

            $(this).find('.menu-tabs').children('li').on('click', function(e) {
                var liActive = $(this).index(),
                    contentActive = $(this).siblings().removeClass('active').parents('.flat-tabs').children('.content-tab').children().eq(liActive);

                contentActive.addClass('active').fadeIn('slow');
                contentActive.siblings().removeClass('active');
                $(this).addClass('active').parents('.flat-tabs').children('.content-tab').children().eq(liActive).siblings().hide();
                e.preventDefault();
            });
        });
    };

    var hoaTabs = function () {
        $(".tab-chedule").click(function(){
            $('.tab-default-detail').hide();
            $(".tab-friend-detail").hide();
            $(".tab-share-detail").hide();
            $(".tab-chedule-detail").show();
        });

        $(".tab-friend").click(function(){
            $('.tab-default-detail').hide();
            $(".tab-friend-detail").hide();
            $(".tab-chedule-detail").hide();
            $(".tab-friend-detail").show();
        });

        $(".tab-share").click(function(){
            $('.tab-default-detail').hide();
            $(".tab-friend-detail").hide();
            $(".tab-chedule-detail").hide();
            $(".tab-share-detail").show();
        });

        $(".adv_close").click(function(){
            $(this).parent().parent().hide();
            $('.tab-default-detail').show();
        });
    };

    var LondonoAccordion = function() {
        var args = {duration: 600};
        $('.flat-toggle .toggle-title.active').siblings('.toggle-content').hide();

        $('.flat-toggle.enable .toggle-title').on('click', function() {
            $(this).closest('.flat-toggle').find('.toggle-content').slideToggle(args);
            $(this).toggleClass('active');
        }); // toggle 

        $('.flat-accordion .toggle-title').on('click', function () {
            if( !$(this).is('.active') ) {
                $(this).closest('.flat-accordion').find('.toggle-title.active').toggleClass('active').next().slideToggle(args);
                $(this).toggleClass('active');
                $(this).next().slideToggle(args);
            } else {
                $(this).toggleClass('active');
                $(this).next().slideToggle(args);
            }     
        }); // accordion
    };

   

    var favoritesNP = function() {
        $(".sw-click").on('click',function() {
            $(this).addClass('active');
             var t = $(".favorites");

            if (t.css("bottom") === "-170px") {
                $(".favorites").animate({ bottom: "0"}, 300 )
            } else {
                $(this).removeClass('active');
                $(".favorites").animate({ bottom: "-170px" }, 300)
            }
        });
    };

    var Fsavoritescarousel = function() {
        $('.favorites').each(function() {               
            if ( $().owlCarousel ) {
                $(this).find('.favorites-carousel-owl').owlCarousel({
                    loop: false,
                    margin: 15,
                    nav: true,
                    dots: false,                     
                    autoplay: false,                    
                    responsive:{
                        0:{
                            items: 2
                        },
                        480:{
                            items: 4
                        },
                        767:{
                            items: 4
                        },
                        991:{
                            items: 5
                        },
                        1200: {
                            items: 6
                        }
                    }
                });
            }
        });
    };

    var LondonoReadmore = function() {
        // Configure/customize these variables.
        var showChar = 344;  // How many characters are shown by default
        var ellipsestext = "...";
        var moretext = "+";
        var lesstext = "-";
        

        $('.more').each(function() {
            var content = $(this).html();
     
            if(content.length > showChar) {
     
                var c = content.substr(0, showChar);
                var h = content.substr(showChar, content.length - showChar);
     
                var html = c + '<span class="moreellipses">' + ellipsestext+ '&nbsp;</span><span class="morecontent"><span>' + h + '</span>&nbsp;&nbsp; <div class="wrap-morelink"> <a href="" class="morelink"> ' + moretext + '</a> </div></span>';
     
                $(this).html(html);
            }
     
        });
     
        $(".morelink").click(function(){
            if($(this).hasClass("less")) {
                $(this).removeClass("less");
                $(this).html(moretext);
            } else {
                $(this).addClass("less");
                $(this).html(lesstext);
            }
            $(this).parent().prev().toggle();
            $(this).prev().toggle();
            return false;
        });

        $('.btn-show-more-tabdefault').click(function() {
            if ($(this).hasClass('noshow')) {
                $(this).removeClass('noshow');
            } else{
                $(this).addClass('noshow');
            }
            $('.content-request .profile-form').toggle(200);
        })
    };

    var onepage_nav = function () {
        $('a.button-scroll').on('click',function() {           
            var anchor = $(this).attr('href').split('#')[1];            
            var largeScreen = matchMedia('only screen and (min-width: 992px)').matches;
            var headerHeight = 0;
            headerHeight = $('.header').height();            
            if ( anchor ) {
                if ( $('#'+anchor).length > 0 ) {
                   if ( $('.header-sticky').length > 0 && largeScreen ) {
                        headerHeight = headerHeight;
                   } else {
                        headerHeight = 0;
                   }                   
                   var target = $('#'+anchor).offset().top - headerHeight;
                   $('html,body').animate({scrollTop: target}, 1000, 'easeInOutExpo');
                }
            }
            return false;
        })

        $('a.button-scroll').on( 'click', function() {
            $( this ).addClass('active').parent().siblings().children().removeClass('active');
        });
    }

    var slickTeam =  function() {
        $('.hoa-carousel-owl').each(function() {
            $(".center").slick({
                dots: false,
                infinite: true,
                centerMode: true,
                slidesToShow: 3,
                slidesToScroll: 3,
                centerPadding: '0px',
                responsive: [
                    {
                      breakpoint: 1200,
                      settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: true
                      }
                    },
                    {
                      breakpoint: 991,
                      settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                      }
                    },
                    {
                      breakpoint: 767,
                      settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                      }
                    },
                    {
                      breakpoint: 480,
                      settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                      }
                    },
                    {
                      breakpoint: 0,
                      settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                      }
                    }
                ]
            }); 
        });
    };

	$(function() { 
        
        SlidesHome();
        FlexsliderAbout();
        MobileFlexsliderAbout();
        SliderLatest();
        
        responsiveHorderSearch();
        if ( matchMedia( 'only screen and (min-width: 991px)' ).matches ) {
            headerFixed();
        }

        if ( matchMedia( 'only screen and (max-width: 991px)' ).matches ) {
            SliderPoints();
        }
        onepage_nav();
        LondonoReadmore();
        SliderFeature();
        flatTabs();
        hoaTabs();
        slickTeam();
        Fsavoritescarousel();
        LondonoAccordion();
        favoritesNP();
        responsiveMenu();
        tabGoogleMap();
        goTop(); 
        clickFunction();
        removePreloader();
   	});

})(jQuery);