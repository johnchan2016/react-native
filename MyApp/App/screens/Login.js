import React, { Component, PureComponent } from 'react';
import { Image, View } from 'react-native';
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
import LoginButton from 'App/components/LoginButton';
import SignUpButton from 'App/components/SignUpButton';
import * as firebaseManager from 'App/utils/firebaseManager';


class Login extends PureComponent {
  constructor(props){
    super(props);

    this.state={
      username: 'myhk2009@gmail.com',
      password: 'myhk2009'
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    var isUdpate = !shallowEqual(this.props, nextProps) || !shallowEqual(this.state, nextState);
    console.log(`isUpdate: ${isUdpate}`);
    return isUdpate;
  }

  _clearText(fieldName) {
    this.refs[fieldName].wrappedInstance.clear();
    this.refs[fieldName].wrappedInstance.focus();

    console.log(this.refs);
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

    return (
      <Container>
        <Header>
          <Left style={headerStyles.headerLT}>
            <Button
              transparent
              onPress={() => this.props.navigation.navigate("Home")}>
              <Icon name="ios-arrow-round-back" />
            </Button>
          </Left>
          <Body>
            <Title>Login</Title>
          </Body>
          <Right />
        </Header>

        <Content contentContainerStyle={styles.contentContainer}
                 keyboardShouldPersistTaps='always'>
          <Image source={images.login} style={styles.bg}>
            <View style= {loginStyles.formContainer}>
              <InputGroup style={loginStyles.iconSeparator}>
                <SocialIcon type='facebook' style={loginStyles.IconDivider} iconSize={30}/>
                <SocialIcon type='twitter' style={loginStyles.IconDivider} iconSize={30}/>
              </InputGroup>

              <View style={loginStyles.messageBox}>
                {payload}
              </View>

              <InputGroup style={loginStyles.input}>
                <Icon name="ios-mail-outline" style={loginStyles.icon} />
                <Input
                  onChangeText={(username) => this.setState({ username})}
                  value={this.state.username}
                  placeholder={"Email Address"} 
                  autoFocus={true}
                  ref={'Username'}
                />             
                <Icon name="ios-close" style={styles.headerIcon}
                  onPress={() => this._clearText('Username')}
                />
              </InputGroup>
              
              <InputGroup style={loginStyles.input}>
                  <Icon name="ios-lock-outline" style={loginStyles.icon} />
                  <Input
                    onChangeText={(password) => this.setState({ password })}
                    value={this.state.password}
                    secureTextEntry={true}
                    placeholder={"Password"}
                    ref={'Password'}
                  />       
                  <Icon name="ios-close" style={styles.headerIcon}
                    onPress={() => this._clearText('Password')}
                  />       
              </InputGroup>

              <View style={loginStyles.separator}/>

              <LoginButton username={this.state.username} password={this.state.password}/>

              <View style={loginStyles.separator}/>

              <SignUpButton goToSignUp={true}/>
            </View>
          </Image>
        </Content>
      </Container>
    );
  }
}

const mapStateToProps = (state) => {
    return {
        payload: state.auth.payload,
    };
}
 
export default connect(
  mapStateToProps, 
)(Login);