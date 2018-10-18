

/* Modal Window Function*/
$(document).on('click', '#send-button', function(){
    $(".modal").fadeIn();
});

$(document).on('click', '.back-toppage', function(){
    $(".modal").fadeOut();
});

/* Scroll Function */
const pageScroll = function(){
    const href = $(this).attr('href');
    const aboutFromTop = $(href).offset().top;
    $('html, body').animate({scrollTop:aboutFromTop},1000);
};

const backToTop = function(){
    $('html, body').animate({scrollTop:0},1000);
};

$('nav > ul > li > a').on('click', pageScroll);
$('#back-to-top').on('click', backToTop);




const tokyoOlympic = 2020;
let currentYear = 2018;

console.log(tokyoOlympic - currentYear);
console.log("test");



/* GET Web API information */
const getAPIData = function(searchWords){
    //If Search Words is NULL
    console.log('searchWord is :' + searchWords);
    if(searchWords == ""){
        console.log('Search box is NULL');
        $('.error').text('もっと自分の意見を言えよ！！！');
    }

    //POST to PHP file to get JSON info.
    $.ajax({
        type: 'POST',
        url: "./php/json.php",
        data:{
            api:'gurunabi-rep',
            words: searchWords,
        }
    })
    .then(
        // Success to get JSON
        function(data){
            console.log('Success!');
            let jsonData = JSON.parse(data);
            console.log(jsonData["response"][0]["photo"]);
            //you can get 50 posts from Gurunavi API
            var resultHTML = "<h2>" + jsonData["response"]["total_hit_count"].toLocaleString() + " 件の " + searchWords + " を発見！</h2>";
            resultHTML += '<div class="api-result">'
            for(let i=0; i < 5; i++){
                resultHTML += '<div class="review">';
                resultHTML += '<img src="' + jsonData["response"][i]["photo"]["image_url"]["url_200"] + '" >';
                resultHTML += '<div>'
                resultHTML +=  '<p class="menu_name">' + jsonData["response"][i]["photo"]["menu_name"] + "</p>";
                resultHTML += '<a href="' + jsonData["response"][i]["photo"]["shop_url"] + '" target="_blank" >';
                resultHTML +=  '<p class="shop_name">' + jsonData["response"][i]["photo"]["shop_name"] + "</p>";
                resultHTML += '</a>'
                let review = jsonData["response"][i]["photo"]["comment"];
                console.log(review);
                //Replace search word to bold
                review = review.replace(searchWords, '<b>' + searchWords + '</b>');
                resultHTML +=  "<p>" + review + "</p>";
                resultHTML += '</div></div>'
            }
            resultHTML += "</div>"
            $('.api-result').html(resultHTML);
        },
        // Fail to get JSON
        function(){
            alert('Failed to get .json data...');
        }
    );



};



/* Favorite Words Search Button */

//Search Words
$('#search-button').on('click', function(){
    $(".modal").fadeIn();

    let searchWords = $('#search [name=fav-words]').val();
    getAPIData(searchWords,null,null);

    $(".modal").fadeOut();
});

/* Search with Current Geolocation */
$('#current-position').on('click', function(){
    $(".modal").fadeIn();

    let searchWords = $('#search [name=fav-words]').val();
    getCurrentPosition(searchWords,null,null);

    $(".modal").fadeOut();
});


/* GET geolocation information */
const getCurrentPosition = function(){
    $(".modal").fadeIn();
    navigator.geolocation.getCurrentPosition(function(position){
        getAPIData(searchWords, position.coords.latitude, position.coords.longitude)
        console.log(position.coords.latitude, position.coords.longitude);
    });
    $(".modal").fadeOut();
};
$('#current-position').on('click', getCurrentPosition);

/* do input Events on realtime */

$('#search [name=fav-words]').on('input', function(event){
    let value = $('#search [name=fav-words]').val();
    $(".feeling").html(value);
})







