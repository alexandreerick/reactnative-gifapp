import React from 'react';

// Imports
import { Text, ScrollView, Image, StyleSheet, TouchableOpacity } from 'react-native';

const ImageDog = ({ navigation }) => ( 
  <ScrollView>
    <Image 
      style={{width: '100%', height: 460}}
      source={{uri: 'https://abrilsuperinteressante.files.wordpress.com/2017/09/cc3a3es-selvagens-combinam-a-hora-da-cac3a7ada-se-comunicando-com-espirros.png'}}
    />
    <Text style={styles.textDescription}>O mabeco (Lycaon pictus) também conhecido como cão-selvagem-africano ou cão-caçador-africano é um canídeo típico da África que vive em zonas de savana e vegetação esparsa. A espécie já foi comum em toda a África subsaariana (exceto em áreas de floresta tropical ou densa e zonas desérticas). A sua distribuição geográfica actual limita-se ao sul da África especialmente em Namíbia, Zimbábue, Zâmbia, Botswana e sul da África Oriental na Tanzânia e norte de Moçambique. É uma espécie ameaçada de extinção principalmente pela fragmentação do habitat, que aumenta os conflitos com humanos, como perseguição por criadores de gado, acidentes em estradas, doenças de animais domésticos.
    </Text>

    <Text style={styles.textKnowMore}>Quer saber mais sobre o Mabeco?</Text>

    <TouchableOpacity 
      style={styles.button} 
      onPress={() => {
        navigation.navigate("View");
      }}
    >
      <Text style={styles.buttonText}>Clique aqui</Text>
    </TouchableOpacity>

  </ScrollView>
);

ImageDog.navigationOptions = ({ navigation }) => ({
  title: 'Mabeco'
});

// Styles
const styles = StyleSheet.create({
  textKnowMore: {
    fontSize: 20,
    alignSelf: 'center',
    marginBottom: 15,
    color: '#000'
  },
  textDescription: {
    fontSize: 25,
    padding: 15,
    color: '#000'
  },
  button: {
    width: 150,
    marginBottom: 10,
    height: 42,
    padding: 20,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: '#6c1296',
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginBottom: 50,
  },
  buttonText: {
    fontSize: 15,
    color: '#6c1296',
    fontWeight: 'bold',
    textTransform: 'uppercase'
  },
});
// End of Styles

export default ImageDog;
