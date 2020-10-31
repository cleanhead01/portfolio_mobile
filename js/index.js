(function($){


    $('#mobile #aside a, .click-menu-box .click-menu-nav a').on('click', function(){
        // e.preventDefault()
        var url = $(this).attr('href')
        $('#container-box > .container').remove()
        $('#container-box').load(url + ' .container')
        return false
    })

    // 클릭메뉴에 메뉴 누르면 메뉴창 사라지기
    $('#header .click-menu-box a').on('click', function(){
        // e.preventDefault()   상황에 따라 리턴펄스랑 프리벤트를 적절하게 써야한다.
        $(this).parents('.click-menu-box').hide()
        // return false
    })
    
    // 하단 메뉴의 햄버거 버튼 누르면 좌측에서 메뉴창 열리기
    $('#aside #menu-box a').on('click', function(){
        // e.preventDefault()
        $('#header .click-menu-box').css({
            display : "block"
        }).animate({
            left : "0%"
        }, 500)
        return false
    })

    // 메뉴창의 X버튼을 누르면 다시 메인화면으로 넘어가기
    $('#header .click-menu-box .click-menu-txt .close').on('click', function(){
        $('#header .click-menu-box').animate({
            left : "-100%"
        }, 500, function(){
            $(this).css({
                display : "none"
            })
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

    $('.main-title').on('click', function(){
        $(this).next().stop().slideToggle(300)
        $(this).siblings('.main-title').next().each(function(){
            if ( $(this).css('display') === 'block' ) {
                $(this).slideUp(300)
            }
        })
        return false
    })


        
    
 
 
 
 
 





})(jQuery)