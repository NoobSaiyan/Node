var http = require('http');
var fs = require('fs');
var billboard = require("billboard-top-100").getChart;
var all= "<div class= \"list\"> <div class=rank>"+ songs[i].rank +"</div> <div class=\"title\">" + songs[i].title + "</div>  <div class=\"artist\">"+songs[i].artist+"</div> <div class=\"image\" src=""> " +song[i].image+"</div></div>;

mainDiv = document.getElementById('main');
var i=0;


http.createServer(function(req,res)
{
    res.writeHead(200, {'Content-Type': 'text/html'});
    fs.readFile('index.htm',function(err,data)
    {
        if(err)
        {
            res.writeHead(404);
            res.write('Page not founD')
        }
        else
        {
            res.write(data);
            billboard('hot-100', function(songs, err){
                for(i=0; i<100; i++) {
                    if(songs[i].cover == undefined) {
                        songs[i].cover = "https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/AS-skrzyzowanie-icon.svg/2000px-AS-skrzyzowanie-icon.svg.png";
                    }
                    all= "<div class= \"list\"> <div class=rank>"+ songs[i].rank +"</div> <div class=\"title\">" + songs[i].title + "</div>  <div class=\"artist\">"+songs[i].artist+"</div> <div class=\"image\" src="">"+song[i].image+"</div></div>;
                    
                    res.write(all,function(err){
                    res.end;
                    });
                }
                
            });        
        }
    })
}).listen(process.env.PORT || 8080);