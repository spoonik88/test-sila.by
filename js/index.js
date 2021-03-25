let numCount = $(".num-count");

$(".button-plus").click(function() {
    let qty = numCount.text();
    if (qty < 20) {
        qty = parseFloat(qty) + 1;
        numCount.text(qty);
    }
});
$(".delete-product").click(
    function() {
        alert("Вы уверены, что хотите удалить данный товар?")
    }
)
$(".button-minus").click(function() {
    let qty = numCount.text();

    if (qty > 0) {
        qty = parseFloat(qty) - 1;
        console.log(qty);
        numCount.text(qty);
    }
});
// $(".tabs-item").css({ 'background': 'red' })
$(".tab").click(function() {
    $(".tab").removeClass("active-tabs").eq($(this).index()).addClass("active-tabs");
    console.log()
    $(".tabs-item").hide().eq($(this).index()).css({
        "display": "flex"
    }).fadeIn()
}).eq(0).addClass("active-tabs");



$("#phone").click(function() {
    $.fn.setCursorPosition = function(pos) {
        if ($(this).get(0).setSelectionRange) {
            $(this).get(0).setSelectionRange(pos, pos);
        } else if ($(this).get(0).createTextRange) {
            var range = $(this).get(0).createTextRange();
            range.collapse(true);
            range.moveEnd('character', pos);
            range.moveStart('character', pos);
            range.select();
        }
    };
    $(this).setCursorPosition(8);
}).mask("+(375) (99) 999-99-99");

$("#first-name,#last-name,#phone,#email").focus(
    function() {
        $(".form-product").children().removeClass("label-content__disabled");
    }

)
$("#city").focus(
    function() {
        $(".form-user ").children().removeClass("label-content__disabled");
    }

)
$("#cash").click(
    function() {
        $(".form-delivery").children().removeClass("label-content__disabled");
    }

)
$("#comments").click(
    function() {
        $(".form-payment").children().removeClass("label-content__disabled");
    }

)

$(document).ready(function() {
    function resizeMenu() {
        if ($(window).width() < 768) {


            $(window).bind('scroll', function() {
                var navHeight = $(window).height() + 1515;
                console.log(navHeight)
                if ($(window).scrollTop() > navHeight) {
                    $('.form-preview').removeClass('fixed');
                } else {
                    $('.form-preview').addClass('fixed');

                }
            });
        } else {
            $(window).bind('scroll', function() {
                var navHeight = $(window).height() + 1100;
                console.log(navHeight)
                if ($(window).scrollTop() > navHeight) {
                    $('.form-preview').removeClass('fixed');
                } else {
                    $('.form-preview').addClass('fixed');

                }
            });
        }
    }
    resizeMenu();
});