(function($){


    $('#mobile').on('click','#aside a', function(e){
        e.preventDefault()
        var url = $(this).attr('href')
        $('#container-box > .container').remove()
        $('#container-box').load(url + ' .container')

    })
    
    // 하단 메뉴의 햄버거 버튼 누르면 좌측에서 메뉴창 열리기
    $('#aside #menu-box a').on('click', function(e){
        e.preventDefault()
        $('#header .click-menu-box').css({
            display : "block"
        }).animate({
            left : "0%"
        }, 500)
    })

    // 메뉴창의 X버튼을 누르면 다시 메인화면으로 넘어가기
    $('#header .click-menu-box .click-menu-txt .close').on('click', function(e){
        e.preventDefault()
        $('#header .click-menu-box').animate({
            left : "-100%"
        }, 500, function(){
            $(this).css({
                display : "none"
            })
        })
    })






})(jQuery)