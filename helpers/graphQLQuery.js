const axios = require('axios');

exports.graphQLQuery = (query, variables) =>
    axios({
        url: 'https://7k5bupdyrvhf3ne73icvdeoxgy.appsync-api.us-east-1.amazonaws.com/graphql',
        method: "post",
        headers: {
            "Content-Type": "application/json",
            "x-api-key": 'da2-rpa27sus3jfgfoidbouhgtipeu',
        },
        data: {
            query, variables
        },
    });
