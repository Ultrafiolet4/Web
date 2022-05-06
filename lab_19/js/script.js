//Exercise 1

$('a[href ^= "https://"]').attr("target","_blank");

//Exercise 2

$(".head").css("background-color", "#00ff00");
$(".inner").css("font-size","35px");

//Exercise 3

function swapDivAndHeaders()
{
    $("h3").each((i, j) =>
    $("h3+div").eq(i)
            .insertBefore(j)
    );
}

//Exercise 4

$('input[type = "checkbox"]').on('change', function () {
    if ($('input[type = "checkbox"]').filter(':checked').length == 3) {
        $('input[type = "checkbox"]').attr('disabled', true);
    }
});
