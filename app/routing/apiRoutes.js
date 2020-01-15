// LOAD DATA
// =============================================================
var friends = require('../data/friends');

module.exports = function(app){
  // API Routes
  // =============================================================

  // Displays all friends
  app.get("/api/friends", function(req, res) {
      return res.json(friends);
    });

  // Displays a single friend who matched with your results, or returns false
  app.get("/api/friends/:friend", function(req, res) {
    var chosen = req.params.name;
  
    console.log(chosen);
  
    for (var i = 0; i < friends.length; i++) {
      if (chosen === friends[i].name) {
        return res.json(friends[i]);
      }
    }
  
    return res.json(false);
  });

  // Create New Friend - takes in JSON input
  app.post("/api/friends", function(req, res) {
    var newFriend = req.body;

    //computes total score for new friend
    newFriend.totalScore = newFriend.score.map(Number).reduce((a, b) => a + b, 0);
    console.log("newFriend totalScore: ", newFriend.totalScore);

    //computes total score for each friend
    friends.forEach(friend => {
      friend.totalScore = friend.scores.map(Number).reduce((a, b) => a + b, 0);
      console.log(friend.name, friend.totalScore);
      
      //compare total score of all friends against newfriend's total score 
      //returns closest match 
      if(){
        var match = friend;
        return res.json(match);
      }

    });
    //add newFriend to friend list
    friends.push(newFriend);
  });
}
  