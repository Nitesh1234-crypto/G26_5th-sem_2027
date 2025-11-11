class OrderBook{
    constructor(symbol="BTCUSD"){
        this.symbol=symbol
        this.bids=[],
        this.ask=[],
        this._nextId=1,
        this.lastTradedPrice=null

    }
    //helper
    _genOrderId(){
        return this._nextId++;
    }
    _sort(sides){
        if(sides==="BUY"){
            this.bids.sort((a,b)=>{
                if(a.price!=b.price){
                    return b.price-a.price
                }
                return a.timestamp-b.timestamp;
            })
        }else{

        }

    }
    //public function
    placeOrder(){
        

    }
    _marketMatch(){

    }
    _limitMatch(){

    }
}

//if a function or variable start with _ (private)
//let orderBook= new OrderBook("BTCUSD")
let BTCUSDOrderBook= new OrderBook()

BTCUSDOrderBook.bids.push({orderId:2,side:"BUY",type:"MARKET",price:100,quantity:10,timestamp:Date.now(),user:"Nitesh"})

BTCUSDOrderBook.bids.push({orderId:2,side:"BUY",type:"MARKET",price:98,quantity:10,timestamp:Date.now(),user:"Ritik"})

BTCUSDOrderBook.bids.push({orderId:2,side:"BUY",type:"MARKET",price:99,quantity:10,timestamp:Date.now(),user:"veer"})
BTCUSDOrderBook._sort("BUY")
console.log(BTCUSDOrderBook.bids);