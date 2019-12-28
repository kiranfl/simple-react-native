import React from 'react';
import { SplashScreen } from 'simple-react-native';
const images = {
    logo: require("./assets/android_logo.png")
}

const navigateToNext = (props) => {
    props.navigation.navigate('Signup')
}
export class Splash extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <SplashScreen style={{ flex: 1}}
                logo={images.logo}
                backgroundColor='blue'
                textColor='white'
                logoAlignment='above'
                navigateToNext={() => navigateToNext(this.props)}
                versionText='Version 1.0.0'
            />
        );
    }
}