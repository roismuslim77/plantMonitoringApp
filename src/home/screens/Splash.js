import React, {Component} from 'react';
import {View, Text, ImageBackground, StyleSheet, Image} from 'react-native';

export default class Splash extends Component{
    render(){
        return(
            <ImageBackground style={{width: '100%', height: '100%'}} 
            source={{uri: 'https://www.redwallpapers.com/public/redwallpapers-large-thumb/grayscale-photography-of-leafed-plant-free-stock-photo-image-wallpaper.jpeg'}}>
                <View style={styles.container}>
                   <Image
                    style={{width: 120, height: 100}}
                    source={{uri: 'http://4.bp.blogspot.com/-oekltgVK8lk/VhCkefHoytI/AAAAAAAADZ0/VTDOvL_A5IU/s1600-r/favicon%2Bfile.png'}}
                    />
                </View>
            </ImageBackground>
        )
    }
    componentDidMount(){
        setTimeout(()=>{
            this.props.navigation.navigate('Home')
        }, 1000)
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(0,0,0,0.7)'
    }
})