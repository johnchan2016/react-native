import { StyleSheet } from 'react-native';

import { windowHeight } from 'App/utils/envHelper';

export const plStyles = StyleSheet.create({
  mainContainer:{
    flexDirection: 'column',
    flex:1
  },
  scrollContainer:{
    flex: 1
  },
  pageContainer:{
    flex: 1,
    height: 20,
    flexDirection: 'row',
    justifyContent: 'space-around',
    position: 'relative',
    left: 0,
    top: 0,
    right: 0
  },
  thumb: {
    width: 60,
    height: 60,
    marginRight: 10
  },
  textContainer: {
    flex: 1
  },
  separator: {
    height: 1,
    backgroundColor: '#dddddd'
  },
  price: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#48BBEC'
  },
  title: {
    backgroundColor: 'transparent',
    color: '#656565',
    fontSize: 16
  },
  rowContainer: {
    flexDirection: 'row',
    padding: 5
  },
  indicator:{
    flex:1,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
    marginTop: windowHeight/3
  },
  bar: {
    marginTop: 28,
    height: 32,
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    position: 'absolute',
    top: 50,
    left: 0,
    right: 0,
    backgroundColor: '#03A9F4',
    overflow: 'hidden',
  },
  pageButton: {
    backgroundColor: '#48BBEC',
    borderColor: '#48BBEC',
    borderWidth: 1,
    borderRadius: 8,
    height: 20,
    width: 40,
    justifyContent: 'center'
  } ,
  text: {
    color: 'black',
    fontSize: 14,
    alignSelf: 'center',
    justifyContent: 'center'
  },
});
