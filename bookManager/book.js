const connectDb=require('./db');

const { ObjectId}=require('mongodb');


async function addBook(book){
    const books= await connectDb();
    const result = await books.insertOne(book);
    console.log(`Books added is ${result}`)
}

async function listBooks(){
    const books=await connectDb();
    const allBooks=await find().toArray();
    console.log(`All books ${allBooks}`);
}


async function updateBooks(id, update){
    const books=await connectDb();
    const result= await books.updateOne(
    { _id: new ObjectId(id)},
    {$set: updates }
    );

    console.log(`Updated: ${result.modifiedCount}`)
}

async function deleteBook(id){
    const books=await connectDb();
    const result=await books.deleteOne(
        { _id: new ObjectId(id)},
    )
    console.log(`Deleted: ${result.deletedCount}`);
}

module.exports={addBook, listBooks, updateBooks, deleteBook}