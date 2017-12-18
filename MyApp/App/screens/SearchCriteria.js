import React, { Component } from 'react';
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
  Input,
  InputGroup,
  Picker,
  Form
} from "native-base";
import { connect } from 'react-redux';
import { NavigationActions } from 'react-navigation';

import styles from 'App/systemSettings/styles';
import {headerStyles, searchStyle} from 'App/styles';
import { GetSearchInput } from 'App/redux/actions';
import * as firebaseManager from 'App/utils/firebaseManager';
import { searchParams } from 'App/systemSettings/constants';


const Item = Picker.Item;
class SearchCriteria extends Component {
    constructor(props){
    super(props);

    this.state = {
      searchString: 'London',
      selectedItem : 'Buy'
    };
  }

/*  componentWillMount() {
      this.props.onAuth();
  }

  componentWillUnmount() {
      this.props.onAuth();
  }*/

  _getSearchInput = (place, type) => {
   var anotherParams = {
      'page': 1,
      'place_name': place,
      'listing_type': type
    }

    const allParams = {
      ...searchParams, 
      ...anotherParams
    };

    this.props.onGetSearchInput(allParams);
    this.props.toPropertySummaryScreen();
  }

  updateItem = (item) => {
    this.setState({ selectedItem: item });
  }

  onSearchTextChanged = (event) => {
    this.setState({ searchString: event.nativeEvent.text }, function(){
    });
  }

  _clearText(fieldName) {
    this.refs[fieldName].wrappedInstance.clear();
  }  

  render(){
    return (
      <Container >
        <Header>
          <Left style={headerStyles.headerLT}>
{/*            <Button
              transparent
              onPress={() => this.props.navigation.navigate("Log Out")}>
              <Icon name="ios-arrow-round-back" style={styles.headerIcon}/>
            </Button>*/}
          </Left>
          <Body style={headerStyles.headerBD}>
            <Title>Property Search</Title>
          </Body>
          <Right >
          </Right>
        </Header>
        <Content contentContainerStyle={styles.contentContainer} 
                 keyboardShouldPersistTaps='always'>
          <Form style={searchStyle.formContainer}>
            <InputGroup>              
              <Text style={searchStyle.label}>Place:</Text>
            </InputGroup>
            <InputGroup style={searchStyle.control}>
                <Input
                  value={this.state.searchString}
                  onChange={this.onSearchTextChanged}
                  placeholder='Search via name or postcode in UK'
                  ref={'Password'}
                  autoFocus={true}
                  />
                  <Icon name="ios-close" style={styles.headerIcon}
                    onPress={() => this._clearText('Password')}
                  />   
            </InputGroup>

            <InputGroup style={searchStyle.separator}/>

            <InputGroup>              
              <Text style={searchStyle.label}>Listing Type:</Text>
            </InputGroup>
            <View style={searchStyle.control} >
              <Picker
                  iosHeader="Select one"
                  mode="dropdown"
                  selectedValue={this.state.selectedItem}
                  onValueChange={ (item) => ( this.updateItem(item) )} >
                  <Item label="Rent" value="Rent" />
                  <Item label="Buy" value="Buy" />
              </Picker>
            </View>

            <InputGroup style={searchStyle.separator}/>

            <InputGroup >
              <Button primary full rounded style={searchStyle.button}
                onPress={() => this._getSearchInput(this.state.searchString, this.state.selectedItem) }>
                <Text>Search</Text>
              </Button>  
            </InputGroup>
          </Form>

        </Content>
      </Container>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  onAuth: () =>  dispatch(firebaseManager.onAuthPermission()) , //redirect to loginScreen
  onGetSearchInput: (inputParams) => {
    dispatch(GetSearchInput(inputParams));
  },
  toPropertySummaryScreen: () => {
    //dispatch({ type: 'PropertySummary' } );
    dispatch( NavigationActions.navigate({ routeName: 'PropertySummary'}) )
  }
});

export default connect(
  null, 
  mapDispatchToProps
)(SearchCriteria);