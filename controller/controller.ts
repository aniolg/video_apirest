$("document").ready(getVideoList())

function getVideoList(){
    let videoListAPI = "http://142.93.235.203:8080/FE/videos";
    $.getJSON(videoListAPI, {
        tags: "name",
        tagmode: "any",
        format: "json"
    }, addData)
}