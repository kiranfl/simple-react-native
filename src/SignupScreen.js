import React from 'react';
import PropTypes from "prop-types";
import {
    Text,
    View,
    TextInput,
    TouchableOpacity
} from 'react-native';

let email = ''
let password = ''
let confirmPassword = '';

export default class SignupScreen extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={{
                flex: 1,
                justifyContent:'center',
                alignItems: 'center',
                backgroundColor: this.props.backgroundColor
            }}>
                {this.props.setBorder && <View style={{ width: 250, height: 150, marginBottom:70, alignItems: 'center' }}>
                    <TextInput style={{
                        padding:10,
                        borderColor: this.props.textBorderColor,
                        borderWidth: this.props.textBorderWidth,
                        borderRadius: this.props.textBorderRadius,
                        backgroundColor: this.props.textBackgroundColor,
                        color: this.props.inputTextColor,
                        width: 300, height: 50
                    }}
                        placeholderTextColor={this.props.inputTextColor}
                        placeholder={this.props.textEmailPlaceholder}
                        keyboardType="email-address"
                        onChangeText={(email1) => email = email1} />
                    <TextInput style={{
                        padding:10,
                        marginTop: 20, width: 300, height: 50, borderColor: this.props.textBorderColor,
                        borderWidth: this.props.textBorderWidth,
                        color: this.props.inputTextColor,
                        borderRadius: this.props.textBorderRadius, backgroundColor: this.props.textBackgroundColor
                    }}
                        placeholder={'Password'}
                        placeholderTextColor={this.props.inputTextColor}
                        secureTextEntry={true}
                        onChangeText={(password1) => password = password1} />
                    <TextInput style={{
                        padding:10,
                        marginTop: 20, width: 300, height: 50, borderColor: this.props.textBorderColor,
                        borderWidth: this.props.textBorderWidth,
                        color: this.props.inputTextColor,
                        borderRadius: this.props.textBorderRadius, backgroundColor: this.props.textBackgroundColor
                    }}
                        placeholder={'Confirm password'}
                        placeholderTextColor={this.props.inputTextColor}
                        secureTextEntry={true}
                        onChangeText={(confirmPassword1) => confirmPassword = confirmPassword1} />
                </View>}
                {!this.props.setBorder && <View style={{ width: 250, height: 150, marginBottom:70, alignItems: 'center' }}>
                    <TextInput style={{
                        padding:10,
                        borderBottomColor: this.props.textBorderColor,
                        borderBottomWidth: this.props.textBorderWidth,
                        color: this.props.inputTextColor,
                        width: 300, height: 50
                    }}
                        placeholder={this.props.textEmailPlaceholder}
                        placeholderTextColor={this.props.inputTextColor}
                        keyboardType="email-address"
                        onChangeText={(email1) => email = email1} />
                    <TextInput style={{
                        padding:10,
                        marginTop: 20, width: 300, height: 50, borderBottomColor: this.props.textBorderColor,
                        borderBottomWidth: this.props.textBorderWidth,
                        color: this.props.inputTextColor
                    }}
                        placeholder={'Password'}
                        placeholderTextColor={this.props.inputTextColor}
                        secureTextEntry={true}
                        onChangeText={(password1) => password = password1} />
                    <TextInput style={{
                        padding:10,
                        marginTop: 20, width: 300, height: 50, borderBottomColor: this.props.textBorderColor,
                        borderBottomWidth: this.props.textBorderWidth,
                        color: this.props.inputTextColor
                    }}
                        placeholder={'Confirm password'}
                        placeholderTextColor={this.props.inputTextColor}
                        secureTextEntry={true}
                        onChangeText={(confirmPassword1) => confirmPassword = confirmPassword1} />
                </View>}

                {<TouchableOpacity style={{
                    height: 45,
                    marginTop: 20,
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: 300,
                    borderRadius: this.props.buttonBorderRadius,
                    backgroundColor: this.props.buttonBackgroundColor
                }} onPress={() => {
                    this.props.onSignup(email, password, confirmPassword);
                }
                }>
                    <Text style={{ color: this.props.buttonTextColor }}>{this.props.signupText}</Text>
                </TouchableOpacity>}
            </View>
        );
    }
}

SignupScreen.defaultProps = {
    backgroundColor: '#DCDCDC',
    setBorder: false,
    textBorderColor: 'white',
    textBorderWidth: 1,
    textBorderRadius: 1,
    textBackgroundColor: 'white',
    textEmailPlaceholder: 'Email',
    buttonBorderRadius: 1,
    buttonBackgroundColor: '#00b5ec',
    signupText: 'Signup',
    inputTextColor: 'black',
    buttonTextColor: 'white'
};

SignupScreen.propTypes = {
    backgroundColor: PropTypes.string,
    setBorder: PropTypes.bool,
    textBorderColor: PropTypes.string,
    textBorderWidth: PropTypes.number,
    textBorderRadius: PropTypes.number,
    textBackgroundColor: PropTypes.string,
    textEmailPlaceholder: PropTypes.string,
    buttonBorderRadius: PropTypes.number,
    buttonBackgroundColor: PropTypes.string,
    signupText: PropTypes.string,
    inputTextColor: PropTypes.string,
    buttonTextColor: PropTypes.string,
    onSignup: PropTypes.func
};
