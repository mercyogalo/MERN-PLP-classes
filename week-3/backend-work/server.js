const express=require("express");
const mongoose=require("mongoose");
const cors=require("cors");
const bookRoutes=require('./routes/bookRoutes');

const PORT='4000';
const app=express()
const MONGO_URI='mongodb://localhost:27017/bookdb';

app.use(cors());
app.use(express.json());
app.use('/books', bookRoutes);


mongoose.connect(MONGO_URI,{
    useNewUrlParser:true,
    useUnifiedTopology:true
}
).then(() =>console.log('Mongo db connected'))
.catch(err => console.log(`${err}`));


app.listen(PORT, ()=>{
    console.log(`Running on port ${PORT}`)
})