import React, { Component } from 'react';
import { 
  Image, 
  View,
  TouchableHighlight,
  Text,
  TextInput
} from 'react-native';
import { 
  Button,
  Input,
  List
} from "native-base";
import { connect } from 'react-redux';
import axios  from 'axios';
import { NavigationActions } from 'react-navigation';

import { pageStyles } from 'App/styles';
import { GetPropertyData, UpdatingPage } from 'App/redux/actions';

class PaginationInput extends Component {
  constructor(props) {
    super(props);
    this.state={
      selectedPage: '1'
    }
  }

  componentWillMount() {
    this.setState({selectedPage: this.props.currentPage.toString()});
  }

  _genPropertyList = (params) => {
    if(isNaN(this.state.selectedPage)){
      alert('Not a digit');
      return;
    }

    var selectedPage = this.state.selectedPage;
    if(selectedPage == this.props.currentPage){
      return;
    }

    if (selectedPage > this.props.lastPage){
      return;
    }

    this.props.getPropertyData(params, selectedPage);
  }

  _clearText(fieldName) {
    this.refs[fieldName].wrappedInstance.clear();
    this.refs[fieldName].wrappedInstance.focus();
  } 

  _onchangeText(selectedPage){
    this.setState({selectedPage});
  }

  render(){

    const { inputParams, lastPage, currentPage} = this.props;

    return (
      <List style={pageStyles.inputList} >
        <Text style={pageStyles.text}>Page </Text>
        <Input style={pageStyles.inputList_input} 
          maxLength={4}
          ref={'textInput'}
          onChangeText={(selectedPage) => this._onchangeText(selectedPage)}
          onFocus={() => this._clearText('textInput')}
          value={this.state.selectedPage}
        >
        </Input>
        <Text style={pageStyles.text}> of {lastPage} </Text>
        <TouchableHighlight style={pageStyles.inputList_button}
            onPress={() => this._genPropertyList(inputParams)}> 
          <Text style={pageStyles.inputList_buttonText}>GO</Text>
        </TouchableHighlight>
      </List>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    inputParams: state.searchCriteria.inputParams,
    currentPage: state.propertySummary.currentPage,
    lastPage: state.propertySummary.lastPage
  };
}

const mapDispatchToProps = (dispatch) => ({
  getPropertyData: (params, currentPage) => {
    dispatch(GetPropertyData(params, currentPage));
  }
});
 
export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(PaginationInput);