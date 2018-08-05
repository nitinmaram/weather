import React, {Component} from 'react'
import {Input, Menu, Segment, Button, Header, Icon, Image} from 'semantic-ui-react'
let {hashHistory, Link} = require('react-router');

class MenuExamplePointing extends Component {

  constructor(props){
    super(props);
    this.state = {
    }
  }
   render() {
       return (
           <div>
               <Menu stackable>
                <Menu.Item style = {{margin: 'auto'}}>
                  <Image src = {require('./weathernews_1200x900-1508770629-6259.jpg')} size = 'small' circular/>
                </Menu.Item>
               </Menu>
           </div>
       )
   }
}
module.exports = MenuExamplePointing;
