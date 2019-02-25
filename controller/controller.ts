//import { Video } from '../model/video.class';
/*$("document").ready(getVideoList())

function getVideoList(){
    let videoListAPI = "http://142.93.235.203:8080/FE/videos";
    $.getJSON(videoListAPI, {
        tags: "name",
        tagmode: "any",
        format: "json"
    }, addData)
}*/

var arrayVideoObjects:[] = [];

$(document).ready(function() {
  var api_url = "http://142.93.235.203:8080";
  
    $.ajax({
      url: api_url + "/FE/videos/",
      contentType: "application/json",
      dataType: "json",
      method: "GET",//el GET es default

      success: function(result: any) {
        console.log(result);

        arrayVideoObjects.push(result);

        $.each(result, function (index, element){
            $("#video_list").append(printVideoList(element["name"]))
        })
      }

    });

  
 

  //printVideoList(arrayVideoObjects);
});

//En el cas de rebre un string
//var json = JSON.parse(data);


//https://www.npmjs.com/package/json-typescript-mapper
// Json typescript mapper

/*$.each(result, function (element, index){
    $("#video_list").append(printVideoList(index["name"]))
})*/


