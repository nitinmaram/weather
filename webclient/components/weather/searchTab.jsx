import React from 'react';
import {Button} from 'semantic-ui-react'
import {Container} from 'semantic-ui-react'
import {Input} from 'semantic-ui-react'
import {Divider} from 'semantic-ui-react'

class searchTab extends React.Component {
    constructor() {
        super();
        this.state = {
            cusine: "",
            rcity: ""
        }
    }
    changecity(e)
    {
        this.setState({rcity: e.target.value});
    }

    searchWeather() {
        this.props.getWeatherFromQueryProp(this.state.rcity, this.state.cusine);
    }
    render() {
        return (
            <Container textAlign="center">
                <Input focus placeholder='Search City' ref="rcity"
                onChange={this.changecity.bind(this)}/>&nbsp;&nbsp;&nbsp;
                <Button primary onClick={this.searchWeather.bind(this)}>Search</Button>
                <Button primary onClick={this.props.getCurrentCoordinates.bind(this)}>Present Location Weather</Button>
                <Divider/>
            </Container>
        );
    }
}
// export default searchTab;
searchTab.propTypes = {
 handle: React.PropTypes.func,
 name: React.PropTypes.object
}
export default searchTab;
