import React, { Component } from 'react';
import { Image, View, StyleSheet } from 'react-native';
import { 
  Button, 
  Text, 
  Spinner,
  InputGroup
} from "native-base";
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { NavigationActions } from 'react-navigation';

import { loginStyles } from 'App/styles';
import { signUpUser, ResetLoginState, ResetSignUpState } from 'App/redux/actions';
import {NavHelper} from 'App/Helpers';


class SignUpButton extends Component{

  _onSignUp = (username, password, confirmPassword ) =>{
    this.props.onSignUp(username, password, confirmPassword);
  }

  _getSignUpScreen = () => {
    this.props.toSignUpScreen();
  }

  render(){
    const {isLoading, goToSignUp, username, password, confirmPassword } = this.props;

    var signUpButton;
    if(isLoading){
    signUpButton = (
        <Button danger full rounded >
          <Spinner style={loginStyles.spinner} color='white'/>  
          <Text style={loginStyles.IconDivider}>Loading...</Text>
        </Button>  
      )
    }else{
      signUpButton = (
        <Button danger full rounded 
            onPress={() => {
              goToSignUp? this._getSignUpScreen(): this._onSignUp(username, password, confirmPassword)}
            }>
          <Text>Sign up</Text>
        </Button>  
      )
    }
    return (
     <View style={loginStyles.button}>
        {signUpButton}
      </View>
    );
  }
}

/*const SignUpButton = ({goToSignUp, signUpScreen, onSignUp, loginScreen, isLoading, username, password, confirmPassword}) => {

  var signUpButton;  
  if(isLoading){
    signUpButton = (
      <Button danger full rounded >
        <Spinner style={loginStyles.spinner} color='white'/>  
        <Text style={loginStyles.IconDivider}>Loading...</Text>
      </Button>  
    )
  }else{
    signUpButton = (
      <Button danger full rounded 
          onPress={goToSignUp? signUpScreen: onSignUp}>
        <Text>Sign up</Text>
      </Button>  
    )
  }

  return (
    <View style={loginStyles.button}>
      {signUpButton}
    </View>
  )
}*/

const mapStateToProps = (state) => ({
    isLoading: state.signUpAuth.isLoading
});

const mapDispatchToProps = (dispatch) => ({
  toLoginScreen:() => {
    dispatch(ResetLoginState());
    dispatch(NavigationActions.navigate({ routeName: 'Login'}) )
  },
  toSignUpScreen: () => { 
    dispatch(ResetLoginState());
    dispatch(ResetSignUpState());
    dispatch(NavigationActions.navigate({ routeName: 'SignUp'}) )
  },
  onSignUp: (username, password, confirmPassword) => { 
    dispatch(signUpUser(username, password, confirmPassword)) },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignUpButton);
