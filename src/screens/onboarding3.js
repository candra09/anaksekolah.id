import React, { Component } from 'react';
import{
    View,
    Text,
    TouchableOpacity,
    Image
} from 'react-native'

class OnBoarding3 extends Component {
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
                        source={require('../images/onboarding3.png')}
                        style={{
                            width: 320, 
                            height: 260, 
                            marginTop: 20,
                            marginHorizontal: 15,
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
                    

                    <View style={{margin: 15,flexDirection: 'row', justifyContent: 'space-around'}}  >
                        <TouchableOpacity
                        onPress={() => this.props.navigation.navigate('OnBoarding2')}
                        style={{
                            marginRight: 30,
                            justifyContent: 'center',
                            alignItems:'flex-end',
                        }}>
                            <Text
                                style={{
                                // marginRight: 10,
                                fontSize: 14,
                                color: '#000000',
                                }}
                                >Kembali
                            </Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                        onPress={() => this.props.navigation.navigate('OnBoarding4')}
                        style={{
                            
                            marginLeft: 30,
                            justifyContent: 'center',
                            alignItems:'flex-start',
                        }}>
                            <Text
                                style={{
                                // marginRight: 10,
                                fontSize: 14,
                                color: '#000000',
                                }}
                                >Lanjut
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>

         );
    }
}
 
export default OnBoarding3;