//router.js
const axios = require('axios');
const bittrex = require('./callExchange')


module.exports = (express) => {

    const router = express.Router();

    router.get('/callExchangeInfo', (req, res) => {
        // bittrex.getMarketSummary(function(data){
        //     res.send(data.result)
        // })

        bittrex.getWallet(function(walletInfo){
            res.send(walletInfo)
        })
    })

    router.post('/sendExchangeTradeBuy', (req, res) => {
        bittrex.buyLimit(req.body)
          .then(function(result){
              console.log(result)
              res.send(result.data)
          })  
          .catch(function(error){
              console.log(error)
              res.send(
                {
                "message":'System Error - Contact Admin'
                }
            )
          })
    })

    router.post('/sendExchangeTradeSell', (req, res) => {
        bittrex.sellLimit(req.body)
          .then(function(result){
            res.send(result.data)
          })  
          .catch(function(error){
            console.log(error)
            res.send(
                {
                "message":'System Error - Contact Admin'
                }
            )
        })
    })

return router;

}  


