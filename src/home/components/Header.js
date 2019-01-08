import React,{Component} from 'react';
import {Icon, Header as Headers, Right, Left, Button} from 'native-base';
import {Text} from 'react-native';
import {withNavigation} from 'react-navigation';

class Header extends Component{
    handleIconClick(){
        this.props.navigation.navigate('Cart')
    }
    render(){
        return(
            <Headers style={{backgroundColor: '#ff1111'}}>
                <Left>
                    <Text style={{marginRight: '3%', color: 'white', fontWeight: 'bold'}}>Bukavalak</Text></Left>
                <Right>
                    <Button onPress={()=>this.handleIconClick()} transparent>
                    <Icon style={{marginRight: '2%', color: 'white'}} type='Ionicons' name='cart'/>
                    </Button></Right>
            </Headers>
        )
    }
}

export default withNavigation(Header);
