import React from 'react'
import {Button} from 'semantic-ui-react'
import { Card, Icon, Image, Input, Container} from 'semantic-ui-react'

class WeatherCard extends React.Component {
    constructor() {
        super();
        this.state={

        }
      }
      render()
      {
        return(

  <Card style = {{height: 'auto', boxShadow: '3px 3px #2185d0, 6px 6px #ffd40c'}}>
  <Card.Content>
    <Card.Header style ={{color: '#2185d0'}}>{this.props.time.split(' ')[1]}</Card.Header><br/>
    <Card.Meta style = {{fontSize: '25px'}}>{this.props.weatherDescp}</Card.Meta>
    <Card.Description className="desc" as = 'h3' style = {{color: '#ffd40c'}}>
    Temperature : {this.props.temp} k <br/>
    </Card.Description>
  </Card.Content>
  <Card.Content extra style = {{color: '#2185d0'}}>
  Min Temp : {this.props.minTemp} k <br/>
  Max Temp : {this.props.maxTemp} k <br/>
    Humidity :  {this.props.humidity} %
    <div className="commentText">
    </div>
  </Card.Content>
  </Card>
        )
      }
    }
    WeatherCard.propTypes = {
      id: React.PropTypes.object,
      name: React.PropTypes.object,
}
module.exports=WeatherCard;
