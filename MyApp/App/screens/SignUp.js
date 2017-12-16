import React, { Component } from 'react';
import { Image, View, Keyboard } from 'react-native';
import { 
  Container, 
  Header, 
  Title, 
  Left, 
  Right, 
  Button, 
  Body, 
  Content,
  Text, 
  Icon,
  InputGroup,
  Input,
  Spinner,
} from "native-base";
import { SocialIcon } from 'react-native-elements'
import { connect } from 'react-redux';

import images from 'App/systemSettings/images';
import {headerStyles, homeStyles, loginStyles} from 'App/styles';
import styles from 'App/systemSettings/styles';
import SignUpButton from 'App/components/SignUpButton';

class SignUp extends Component {
  constructor(props){
    super(props);
    
    this.state = {
      usernmae: '',
      password: '',
      confirmPassword: ''
    }
  }

  render() {

    let payload;
    if (this.props.payload){
      payload = (
          <Text style={loginStyles.error}>
            {this.props.payload}
          </Text>
      );
    }else{
      payload = (
        <Text >
        </Text>
      )
    }

    var credentials = {
      username : this.state.usernmae,
      password: this.state.password,
      confirmPassword: this.state.confirmPassword
    };

    let signUpForm;
      signUpForm = (
        <View style= {loginStyles.formContainer}>
              <View style={loginStyles.separator}/>
              <View style={loginStyles.separator}/>

              <View style={loginStyles.messageBox}>
                {payload}
              </View>

              <InputGroup style={loginStyles.input}>
                <Icon name="ios-mail-outline" style={loginStyles.icon} />
                <Input
                  onChangeText={(username) => this.setState({username} )}
                  value={this.state.username}
                  placeholder={"Email Address"} 
                  autoFocus={true}
                />             
              </InputGroup>
              
              <InputGroup style={loginStyles.input}>
                <Icon name="ios-lock-outline" style={loginStyles.icon} />
                <Input
                  onChangeText={(password) => this.setState({password })}
                  value={this.state.password}
                  secureTextEntry={true}
                  placeholder={"Password"}
                />                   
              </InputGroup>

              <InputGroup style={loginStyles.input}>
                <Icon name="ios-lock-outline" style={loginStyles.icon} />
                <Input
                  onChangeText={(confirmPassword) => this.setState({ confirmPassword })}
                  value={this.state.confirmPassword}
                  secureTextEntry={true}
                  placeholder={"Confirm Password"} 
                />                                         
              </InputGroup>

              <View style={loginStyles.separator}/>

              <SignUpButton goToSignUp={false} username={this.state.username}
                password={this.state.password} confirmPassword={this.state.confirmPassword}/>

            </View>
      )

    return (
      <Container>
        <Header>
          <Left style={headerStyles.headerLT}>
            <Button
              transparent
              onPress={() => this.props.navigation.navigate("Login")}
            >
              <Icon name="ios-arrow-back" />
            </Button>
          </Left>
          <Body>
            <Title>Sign Up</Title>
          </Body>
          <Right />
        </Header>

        <Content contentContainerStyle={styles.contentContainer}
                 keyboardShouldPersistTaps='always'>
          <Image source={images.login} style={styles.bg}>

            {signUpForm}

          </Image>
        </Content>
      </Container>
    );
  }
}

const mapStateToProps = (state) => ({
  payload: state.signUpAuth.payload,
  isSignedUp: state.signUpAuth.isSignedUp,
  isAuthenticated: state.auth.isAuthenticated
});
 
export default connect(
  mapStateToProps, 
)(SignUp);