function swipeTu($rootScope){
    return{
        restrict:'A',
        link:function(scope,element){
                var swiper = new Swiper('.swiper-container', {
                    pagination: '.swiper-pagination',
                    slidesPerView: 1,
                    paginationClickable: false,
                    spaceBetween:0,
                    loop: true,
                    autoplay:2000
                });       

                $(".m1").on("tap","dl",function(){
                    $(this).addClass("xzbk").siblings().removeClass("xzbk");
                    $(this).find('span img').attr("src","../images/qrchanpinxz.png").parents("dl").siblings().find("span img").attr("src","../images/qrchanping_03.png");
                })
    
                $("#btn").on("tap",function(){
                    $("#mark").show();
                })
        }
    }
}


function wdJiekuan($rootScope){
    return{
        restrict:'A',
        link:function(scope,element){
            //我的借款
                var conScr=new IScroll("#con");
                $("#list").on('click','a',function(e){
                    $(this).addClass('bg').siblings().removeClass('bg');
                })
        }
    }
}


angular.module('myapp')
       .directive('swipeTu',swipeTu)
       .directive('wdJiekuan',wdJiekuan)