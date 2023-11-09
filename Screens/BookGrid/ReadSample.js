import React from 'react';
import {Image, ScrollView, View} from 'react-native';

function Preview(props) {
  const {route} = props;
  const {item} = route.params;

  return (
    <View
      style={{
        width: '100%',
        height: '100%',
      }}>
      <Image
        source={{uri: item.preview}}
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'fill',
        }}
      />
    </View>
  );
}

export default Preview;
