(function($){


    // 사이드메뉴와 클릭메뉴의 로드메서드를 넣지만 확진자 현황은 새로운 html이 열려야 해서 따로 지목을 한다.
    $('#aside > div > a, .click-menu-box .click-menu-nav li > a').on('click', function(){
        // e.preventDefault()
        var url = $(this).attr('href')
        $('#container-box > .container').remove()
        $('#container-box').load(url + ' .container')
        return false
    })

    
    // 하단 메뉴의 햄버거 버튼 누르면 좌측에서 메뉴창 열리기
    $('#aside #menu-box a').on('click', function(){
        // e.preventDefault()
        $('.click-menu-box').addClass('on')
        $('#header .click-menu-box').animate({
            left : "0%"
        }, 500)
        return false
    })


    // 메뉴창의 a 태그를 누르면 다시 화면으로 넘어가기(확진자 현황은 새로운 html로 넘어가야해서 각각 지목을 한다.)
    $('#header .click-menu-box .click-menu-nav li > a, .click-txt-top a, .click-menu-bottom a').on('click', function(){
        // e.preventDefault()
        $('#header .click-menu-box').animate({
            left : "-100%"
        }, 500, function(){
            $('.click-menu-box').removeClass('on')
        })
        return false
    })


    // 메인페이지 한줄광고문구 위로 슬라이딩 시키기
    setInterval(advertising, 3000)

    function advertising() {
        $('.main-page .main-noti a').eq(0).stop().animate({ // eq(0)은 첫번째 a
        marginTop : '-50px'
        }, 500, function(){
            $(this).appendTo('.main-page .main-noti').css({
                marginTop : '0px'
            })
        })
    }


    // 메인페이지 슬라이드
    $('.slide-box').slick({
        autoplay : true,
        autoplaySpeed : 2000,
        dots : false,
        fade : false,
        speed : 500,
        slidesToScroll : 1,
        slidesToShow : 1,
        pauseOnHover : false,
        pauseOnDotsHover : false,
        pauseOnFocus : true,
        draggable : true,
        arrows : false,
        prevArrow : '<button class="prev arr"><i class="fas fa-arrow-left"></i></button>',
        nextArrow : '<button class="next arr"><i class="fas fa-arrow-right"></i></button>'
    })


    // 메인페이지 아코디언 액션
    $('.main-content').hide()

    $('.main-title i').on('click', function(){
        $(this).parent('.main-title').next().stop().slideToggle(300)

        if ($(this).hasClass('fa-angle-down')) {
            $(this).removeClass('fa-angle-down').addClass('fa-angle-up')    
        } else if ($(this).hasClass('fa-angle-up')) {
            $(this).removeClass('fa-angle-up').addClass('fa-angle-down')    
        }
        
        $(this).parent().siblings('.main-title').next().each(function(){
            if ( $(this).css('display') === 'block' ) {
                $(this).slideUp(300)
                $(this).prev().find('i').removeClass('fa-angle-up').addClass('fa-angle-down')
            }
        })
        return false
    })


        
    
 
 
 
 
 





})(jQuery)