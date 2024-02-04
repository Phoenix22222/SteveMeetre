$('.navTrigger').click(function () {
    $(this).toggleClass('active');
    console.log("Clicked menu");
    $("#mainListDiv").toggleClass("show_list");
    $("#mainListDiv").fadeIn();

});
$(document).ready(function(){
    var words = $('#animatedHeading').text().split(/\s+/);
    $('#animatedHeading').empty();
    $.each(words, function(i, word) {
        $('#animatedHeading').append($('<span>').text(word + ' '));
    });
    $('#animatedHeading span').each(function(i) {
        $(this).css({
            opacity: 0,
            position: 'relative',
            right: '-100px'
        }).delay(550 * i).animate({ 
            opacity: 1,
            right: '0px' 
        }, 1000); 
    });
});
