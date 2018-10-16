$(function(){
    //$("id="hoge"の中の、pを).消すよ！といった処理になります。
    // $("#about h2").fadeOut(3000);
    console.log('hello!');
});

$(document).on('click', '#send-button', function(){
    $(".modal").fadeIn();
});

$(document).on('click', '.back-toppage', function(){
    $(".modal").fadeOut();
});


$(document).on('click', 'a[href*=#]', function(){
    var target = $(this.hash);
    //if (target.length) {
    if (target) {
        var targetOffset = target.offset().top;
        $('html,body').animate({scrollTop: targetOffset},400,"easeInOutQuart");
        return false;
        }
});

