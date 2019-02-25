var arrayVideoObjects = [];
$(document).ready(function () {
    var api_url = "http://142.93.235.203:8080";
    $.ajax({
        url: api_url + "/FE/videos/",
        contentType: "application/json",
        dataType: "json",
        method: "GET",
        success: function (result) {
            console.log(result);
            arrayVideoObjects.push(result);
            $.each(result, function (index, element) {
                $("#video_list").append(printVideoList(element["name"]));
            });
        }
    });
});
//# sourceMappingURL=controller.js.map