import {createStackNavigator, createAppContainer} from 'react-navigation';

import HomeScreen from '../../home/screens';
import MeScreen from '../../home/screens/Me';
import SplashScreen from '../../home/screens/Splash';


const RootNav = createStackNavigator({
    Home: {
        screen: HomeScreen
    },
    Me: {
        screen: MeScreen
    },
    Splash:{
        screen: SplashScreen
    }
},{
    initialRouteName: 'Splash',
    headerMode: 'none'
})

export default createAppContainer(RootNav);