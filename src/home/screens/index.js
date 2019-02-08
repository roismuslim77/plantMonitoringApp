import React,{Component} from 'react';
import { Text, Image, View, URL, StyleSheet, ImageBackground, TouchableOpacity, } from 'react-native';
import { Container, Content,
    Button, Body, Right, List,
    ListItem, Thumbnail, Left, Icon
} from 'native-base';
import {connect} from 'react-redux';
import axios from 'axios';

import {addAllValue} from '../../public/redux/actions/addValue';
import value from '../../public/redux/reducer/value';

class index extends Component{
 buttonPressed(){
    this.props.navigation.navigate('Me')
 }   

 componentDidMount(){
    //this. props.dispatch(addAllProducts())
    // axios.get('http://192.168.1.108:3333/products')
    // .then(res=>{
    // })
    //alert(JSON.stringify(this.props.getValues.value))
 }
 componentWillMount(){
    try{
        this.props.dispatch(addAllValue())
    }
    catch(err){
        alert(err)
    } 
 }

 render(){
    return(
        <ImageBackground style={{width: '100%', height: '100%'}} 
        source={{uri: 'https://www.redwallpapers.com/public/redwallpapers-large-thumb/grayscale-photography-of-leafed-plant-free-stock-photo-image-wallpaper.jpeg'}}>
            <View style={styles.container}>
               <Image
                style={{width: 120, height: 100}}
                source={{uri: 'http://4.bp.blogspot.com/-oekltgVK8lk/VhCkefHoytI/AAAAAAAADZ0/VTDOvL_A5IU/s1600-r/favicon%2Bfile.png'}}
                />
                <Text style={{fontWeight: 'bold', fontSize: 25, paddingTop: '2%', color: 'white'}}>Plant Monitor System</Text>
            </View>
            <Content style={styles.content}>
                <View style={styles.wrapper}>
                    <View style={styles.itemwrapper}>
                        <Image 
                        style={{height: 40, width: 40, zIndex: 1, tintColor: 'skyblue'}}
                        source={{uri: 'https://cdn.iconscout.com/icon/premium/png-256-thumb/moisture-3-601467.png'}}/>
                        <View style={{marginLeft: '3%',backgroundColor: 'white', borderColor: 'black', borderWidth: 2,
                            width: '100%', height: 40, flexDirection: 'row'}}>
                            <View style={{backgroundColor: 'skyblue',height: '100%', justifyContent: 'center', width: this.props.getValues.soil+'%', position: 'absolute'}}>
                            </View>
                            <Text style={{color: 'black', fontWeight: 'bold', fontSize: 20, paddingLeft: '5%', paddingTop: '1.5%', flex: 3.5}}>Moisture</Text>
                            <Text style={{color: 'black', fontWeight: 'bold', fontSize: 20, paddingLeft: '5%', paddingTop: '1.5%', flex: 1}}>{this.props.getValues.soil+'%'}</Text>
                        </View>
                    </View>
                    <View style={styles.itemwrapper}>
                        <Image 
                        style={{height: 40, width: 40, zIndex: 1, tintColor: 'green'}}
                        source={{uri: 'https://cdn2.iconfinder.com/data/icons/game-center-mixed-icons/512/temperature.png'}}/>
                        <View style={{marginLeft: '3%',backgroundColor: 'white', borderColor: 'black', borderWidth: 2,
                            width: '100%', height: 40, flexDirection: 'row'}}>
                            <View style={{backgroundColor: 'green',height: '100%', justifyContent: 'center', width: this.props.getValues.temp+'%', position: 'absolute'}}>
                            </View>
                            <Text style={{color: 'black', fontWeight: 'bold', fontSize: 20, paddingLeft: '5%', paddingTop: '1.5%', flex: 3.5}}>Temperature</Text>
                            <Text style={{color: 'black', fontWeight: 'bold', fontSize: 20, paddingLeft: '5%', paddingTop: '1.5%', flex: 1}}>{this.props.getValues.temp+'*C'}</Text>
                        </View>
                    </View>
                    <View style={styles.itemwrapper}>
                        <Image 
                        style={{height: 40, width: 40, zIndex: 1, tintColor: 'skyblue'}}
                        source={{uri: 'https://cdn4.iconfinder.com/data/icons/warning-caution-filled-line/2048/5569_-_Rain-512.png'}}/>
                        <View style={{marginLeft: '3%',backgroundColor: 'white', borderColor: 'black', borderWidth: 2,
                            width: '100%', height: 40, flexDirection: 'row'}}>
                            <View style={{backgroundColor: 'blue',height: '100%', justifyContent: 'center', width: '77%', position: 'absolute'}}>
                            </View>
                            <Text style={{color: 'black', fontWeight: 'bold', fontSize: 20, paddingLeft: '5%', paddingTop: '1.5%', flex: 3.5}}>RainFall</Text>
                            <Text style={{color: 'black', fontWeight: 'bold', fontSize: 20, paddingLeft: '5%', paddingTop: '1.5%', flex: 1}}>77 Pa</Text>
                        </View>
                    </View>
                </View>
                <View style={{alignItems: 'center'}}>
                    <TouchableOpacity onPress={()=>this.buttonPressed()}>
                        <Text style={{color: 'white', fontWeight: 'bold'}}>ABOUT ME</Text>
                    </TouchableOpacity>
                </View>
            </Content>
        </ImageBackground>
     )
 }
}
const mapStateToProps=(state)=>{
    return state
}   

export default connect(mapStateToProps)(index);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(0,0,0,0.7)'
    },
    content: {
        flex: 3,
        backgroundColor: 'rgba(0,0,0,0.7)'
    },
    wrapper: {
        alignItems: 'center',
        marginLeft: '15%', marginRight: '15%',
        borderRadius: 10,
    },
    itemwrapper: {
        alignItems: 'center',
        flexDirection: 'row',
        paddingTop: '1%', paddingBottom: '1%',
        marginBottom: '5%'
    },
})
