(function($) {
    function submit(e) {
        e.preventDefault();
        var email = $("#email").val();
        var re = /^(?:[\w\!\#\$\%\&\'\*\+\-\/\=\?\^\`\{\|\}\~]+\.)*[\w\!\#\$\%\&\'\*\+\-\/\=\?\^\`\{\|\}\~]+@(?:(?:(?:[a-zA-Z0-9](?:[a-zA-Z0-9\-](?!\.)){0,61}[a-zA-Z0-9]?\.)+[a-zA-Z0-9](?:[a-zA-Z0-9\-](?!$)){0,61}[a-zA-Z0-9]?)|(?:\[(?:(?:[01]?\d{1,2}|2[0-4]\d|25[0-5])\.){3}(?:[01]?\d{1,2}|2[0-4]\d|25[0-5])\]))$/

        if (re.test(email)) {
            $.ajax({
                type: "POST",
                url: "/subscribe.php",
                data: $("#subscribe").serializeArray(),
                success: function(data) {
                    $("#sub").html(data).addClass("succ");
                },
                error: function(data) {
                    $("#sub").html(data).addClass("err");
                }
            })
        } else {
            $("#sub .mess").remove();
            $("#sub").append("<div class='mess err'>Insert a valid email address.</div>");
        }


    }

    $("#subscribe").submit(submit);
})(jQuery);
