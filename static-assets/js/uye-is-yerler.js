//uye is yerleri
$(document).ready(function() {

    // Gets the video src from the data-src on each button
    
    var $videoSrc;  
    $('.video-btn').click(function() {
        $videoSrc = $(this).data( "src" );
    });
    
    
      
    var video = $(".video").get(0);
    // when the modal is opened autoplay it  
    $('#myModal').on('shown.bs.modal', function (e) {
        console.log($videoSrc);
    // set the video src to autoplay and not to show related video. Youtube related video is like a box of chocolates... you never know what you're gonna get
   
    video.play();
    
    })
      
    
    
    // stop playing the youtube video when I close the modal
    $('#myModal').on('hide.bs.modal', function (e) {
        // a poor man's stop video
        
       
        
    }) 
    
    $('.close').click(function() {
        // a poor man's stop video
        video.pause();
        video.currentTime = 0; 
       console.log("err");
        
    }) 

    $(".pop-widget").on('click', function() {
        $(".popup-form").addClass('opened');
        $(".pop-widget").removeClass('opened');

      });
    $(".icon-minus").on('click', function() {
        $(".popup-form").removeClass('opened');
        $(".pop-widget").addClass('opened');
    });
 
});