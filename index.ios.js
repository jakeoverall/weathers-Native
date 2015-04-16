'use strict';
var React = require('react-native');
var Main = require('./Main');

window.React = React;

var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight,
  TextInput,
  NavigatorIOS
} = React;

var weathersNative = React.createClass({
  render: function(){
    return (
      <NavigatorIOS
        style={styles.container}
        initialRoute={{
          component: Main,
          title: 'Weathers',
        }}/>
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111111'
  },
});

AppRegistry.registerComponent('weathersNative', () => weathersNative);