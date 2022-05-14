module.exports = {
    aws_table_name: 'Listing-Purchasers',
    aws_local_config: {
        accessKeyId: process.env.AWS_ACCESS_KEY,
        secretAccessKey: process.env.AWS_SECRET_KEY,
        region: 'us-east-1',
    },
    aws_remote_config: {
        accessKeyId: process.env.AWS_ACCESS_KEY,
        secretAccessKey: process.env.AWS_SECRET_KEY,
        region: 'us-east-1',
    }
};