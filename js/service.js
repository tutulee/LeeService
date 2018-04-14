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


    $('.nav-pills').on('click',function(e){
        $(e.target).parent().siblings().find('a').removeClass('active');
        $(e.target).addClass("active");
        var ss = $(e.target).data("filter");
        var w =$('.img-responsive').width();
        var h =$('.img-responsive').height();
        if(ss=="all") {
        }else if(ss ==".mockups"){
            $('.mix').css('display', "none");
            $('.mockups').css('display', "inline-block");
            $('.mix').height(0);
            $('.mix').width(0);
            $('.mockups').height(h);
            $('.mockups').width(w);
        }else if(ss ==".icons"){
            $('.mix').css('display', "none");
            $('.mix').style.height="0px";
            $('.icons').css('display', "inline-block");
        }else if(ss==".templates"){
            $('.mix').css('display', "none");
            $('.mix').style.height="0px";
            $('.templates').css('display', "inline-block");
        }else{
            $('.mix').css('display', "none");
            $('.mix').style.height="0px";
            $('.ui-kits').css('display', "inline-block");
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


$(window).bind('scroll', function () {
        var th = $(window).scrollTop();
        if(th > 100){
            $('.navbar-default').addClass("navbar-small");
        }else{
            $('.navbar-default').removeClass("navbar-small");
            console.log($(''));
        }

}
)
