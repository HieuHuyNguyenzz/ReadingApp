import React, {Component} from 'react';
import {TouchableOpacity, Text, Image, View} from 'react-native';
import {Icon} from 'react-native-vector-icons/Icon';
import {images, icons, colors, fontSize} from '../constants/index';

function UIHeader(props) {
  const {title} = props;
  return (
    <View
      style={{
        height: 55,
        backgroundColor: '#b483eb',
        borderRadius: 3,
      }}>
      <Text
        style={{
          fontSize: 20,
          alignSelf: 'center',
          lineHeight: 45,
          color: 'white',
        }}>
        {title}
      </Text>
    </View>
  );
}
export default UIHeader;
