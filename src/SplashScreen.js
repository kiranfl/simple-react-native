import React, { Component } from 'react';
import PropTypes from "prop-types";
import { View, Text, Image } from 'react-native';

export default class SplashScreen extends Component {
    constructor(props) {
        super(props)
        setTimeout(
            ()=>this.props.navigateToNext(), this.props.timeOut);
    }
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: this.props.backgroundColor, justifyContent: 'center', alignItems: 'center' }}>
                {this.props.logoAlignment === 'above' ? <View>
                    {this.props.logo && <Image source={this.props.logo}
                        style={{ resizeMode: 'contain', width: 150, height: 150 }} />}
                    <Text style={{ marginTop: 10, fontSize: 30, fontWeight: '800', color: this.props.textColor, textAlign: 'center' }}>{this.props.text}</Text>
                </View> :
                <View>
                    <Text style={{ fontSize: 30, fontWeight: '800', color: this.props.textColor, textAlign: 'center' }}>{this.props.text}</Text>
                    {this.props.logo &&
                    <Image source={this.props.logo}
                        style={{ resizeMode: 'contain', width: 150, height: 150, marginTop: 10 }} />}
                </View>
                }
                <Text style={{ position:'absolute', bottom:10, fontSize:14, color:this.props.textColor}}>{this.props.versionText}</Text>
            </View>
        );
    }
}

SplashScreen.defaultProps = {
    backgroundColor: '#FFFFFF',  // Default color is white.
    logo: null,
    logoAlignment: 'above', // Vertical alignment of the logo. Either above the text or below the text.
    textColor: 'black',
    text: "Hello World",
    timeOut: 3000 // Default time out is 3 seconds
};

SplashScreen.propTypes = {
    backgroundColor: PropTypes.string,
    logo: PropTypes.number,
    logoAlignment: PropTypes.string,
    textColor: PropTypes.string,
    text: PropTypes.string,
    navigateToNext: PropTypes.func,
    timeOut: PropTypes.number,
    versionText: PropTypes.string
};