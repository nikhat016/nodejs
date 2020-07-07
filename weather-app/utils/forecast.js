const request=require('request')
const forecast=(latitude,longitude, callback)=>{
    const url = 'http://api.weatherapi.com/v1/forecast.json?key=0e17fa58998549608fb103245200707&q='+latitude+','+longitude+'&days=1'
    request({ url,json:true }, (error,{body}) => {
        if(error){
            callback('Unable to connect to weather services',undefined)
        }
        else if(body.error){
            callback('Unable to find location',undefined)
        }
        else{
       callback(undefined,body.current.condition.text + ' The temperature is '+ body.current.temp_c)}
    })
}
module.exports=forecast