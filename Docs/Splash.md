# `<SplashScreen />`
A component that used to create a splash screen. Usually a splash screen contains the name of the app and logo (optional). This is the first 
screen that user can see when ever app opens.
***
![capture](https://raw.githubusercontent.com/kiranfl/simple-react-native/master/Docs/Splash_demo.gif)
***

## Usage
```
import { SplashScreen } from 'simple-react-native';
render() {
        return (
            <SplashScreen style={{ flex: 1}}
                navigateToNext={() => navigateToNext(this.props)} />
            );
        }
```

### Props

| Prop | Notes | Type | Signature (func) | Required | Default |
|---|---|---|---|---|---|
| navigateToNext | Callback that is called after timeout (default time out is 3 seconds) | function || Yes
| backgroundColor | Sets the screen background color | string || No | #FFFFFF
| logo | Render the image or logo | number || No | null
| logoAlignment | Align the specified logo to above or bottom the of the text. Possible values are above,bottom | string || No | 'above'
| text | To render a text | string || No | 'Hello World'
| textColor | Sets color of the specified text | string || No | 'black'
| timeOut | It's the duration in milliseconds. It will decide how much time the splash screen should be visible | number || No | 3000 (3 seconds)
| versionText | To show the version of the current app usually renders at bottom of the screen. | string || No |
