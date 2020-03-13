var friends = require('../data/friends.js');

module.exports = function(app) {
  app.get('/api/friends', function(req, res) {
    res.json(friends);
  });

  app.post('/api/friends', function(req, res) {
    //grab new friend score from the body
    let newFriendScores = req.body.scores;

    let bestFriend;
    let difference = 0;

    //loop through friends array
    for (var i = 0; i < friends.length; i++) {
      //loop through scores in friend array
      for (var k = 0; k < friends[i].scores.length; k++) {
        //calculate the difference between each individual firends score and the newFriendScores
        //Math.abs() to prevent negative number
        //preseInt() convert string in array to number
        difference += Math.abs(
          parseInt(friends[i].scores[k]) - parseInt(newFriendScores[k])
        );
        // console.log('innerloop');

        // console.log(difference);
      }

      //conditional statement to compare the difference to find the most compatible friend from the friends array
      //least difference is the most compatible friend
      if (i === 0) {
        bestFriend = friends[i];

        //adding difference key to object
        bestFriend.difference = difference;
      } else if (difference < bestFriend.difference) {
        bestFriend = friends[i];
        bestFriend.difference = difference;
      }

      //reseting difference
      difference = 0;
    }

    //return most compatible friend as json

    res.json(bestFriend);

    //push most compatible friend into friends array
    friends.push(req.body);
  });
};
