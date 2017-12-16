import React, { Component } from 'react';
import { Image, View, StyleSheet, Keyboard  } from 'react-native';
import { 
  Button, 
  Text, 
  Spinner,
  InputGroup
} from "native-base";
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { NavigationActions } from 'react-navigation';

import {loginStyles} from 'App/styles';
import {loginUser} from 'App/redux/actions';

/*class LoginButton extends Component{

  handleLogin = (username, password) => {
    this.props.onLogin(username, password);
  }
  

  render(){
     const {isLoading, username, password } = this.props;

    var loginButton;
    if (!isLoading){
      loginButton = (
        <Button primary full rounded
            onPress={() => this.handleLogin(username, password)}>
          <Text>Login</Text>
        </Button>  
      )
    }else{
      loginButton = (
        <Button primary full rounded >
          <Spinner style={loginStyles.spinner} color='white'/>  
          <Text style={loginStyles.IconDivider}>Loading...</Text>
        </Button>  
      )
    }
    return (
     <View style={loginStyles.button}>
        {loginButton}
      </View>
    );
  }
}*/

const LoginButton = ({username, password, isLoading, onLogin}) => {

  var loginButton;
  if (!isLoading){
    loginButton = (
      <Button primary full rounded
          onPress={() => onLogin(username, password)}>
        <Text>Login</Text>
      </Button>  
    )
  }else{
    loginButton = (
      <Button primary full rounded >
        <Spinner style={loginStyles.spinner} color='white'/>  
        <Text style={loginStyles.IconDivider}>Loading...</Text>
      </Button>  
    )
  }

  return (
      <View style={loginStyles.button}>
        {loginButton}
      </View>
  )
}


const mapStateToProps = (state) => ({
    isLoading: state.auth.isLoading,
    isAuthenticated: state.auth.isAuthenticated,
});

const mapDispatchToProps = (dispatch) => ({
    onLogin: (username, password) => { dispatch(loginUser(username, password)) },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginButton);
