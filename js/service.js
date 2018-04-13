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

