import React, { Component } from 'react';
import { Image, View, TouchableHighlight } from 'react-native';
import { 
  Button, 
  Body, 
  Content,
  Icon,
  Text,
  Input,
} from "native-base";
import { connect } from 'react-redux';
import { NavigationActions } from 'react-navigation';

import { plStyles } from 'App/styles';
import { Separator } from 'App/components';
import { UpdatePropertyDetailIndex } from 'App/redux/actions';

class PropertyList extends Component {

  _toPropertyDetail = (i) => {
    this.props.toPropertyDetailScreen();
    this.props.updatePropertyDetailIndex(i);
  }

  render() {
    const {data} = this.props;
    var count = 0;

    return (
      <Content>
        {data.map( (property, i) => (
          <View key={i}>
          <TouchableHighlight light
                key={i} onPress={ () => this._toPropertyDetail(i) } >
            <View style={plStyles.rowContainer}>
              <Image style={plStyles.thumb} source={{ uri: property.img_url }} />
              <View  style={plStyles.textContainer}>
                <Text style={plStyles.price}>
                  {property.price_formatted}
                </Text>
                <Text style={plStyles.title} numberOfLines={2}>
                      {property.title}
                </Text>
              </View>
            </View>
          </TouchableHighlight>
          <Separator />
          </View>
        ) )}
      </Content>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  toPropertyDetailScreen: () => {
    dispatch( NavigationActions.navigate({ routeName: 'PropertyDetail'}) )
  },
  updatePropertyDetailIndex: (index) => {
    dispatch(UpdatePropertyDetailIndex(index));
  }
});
 
export default connect(
  null, 
  mapDispatchToProps
)(PropertyList);