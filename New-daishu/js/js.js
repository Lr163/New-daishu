$(".m1 dl").on("tap",function(){
  	alert(1)
    $(this).addClass("xzbk").siblings().removeClass("xzbk");
    $(this).find('span img').attr("src","../images/qrchanpinxz.png").parents("dl").siblings().find("span img").attr("src","../images/qrchanping_03.png");
})
