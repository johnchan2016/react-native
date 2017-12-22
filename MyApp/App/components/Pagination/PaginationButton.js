import React, { Component } from 'react';
import { Image, 
  View,
  TouchableHighlight,
  Text 
} from 'react-native';
import { connect } from 'react-redux';
import axios  from 'axios';
import { NavigationActions } from 'react-navigation';

import { pageStyles } from 'App/styles';
import { GetPropertyData } from 'App/redux/actions';

class PaginationButton extends Component {
  constructor(props) {
    super(props);
  }

  _genPropertyList = (params, selectedPage) => {
    if(this.props.currentPage == selectedPage){
      return;
    }

    this.props.getPropertyData(params, selectedPage);
  }

  render(){

    const { inputParams, selectedPage, pageText } = this.props;

    return (
      <TouchableHighlight  style={pageStyles.button} onPress={() => this._genPropertyList(inputParams, selectedPage)}>
        <Text style={pageStyles.text}>{pageText}</Text>
      </TouchableHighlight >
    )
  }
}

const mapStateToProps = (state) => {
  return {
    currentPage: state.propertySummary.currentPage,
    inputParams: state.searchCriteria.inputParams
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
)(PaginationButton);