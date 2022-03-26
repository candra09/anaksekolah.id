import React, { Component } from 'react';

import{
    View,
    Text,
    TouchableOpacity,
    Image,
    Button,
    TextInput,
    CheckBox
} from 'react-native'

// const [isSelected, setSelection] = Component(false);

class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            username: '',
            
         };
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
                        source={require('../images/signup.png')}
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
                            paddingTop:5,
                            fontSize: 30, 
                            color: '#000000', 
                            textAlign: 'center',
                            }}>
                        Selamat Datang!
                    </Text>
                    <Text style={{
                            // paddingVertical: 5,
                            fontSize: 16, 
                            color: '#000000', 
                            textAlign: 'center',
                            }}>
                        Gunakan Alamat Email Untuk Mendaftar
                        
                    </Text>
                    <Text style={{
                            marginTop: 10,
                            marginLeft: 30,
                            fontSize: 10, 
                            color: '#404040', 
                            }}>
                        Alamat Email
                    </Text>
                    <TextInput
                        value={this.state.username}
                        style={{
                             // borderBottomWidth: 1,
                            // borderTopWidth: 1,
                            width: 296,
                            height: 35,
                            borderWidth: 1,
                            borderColor: '#404040',
                            marginVertical: 5,
                            marginHorizontal: 30,
                            borderRadius: 6,
                            // backgroundColor: 'crimson',
                            // color: '#ffffff'
                        }}
                        //menambah props onchange untuk mangambil texk nya
                        onChangeText={(value) => this.setState({username: value})}
                    />
                    <Text style={{
                            marginLeft: 30,
                            fontSize: 10, 
                            color: '#404040', 
                            }}>
                        Password
                    </Text>
                    <TextInput
                        value={this.state.username}
                        style={{
                             // borderBottomWidth: 1,
                            // borderTopWidth: 1,
                            width: 296,
                            height: 35,
                            borderWidth: 1,
                            borderColor: '#404040',
                            marginVertical: 5,
                            marginHorizontal: 30,
                            borderRadius: 6,
                            // backgroundColor: 'crimson',
                            // color: '#ffffff'
                        }}
                        //menambah props onchange untuk mangambil texk nya
                        onChangeText={(value) => this.setState({username: value})}
                    />
                     {/* <CheckBox
                            // value={ }
                            // onValueChange={setSelection}
                            style={{alignSelf: "center",}}
                        /> */}
                    <View style={{margin: 5,flexDirection: 'row', justifyContent: 'space-around'}}  >
                        <TouchableOpacity
                        // onPress={() => this.props.navigation.navigate()}
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
                                >Ingat Saya
                            </Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                        // onPress={() => this.props.navigation.navigate('OnBoarding5')}
                        style={{
                            
                            marginLeft: 30,
                            justifyContent: 'center',
                            alignItems:'flex-start',
                        }}>
                            <Text
                                style={{
                                // marginRight: 10,
                                fontSize: 14,
                                color: '#F1871A',
                                }}
                                >Lupa Password?
                            </Text>
                        </TouchableOpacity>
                    </View>

                    <TouchableOpacity 
                        onPress={() => this.props.navigation.navigate('Home')}
                        style={{
                        backgroundColor:'#194660', 
                        // paddingVertical: 15 ,
                        width: 296,
                        height: 35,
                        marginVertical:5,
                        // margin: 20,
                        marginHorizontal: 30,
                        justifyContent: 'center',
                        alignItems:'center',
                        borderRadius: 6,
                        elevation: 3
                    }}
                        >
                        <Text style={{color: '#FFFFFF', fontSize: 20}}>
                            Daftar
                        </Text>
                        
                    </TouchableOpacity>
                    
                    <Text style={{
                            paddingVertical: 5,
                            fontSize: 16, 
                            color: '#000000', 
                            textAlign: 'center',
                            }}>
                        Atau Daftar Dengan Google 
                        
                    </Text>

                    <TouchableOpacity 
                        onPress={() => this.props.navigation.navigate('Home')}
                        style={{
                        backgroundColor:'red', 
                        // paddingVertical: 15 ,
                        // borderWidth: 1,
                        // borderColor: '#194660',
                        width: 296,
                        height: 35,
                        marginVertical:5,
                        marginTop: 10,
                        // margin: 20,
                        marginHorizontal: 30,
                        justifyContent: 'center',
                        alignItems:'center',
                        borderRadius: 6,
                        elevation: 2,
                    }}
                        >
                        <Text style={{color: '#FFFFFF', fontSize: 20}}>
                            Google
                        </Text>
                        
                    </TouchableOpacity>
                    <Text style={{
                            paddingVertical: 5,
                            fontSize: 10, 
                            color: '#000000', 
                            textAlign: 'center',
                            }}>
                        Dengan Mendaftar, anda menerima persyaratan kami dan Ketentuan, Kebijakan Privasi
                        
                    </Text>

                    
                    
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
 
export default SignUp;