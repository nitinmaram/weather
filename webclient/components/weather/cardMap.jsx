 import React from 'react';
import {Grid,Segment} from 'semantic-ui-react';
var geolib = require('geolib');
import Cards from './weatherCard.jsx'

class DisplayComponent extends React.Component {
    constructor() {
        super();
      }
      render()
      {
        let lat=this.props.lat
        let lon=this.props.lon
        let jsarray
        if(this.props.weatherArrProp.list)
        {
          let arr = this.props.weatherArrProp.list
          var dum = arr[0].dt_txt.split(' ')[0]
          var jsobj = {}
          jsobj[dum] =[]
          arr.forEach(function(objs){
            if(dum == objs.dt_txt.split(' ')[0])
            {
              jsobj[objs.dt_txt.split(' ')[0]].push(objs)
          }
            else{
              jsobj[objs.dt_txt.split(' ')[0]] = []
              jsobj[objs.dt_txt.split(' ')[0]].push(objs)
              dum = objs.dt_txt.split(' ')[0]
              }
          });
          jsarray= Object.keys(jsobj).map((dat,i)=>{
            var a = jsobj[dat].map(objs=>{
              return(
                  <Cards className="card"
                  id={objs.dt_txt}
                  time = {objs.dt_txt}
                  weatherDescp = {objs.weather[0].description}
                  wind = {objs.wind}
                  maxTemp = {objs.main.temp_max}
                  minTemp = {objs.main.temp_min}
                  temp = {objs.main.temp}
                  humidity = {objs.main.humidity}
                  pressure = {objs.main.pressure}
                  />
              )
            })
            console.log(a);
            return(
              <Segment style = {{width: '90%', margin: 'auto',marginBottom:'20px'}}>
              <h3>{(i == 0) ? 'Today' : (i == 1) ? 'Tomorrow' : dat} </h3>
              <Grid centered>
                {a}
              </Grid>
            </Segment>)
          })
          console.log(jsobj);
        }


        return(
          <div>

          {jsarray}
        </div>
        );
      }
}
DisplayComponent.propTypes = {
 name: React.PropTypes.object
}
module.exports=DisplayComponent;
