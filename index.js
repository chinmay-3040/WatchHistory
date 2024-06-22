import express from 'express'
import path from 'path'

const app = express();
const port = 4002;


// importing model,schema and mongoDB file
import Series from './models/Series.js';
import mongoDB from './db.js';
import { name } from 'ejs';
mongoDB();


// Middleware to parse JSON bodies
app.use(express.json());  //make req.body int json object accsible(check on postman)
app.use(express.urlencoded({extended:true})); // for encoded req.body (cookies)
app.use(express.static('public')); //dont put slash before public

app.set('view engine' , 'ejs');



//CRUD operations:::>

app.get('/', (req,res)=>{
    res.render("index"); 
})

app.get('/read', async (req, res) => {   
    let allseries  = await Series.find();
    res.render('read', {allseries: allseries}); //sending props
});

app.post('/create', async (req, res) => {  
    let {name,imageurl,seasons,category} = req.body;

    const newseries = await Series.create({
        name:name,
        imageUrl:imageurl,
        seasons:seasons,
        category:category
    });
    res.redirect('/read');
});


app.get('/read', async (req, res) => {   
    let allseries  = await Series.find();
    res.render('read', {allseries: allseries}); //sending props
});



app.get('/delete/:id', async (req, res) => {  
    let allseries  = await Series.findOneAndDelete({_id:req.params.id});
    res.redirect('/read');
});


app.get('/update/:id', async (req, res) => {  
    let thisSeries  = await Series.findOne({_id:req.params.id});
    res.render('update', {series:thisSeries});
});


app.post('/update/:id', async (req, res) => {  
    let {name,imageurl,seasons,category} = req.body;

    let myuser = await Series.findOneAndUpdate({_id:req.params.id},
        {
            name:name,
            imageUrl:imageurl,
            seasons:seasons,
            category:category
        }, 
        {new:true});

    res.redirect('/read');
});


// model.findOne --> returns the first object that matches or null...
// model.find --> returns the array that matches or empty array...




app.listen(port,()=>{
    console.log(`Server started at http://localhost:${port}`)
})