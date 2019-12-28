import { createStackNavigator } from 'react-navigation-stack';
import { Splash } from './SplashScreen';
import { Login } from './LoginScreen';
import { Signup } from './Signup';

const AppNavigator = createStackNavigator({
    Splash: {
        screen: Splash,
        navigationOptions: {
        header:null
    }},
    Login: {
        screen: Login,
        navigationOptions: {
            header: null
        }
    },
    Signup: {
        screen: Signup,
        navigationOptions: {
            header: null
        }
    }
});

export default AppNavigator;