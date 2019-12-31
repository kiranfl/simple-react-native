# `<LoginScreen />`
A component that used to render a Login screen.
***
![capture](https://raw.githubusercontent.com/kiranfl/simple-react-native/master/Docs/Login_demo.gif)
***

## Usage
```
import { LoginScreen }  from 'simple-react-native';
render() {
        return (
            <LoginScreen
                onLoginClicked={(email, password) => this.onLoginClick(email, password)}
                onSignupClicked={() => this.onSignupClick()}
                onForgotpasswordClicked={(email) => this.onForgotpasswordClick(email)}
            />
        );
    }
```

### Props

| Prop | Notes | Type | Signature (func) | Required | Default |
|---|---|---|---|---|---|
| onLoginClicked | Function that is called when login button clicked | function | {email:string, password:string}:void | Yes
| onSignupClicked | Function that is called when signup button clicked | function || Yes |
| onForgotpasswordClicked | Function that is called when forgot password clicked | function | {email:string}:void | Yes
| backgroundColor | Sets the background color of the screen | string || No | '#DCDCDC'
| logo | Render the image or logo | number || No | null
| setBorder | If true it will set the border for each view | bool || No | false
| textBorderColor | Sets the border color of email and password fields.| string || No | 'white'
| textBorderWidth | Sets the border width of email and password fields.| number || No | 1
| textBorderRadius | Sets the border radius of email and password fields. Applicable only when setBorder is true | number || No | 1
| textBackgroundColor | Sets the background color of the email and password fields. Applicable only when setBorder is true | string || No | 'white'
| textEmailPlaceholder | String that will be rendered before email has been entered | string || No | 'Email'
| textPasswordPlaceholder | String that will be rendered before password has been entered | string || No | 'Password'
| buttonBorderRadius | Defines the border radius of login and signup buttons. Applicable only when setBorder is true  | number || No | 1
| buttonBackgroundColor | Sets the background color of the login and signup buttons. Applicable only when setBorder is true | string || No | '#00b5ec'
| loginTextColor | Defines the text color of login button. Applicable only when setBorder is false | string || No | '#00b5ec'
| loginText | Defines the text to render on login button. | string || No | 'Login'
| signupText | Defines the text to render on signup button. | string || No | 'Signup'
| signupTextColor | Defines the text color of signup button. Applicable only when setBorder is false | string || No | 'grey'
| inputTextColor | Defines the input text color of email and password. | string || No | 'black'
| forgotPasswordTextColor | Defines the color of forgot password text. | string || No | 'grey'
| buttonTextColor | Defines the text color of login and signup buttons. Applicable only when setBorder is true. | string || No | 'white'
