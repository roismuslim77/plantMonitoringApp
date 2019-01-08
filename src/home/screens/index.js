import React,{Component} from 'react';
import { Text, Image, View, URL } from 'react-native';
import { Container, Content,
    Button, Body, Right, List,
    ListItem, Thumbnail, Left, Icon
} from 'native-base';
import {connect} from 'react-redux';
import axios from 'axios';

import Header from '../components/Header';
import {addAllProducts} from '../../public/redux/actions/product';

class index extends Component{

 componentDidMount(){
    this.props.dispatch(addAllProducts())
    // axios.get('http://192.168.1.108:3333/products')
    // .then(res=>{
    // })
 }

 render(){
     return(
        <Container>
            <Header/>
            <Content>
            <List>
            {this.props.getProducts.products.map((item, key)=>
                <ListItem>
                    <Left style={{width: 2}}>
                    <Thumbnail square source={{ uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png' }} />
                    </Left>
                    <Body>
                    <Text>{item.name}</Text>
                    <Text note numberOfLines={1}>Harga: {item.price}</Text>
                    </Body>
                    <Right>
                    <Button transparent>
                    <Icon name='add' type='Ionicons' style={{color: 'red'}}/>
                    </Button>
                    </Right>
                </ListItem>
            )}
            </List>
            </Content>
        </Container>
     )
 }
}
const mapStateToProps=(state)=>{
    return state
}

export default connect(mapStateToProps)(index);
