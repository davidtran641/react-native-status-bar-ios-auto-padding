import React, {Component} from 'react';
import {View, Text, StyleSheet, Platform, NativeModules} from 'react-native';
import StatusBarSizeIOS from 'react-native-status-bar-size';

const { StatusBarManager } = NativeModules;
var _currentHeight = 0;

class RNStatusBarIOSAutoPadding extends Component{
  componentWillMount(){
    this.setState({height: Platform.OS === 'ios' ? _currentHeight : 0})
  }

  componentDidMount() {
    if (Platform.OS === 'ios') {
      StatusBarSizeIOS.addEventListener('didChange', this._handleStatusBarFrameDidChange);
    }
  }

  componentWillUnmount() {
    if (Platform.OS === 'ios') {
      StatusBarSizeIOS.removeEventListener('didChange', this._handleStatusBarFrameDidChange);
    }
  }

  _handleStatusBarFrameDidChange = (currentStatusBarHeight) => {
    console.log("currentHeight didChange " + currentStatusBarHeight);
  // this.setState({ height: currentStatusBarHeight });
  StatusBarManager.getHeight(
    (statusBarFrameData) => {
      console.log("statusBarFrameData didChange " + statusBarFrameData.height);
    this.setState({height: statusBarFrameData.height});
    _currentHeight = statusBarFrameData.height;
    }
    );
  }
  
  render(){
    return(
      <View style={{height: this.state.height}} />
    );
  }
}

try {
  StatusBarManager.getHeight(
    (statusBarFrameData) => {
      _currentHeight = statusBarFrameData.height;
    }
  );
} catch (e) {

}

module.exports= RNStatusBarIOSAutoPadding
