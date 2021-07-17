const express = require('express');
const expressApp = express();
const initLoader = require('./loaders/index')
const port = process.env.port || 3000;

startServer = async() => {
    try {
        const app = await initLoader({expressApp})
        app.listen(port, (err) => {
            if(err){
                console.log(err);
                process.exit(1);
            }
            console.log('Start web host.')
        });
    } 
    catch (error) {
        console.log(error);
        process.exit(1);
    }
}

startServer();