import React,{Component} from 'react';
import {Text, View} from 'react-native';
import { Container, Content,
    Button, Body, Right, List,
    ListItem, Thumbnail, Left, Icon
} from 'native-base';
import {connect} from 'react-redux';

import Header from '../components/Header';
import {addAllOrders} from '../../public/redux/actions/orders';

class index extends Component{

    componentDidMount(){
        this.props.dispatch(addAllOrders())
     }

 render(){
     return(
         <Container>
             <Header/>
             <Content>
            <List>
            {this.props.getOrders.orders.map((item, key)=>
                <ListItem>
                    <Left>
                    <Thumbnail square source={{ uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png' }} />
                    </Left>
                    <Body>
                    <Text>{item.Product.name}</Text>
                    <Text note numberOfLines={1}>Harga: {item.price}</Text>
                    </Body>
                    <Right>
                    <Button transparent>
                    <Icon name='' type='Ionicons' style={{color: 'red'}}/>
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
