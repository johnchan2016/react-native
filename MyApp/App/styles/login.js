import { StyleSheet } from 'react-native';

export const loginStyles =  StyleSheet.create({
  formContainer: {
    flex: 1,
    alignItems: 'center',
  },
  messageBox:{
    height:'10%',
    width: '80%'
  },
  input:{
    backgroundColor: 'white',
    width:'80%',
    height: '10%',
    marginTop: '1%',
    marginBottom: '1%'
  },
  button:{
    width:'80%',
    height: '10%',
  },
  iconSeparator:{
    justifyContent: 'center',
    height: '20%'
  },
  icon:{
    paddingLeft: '5%',
    color: '#0A69FE'
  },
  IconDivider:{
    marginLeft : '10%',
    marginRight: '10%',
  },
  error:{
    backgroundColor: 'white',
    color: 'red',
  },
  separator:{
    marginTop: '10%'
  }
});
