import React, { Component } from 'react'
import {
  Dimensions
} from 'react-native';

var width =  Dimensions.get('window').width;
var height = Dimensions.get('window').height;
var scale = Dimensions.get('window').scale;

module.exports = {
  ScreenSize:{
    getScale : scale,
    getWidth : width,
    getHeight : height
  },
  HeaderIconSize:{
    width: 0.06 * width * scale,
    height:0.05 * height * scale
  }
};