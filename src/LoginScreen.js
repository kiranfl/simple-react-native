import React from 'react';
import PropTypes from "prop-types";
import {
    Text,
    View,
    TextInput,
    TouchableOpacity,
    Image
} from 'react-native';

let email = ''
let password = ''

export default class LoginScreen extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={{ flex: 1,
                alignItems: 'center',
                backgroundColor: this.props.backgroundColor}}> 
                {this.props.logo && <Image source={this.props.logo} style={{ marginTop: 30, marginBottom: 50, width: 150, height: 150, resizeMode: 'contain' }} />}
                {this.props.setBorder && <View style={{ width: 250, height: 150, alignItems: 'center' }}>
                    <TextInput style={{
                        borderColor: this.props.textBorderColor,
                        borderWidth: this.props.textBorderWidth,
                        borderRadius: this.props.textBorderRadius,
                        backgroundColor: this.props.textBackgroundColor,
                        color: this.props.inputTextColor,
                        width: 300, height: 50
                    }}
                        placeholder= {this.props.textEmailPlaceholder}
                        keyboardType="email-address"
                        onChangeText={(email1) => email = email1} />
                    <TextInput style={{
                        marginTop: 20, width: 300, height: 50, borderColor: this.props.textBorderColor,
                        borderWidth: this.props.textBorderWidth,
                        color: this.props.inputTextColor,
                        borderRadius: this.props.textBorderRadius, backgroundColor: this.props.textBackgroundColor
                    }}
                        placeholder= {this.props.textPasswordPlaceholder}
                        secureTextEntry={true}
                        onChangeText={(password1) => password = password1} />
                </View>}
                {!this.props.setBorder && <View style={{ width: 250, height: 150, alignItems: 'center' }}>
                    <TextInput style={{
                        borderBottomColor: this.props.textBorderColor,
                        borderBottomWidth: this.props.textBorderWidth,
                        color: this.props.inputTextColor,
                        width: 300, height: 50
                    }}
                        placeholder= {this.props.textEmailPlaceholder}
                        keyboardType="email-address"
                        onChangeText={(email1) => email = email1} />
                    <TextInput style={{
                        marginTop: 20, width: 300, height: 50, borderBottomColor: this.props.textBorderColor,
                        borderBottomWidth: this.props.textBorderWidth,
                        color: this.props.inputTextColor
                    }}
                        placeholder= {this.props.textPasswordPlaceholder}
                        secureTextEntry={true}
                        onChangeText={(password1) => password = password1} />
                </View>}
                
                {this.props.setBorder && <TouchableOpacity style={{
                    height: 45,
                    marginTop: 20,
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: 300,
                    borderRadius: this.props.buttonBorderRadius,
                    backgroundColor: this.props.buttonBackgroundColor
                }} onPress={() =>
                {
                    this.props.onLoginClicked(email, password);
                }
                   }>
                    <Text style={{ color: this.props.buttonTextColor }}>{this.props.loginText}</Text>
                </TouchableOpacity>}

                {!this.props.setBorder && <TouchableOpacity style={{
                    height: 45,
                    marginTop: 30,
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: 300
                }} onPress={() =>
                    {
                    this.props.onLoginClicked(email, password);
                    }
                    }>
                    <Text style={{ color: this.props.loginTextColor, textDecorationLine:'underline', fontSize:18, fontWeight:'bold' }}>{this.props.loginText}</Text>
                </TouchableOpacity>}

                {this.props.setBorder && <View style={{ marginTop: 20, marginBottom: 10, alignItems: 'center' }} >
                    <TouchableOpacity style={{height: 45,
                             justifyContent: 'center',
                             alignItems: 'center',
                             width: 300,
                             borderRadius: this.props.buttonBorderRadius,
                             backgroundColor: this.props.buttonBackgroundColor}} onPress={() => this.props.onSignupClicked()}>
                        <Text style={{color: this.props.buttonTextColor}}>{this.props.signupText}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.props.onForgotpasswordClicked(email)}>
                        <Text style={{ marginTop:30, color: this.props.forgotPasswordTextColor, textDecorationLine: 'underline' }}>Forgot your password?</Text>
                    </TouchableOpacity>
                </View>}

                {!this.props.setBorder && <View style={{ marginTop: 50, marginBottom: 10, alignItems: 'center' }} >
                    <TouchableOpacity onPress={() => this.props.onForgotpasswordClicked(email)}>
                        <Text style={{ color: this.props.forgotPasswordTextColor, textDecorationLine: 'underline' }}>Forgot your password?</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ marginTop: 20, flexDirection: 'row' }} onPress={() => this.props.onSignupClicked()}>
                        <Text style={{ color: this.props.signupTextColor, fontWeight: 'bold' }}>Don't have an account? </Text>
                        <Text style={{ color: this.props.signupTextColor, textDecorationLine: 'underline', fontWeight: 'bold' }}>{this.props.signupText}</Text>
                    </TouchableOpacity>
                </View>}
            </View>
        );
    }
}

LoginScreen.defaultProps = {
    backgroundColor: '#DCDCDC',
    logo: null,
    setBorder: false,
    textBorderColor: 'white',
    textBorderWidth: 1,
    textBorderRadius: 1,
    textBackgroundColor: 'white',
    textEmailPlaceholder: 'Email',
    textPasswordPlaceholder: 'Password',
    buttonBorderRadius: 1,
    buttonBackgroundColor: '#00b5ec',
    loginTextColor: '#00b5ec',
    loginText: 'Login',
    signupText: 'Signup',
    inputTextColor: 'black',
    forgotPasswordTextColor: 'grey',
    signupTextColor: 'grey',
    buttonTextColor:'white'
};

LoginScreen.propTypes = {
    backgroundColor: PropTypes.string,
    logo: PropTypes.number,
    setBorder: PropTypes.bool,
    textBorderColor: PropTypes.string,
    textBorderWidth: PropTypes.number,
    textBorderRadius: PropTypes.number,
    textBackgroundColor: PropTypes.string,
    textEmailPlaceholder: PropTypes.string,
    textPasswordPlaceholder: PropTypes.string,
    buttonBackgroundColor: PropTypes.string,
    loginTextColor: PropTypes.string,
    loginText: PropTypes.string,
    inputTextColor: PropTypes.string,
    onLoginClicked: PropTypes.func,
    onSignupClicked: PropTypes.func,
    onForgotpasswordClicked: PropTypes.func,
    buttonBorderRadius: PropTypes.number,
    forgotPasswordTextColor: PropTypes.string,
    signupTextColor: PropTypes.string,
    buttonTextColor: PropTypes.string
};
