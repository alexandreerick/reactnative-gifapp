import React, { Component } from "react";
import api from '../services/api'

import { View, Text, Image, StyleSheet } from "react-native";

export default class Main extends Component {
  static navigationOptions = {
    title: 'Home',
  };

  state = {
    message: [],
  };

  componentDidMount() {
    this.loadImages();
  }

  loadImages = async () => {
    const response = await api.get('/image/random/3');

    const { message } = response.data;

    console.log(message);

    this.setState({ message });

  };

  render() {
    return (
      <View style={styles.display}>
        {this.state.message.map(image => (
          <Image 
            style={styles.stretch} 
            source={{uri: image }}
          />
        ))}        
      </View>
    );
  }

}

const styles = StyleSheet.create({
  stretch: {
    width: 300,
    height: 300,
  },
  display: {
    flexDirection: 'column',
    paddingLeft: 90,
    paddingTop: 30,
  },
});
