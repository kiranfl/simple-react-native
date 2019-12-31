# `<SignupScreen />`
A component that used to render a Signup screen.
***
![capture](https://raw.githubusercontent.com/kiranfl/simple-react-native/master/Docs/Signup_demo.gif)
***

## Usage
```
import { SignupScreen }  from 'simple-react-native';
render() {
        return (
            <SignupScreen
                onSignup = {(email, password, confirmaPassword)=>onSignup(email, password, confirmaPassword)}
            />)
     }
```

### Props

| Prop | Notes | Type | Signature (func) | Required | Default |
|---|---|---|---|---|---|
| onSignup | Function that is called when signup button clicked | function | {email:string, password:string, confirmPassword:string}:void | Yes
| backgroundColor | Sets the background color of the screen | string || No | '#DCDCDC'
| setBorder | If true it will set the border for each view | bool || No | false
| textBorderColor | Sets the border color of email, password and confirm password fields.| string || No | 'white'
| textBorderWidth | Sets the border width of email, password and confirm password fields.| number || No | 1
| textBorderRadius | Sets the border radius of email, password and confirm password fields. Applicable only when setBorder is true | number || No | 1
| textBackgroundColor | Sets the background color of the email, password and confirm password fields. Applicable only when setBorder is true | string || No | 'white'
| textEmailPlaceholder | String that will be rendered before email has been entered | string || No | 'Email'
| buttonBorderRadius | Defines the border radius of signup button. | number || No | 1
| buttonBackgroundColor | Sets the background color of the signup button. | string || No | '#00b5ec'
| signupText | Defines the text to render on signup button. | string || No | 'Signup'
| inputTextColor | Defines the input text color of email, password and confirm password. | string || No | 'black'
| buttonTextColor | Defines the text color of signup button. | string || No | 'white'
