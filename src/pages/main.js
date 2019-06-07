import React, { Component } from "react";
import api from '../services/api'

import { View, Text, Image, StyleSheet, FlatList } from "react-native";

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

  renderItem = ({ item }) => (
    <View>
      {this.state.message.map(image => (
        <Image 
          style={styles.stretch} 
          source={{uri: image }}
        />
       ))}
    </View>
  )

  render() {
    return (
      <View style={styles.display}>
        <FlatList 
          data={this.state.message}
          keyExtractor={item => item.status}
          renderItem={this.renderItem}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  stretch: {
    width: 300,
    height: 300,
    marginBottom: 30,
    borderRadius: 25,
    backgroundColor: '#d1d4d6',
  },
  display: {
    paddingLeft: 90,
    paddingTop: 30,
  },
});
 
// {this.state.message.map(image => (
//   <Image 
//     style={styles.stretch} 
//     source={{uri: image }}
//   />
// ))}