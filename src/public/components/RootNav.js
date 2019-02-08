import {createStackNavigator, createAppContainer} from 'react-navigation';

import HomeScreen from '../../home/screens';
import MeScreen from '../../home/screens/Me';

const RootNav = createStackNavigator({
    Home: {
        screen: HomeScreen
    },
    Me: {
        screen: MeScreen
    }
},{
    initialRouteName: 'Home',
    headerMode: 'none'
})

export default createAppContainer(RootNav);