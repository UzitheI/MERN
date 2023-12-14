const express = require('express')
//extracting the express functionalities from the nodemodules

require('dotenv').config()
//this is a node feature where we can require the dot env to hide our port number

const app = express();
//express app created and stored to app

const workoutRoutes=require('./routes/workouts')


//another middleware to get the data that has to be sent, for that we use express.json 
app.use(express.json())



app.use((req,res,next)=>{
    console.log(req.path,req.method)
    next()
})
//this is called a middelware which we want to run before running the response which can also be called as teh middleware
//basically this is logging the path and the port which can be useful to us later




//now we have to listen to the request
app.listen(process.env.PORT,()=>{
    console.log("listening on port",process.env.PORT)
})
//listening is where we want to take our requests in
//rerun the server to change any changes
//an alternative to keep refreshing your server is to download nodemon
//use npm install nodemon with global to make the changes(already done)

//with .env
//we used process.env.PORT to obtain port number that is currently hidden in the .env file
//we used process.env.PORT to obtain port number that is currently hidden in the .env file



app.use('/api/workouts',workoutRoutes)
//we do not need to write our requests here any more as they will be imported from the routes folder, also the routes or the requests are only invoked if the workoutRoutes pass throught the api and workouts



//now to react with requests we create a route
app.get('/',(req,res)=>{
    res.json({mssg:'Welcome to the app'});
})
//here req is the request that is being sent and res is the response, whenever we get a request from the port 4000 that is siginified by / , we respond it to it by giving a json string which here is Welcome to the app


//another important thing is port number is a sensitive information and we cannot disclose it when we are pushing it in repositories, so we can store it in git ignore files to keep it hidden, so we create a .env file




