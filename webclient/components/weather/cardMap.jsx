 import React from 'react';
import {Grid} from 'semantic-ui-react';
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
          jsarray=arr.map(function(objs){
            return (
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
            );
          });
        }

        return(
          <div>
            <Grid centered columns={5}>
            {jsarray}
          </Grid>
        </div>
        );
      }
}
DisplayComponent.propTypes = {
 name: React.PropTypes.object
}
module.exports=DisplayComponent;
