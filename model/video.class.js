"use strict";
exports.__esModule = true;
var Video = (function () {
    function Video(id, name) {
        this.reviews = [];
        this.id = id;
        this.name = name;
    }
    Video.prototype.getValorationAverage = function () {
        var valorationAverage;
        for (var i = 0; i <= this.reviews.length; i++) {
            valorationAverage = +this.reviews[i].valoration;
        }
        valorationAverage = valorationAverage / this.reviews.length;
        return valorationAverage;
    };
    return Video;
}());
exports.Video = Video;
//# sourceMappingURL=video.class.js.map