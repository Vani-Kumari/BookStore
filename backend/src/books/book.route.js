const express = require('express');
const Book = require('./book.model');
const { postABook, getAllBooks, getSingleBook, UpdateBook, deleteABook } = require('./book.controller');
const router =  express.Router();

router.post("/create-book", async(req,res)=>{
    try {
        const newBook= await Book({...req.body});
        await newBook.save();
        res.status(200).send({message: "Book Saved Succesfully", book: newBook});
    } catch (error) {
        console.error("Error in creating book",error);
        res.status(500).send({message: "Failed to create book", error});
    }
})

router.get("/", getAllBooks);
router.get("/:id", getSingleBook);
router.put("/edit/:id", UpdateBook);
router.delete("/:id",  deleteABook)


module.exports = router;