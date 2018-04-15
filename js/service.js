/**
 * Created by lijiangyuan on 2018/4/13.
 */

function btn(){
    var zhezhao=document.getElementById("zhezhao");
    var h = document.documentElement.scrollHeight;
    zhezhao.style.height=h+"px";
    $('#zhezhao').show();
    video.play();
}
  $('#video-close').click(function(){
      $('#zhezhao').hide();
      video.pause();

  })
$(document).ready(function(){

    $("figure").css("display","inline-block");
    $('.nav-pills').on('click','a',function(e){
        $(e.target).parent().siblings().find('a').removeClass('active');
        $(e.target).addClass("active");
        var ss = $(e.target).data("filter");
        var w =$('.img-responsive').width();
        var h =$('.img-responsive').height();
         if(ss =="all"){
             $("figure").css("display","inline-block");
         }else if(ss =="mockups"){

            // $(".mockups").parent().children().css("display","none");
             $(".mockups").siblings().not(".mockups").css("display","none");
             $('.mockups').css("display","inline-block");

         }else if(ss=="ui-kits"){

             $(".mockups").parent().children().css("display","none");
             $(".ui-kits").css("display","inline-block");

         }else if(ss=="icons"){

             $(".icons").parent().children().css("display","none");
             $(".icons").css("display","inline-block");

         }else if(ss=="templates"){

             $(".templates").parent().children().css("display","none");
             $(".templates").css("display","inline-block");

         }

    })

});

     $('.projects').on('mouseenter','figure',function(e){
        var target = $(e.target);
         target.siblings('.mask').css('opacity','1');
     })
     $('.projects').on('mouseleave','figure',function(e){
         var target = $(e.target);
         target.siblings('.mask').css('opacity','0');
     })


$(window).on('scroll', function () {
        var th = $(window).scrollTop();
        if(th > 100){
            $('.navbar-default').addClass("navbar-small");
        }else{
            $('.navbar-default').removeClass("navbar-small");
            console.log($(''));
        }

}
)
