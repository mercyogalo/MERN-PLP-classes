const express=require('express');
const router= express.Router();
const Book=require('../models/Book');


router.post('/', async (req, res)=>{
    try{
        const book=new Book(req.body);
        await book.save();
        res.status(201).send(book);
    }
    catch(error){
        res.status(400).send(error);
    }
});


module.exports=router;
