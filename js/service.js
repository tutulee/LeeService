/**
 * Created by lijiangyuan on 2018/4/13.
 */
$("#video a").click(function(e){
    e.preventDefault();
    if(video.paused()){
        $('#video a').className= "circled fa fa-play";
        video.play();
    }else{
        $('#video a').className= "circled fa fa-pause";
        $('#video').style.display = "show";
        video.pause()
    }
})