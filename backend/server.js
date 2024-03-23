//create express app
const exp=require('express')
const app=exp()
require('dotenv').config()//process.env.PORT
const mongoClient=require('mongodb').MongoClient
const path=require('path')

//deploy react build to this server
app.use(exp.static(path.join(__dirname,'../frontend/build')))

//to parse body of req
app.use(exp.json())

//connect to Database
mongoClient.connect(process.env.DB_URL).then(client=>{
    //get database object
    const traveldb=client.db('traveldb')
    //get collection object
    const userscollection=traveldb.collection('userscollection')
    const placescollection=traveldb.collection('placescollection')
    const tripscollection=traveldb.collection('tripscollection')
    //share collection with express app
    app.set('userscollection',userscollection)
    app.set('placescollection',placescollection)
    app.set('tripscollection',tripscollection)
    //confirm db connection
    console.log("DB connection success")
}).catch(err=>console.log("Error in DB",err))

//import API routes
const userApp=require('./user-api')


//if path starts with user-api send req to userApp
app.use('/user-api',userApp)


//deals with page refresh
app.use((req,res,next)=>{
   res.sendFile(path.join(__dirname,'../frontend/build/index.html'))
})
//express error handler
app.use((err,req,res,next)=>{
    res.send({message:"error",payload:err.message})
    console.log(err)
})

const port=process.env.PORT 
//assign port number
app.listen(port,()=>console.log(`Web server on port ${port}`))