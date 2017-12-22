import React, { Component } from 'react';
import { Image, View, ScrollView, ActivityIndicator, Keyboard } from 'react-native';
import { 
  Container, 
  Header, 
  Title, 
  Left, 
  Right, 
  Button, 
  Body, 
  Content,
  Footer,
  List
} from "native-base";
import { connect } from 'react-redux';
import axios  from 'axios';
import { NavigationActions } from 'react-navigation';

import { pageStyles } from 'App/styles';
import PaginationButton from './PaginationButton';
import PaginationInput  from './PaginationInput';


export default class PaginationTab extends Component {
  constructor(props) {
    super(props);
  }
  
  _createPageButton = (pageText, selectedPage) =>{
    return (
      <PaginationButton pageText={pageText} selectedPage={selectedPage}>
      </PaginationButton>
    );
  }

  _createInput = (page) => {
    return (
      <PaginationInput selectedPage={page}>
      </PaginationInput>
    )
  }

  render(){

    const { currentPage, lastPage, selectedPage } = this.props;
    return (
      <List style={pageStyles.container}>
        {this._createPageButton('First', 1)}
        {this._createInput(selectedPage)}
        {this._createPageButton('Last', this.props.lastPage)}
      </List>
    )
  }
}