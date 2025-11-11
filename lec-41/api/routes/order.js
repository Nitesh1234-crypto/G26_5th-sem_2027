const router= require("express").Router();
const {postPlaceOrder,getOrderbook,getRecentTrades} = require("../constroller/order")
router.post("/order",postPlaceOrder)
router.get("/depth",getOrderbook)
router.get("/trades",getRecentTrades)
module.exports=router