import React from 'react';

import { Text, View, Image, StyleSheet, TouchableOpacity } from 'react-native';

const ImageDog = () => ( 
  <View>
    <Image 
      style={{width: '100%', height: 420}}
      source={{uri: 'https://abrilsuperinteressante.files.wordpress.com/2017/09/cc3a3es-selvagens-combinam-a-hora-da-cac3a7ada-se-comunicando-com-espirros.png'}}
    />
    <Text style={styles.textDescription}>O mabeco (Lycaon pictus) também conhecido como cão-selvagem-africano ou cão-caçador-africano é um canídeo típico da África que vive em zonas de savana e vegetação esparsa. A espécie já foi comum em toda a África subsaariana (exceto em áreas de floresta tropical ou densa e zonas desérticas).
    </Text>
  </View>
);

ImageDog.navigationOptions = ({ navigation }) => ({
  title: 'Mabeco'
});

const styles = StyleSheet.create({
  textDescription: {
    fontSize: 25,
    padding: 15,
    color: '#000'
  }
});

export default ImageDog;
