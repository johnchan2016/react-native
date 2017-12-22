import { StyleSheet } from 'react-native';

export const pageStyles = StyleSheet.create({
  container: {
    flex: 1,
    height: 30,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  text: {
    color: 'black',
    fontSize: 14,
    alignSelf: 'center',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: '#48BBEC',
    borderColor: '#48BBEC',
    borderWidth: 1,
    borderRadius: 8,
    height: 25,
    width: 55,
    padding: 0,
  },
  inputList:{
    maxWidth: '55%',
    minWidth: '50%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputList_input:{
    width: 35, 
    height: 25, 
    borderColor: 'black', 
    borderWidth: 1, 
    padding: 0,
    textAlign: 'center',
    alignItems: 'center',
    fontSize: 15,
    paddingBottom: 2
  },
  inputList_button:{
    marginLeft: '5%', 
    backgroundColor: '#ff5050', 
    width: 40, 
    height: 25, 
    padding: 0,
    borderRadius: 2,
  },
  inputList_buttonText:{
    fontSize: 16,
    color: 'black',    
    textAlign: 'center',
    justifyContent: 'center',
  }
});