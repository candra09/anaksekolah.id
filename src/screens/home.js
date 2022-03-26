import React, { Component } from 'react';
import{
    View,
    Text,
    TouchableOpacity,
    Image
} from 'react-native'

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
        <View style={{justifyContent:'center', alignItems: 'center'}}>
            <Text>Home</Text>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('OnBoarding1')}>
                <Text>
                    Back To OnBoarding
                </Text>
                
            </TouchableOpacity>
        </View>

         );
    }
}
 
export default Home;