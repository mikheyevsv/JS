$(function() {
    $('.quest').on('click', function() {
        // $(this).next().slideToggle(500);
        var answer = $(this).next();
        $('.answer').not(answer).slideUp(300);
        answer.slideToggle(300);
    });
});