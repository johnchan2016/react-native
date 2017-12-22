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
  Text, 
  Icon,
  Input,
  Item
} from "native-base";
import { connect } from 'react-redux';
import axios  from 'axios';
import { NavigationActions } from 'react-navigation';

import images from 'App/systemSettings/images';
import { headerStyles, footerStyles } from 'App/styles';
import styles from 'App/systemSettings/styles';
import  PropertyList  from 'App/components/PropertyList';
import { GetPropertyData, ResetPropertyData } from 'App/redux/actions';
import PaginationTab from 'App/components/Pagination/PaginationTab';


class PropertySummary extends Component {
  constructor(props) {
    super(props);

    this.state={
      isSearching: false,
    }
  }

  componentWillMount() {
    if(!this.props.propertyData){
      this._genPropertyList(this.props.inputParams, this.props.currentPage = 1);
    }
    Keyboard.dismiss();
  }

  _toSearchCriteria = () => {
    this.props.toSearchCriteriaScreen();
  }

  _genPropertyList = (params, selectedPage) => {
    this.props.getPropertyData(params, selectedPage);
  }

  _clearText(fieldName) {
    this.refs[fieldName].wrappedInstance.clear();
    this.refs[fieldName].wrappedInstance.focus();
  }

  _changeHeaderStyle = () => {
    this.setState({isSearching: !this.state.isSearching});
  }

  render() {

    let propertyList,
        footer;

    if(this.props.isLoading){
      propertyList = (
        <ActivityIndicator size={108} style= {styles.indicator}/> 
      )
    }

    if(this.props.error){
      propertyList = (
        <View>
          <Text>oops! </Text>
          <Text>Something Got Wrong. </Text>
          <Text>Please Try Again.</Text>
        </View>
      )
    }

    if(this.props.propertyData){
      propertyList = (
        <PropertyList data={this.props.propertyData} />
      )

      footer = (
        <Footer style={footerStyles.propertySummary}>
          <PaginationTab currentPage={this.props.currentPage} 
            lastPage={this.props.lastPage} 
          />
        </Footer>

      )
    }

    let header;
    if(!this.state.isSearching){
      header = (
        <Header>
          <Left style={headerStyles.headerLT}>
            <Button transparent iconLeft
              onPress={() => this._toSearchCriteria()}>
              <Icon name="ios-arrow-round-back" style={styles.headerIcon} />
            </Button>
          </Left>
          <Body>
            <Title>PropertyList</Title>
          </Body>
          <Right>
            <Button transparent iconLeft
              onPress={() => this._changeHeaderStyle()}>
                <Icon name="ios-search" />
            </Button>
          </Right>
        </Header>
      )
    }else{
      header = (
        <Header searchBar rounded>
          <Button transparent iconLeft small style={{flex: 0.5, marginRight: '2%'}}
            onPress={() => this._changeHeaderStyle()}>
            <Icon name="ios-arrow-round-back" style={styles.headerIcon} />
          </Button>
          <Item style={{flex: 2.5}}>
            <Input placeholder="Search" autoFocus={true} ref={'SearchInput'} />
            <Icon name="ios-close" style={styles.headerIcon}
              onPress={() => this._clearText('SearchInput')}
            />
          </Item>
          <Button iconLeft success small style={{flex:1, marginLeft: '2%'}}>
            <Text>Search</Text>
          </Button>
        </Header>
      )
    }


    return (

      <Container>
        {header}
        <Content contentContainerStyle={styles.contentContainer}>
          {propertyList}
        </Content>
        {footer}
      </Container>
    );
  }
}

const mapStateToProps = (state) => {
    return {
      inputParams: state.searchCriteria.inputParams,
      isLoading: state.propertySummary.isLoading,
      error: state.propertySummary.error,
      currentPage: state.propertySummary.currentPage,
      lastPage: state.propertySummary.lastPage,
      propertyData: state.propertySummary.payload
    };
}

const mapDispatchToProps = (dispatch) => ({
  toSearchCriteriaScreen: () => { 
    dispatch( NavigationActions.navigate({ routeName: 'SearchCriteria'})  );
    dispatch( ResetPropertyData())
  },
  getPropertyData: (params, selectedPage) => {
    dispatch(GetPropertyData(params, selectedPage));
  }
});
 
export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(PropertySummary);