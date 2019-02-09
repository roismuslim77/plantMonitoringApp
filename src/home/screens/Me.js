import React, {Component} from 'react';
import {View, Text, Image, ImageBackground, StyleSheet} from 'react-native';

import Header from '../components/Header';
import { Content, Container } from 'native-base';

export default class Me extends Component{
    render(){
        return(
        <ImageBackground style={styles.imgBackground} 
            source={{uri: 'https://www.redwallpapers.com/public/redwallpapers-large-thumb/grayscale-photography-of-leafed-plant-free-stock-photo-image-wallpaper.jpeg'}}>       
                <View style={styles.content}>
                    <Image style={styles.logo}
                    source={{uri: 'https://upload.wikimedia.org/wikipedia/id/2/28/Politeknik_Harapan_Bersama.png'}}/>
                    <Text style={{fontWeight: 'bold', color: 'white', marginTop: '3%'}}>Plant Monitoring Aplication System v2.1</Text>
                    <Text style={{marginTop: '3%', color: 'white'}}>Created by: </Text>
                    <View style={{alignItems: 'center', marginTop: '3%'}}>
                        <Text style={styles.textStyle}>Muhammad Rois Muslim (15040287)</Text>
                        <Text style={styles.textStyle}>Hasanudin Latief (15040197)</Text>
                        <Text style={styles.textStyle}>Lutfi Amalia (15040046)</Text>
                    </View>
                </View>
                <View style={styles.footer}>
                    <Text style={styles.textStyle}>thanks God</Text>
                    <Text style={styles.textStyle}>Copyright idMustopha @2019</Text>
                </View>
        </ImageBackground>
        )
    }
}

const styles = StyleSheet.create({
    textStyle:{
        color: 'white'
    }, 
    imgBackground:{
        width: '100%',
        height:'100%'
    }, 
    content:{
        flex: 6,
        alignItems: 'center',
        justifyContent: 'center'
    },
    footer:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-end'
    },
    logo:{
        width: 100, 
        height: 100, 
        marginTop: '2%',
    }
})