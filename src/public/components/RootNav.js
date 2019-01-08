import {createStackNavigator, createAppContainer} from 'react-navigation';

import HomeScreen from '../../home/screens';
import CartScreen from '../../cart/screen';

const RootNav = createStackNavigator({
    Home: {
        screen: HomeScreen
    },
    Cart: {
        screen: CartScreen
    }
},{
    initialRouteName: 'Home',
    headerMode: 'none'
})

export default createAppContainer(RootNav);