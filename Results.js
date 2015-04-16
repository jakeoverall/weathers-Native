'use strict';
var React = require('react-native');

var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight,
  TextInput
} = React;

var Main = React.createClass({
  render: function() {
    console.log('the Results are rendering')
    return (
      <View style={styles.container}>
        <Text>This is the results</Text>
        <Text>{this.props.results.history.observations[0].tempi} F</Text>
        <Text>{this.props.results.history.observations[0].conds}</Text>
        <Text>Chance of thunder: {this.props.results.history.observations[0].thunder}</Text>
      </View>
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
    paddingLeft: 20,
    paddingRight: 20
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  title: {
    alignSelf: 'center',
    fontSize: 40,
    marginTop: -1,
    color: '#424242'
  },
  form: {
    marginTop: 40,
    alignSelf: 'stretch'
  },
  field: {
    height: 40,
    paddingLeft: 8,
    fontSize: 23,
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 4,
    marginBottom: 20,
    color: '#000',
    backgroundColor: 'rgba(255,255,255,0.4)'
  },
  button: {
    backgroundColor: '#000',
    alignSelf: 'stretch',
    padding: 15,
    borderRadius: 4,
    marginBottom: 10,
  },
  buttonText: {
    alignSelf: 'center',
    color: '#FFF',
    fontSize: 20,
  },
  clearButton: {
    backgroundColor: '#D6D6D6'
  },
  clearButtonText: {
    color: '#000'
  }
});

module.exports = Main;