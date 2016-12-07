$(document).ready(function() {
    $("body").keydown(function(e) {
        if (e.keyCode == 32) {

            $("body").css("background-color", "yellow");
        }
        if (e.keyCode == 69) {
            $("body").append("🌈")
            console.log("key");
        }
    });
    $("h1").click(color = function() {
        $("body").css("color", "#d9fcea");
    });
});