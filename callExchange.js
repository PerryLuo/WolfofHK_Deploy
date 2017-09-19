const bittrex = require('node.bittrex.api');
const axios = require('axios')
const password = require('./password.json')

bittrex.options({
  'apikey' : password.apikey,
  'apisecret' : password.apisecret, 
});

// function getMarketSummary(callback){
//     bittrex.getmarketsummaries( function( data, err ) {
//         if (err) {
//             return console.error(err);
//         }
    
//         callback(data)
    
//         for( var i in data.result ) {
//             bittrex.getticker( { market : data.result[i].MarketName }, function( ticker ) {
//             // console.log('this')
//             //     console.log(ticker);
//             });
//         }
//     });
// }

function getWallet(callback){
    bittrex.getbalances( function( data, err ) {
        if (err) {
            return console.log(err)
        }
        console.log( data.result );
        callback(data.result)
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