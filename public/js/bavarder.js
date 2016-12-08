$(function() {

    $('.fields').click(function() {
        $(this).find("input").css({height: "30px", background: "#F0F7EE"});
        $(this).find("input").focus();
    });

    $('.fields input').focusin(function() {
        $(this).css({height: "30px", background: "#F0F7EE"});
    });

    $('.fields input').focusout(function() {
        if($(this).val()==="") {
            $(this).css({height: "1px", background: "#333"});
        }
    });
});