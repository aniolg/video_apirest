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
  var api_url = "https://swapi.co/api";
  
    $.ajax({
      url: api_url + "/planets/",
      contentType: "application/json",
      dataType: "json",
      method: "GET",//el GET es default

      success: function(result: any) {
        console.log(result);


        //arrayVideoObjects.push(result);

        $.each(result["results"], function (index, element){
      
            $("#video_list").append(createVideoList(element["name"]));
        });
      }

    });

  
 

  //printVideoList(arrayVideoObjects);
});



/*AJAX HANDLERS*/
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


//En el cas de rebre un string
//var json = JSON.parse(data);


//https://www.npmjs.com/package/json-typescript-mapper
// Json typescript mapper

/*$.each(result, function (element, index){
    $("#video_list").append(printVideoList(index["name"]))
})*/


