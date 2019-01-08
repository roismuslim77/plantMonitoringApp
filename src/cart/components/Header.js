import React,{Component} from 'react';
import {Icon, Header as Headers, Body, Left, Button} from 'native-base';
import {Text} from 'react-native';
import {withNavigation} from 'react-navigation';

class Header extends Component{
    handleIconClick(){
        this.props.navigation.goBack()
    }
    render(){
        return(
            <Headers style={{backgroundColor: '#ff1111'}}>
                <Left>
                    <Button transparent onPress={()=>this.handleIconClick()}>
                    <Icon type='Ionicons' name='arrow-back' style={{color: 'white'}}/>
                    <Text style={{marginLeft: '10%', color: 'white', fontSize: 20}}>Cart</Text>
                    </Button>
                </Left>
                <Body/>
                <Left/>
            </Headers>
        )
    }
}

export default withNavigation(Header);
