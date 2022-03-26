import React, { Component } from 'react';
import { StackActions } from '@react-navigation/routers';
import IMAGE from '../images/splashscreen.png';

import{
    View,
    Text,
    TouchableOpacity,
    Image,
    Dimensions,

} from 'react-native'


const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;


class SplashScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount(){
        setTimeout(() => {
            this.props.navigation.dispatch(StackActions.replace('OnBoarding1'));
        }, 5000);
    }

    render() { 
        return ( 
            <View>
                <Image
                    source={IMAGE}
                    style={{
                        width: width,
                        height: height,}}
                />
                
            </View>
         );
    }
}
 
export default SplashScreen;