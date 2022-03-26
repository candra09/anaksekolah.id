import React, { Component } from 'react';
import{
    View,
    Text,
    TouchableOpacity,
    Image,
    Button
} from 'react-native'

class Register extends Component {
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
                        source={require('../images/register.png')}
                        style={{
                            width: 270, 
                            height: 220, 
                            marginTop: 20,
                            marginHorizontal: 40,
                            // justifyContent: 'center', 
                            // alignItems: 'center'
                            }}
                        resizeMode='cover'
                    />
                </View>
                <View style={{flex: 0.6, backgroundColor: 'white'}}>
                    <Text style={{
                            paddingTop:25,
                            fontSize: 30, 
                            color: '#000000', 
                            textAlign: 'center',
                            }}>
                        Segera Bergabung Dan Nikmati Fitur Yang Melimpah Dan Gratis
                    </Text>
                    <Text style={{
                            paddingVertical: 20,
                            fontSize: 16, 
                            color: '#000000', 
                            textAlign: 'center',
                            }}>
                        Belum punya akun?
                        <Text style={{color: '#F1871A'}}>Silahkan Daftar</Text> 
                    </Text>

                    <TouchableOpacity 
                        onPress={() => this.props.navigation.navigate('SignUp')}
                        style={{
                        backgroundColor:'#194660', 
                        // paddingVertical: 15 ,
                        width: 227,
                        height: 35,
                        marginVertical:5,
                        // margin: 20,
                        marginHorizontal: 60,
                        justifyContent: 'center',
                        alignItems:'center',
                        borderRadius: 6,
                        elevation: 3
                    }}
                        >
                        <Text style={{color: '#FFFFFF', fontSize: 18}}>
                            Daftar
                        </Text>
                        
                    </TouchableOpacity>
                    
                    <Text style={{
                            paddingVertical: 20,
                            fontSize: 16, 
                            color: '#000000', 
                            textAlign: 'center',
                            }}>
                        Atau sudah punya akun? 
                        <Text style={{color: '#F1871A'}}>Silahkan Masuk</Text>
                    </Text>

                    <TouchableOpacity 
                        onPress={() => this.props.navigation.navigate('SignIn')}
                        style={{
                        // backgroundColor:'#194660', 
                        // paddingVertical: 15 ,
                        borderWidth: 1,
                        borderColor: '#194660',
                        width: 227,
                        height: 35,
                        marginVertical:5,
                        // margin: 20,
                        marginHorizontal: 60,
                        justifyContent: 'center',
                        alignItems:'center',
                        borderRadius: 6,
                        elevation: 2,
                    }}
                        >
                        <Text style={{color: '#000000', fontSize: 18}}>
                            Masuk
                        </Text>
                        
                    </TouchableOpacity>
                    
                    {/* <View style={{flexDirection: 'row', justifyContent: 'flex-end'}} >
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
                    </View> */}

                    {/* <View style={{flexDirection: 'row', justifyContent: 'flex-end'}} >
                        <Button onPress={() => this.props.navigation.navigate('OnBoarding2')}>
                            <Text
                                style={{
                                marginRight: 50,
                                fontSize: 14,
                                color: '#000000',
                                justifyContent: 'center',
                                alignItems:'center',}}
                                > Lanjut
                            </Text>
                        </Button>
                        <Button onPress={() => this.props.navigation.navigate('OnBoarding2')}title = 'Lanjut2'/>
                    </View> */}

                </View>
            </View>

         );
    }
}
 
export default Register;