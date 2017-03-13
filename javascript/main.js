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

                if ( currMenuType === 'mobile' ) {
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

	$(function() { 
        
        SlidesHome();
        SliderLatest();
        
        responsiveHorderSearch();
        if ( matchMedia( 'only screen and (min-width: 991px)' ).matches ) {
            headerFixed();
        }
        if ( matchMedia( 'only screen and (max-width: 991px)' ).matches ) {
            SliderFeature();
        }
        
        responsiveMenu();
        tabGoogleMap();
        goTop(); 
        clickFunction();
        removePreloader();
   	});

})(jQuery);