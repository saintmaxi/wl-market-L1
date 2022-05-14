const AWS = require('aws-sdk');
const config = require('./config.js');
AWS.config.update(config.aws_remote_config);
AWS.config.update({region:'us-east-1'});

let ddb = new AWS.DynamoDB.DocumentClient();

const getListingsData = function () {

    const params = {
        TableName: config.aws_table_name
    };

    ddb.scan(params, function (err, data) {

        if (err) {
            return { results: [] }
        } 
        else {
            const { items } = data;
            return { results: items }
        }
    }); 
}

exports.handler = async function(event, context) {
    try {
         let data = await getListingsData();

         return {
            statusCode: 200,
            headers: { "content-type": "application/json" },
            body: JSON.stringify(data)
          }
     
    } 
    catch (err) {
        console.log("invocation error:", err); // output to netlify function log
        return {
            statusCode: 500,
            body: err.message
         };
    }
  };

