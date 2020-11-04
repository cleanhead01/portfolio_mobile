(function($){

    // 코로나 질문 아코디언 액션
    $('.qna-content').hide()

    $('.qna-title i').on('click', function(){
        $(this).parents('.qna-title').next().stop().slideToggle(300)

        // $(this).parent('.qna-title').addClass('on').siblings().removeClass('on')
        // 이 오류는 잠시 보류


        // if ($(this).hasClass('fa-angle-down')) {
        //     $(this).removeClass('fa-angle-down').addClass('fa-angle-up')
        // } else if ($(this).hasClass('fa-angle-up')) {
        //     $(this).removeClass('fa-angle-up').addClass('fa-angle-down')    
        // }

        // $(this).parent().siblings('.qna-title').next().each(function(){
        //     if ( $(this).css('display') === 'block' ) {
        //         $(this).slideUp(300)
        //         $(this).prev().find('i').removeClass('fa-angle-up').addClass('fa-angle-down')
        //     }
        // })
        // return false
    })

})(jQuery)