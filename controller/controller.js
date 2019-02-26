var arrayVideoObjects = [];
$(document).ready(function () {
    var api_url = "https://swapi.co/api";
    $.ajax({
        url: api_url + "/planets/",
        contentType: "application/json",
        dataType: "json",
        method: "GET",
        success: function (result) {
            console.log(result);
            $.each(result["results"], function (index, element) {
                $("#video_list").append(createVideoList(element["name"]));
            });
        }
    });
});
$(document).ajaxStart(function () {
    console.log("AJAX starting");
});
$(document).ajaxStop(function () {
    console.log("AJAX request ended");
});
$(document).ajaxSend(function (evt, jqXHR, options) {
    console.log("About to Send request for data...");
});
$(document).ajaxComplete(function (evt, jqXHR, options) {
    console.log("Everything's finished!");
});
$(document).ajaxError(function (evt, jqXHR, settings, err) {
    console.log("Hmmm. Seems like there was a problem: " + err);
});
$(document).ajaxSuccess(function (evt, jqXHR, options) {
    console.log("Looks like everything worked!");
});
//# sourceMappingURL=controller.js.map