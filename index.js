var AWS = require('aws-sdk');

exports.handler = function(event, context, callback) {
    
    var userEmail = event.email;

    var docClient = new AWS.DynamoDB.DocumentClient({region: 'us-east-1'});
    var teamParams = {
        TableName : 'user',
        Key : {
            email: userEmail
        },
    }
    docClient.get(teamParams, function(err, data) {
        if (err) {
            callback(new Error('Unknown Team'));
        }
        else {
            callback(null, data);
          }
      });
};