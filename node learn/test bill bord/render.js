var billboard = require("billboard-top-100").getChart;

mainDiv = document.getElementById('main');
var i=0;

var all= "<div class= \"list\"> <div class=rank>"+ songRank +"</div> <div class=\"title\">" + songTitle + "</div>  <div class=\"artist\">"+songArtist+"</div> <div class=\"image\" src="">"+songImage+"</div></div>

function show()
{
    billboard('hot-100', function(songs, err){
        for(i=0; i<100; i++) {
            if(songs[i].cover == undefined) {
                songs[i].cover = "https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/AS-skrzyzowanie-icon.svg/2000px-AS-skrzyzowanie-icon.svg.png";
            }
}