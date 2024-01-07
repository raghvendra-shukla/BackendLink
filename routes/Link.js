const express=require("express");
const router = express.Router();
const Cart=require('../models/Link');
const { body, validationResult } = require('express-validator');
const middleware = require("../middelware/middleware");

router.post("/addLink",[
  body("Link").isLength({min:2}),
  body("ShortLink"),
],middleware,async(req,res)=>{
  const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
  try{
    const {Link,ShortLink}=req.body;
    const book=new Cart({
      Link,ShortLink,user:req.user.id
    });
    const saveData=await book.save();
    res.json(saveData);
  }catch(error){
    console.error(error.message);
    res.status(500).send("Some error occured");
  }
});



module.exports=router