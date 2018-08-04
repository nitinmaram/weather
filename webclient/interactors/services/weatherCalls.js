
module.exports = {
  getWeatherFromQuery:function(data,successFunction, errorFunction){
    $.ajax({
        url: 'https://samples.openweathermap.org/data/2.5/forecast?q='+data.wcity+'&appid=b6907d289e10d714a6e88b30761fae22',
        type: 'get',
        success:successFunction ,
        error: errorFunction
    })
  },
  getWeatherByLoc:function(data,successFunction, errorFunction){
    $.ajax({
        url: 'https://samples.openweathermap.org/data/2.5/forecast?lat='+data.lat+'&lon='+data.lon+'&appid=b6907d289e10d714a6e88b30761fae22',
        type: 'get',
        data:data,
        success:successFunction ,
        error: errorFunction
    })
  }
}
