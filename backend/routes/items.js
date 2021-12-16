const express = require('express');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const Item = require("../models/Item")
const User = require("../models/User")
const fetchUser = require("../middleware/fetchUser")

router.post('/fetchItems',  async (req, res) => {
    try {
        const cartItems = await Item.find({})
        res.json(cartItems)
    } catch (error) {
        console.log(error)
        res.status(500).send("Internal Server Error")
    }   
})

router.post('/getDetail/:id',  async (req, res) => {
    try {
        const cartItems = await Item.findById(req.params.id)
        res.json(cartItems)
    } catch (error) {
        console.log(error)
        res.status(500).send("Internal Server Error")
    }   
})

router.post("/itemLike/:id",fetchUser, async (req,res)=>{
    try {

    } catch (error) {
        
    }
})


                                    
router.post("/createItem", async (req,res) => {
    try {                                
        const {title,description,price} = req.body
        const item = Item({
            title, description,price
        })
        const savedItem = await item.save()
        res.json(savedItem)

    } catch (error) {
              
    }
})

router.post('/fetchcartitems', fetchUser, async (req, res) => {
    try {
        const cartItems = await User.findById(req.user.id).populate("cart.item").select("cart -_id ")
        
        res.json(cartItems)
    } catch (error) {
        console.log(error)
        res.status(500).send("Internal Server Error")
    }   
})

router.post("/addToCart", fetchUser, async (req,res) => {
    try {
        const {ItemId} = req.body   
        const ItemCart = await User.findById(req.user.id).find({cart:{item:ItemId}})
        if (ItemCart.length != 0) return res.send({error:"Already Added"})
        const response = await User.findByIdAndUpdate(
            req.user.id,
            { $push: { cart:{item:ItemId} }} , 
            { new: true, useFindAndModify: false }
          );
        
        res.send(response)
    } catch (error) {
        res.send(error)   
    }
})

router.post("/cartItemNo",fetchUser, async (req,res)=> {
    try {
        const {ItemId,val} = req.body

        let itemNo = await User.findOne({_id:req.user.id,"cart.item":ItemId}).select("cart.no.$ -_id")
        if (itemNo.cart[0].no == 1 && val==-1) return res.send({error:"Can't be decreased"})
        await User.findOneAndUpdate({_id:req.user.id,"cart.item":ItemId},{$inc : {'cart.$.no' : val}})
        let cartItems = await User.findById(req.user.id).populate("cart.item").select("cart -_id ")
        res.send(cartItems)
    }
    catch (error){
        console.log(error)
        res.status(500).send(error)
    }
})

router.post("/removeItem", fetchUser, async (req, res ) => {
    try {
        
        const {ItemId} = req.body
        await User.findByIdAndUpdate(req.user.id,{$pull:{cart:{item:ItemId}}})
        const items = await User.findById(req.user.id).populate("cart.item").select("cart -_id ")
        
        res.send(items)
    } catch (error) {
        res.send(error)   
    }
    })


router.post("/emptyCart",fetchUser, async (req,res) => {
    try{
        const items = await User.findByIdAndUpdate(req.user.id,{"$set":{cart:[]}}).select("-password")
        res.send(items)
    }
    catch (error){
        res.send(error)
    }
})

module.exports = router
