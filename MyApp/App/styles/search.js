import { StyleSheet } from 'react-native';

export const searchStyle =  StyleSheet.create({
formContainer: {
    alignItems:'center',
    justifyContent: 'center'
  },
  label:{
    width: '80%',
    fontSize: 20,
    fontWeight: '500'
  },
  control: {
    height: '16%',
    width: '80%',
    borderWidth: 1,
    borderColor: '#48BBEC',
    borderRadius: 8,
  },
  separator:{
    marginTop: '10%'
  },
  button:{
    flex: 0.8, 
    justifyContent: 'center'
  }
});