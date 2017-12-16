import React, { Component } from 'react';
import { Image, View } from 'react-native';
import { 
  Button, 
  Body, 
  Content,
  Icon,
  Text,
  Input,
  List,
  ListItem
} from "native-base";
import { connect } from 'react-redux';
import { NavigationActions } from 'react-navigation';

import { plStyles } from 'App/styles';

class PropertyList extends Component {
  constructor(props) {
    super(props);
  }

  _toPropertyDetail = () => {
    this.props.toPropertyDetailScreen();
  }

  render() {
    const {data} = this.props;

    return (
      <List>
        {data.map( (property, i) => (
          <ListItem>
            <Button style={plStyles.button} underlayColor='#99d9f4'
                  key={i} onPress={ () => this._toPropertyDetail() } >
              <View style={plStyles.rowContainer}>
                <Image style={plStyles.thumb} source={{ uri: property.img_url }} />
                <View  style={plStyles.textContainer}>
                  <Text style={plStyles.price}>{property.price_formatted}</Text>
                  <Text style={plStyles.title} numberOfLines={2}>
                        {property.title}
                  </Text>
                </View>
              </View>
            </Button>
          </ListItem>
        ) )}
      </List>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  toPropertyDetailScreen: () => {
    dispatch(NavigationActions.navigate({ routeName: 'SearchDetail'}) )
  },
});
 
export default connect(
  null, 
  mapDispatchToProps
)(PropertyList);