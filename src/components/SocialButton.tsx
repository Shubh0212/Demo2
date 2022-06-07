import {View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native';
import React from 'react';
import {LocalImage, normalize} from '../utils';

export default function CustomButton(props:any) {
  const {title, containerStyle} = props
  return (
    <TouchableOpacity style={[styles.buttonTouchableStyle, containerStyle]}>
      <Image source={LocalImage.FacebookImg} style={styles.buttonIconImg} />
      <Text style={styles.buttonIconText}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  buttonTouchableStyle: {
    height: normalize(54),
    margin: normalize(16),
    flexDirection: 'row',
    borderRadius: normalize(10),
    width: normalize(358),
    left: normalize(10),
  },
  buttonIconImg: {
    height: normalize(24),
    width: normalize(24),
    margin: normalize(15),
  },
  buttonIconText: {
    fontSize: normalize(20),
    color: 'white',
    fontWeight: '700',
    marginTop: normalize(14),
    marginLeft: normalize(10),
  },
});
