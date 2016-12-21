$(document).ready(function() {
    var number = 0;
    $("body").keydown(function(e) { //space Key
        if (e.keyCode == 32) {

            $("body").css("background", "yellow");
            console.log("image")
        }
        if (e.keyCode == 69) { //key e
            if (number < 5) {
                $("body").append("🌈")
                number++;
                console.log(number);
            }
        }

    });

    $("h1").click(function() {
        $("body").css("color", "#d9fcea");
    });
});
