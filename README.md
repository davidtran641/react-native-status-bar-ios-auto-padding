
# react-native-status-bar-ios-auto-padding

## Getting started

`$ npm install react-native-status-bar-ios-auto-padding --save`

### Mostly automatic installation

`$ react-native link react-native-status-bar-ios-auto-padding`

### Manual installation


#### iOS

1. In XCode, in the project navigator, right click `Libraries` ➜ `Add Files to [your project's name]`
2. Go to `node_modules` ➜ `react-native-status-bar-ios-auto-padding` and add `RNStatusBarIosAutoPadding.xcodeproj`
3. In XCode, in the project navigator, select your project. Add `libRNStatusBarIosAutoPadding.a` to your project's `Build Phases` ➜ `Link Binary With Libraries`
4. Run your project (`Cmd+R`)<

#### Android

1. Open up `android/app/src/main/java/[...]/MainActivity.java`
  - Add `import com.reactlibrary.RNStatusBarIosAutoPaddingPackage;` to the imports at the top of the file
  - Add `new RNStatusBarIosAutoPaddingPackage()` to the list returned by the `getPackages()` method
2. Append the following lines to `android/settings.gradle`:
  	```
  	include ':react-native-status-bar-ios-auto-padding'
  	project(':react-native-status-bar-ios-auto-padding').projectDir = new File(rootProject.projectDir, 	'../node_modules/react-native-status-bar-ios-auto-padding/android')
  	```
3. Insert the following lines inside the dependencies block in `android/app/build.gradle`:
  	```
      compile project(':react-native-status-bar-ios-auto-padding')
  	```

#### Windows
[Read it! :D](https://github.com/ReactWindows/react-native)

1. In Visual Studio add the `RNStatusBarIosAutoPadding.sln` in `node_modules/react-native-status-bar-ios-auto-padding/windows/RNStatusBarIosAutoPadding.sln` folder to their solution, reference from their app.
2. Open up your `MainPage.cs` app
  - Add `using Com.Reactlibrary.RNStatusBarIosAutoPadding;` to the usings at the top of the file
  - Add `new RNStatusBarIosAutoPaddingPackage()` to the `List<IReactPackage>` returned by the `Packages` method


## Usage
```javascript
import RNStatusBarIosAutoPadding from 'react-native-status-bar-ios-auto-padding';

// TODO: What to do with the module?
RNStatusBarIosAutoPadding;
```
  