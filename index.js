var AWS = require('aws-sdk');

exports.handler = function(event, context, callback) {
    
    var docClient = new AWS.DynamoDB.DocumentClient({region: 'us-east-1'});
    var userEmail = event.email.toString();

    console.log(userEmail);

    var userParams = {
        TableName : 'User',
        Key : {
            email: userEmail
        },
    }
    docClient.get(userParams, function(err, data) {
        if (err) {
            callback(new Error('Unknown User'));
        }
        else {
            callback(null, data);
          }
      });
};