import React, { Component, PureComponent  } from 'react';
import {View, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  separator: {
    height: StyleSheet.hairlineWidth,
    backgroundColor: '#8E8E8E',
  }
})

export class Separator extends PureComponent  {

  render() {
    return (
      <View style={styles.separator}>
      </View>
    )
  }
}