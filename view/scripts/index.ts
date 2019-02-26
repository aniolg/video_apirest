//import { Video } from '../../model/video.class';

/*function printVideoList(arrayVideoObjects:[]){

$("#video_list").append(function(){
    for (let i = 0; i <= arrayVideoObjects.length; i++){
        ${`
        <li class="collection-item avatar">
            <i class="material-icons circle red">play_arrow</i>
            <span class="title">`arrayVideoObjects[i].name`</span>
            <p>`arrayVideoObjects[i].getValorationAverage()`<br>
            <a href="#!" class="secondary-content"><i class="material-icons">grade</i></a>
        </li>
        `}
    }
    
    
);

}
}*/

function createVideoList(namePlanet: string) {
  let planetLi = `<li class="collection-item avatar">
    <i class="material-icons circle red">play_arrow</i>
    <span class="title">${namePlanet}</span>
    <p><br>
    <a href="#!" class="secondary-content"><i class="material-icons">grade</i></a>
</li>`;

  return planetLi;
}
