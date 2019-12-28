import React from 'react';
import {SignupScreen}  from 'simple-react-native';

onSignup = (email, password, confirmaPassword) => {
    // Call back method when signup button clicked.
}
export class Signup extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <SignupScreen
                textBorderRadius={30}
                backgroundColor={'blue'}
                inputTextColor={'black'}
                setBorder={true}
                buttonBorderRadius = {30}
                onSignup = {(email, password, confirmaPassword)=>onSignup(email, password, confirmaPassword)}
            />
        )
    }
}