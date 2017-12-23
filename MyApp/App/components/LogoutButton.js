import React, { Component, PureComponent } from 'react';
import { Image, View } from 'react-native';
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

export class LogoutButton extends PureComponent{
  constructor (props) {
      super(props);
  }

  handleLogout = () => {
    this.props.onLogout;
  }

  render(){
    const isLoading = this.props.isLoading;

    var logoutButton;
    if (!isLoading){
      logoutButton = (
        <Button primary full rounded 
            style={loginStyles.button}
            onPress={this.handleLogout}>
          <Text>Login</Text>
        </Button>  
      )
    }else{
      logoutButton = (
        <Button primary full rounded 
            style={loginStyles.button}>
          <Spinner style={loginStyles.spinner} color='white'/>  
          <Text style={loginStyles.IconDivider}>Loading...</Text>
        </Button>  
      )
    }
    return (
      <InputGroup>
        {logoutButton}
      </InputGroup>
    );
  }
}


const mapStateToProps = (state) => ({
    isLoading: state.auth.isLoading,
});

const mapDispatchToProps = (dispatch) => ({
    onLogout: () => dispatch({ type: 'Logout' }), //go to  reducer 'auth'
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LogoutButton);
