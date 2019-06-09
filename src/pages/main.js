import React, { Component } from "react";
import api from '../services/api'

// Imports
import { View, Text, Image, StyleSheet, FlatList, TouchableOpacity } from "react-native";

export default class Main extends Component {
  static navigationOptions = {
    title: 'Fauna Africana',
  };

  state = {
    message: [],
  };

  componentDidMount() {
    this.loadImages();
  }

  loadImages = async () => {
    const response = await api.get('/african/images/random/6');

    const { message } = response.data;

    console.log(message);

    this.setState({ message });

  };

  renderItem = ({ item }) => (
    <View style={styles.imageContainer}>
        <Image
          style={styles.stretch} 
          source={{uri: item }}
        />

        <TouchableOpacity 
          style={styles.button} 
          onPress={() => {
            this.props.navigation.navigate('Image', { image: item });
          }}
        >
          <Text style={styles.buttonText}>Saiba Mais</Text>
        </TouchableOpacity>
    </View>
  )

  // Aviso de unique key prop, não consegui resolver 
  render() {
    return (
      <View style={styles.container}>
        <FlatList 
          data={this.state.message}
          keyExtractor={item => item.status}
          renderItem={this.renderItem}
        />
      </View>
    );
  }
}

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e3e5e8'
  },
  imageContainer: {
    alignItems: 'center',
    paddingTop: 30
  },
  button: {
    marginBottom: 10,
    height: 42,
    padding: 20,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: '#6c1296',
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 15,
    color: '#6c1296',
    fontWeight: 'bold',
    textTransform: 'uppercase'
  },
  imageContainer: {
    borderBottomWidth: 1,
    borderColor: '#DDD',
    alignItems: 'center',
    paddingTop: 30

  },
  stretch: {
    width: 300,
    height: 300,
    marginBottom: 30,
    borderRadius: 25,
    backgroundColor: '#d1d4d6',
  },
  textCard: {
    fontSize: 30,
    fontWeight: 'bold',
  },
});
 
// End of Styles 