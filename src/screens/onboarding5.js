import React, { Component } from 'react';
import{
    View,
    Text,
    TouchableOpacity,
    Image,
    Button,
} from 'react-native'

class OnBoarding5 extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <View style={{flex: 1, backgroundColor: 'white'}} >
                <View style={{flex: 0.5, backgroundColor: '#3EAFEF'}}>
                    {/* <Text>Home</Text>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('OnBoarding')}>
                        <Text>
                            Move To OnBoarding
                        </Text>
                    </TouchableOpacity> */}
                    <Image
                        source={require('../images/onboarding5.png')}
                        style={{
                            width: 300, 
                            height: 260, 
                            marginTop: 20,
                            marginHorizontal: 30,
                            // justifyContent: 'center', 
                            // alignItems: 'center'
                            }}
                        resizeMode='cover'
                    />
                </View>
                <View style={{flex: 0.6, backgroundColor: 'white'}}>
                    <Text style={{
                            paddingTop:35,
                            fontSize: 34, 
                            color: '#000000', 
                            textAlign: 'center',
                            }}>
                        Materi Belajar Gratis Tak Terbatas
                    </Text>
                    <Text style={{
                            paddingVertical: 20,
                            fontSize: 18, 
                            color: '#000000', 
                            textAlign: 'center',
                            }}>
                        Seluruh materi pembelajaran disajikan secara gratis & berkualitas 
                    </Text>

                    <TouchableOpacity style={{
                        backgroundColor:'#194660', 
                        // paddingVertical: 15 ,
                        width: 195,
                        height: 40,
                        marginVertical:20,
                        // margin: 20,
                        marginHorizontal: 80,
                        justifyContent: 'center',
                        alignItems:'center',
                        borderRadius: 16,
                        elevation: 3
                    }}
                        onPress={() => this.props.navigation.navigate('Register')}>
                        <Text style={{color: '#FFFFFF', fontSize: 20}}>
                            Mulai
                        </Text>
                        
                    </TouchableOpacity>
                    

                    <TouchableOpacity onPress={() => this.props.navigation.navigate('OnBoarding4')}>
                        <Text
                            style={{
                            margin: 15,
                            marginLeft: 40,
                            fontSize: 14,
                            color: '#000000',
                            justifyContent: 'center',
                            alignItems:'flex-start',}}
                            >Kembali
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>

         );
    }
}
 
export default OnBoarding5;