import React, { Component } from 'react';
import { Image} from 'react-native';
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
  Card, 
  CardItem,
  Icon
} from "native-base";
import firebase from 'firebase';
import { connect } from 'react-redux';

import images from 'App/systemSettings/images';
import styles from 'App/systemSettings/styles';
import {headerStyles, homeStyles} from 'App/styles';
import {Separator} from 'App/components';


export default class Home extends Component {
    constructor(props){
    super(props);

  }

  render(){
    return (
      <Container >
        <Header style= {styles.header}>
          <Left style={headerStyles.headerLT}>
          </Left>
          <Body >
            <Title>Home</Title>
          </Body>
          <Right >
            <Button
              transparent
              onPress={() => this.props.navigation.navigate("Login")}>
              <Icon name="ios-person" style={headerStyles.icon}/>
            </Button>
          </Right>
        </Header>
        <Content contentContainerStyle={styles.contentContainer} >
          <Card>
            <CardItem>
              <Body>
                <Text>Welcome to my Demo App</Text>
              </Body>
            </CardItem>
            <Separator />
            <CardItem style={homeStyles.home_logo}>
              <Image source={images.logo} style={homeStyles.logo} />
            </CardItem>
          </Card>
        </Content>
      </Container>
    )
  }
}