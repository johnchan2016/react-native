import { StyleSheet } from 'react-native';

import { windowWidth, windowHeight } from 'App/utils/envHelper';

export const pdStyles = StyleSheet.create({
  container: {
    margin: 0
  },
  heading: {
    backgroundColor: '#F8F8F8',
  },
  image: {
    width: windowWidth,
    height: windowHeight*0.5
  },
  price: {
    fontSize: 25,
    fontWeight: 'bold',
    margin: 5,
    color: '#48BBEC'
  },
  title: {
    fontSize: 20,
    margin: 5,
    color: '#656565'
  },
  description: {
    fontSize: 18,
    margin: 5,
    color: '#656565'
  }
});