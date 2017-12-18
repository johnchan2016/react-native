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
  Card,
  CardItem,
  Thumbnail
} from "native-base";
import { connect } from 'react-redux';
import { NavigationActions } from 'react-navigation';

import styles from 'App/systemSettings/styles';
import { headerStyles, pdStyles } from 'App/styles';
import { UpdatePropertyDetailIndex } from 'App/redux/actions';
import * as firebaseManager from 'App/utils/firebaseManager';
import { Separator } from 'App/components';
import images from 'App/systemSettings/images';

class PropertyDetail extends Component {

  _toPropertySummary = () => {
    this.props.toPropertySummaryScreen();
  }

  _toMapView = () => {
    this.props.toMapViewScreen();
  }

 render() {

    const property = this.props.propertyData;

    let stats = `${property.bedroom_number} bed ${property.property_type}`;
    if (property.bathroom_number) {
      var bedDescription = (property.bathroom_number > 1 ? 'bathrooms' : 'bathroom');
      stats  += `, ${property.bathroom_number} ${bedDescription}`;
    }
    const price = property.price_formatted.split(' ')[0];

    let content;
    content = (
      <Card>
        <CardItem cardBody>
          <Image style={pdStyles.image}
                source={{uri: property.img_url}} />
        </CardItem>

        <CardItem cardBody>
          <View style={pdStyles.heading}>
            <Text style={pdStyles.price}>
              {price}
            </Text>
          </View>
        </CardItem>
        <CardItem cardBody>          
            <Text style={pdStyles.title}>
              {property.title}
            </Text>
            <Separator />
        </CardItem>

        <CardItem cardBody>
          <Text style={pdStyles.description}>
            {stats}
          </Text>
        </CardItem>

        <CardItem cardBody>                  
          <Text style={pdStyles.description}>
            {property.summary}
          </Text>
        </CardItem>

      </Card>
    );

    return (

      <Container >
        <Header>
          <Left style={headerStyles.headerLT}>
            <Button
              transparent
              onPress={() => this._toPropertySummary()}>
              <Icon name="ios-arrow-round-back" style={styles.headerIcon} />
            </Button>
          </Left>
          <Body style={headerStyles.headerBD}>
            <Title>Details</Title>
          </Body>
          <Right >
            <Thumbnail source={images.icons.map}  
              onPress={() => this._toMapView() }
            />
          </Right>
        </Header>
        <Content contentContainerStyle={styles.contentContainer}>
          {content}
        </Content>
      </Container>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    propertyData: state.propertySummary.payload[state.propertySummary.index]
  };
}

const mapDispatchToProps = dispatch => ({
  toPropertySummaryScreen: () => {
    dispatch( NavigationActions.navigate({ routeName: 'PropertySummary'}) )
  },
  toMapViewScreen: () => {
    dispatch( NavigationActions.navigate({ routeName: 'MapView'}) )
  }
});

export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(PropertyDetail);