/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React, {Component} from 'react';
import {View, Text} from 'react-native';
import AnimatedLoader from 'react-native-animated-loader';

class App extends Component {
  constructor() {
    super();
    this.state = {
      loader: true,
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({loader: false});
    }, 7000);
  }
  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        {this.state.loader ? (
          <AnimatedLoader
            visible={this.state.loader}
            overlayColor="rgba(255,255,255,0.5)"
            source={require('./assets/loader/google1.json')}
            animationStyle={{
              width: 200,
              height: 200,
            }}
            speed={1}
          />
        ) : (
          <View>
            <Text style={{textAlign: 'center', fontSize: 50, color: 'blue'}}>
              Welcome{'\n'}Google
            </Text>
          </View>
        )}
      </View>
    );
  }
}

export default App;
