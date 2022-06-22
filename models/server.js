const express = require('express');
const { createServer } = require('http');
const cors = require('cors');

class Server {
    constructor(){
        this.app = express()
        this.port= process.env.PORT;
        this.server = createServer(this.app);
        this.paths={
            users:'/api/users',             
         }
         //Connecting to Database
        //this.connectDB();

        //middlewares
        this.middlewares();

        //application routes
        this.routes();

    }

    middlewares(){
        
        //setting up cors
        this.app.use( cors() );

        //Parsing and reading the body

        this.app.use( express.json() );

        //public directory
        //this.app.use(express.static('public') )
    }

    routes(){
        this.app.use(this.paths.users,require('../routes/userRoutes'));
    }

    listening(){        
        this.server.listen(this.port);
        console.log(`running on port ${this.port}`)
    };

}

module.exports = Server;