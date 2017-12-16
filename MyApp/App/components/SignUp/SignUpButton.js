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

import {loginStyles} from 'App/styles';
import {signUpUser} from 'App/redux/actions';
import {NavHelper} from 'App/Helpers';

/*class SignUpButton extends Component{
  constructor (props) {
      super(props);
  }

  handleSignUp = () =>{
    this.props.signUpScreen();
  }

  render(){
    const {isLoading, isAuthenticated} = this.props.isLoading;

    var signUpButton;
    signUpButton = (
      <Button danger full rounded 
          onPress={() => this.handleSignUp()}>
        <Text>Sign up</Text>
      </Button>  
    )
    return (
     <View style={loginStyles.button}>
        {signUpButton}
      </View>
    );
  }
}*/

const SignUpButton = ({goToSignUp, signUpScreen, onSignUp, isLoading, loginScreen}) => {

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
}

const mapStateToProps = (state) => ({
    isLoading: state.signUpAuth.isLoading
});

const mapDispatchToProps = (dispatch) => ({
  signUpScreen: () => { dispatch(NavHelper('SignUp')) },
  loginScreen: () => { dispatch(NavHelper('Login')) },
  onSignUp: (username, password) => { dispatch(signUpUser(username, password)) },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignUpButton);
