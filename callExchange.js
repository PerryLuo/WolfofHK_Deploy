const bittrex = require('node.bittrex.api');
const axios = require('axios')
const password = require('./password.json')

function getWallet(apikey, apisecret, callback){
    bittrex.options({
        'apikey' : apikey,
        'apisecret' : apisecret, 
      });
    bittrex.getbalances( function( data, err ) {
        if (err) {
            callback(err)
        }
        else if (data.success){
            console.log("result is")
            console.log(data);
            callback(data)
        }
      });
} 

function buyLimit(buyOrderInfo){
    var buyTradePair = buyOrderInfo.tradePair
    var buyQuantity = buyOrderInfo.quantity
    var buyPrice = buyOrderInfo.priceLimit

    return axios.get('https://bittrex.com/api/v1.1/market/buylimit?apikey='+password.apikey+'&market='+buyTradePair+'&quantity='+buyQuantity+'&rate='+buyPrice)
} 

function sellLimit(sellOrderInfo){
    var sellTradePair = sellOrderInfo.tradePair
    var sellQuantity = sellOrderInfo.quantity
    var sellPrice = sellOrderInfo.priceLimit

   return axios.get('https://bittrex.com/api/v1.1/market/selllimit?apikey='+password.apikey+'&market='+sellTradePair+'&quantity='+sellQuantity+'&rate='+sellPrice)
} 

// module.exports.getMarketSummary=getMarketSummary
module.exports.getWallet=getWallet
module.exports.buyLimit=buyLimit
module.exports.sellLimit=sellLimit