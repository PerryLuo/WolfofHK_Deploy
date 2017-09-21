var cyrptoData = require('./cyrptoData')
var MA = require('./SMA')

var fourHourMA = new MA(4)
var twentyFourHourMA = new MA(24)

var unixTime = 1500912000 // Tuesday 25th July 2017 12:00:00 AM

cyrptoData.callBTCdata(unixTime)
    .then(function(array){
        var MAdata = array.map(function(element){
            fourHourMA.update(element.ClosePrice)
            element.fourHourMAprice = fourHourMA.result
            twentyFourHourMA.update(element.ClosePrice)
            element.twentyFourHourMAprice = twentyFourHourMA.result
            return element
        })
        return MAdata
    })
    .then(function(MAdata){
       compareMAdata = MAdata.map(function(obj){
            if(obj.ClosePrice>obj.fourHourMAprice && obj.fourHourMAprice > obj.twentyFourHourMAprice){
                console.log('Time'+ obj.Time)
                console.log('Close Price '+ obj.ClosePrice)
                console.log('4hr ma '+ obj.fourHourMAprice)
                console.log('24hr ma '+ obj.twentyFourHourMAprice)
                console.log('buy now')
                // return 'Buy Now'
            }
        })
        return compareMAdata
    })
