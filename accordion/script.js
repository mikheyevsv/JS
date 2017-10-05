$(function() {
    $('.quest').on('click', function() {
        var $answer = $(this).next();
        $('.answer').not($answer).slideUp(300);
        $answer.slideToggle(300);
    });
});