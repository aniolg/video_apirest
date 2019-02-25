var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
function printVideoList(arrayVideoObjects) {
    $("#video_list").append(function () {
        for (var i = 0; i <= arrayVideoObjects.length; i++) {
            $;
            {
                "\n        <li class=\"collection-item avatar\">\n            <i class=\"material-icons circle red\">play_arrow</i>\n            <span class=\"title\">";
                arrayVideoObjects[i].name(__makeTemplateObject(["</span>\n            <p>"], ["</span>\n            <p>"]));
                arrayVideoObjects[i].getValorationAverage()(__makeTemplateObject(["<br>\n            <a href=\"#!\" class=\"secondary-content\"><i class=\"material-icons\">grade</i></a>\n        </li>\n        "], ["<br>\n            <a href=\"#!\" class=\"secondary-content\"><i class=\"material-icons\">grade</i></a>\n        </li>\n        "]));
            }
        }
    });
}
//# sourceMappingURL=index.js.map