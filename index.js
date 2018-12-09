const fs = require('fs');

const rootDir = '/tmp/project';
module.exports.handler = function (event, context, callback) {

  // Handle GETs
  if (event.httpMethod == "GET") {

    // Read in text for index.html.
    let html = fs.readFileSync(__dirname + '/index.html', 'utf8');

    let result = {
      "isBase64Encoded": false,
      "statusCode": 200,
      "headers": {
        "content-type": "text/html",
        "Access-Control-Allow-Origin": "*"
      },
      "body": html
    }
    callback(null, result);

  } else { // Handle POSTs  
   
    let result = {
      "isBase64Encoded": false,
      "statusCode": 200,
      "headers": {
        "content-type": "text/html",
        "Access-Control-Allow-Origin": "*"
      },
      "body": "Handled POST to service"
    }
    callback(null, result);
  }

};
