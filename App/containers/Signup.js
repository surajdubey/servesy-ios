import React, {Component, PropTypes} from 'react';
import  {AppRegistry, TextInput, Text, StyleSheet, View,
TouchableHighlight} from 'react-native';

class Signup extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    navigator: PropTypes.object.isRequired
  }

  constructor(props, context) {
    super(props, context);
    this._onForward = this._onForward.bind(this);
    // this._onBack = this._onBack.bind(this);
    this.state = {'name': '', 'mobileNumber':'' };
  }

  _onForward() {
    this.props.navigator.push({
      title: 'OTP verification'
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput style={styles.textInput}
          placeholder='Enter Name'
          onChangeText={(name)=>this.setState({name})}
          />

        <TextInput style={styles.textInput}
          placeholder='Enter mobile number'
          onChangeText={(mobileNumber)=>this.setState({mobileNumber})}
          keyboardType = 'numeric'
         />

         <TouchableHighlight onPress={this.onSignup}>
          <View>
            <Text>Signup</Text>
          </View>
         </TouchableHighlight>
      </View>
    )
  }

  onSignup() {

  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'

  },
  textInput: {
    height:40,
    backgroundColor:'grey'
  }
})

AppRegistry.registerComponent('Signup', ()=>Signup);
export default Signup;
