import React from 'react';

// Imports
import { WebView } from 'react-native';

// WebView está sendo extraido do react-native, por isso o aviso quando acessado

const View = () => (
  <WebView 
    source={{ uri: 'https://pt.wikipedia.org/wiki/Mabeco' }}
  />
);

View.navigationOptions = ({ navigation }) => ({

});

export default View;
