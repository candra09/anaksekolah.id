import React, { Component } from 'react';
import{
    View,
    Text,
    TouchableOpacity,
    Image,
    Button
} from 'react-native'

class OnBoarding2 extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() { 
        return ( 
            <View style={{flex: 1, backgroundColor: 'white'}} >
                <View style={{flex: 0.4, backgroundColor: '#3EAFEF'}}>
                    {/* <Text>Home</Text>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('OnBoarding')}>
                        <Text>
                            Move To OnBoarding
                        </Text>
                    </TouchableOpacity> */}
                    <Image
                        source={require('../images/onboarding1.png')}
                        style={{
                            width: 350, 
                            height: 200, 
                            marginTop: 30,
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

                    <TouchableOpacity 
                        onPress={() => this.props.navigation.navigate('Register')}
                        style={{
                        backgroundColor:'#194660', 
                        // paddingVertical: 15 ,
                        width: 195,
                        height: 40,
                        marginVertical:30,
                        // margin: 20,
                        marginHorizontal: 80,
                        justifyContent: 'center',
                        alignItems:'center',
                        borderRadius: 16,
                        elevation: 3
                    }}
                        >
                        <Text style={{color: '#FFFFFF', fontSize: 20}}>
                            Mulai
                        </Text>
                        
                    </TouchableOpacity>
                    
                    <View style={{flexDirection: 'row', justifyContent: 'flex-end'}} >
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('OnBoarding2')}>
                        <Text
                            style={{
                            marginRight: 50,
                            fontSize: 14,
                            color: '#000000',
                            justifyContent: 'center',
                            alignItems:'center',}}
                            > Lanjut
                        </Text>
                    </TouchableOpacity>
                    </View>

                    <View style={{flexDirection: 'row', justifyContent: 'flex-end'}} >
                        {/* <Button onPress={() => this.props.navigation.navigate('OnBoarding2')}>
                            <Text
                                style={{
                                marginRight: 50,
                                fontSize: 14,
                                color: '#000000',
                                justifyContent: 'center',
                                alignItems:'center',}}
                                > Lanjut
                            </Text>
                        </Button> */}
                        {/* <Button onPress={() => this.props.navigation.navigate('OnBoarding2')}title = 'Lanjut2'/> */}
                    </View>

                </View>
            </View>

         );
    }
}
 
export default OnBoarding2;