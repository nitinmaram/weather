import React from 'react';
import ReactDOM from 'react-dom';
import Weather from './weather/';
import weatherCalls from '../interactors/services/weatherCalls.js'
var NavBar = require('./navbar/NavBar.jsx');

class MainComponent extends React.Component {
    constructor() {
        super();
        this.state = {
            jsonarray: [],
            lat: 0,
            lon: 0
        };
      }
      componentDidMount(){
        this.getCurrentCoordinates();
      }
      success(p){
      this.getWeatherByLoc(p.coords.latitude,p.coords.longitude);
      }
      options(){
               enableHighAccuracy: true
      }
      getCurrentCoordinates() {
        navigator.geolocation.getCurrentPosition(this.success.bind(this),this.options.bind(this));
      }
      getWeatherFromQuery(wcity)
      {
              var stateData = {
                'wcity': wcity
              }
              var successFunction = function(data) {
                console.log(data);
                this.setState({jsonarray: data});
              }.bind(this)
              var errorFunction = function(err) {
                  console.log('error occurred on AJAX');
                  console.log(err);
              }.bind(this)
          weatherCalls.getWeatherFromQuery(stateData, successFunction, errorFunction)

      }
      getWeatherByLoc(lat,lon)
      {
        this.setState({
          lat: lat,
          lon: lon
        });
              var stateData = {
                'lat': lat,
                'lon': lon
              }
              var successFunction = function(data) {
                console.log(data);
                this.setState({jsonarray: data});
              }.bind(this)
              var errorFunction = function(err) {
                  console.log('error occurred on AJAX');
                  console.log(err);
              }.bind(this)
              weatherCalls.getWeatherByLoc(stateData, successFunction, errorFunction)
      }

    render()
    {
      console.log(this.state);
        return (
            <div>
                <NavBar activeItem = 'home'/>
                <br/>
                <Weather.searchTab getWeatherFromQueryProp={this.getWeatherFromQuery.bind(this)} getCurrentCoordinates={this.getCurrentCoordinates.bind(this)}/>
                <h1 style = {{marginLeft: '5%', color: '#73c1d5'}}>{this.state.jsonarray['city'] ? this.state.jsonarray['city']['name']: ''} </h1>
                <Weather.cardMap weatherArrProp={this.state.jsonarray} lat={this.state.lat} lon={this.state.lon}/>
            </div>

        );
    }

}
module.exports = MainComponent;
