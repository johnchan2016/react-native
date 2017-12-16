import React, { Component } from 'react';
import { Image, View, ScrollView } from 'react-native';
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
  Input,
  Picker,
  Form,
  List,
  ListItem
} from "native-base";
import { connect } from 'react-redux';
import { NavigationActions } from 'react-navigation';
import axios  from 'axios';

import images from 'App/systemSettings/images';
import { headerStyles, plStyles } from 'App/styles';
import styles from 'App/systemSettings/styles';
import  PropertyList  from 'App/components/PropertyList';
import { SEARCH_API } from 'App/systemSettings/constants';
import { MapData } from 'App/utils/MapData';
import { GetPropertyData } from 'App/redux/actions';


class PropertySummary extends Component {
  constructor(props) {
    super(props);
    console.log(`inputParams: ${this.props.inputParams}`);
    this._genPropertyList(this.props.inputParams);
  }

  _toPropertyCriteria = () => {
    this.props.toPropertyCriteriaScreen();
  }

  _genPropertyList = (params) => {
   this.props.getPropertyData(params, 1);
   const data = this.props.propertyData;
   console.log(`property Sumamry: ${Date.now()}`);
   console.log(`data: ${data}`);
  }

  render() {
/*    const data =[
      {img_url: 'asfdf', price_formatted: 1334, title: 'abc'},
      {img_url: 'asfdf', price_formatted: 1334, title: 'abc'},
    ]*/

    return (
      <Container>
        <Header>
          <Left style={headerStyles.headerLT}>
            <Button
              transparent
              onPress={() => this._toPropertyCriteria()}>
              <Icon name="ios-arrow-back" />
            </Button>
          </Left>
          <Body>
            <Title>PropertyList</Title>
          </Body>
          <Right />
        </Header>

        <Content contentContainerStyle={styles.contentContainer}
                 keyboardShouldPersistTaps='always'>
              <PropertyList data={this.props.propertyData} />
              {/*{this._genPropertyList(this.props.inputParams)}*/}
        </Content>
      </Container>
/*
        <View >
          <ScrollView >
              {this._getPropertyData(this.props.inputParams)}
          </ScrollView >
        </View>*/
    );
  }
}

const mapStateToProps = (state) => {
    return {
      inputParams: state.searchCriteria.inputParams,
      propertyData: state.propertySummary.payload
    };
}

const mapDispatchToProps = (dispatch) => ({
  toPropertyCriteriaScreen: () => { 
    dispatch(NavigationActions.navigate({ routeName: 'SearchCriteria'}) )
  },
  getPropertyData: (params, currentPage) => {
    dispatch(GetPropertyData(params, currentPage));
  }
});
 
export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(PropertySummary);