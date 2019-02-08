import React,{Component} from 'react';
import {Icon, Header as Headers, Right, Left, Button} from 'native-base';
import {Text} from 'react-native';
import {withNavigation} from 'react-navigation';

class Header extends Component{
    render(){
        return(
            <Headers style={{backgroundColor: 'green', height: '24%'}}>
                <Left/>
                <Right>
                    <Text style={{marginRight: '3%', color: 'white', fontWeight: 'bold'}}>About Me</Text>
                </Right>
            </Headers>
        )
    }
}

export default withNavigation(Header);