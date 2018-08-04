import React from 'react'
import {Button} from 'semantic-ui-react'
import { Card, Icon, Image, Input, Container} from 'semantic-ui-react'
import 'react-toastify/dist/ReactToastify.css';

class RestaurantCard extends React.Component {
    constructor() {
        super();
        this.state={

        }
      }

      render()
      {
        return(
  <Card style = {{height: 'auto'}}>
  <Card.Content>
    <Card.Header className="head">{this.props.time}</Card.Header>
    <Card.Meta className="cus">Desc : {this.props.weatherDescp}</Card.Meta>
    <Card.Description className="desc" as = 'h3'>
    Min Temp : {this.props.minTemp} k <br/>
    Avg Temp : {this.props.temp} k <br/>
    Max Temp : {this.props.maxTemp} k
    </Card.Description>
    <br/>
  </Card.Content>
  <Card.Content extra>
    Humidity :  {this.props.humidity} %
    <div className="commentText">
    </div>
  </Card.Content>
  </Card>
        )
      }
    }
    RestaurantCard.propTypes = {
      id: React.PropTypes.object,
      name: React.PropTypes.object,
}
module.exports=RestaurantCard;
