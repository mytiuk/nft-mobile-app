import { StyleSheet, Text, View } from 'react-native'
import { useState} from 'react'
import { EthPrice, NFTTitle } from './SubInfo'
import { COLORS, SIZES, FONTS } from '../constants'

export const DetailsDesc = ({data}) => {
  const [text, setText] = useState(data.description.slice(0, 100))
  const [readMore, setReadMore] = useState(false)

  return (
    <>
      <View style={styles.desc}>
        <NFTTitle 
          title={data.name} 
          subTitle={data.creator}
          titleSize={SIZES.extraLarge}
          subTitleSize={SIZES.font}
          />
          <EthPrice price={data.price}/>
      </View>
      <View style={styles.info}>
        <Text style={styles.info.title}>Description</Text>
        <View style={styles.info.textCont}>
          <Text style={styles.info.text}>
            {text} 
            {!readMore && '...'}
            <Text style={styles.info.text1} 
            onPress={() => {
              if(!readMore) {
                setText(data.description)
                setReadMore(true)
              } else {
                setText(data.description.slice(0, 100))
                setReadMore(false)
              }
            }}
            >{readMore ? ' Show Less' : 'Read More'}</Text>
          </Text>
        </View>
      </View>
    </>
  )
}



const styles = StyleSheet.create({
  desc: {
    width: '100%', 
    flexDirection: 'row',
    justifyContent: 'space-between',
   
  },

  info: {
    marginVertical: SIZES.extraLarge * 1.5,
    title: {
      fontSize: SIZES.font,
      fontFamily: FONTS.semiBold,
      color: COLORS.primary
    },
    textCont: {
      marginTop: SIZES.base
    },
    text: {
      fontSize: SIZES.small,
      fontFamily: FONTS.regular,
      color: COLORS.secondary,
       lineHeight: SIZES.large
    },
    text1: {
      fontSize: SIZES.small,
      fontFamily: FONTS.semiBold,
      color: COLORS.primary,
    }

  }
})