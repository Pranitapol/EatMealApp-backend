const express=require('express');
const app=express();
const bodyParser=require('body-parser')
const mongoose=require('mongoose');
const cors= require('cors')
mongoose.connect("mongodb://Myuser:user123@cluster0-shard-00-00.my37m.mongodb.net:27017,cluster0-shard-00-01.my37m.mongodb.net:27017,cluster0-shard-00-02.my37m.mongodb.net:27017/?ssl=true&replicaSet=atlas-3sis3z-shard-0&authSource=admin&retryWrites=true&w=majority",
{
    useNewUrlParser:true,
    useUnifiedTopology: true
}).then(()=>{console.log('server is running...')})
.catch(function(error){
    console.log(`Unable to connect to the Mongo db  ${error} `);
});

const db=mongoose.connection
db.on('error',(error)=>{
   console.error(error);
})
db.once('open',()=>{console.log('connected to database');})

app.use(bodyParser.urlencoded({ extended:true }));
app.use(express.json()); //middleware
app.use(cors())
const mealrouter=require('./routes/foodRoute') 
const orderRouter=require('./routes/mealOrder') //middleware

app.use('/meals',mealrouter)
app.use('/orders',orderRouter)
app.listen(5000,()=>{console.log('listening to port 5000')})