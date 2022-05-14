const AWS = require('aws-sdk');
const config = require('./config.js');
AWS.config.update(config.aws_remote_config);
AWS.config.update({region:'us-east-1'});

let ddb = new AWS.DynamoDB.DocumentClient();

const getListingsData = async() => {
    const params = {
        TableName: config.aws_table_name,
    };

    const scanResults = [];
    let items;
    do{
        items =  await ddb.scan(params).promise();
        items.Items.forEach((item) => scanResults.push(item));
        params.ExclusiveStartKey  = items.LastEvaluatedKey;
    }
    while(typeof items.LastEvaluatedKey !== "undefined");
    
    return { results: scanResults };
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

