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
    //function to place a new order in orderbook
    /*
    1. create new order {orderId,side, type, price?,orignqty,remainingqty,execQty,timeStamp,user}
    2. match type if type==market, call marketMatch, else call limit_match
    */
    placeOrder(side, type, price=null,quantity,user){
        /* Basic validation */
        let order= {
            orderId:this._genOrderId(),
            symbol: this.symbol,
            side:side,
            type:type,
            price:price,
            orignQty:quantity,
            remainQty:quantity,
            exectQty:0,
            timestamp:Date.now(),
            user:user
        }

        if(type==="MARKET"){
           let result= this._marketMatch(order);
           if(result.remainQty>0){
            console.log("order completed: "+ result.exectQty+ " "+ "cancel order: "+result.remainQty)
           }

        }else{
            this._limitMatch(order);
        }

    }
    //execute order if it is a market order
    /**
       bids : [] sorted desecending,
       asks: [] sorted ascendending
       1. type : buy | sell
       2. if buy start buying from asks array starting from index 0.
          loop while order.remainingQty>0 && asks.length>0
          buy min(order.remainingQty, asks[0].remainingQty)
          update remainingqty and executedqty from both side
          
     */

    _marketMatch(order){
        if(order.side=="BUY"){
            let asksArr= this.ask
           
            while(order.remainQty>0 && asksArr.length>0){
                let top= asksArr[0]
                let orderfill= Math.min(order.remainQty,top.remainQty);
                order.exectQty= order.exectQty+orderfill
                order.remainQty= order.remainQty-orderfill

                top.exectQty= top.exectQty+orderfill
                top.remainQty= top.remainQty-orderfill

                // assume order.remaining > 0
                if(top.remainQty==0){
                    asksArr.shift()
                }

            }
            return order
        }



    }
    //execute order if it a limit order

    _limitMatch(order){
        if(order.side==="BUY"){
            let opposite= this.ask;
            while(order.remainQty>0 && opposite.length>0){
                let top = opposite[0];
                if(order.price>= top.price){
                    let filledOrder= Math.min(order.remainQty,top.remainQty);
                    order.remainQty-= filledOrder;
                    order.exectQty+=filledOrder;


                    top.remainQty-=filledOrder;
                    top.exectQty+=filledOrder;
                    if(top.remainQty<=0){
                        opposite.shift();
                    }

                }

            }
            if(order.remainQty>0){
                this.bids.push(order)
                this._sort("BUY");
            }
        

        }else{
            let opposite= this.bids;
            while(order.remainQty>0 && opposite.length>0){
                let top = opposite[0];
                if(order.price<= top.price){
                    let filledOrder= Math.min(order.remainQty,top.remainQty);
                    order.remainQty-= filledOrder;
                    order.exectQty+=filledOrder;

                    top.remainQty-=filledOrder;
                    top.exectQty+=filledOrder;
                    if(top.remainQty<=0){
                        opposite.shift();
                    }

                }else{
                    break;
                }

            }
            if(order.remainQty>0){
                this.ask.push(order)
                this._sort("SELL");
            }

        }

    }

    getBookSnapShot(){
        return{
            lastUpdated:Date.now(),
            bids: this.bids.map((o)=>[o.price,o.remainQty]) ,
            ask:this.ask.map((o)=>[o.price,o.remainQty]) ,
            // currentPrice:
        }
    }
}

//if a function or variable start with _ (private)
//let orderBook= new OrderBook("BTCUSD")
let BTCUSDOrderBook= new OrderBook()
// fill bids as market maker

console.log(BTCUSDOrderBook.getBookSnapShot())
BTCUSDOrderBook.placeOrder("BUY","LIMIT","1506.00",10,"Nitesh")
BTCUSDOrderBook.placeOrder("BUY","LIMIT","1505.00",20,"Ritik")
BTCUSDOrderBook.placeOrder("BUY","LIMIT","1500.00",10,"Nitesh")
console.log(BTCUSDOrderBook.getBookSnapShot());





//fill ask as market maket
BTCUSDOrderBook.placeOrder("SELL","LIMIT","1507.00",10,"Nitesh")
BTCUSDOrderBook.placeOrder("SELL","LIMIT","1508.00",10,"Ritik")
BTCUSDOrderBook.placeOrder("SELL","LIMIT","1509.00",10,"Nitesh")
console.log(BTCUSDOrderBook.getBookSnapShot())






// BTCUSDOrderBook._sort("BUY")
// console.log(BTCUSDOrderBook.getBookSnapShot());

// console.log(BTCUSDOrderBook.getBookSnapShot());