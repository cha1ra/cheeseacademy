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

