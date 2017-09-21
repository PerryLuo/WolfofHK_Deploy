#!/usr/local/bin/node
const axios = require('axios')

var unixTime = 1500912000 // Tuesday 25th July 2017 12:00:00 AM

function callBTCdata(unixTime){
    return new Promise (function(resolve, reject){
        axios.get('https://crypto-data-collection.appspot.com/data?date='+unixTime)
        .then(function(response){
            var BTCprices = response.data[0]
            var BTCprices_cleanData = BTCprices.map(function(obj){
                                        return {
                                                Time:obj.time,
                                                ClosePrice:obj.close
                                                }
            })
            resolve(BTCprices_cleanData)
        })
        .catch(function(error){
            reject(error)
        })

    })
}

// callBTCData(unixTime)

module.exports.callBTCdata=callBTCdata