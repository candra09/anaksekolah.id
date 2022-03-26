import React, { Component } from 'react';
import{
    View,
    Text,
    TouchableOpacity,
} from 'react-native'

class OnBoarding extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <View>
                <Text>OnBoarding</Text>
                
                <TouchableOpacity onPress={() => this.props.navigation.navigate('Home')}>
                    <Text>Back</Text>
                </TouchableOpacity>
            </View>
         );
    }
}
 
export default OnBoarding;