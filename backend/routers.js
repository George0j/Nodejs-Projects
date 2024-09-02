const express=require('express');
const router=express.Router();
const Book=require('./Book');
//books
exports.getBooks= async (req,res)=>{
    const books = await Book.find();
    res.json(books);
};
//add new book
exports.addBook= async (req,res)=>{
    const book=new book({
        title:req.body.title,
        author:req.body.author,
        available:true,
    });

    const newBook=await book.save();
    res.json(newBook);
}
//delete book
exports.deleteBook=async (req,res)=>{
    const book=await book.findById(req.params.id);
    await book.remove();
    res.json({message:"book deleted "});
}
//issue a book 
exports.IssueBook=async(req,res)=>{
    const book = await Book.findById(req.params.id);
    await book.save();
    res.json(book);
}
//return a book
exports.returnBook=async(req,res)=>{
    const book=await Book.findById(req.params.id);
    book.available=true;await book.save();res.json(book);
};

//routers
router.get('/',this.deleteBook);
router.post('/',this.addBook);
router.delete('/id:',this.deleteBook);
router.patch('/issue/:id',this.IssueBook);
router.patch('/return/id:',this.returnBook);

//export routes
module.exports=router;