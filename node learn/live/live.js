var api =require('sports-live');

api.getAllMatches("Soccer",(err, data) => {console.log(data[0].team1,data[0].score,data[0].team2,"\n",data[0].currentStatus);})
