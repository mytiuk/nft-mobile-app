import { StyleSheet, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { COLORS, SIZES, FONTS, SHADOWS } from '../constants'

export const CircleButton = ({imgUrl, handlePress, ...props}) => {
  
  return (
    <TouchableOpacity style={[styles.circle, {...props}]} onPress={handlePress}>
      <Image source={imgUrl} resizeMode='contain' style={styles.circle.btn}/>
    </TouchableOpacity>
  )
}

export const RectButton = ({minWidth, fontSize, handlePress, ...props}) => {
  return (
    <TouchableOpacity style={[styles.rec, { minWidth: minWidth, ...props}]} onPress={handlePress}>
      <Text style={[styles.rec.txt, {fontSize: fontSize}]}>Place a bid</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  circle: {
    width: 40,
    height: 40,
    top: 10,
    right: 10,
    backgroundColor: COLORS.white,
    position: 'absolute',
    borderRadius: SIZES.extraLarge,
    alignItems: 'center',
    justifyContent: 'center',
    ...SHADOWS.light,
      btn: {
        width: 24, 
        height: 24,
     }
  },

  rec: {
    backgroundColor: COLORS.primary,
    borderRadius: SIZES.extraLarge,
    minWidth: 120,
    padding: SIZES.small,
      txt: {
        fontFamily: FONTS.semiBold,
        color: COLORS.white,
        textAlign: 'center'
      }
    },
})