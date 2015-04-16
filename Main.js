'use strict';
var React = require('react-native');
var Results = require('./Results');
var api = require('./api');

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
  getInitialState: function() {
    return this.state = {
      city: '',
      state: '',
      day: '',
      month: '',
      year: ''
    }
  },
  handleSubmit: function() {
    api.getData(this.state).then(function(response) {
      this.props.navigator.push({
        title: 'Results',
        component: Results,
        passProps: {results: response}
      });
    }.bind(this)).catch(function(err) {
      console.log('error: ', err)
    })

  },
  // handleResponse: function(response) {
  //   if(response) {
  //     this.props.navigator.push({
  //       title: 'Results',
  //       component: Results,
  //       passProps: {results: response}
  //     });
  //   }
  // },
  handleCityChange: function(e) {
    this.setState({
      city: e.nativeEvent.text
    })
  },
  handleStateChange: function(e) {
    this.setState({
      state: e.nativeEvent.text
    })
  },
  handleMonthChange: function(e) {
    this.setState({
      month: e.nativeEvent.text
    })
  },
  handleYearChange: function(e) {
    this.setState({
      year: e.nativeEvent.text
    })
  },
  handleDayChange: function(e) {
    this.setState({
      day: e.nativeEvent.text
    })
  },
  clear: function() {
    this.setState({
      city: '',
      state: '',
      month: '',
      day: '',
      year: '',
    });
  },
  render: function() {
    console.log('the mainjs is rendering')
    return (
      <View style={styles.container}>
          <Text style={styles.title}>Weathers</Text>
          <View style={styles.form}>
            <TextInput style={styles.field} value={this.state.city} placeholder="City"  onChange={this.handleCityChange}/>
            <TextInput style={styles.field} value={this.state.state} placeholder="State"  onChange={this.handleStateChange} />
            <TextInput style={styles.field} value={this.state.day} placeholder="Day"  onChange={this.handleDayChange} />
            <TextInput style={styles.field} value={this.state.month} placeholder="Month"  onChange={this.handleMonthChange} />
            <TextInput style={styles.field} value={this.state.year} placeholder="Year"  onChange={this.handleYearChange} />
            <TouchableHighlight underlayColor="#FFFFFF" style={styles.button} onPress={this.handleSubmit}>
              <Text style={styles.buttonText}>Submit</Text>
            </TouchableHighlight>
            <TouchableHighlight underlayColor="#FFFFFF" style={[styles.button, styles.clearButton]} onPress={this.clear}>
              <Text style={[styles.buttonText, styles.clearButtonText]}>Cancel</Text>
            </TouchableHighlight>
          </View>
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