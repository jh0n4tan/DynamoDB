const AWS = require('aws-sdk');

AWS.config.update({
    region: process.env.AWS_DEFAULT_REGION,
    accessKeyId:process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey:process.env.AWS_SECRET_ACCESS_KEY,
});

const dynamoClient = new AWS.DynamoDB.DocumentClient();
const TABLE_NAME = 'TestingDynamo';

module.exports = {
    dynamoClient,
    TABLE_NAME
}