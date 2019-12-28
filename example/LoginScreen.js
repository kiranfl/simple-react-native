import React from 'react';
import { LoginScreen }  from 'simple-react-native';

const images = {
    logo: require("./assets/android_logo.png")
}
export class Login extends React.Component {
    constructor(props) {
        super(props);
    }

    onLoginClick = (email, password) => {
        // Call back method when login button click. 
    }
    onSignupButtonClick = () => {
        // Call back method when signup button click. 
        // Usually from here we can navigate to Signup screen
    }
    onForgotpasswordClick = (email) => {
        // Call back method when forgot password clicked
    }
    render() {
        return (
            <LoginScreen
                logo={images.logo}
                ref={(c) => this._login = c}
                onLoginClicked={(email, password) => this.onLoginClick(email, password)}
                onSignupClicked={() => this.onSignupClick()}
                onForgotpasswordClicked={(email) => this.onForgotpasswordClick(email)}
            />
        );
    }
}