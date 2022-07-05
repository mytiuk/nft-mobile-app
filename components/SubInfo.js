import { StyleSheet, Text, View, Image } from 'react-native'
import { SIZES, FONTS, COLORS, SHADOWS, assets } from '../constants'

export const NFTTitle = ({title, subTitle, titleSize, subTitleSize}) => {
  return (
    <View>
      <Text style={{fontFamily: FONTS.semiBold, fontSize: titleSize, color: COLORS.primary}}>{title}</Text>
      <Text style={{fontFamily: FONTS.regular, fontSize: subTitleSize, color: COLORS.primary}}>{subTitle}</Text>
    </View>
  )
}

export const EthPrice = ({price}) => {
  return (
    <View style={{flexDirection: 'row', alignItems: 'center'}}>
      <Image source={assets.eth} resizeMode='contain' style={{width: 20, height: 20, marginRight: 2}}/>
      <Text style={{fontFamily: FONTS.medium, fontSize: SIZES.font, color: COLORS.primary}}>{price}</Text>
    </View>
  )
}

export const ImgCmp = ({url, index}) => {
  return (
    <Image
      source={url}
      resizeMode='contain'
      style={{width: 48, height: 48, marginLeft: index === 0 ? 0 : -SIZES.font }}
    />
  )
}

export const People = () => {
  return (
    <View style={styles.people}>
      {[assets.person02, assets.person03, assets.person04]
        .map((imgUrl, index) => (
          <ImgCmp url={imgUrl} index={index} key={index.toString()}/>
        ))}
    </View>
  )
}

export const EndDate = () => {
  return (
    <View style={styles.end}>
      <Text style={styles.end.text}>End in</Text>
      <Text style={styles.end.text2}>12h 30m</Text>
    </View>
  )
}

export const SubInfo = () => {
  return (
    <View style={styles.sub}>
      <People/>
      <EndDate/>
    </View>
  )
}

const styles = StyleSheet.create({
  sub: {
    width: '100%',
    paddingHorizontal: SIZES.font,
    marginTop: -SIZES.extraLarge,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  people: {
    flexDirection: 'row',
  },

  end: {
    paddingHorizontal: SIZES.font,
    paddingVertical: SIZES.base,
    backgroundColor: COLORS.white,
    justifyContent: 'center',
    alignItems: 'center',
    ...SHADOWS.light,
    elevation: 1,
    maxWidth: '50%',
    borderRadius: SIZES.font,
    text: {
      fontFamily: FONTS.regular, 
      fontSize: SIZES.small,
      color: COLORS.primary
    },

    text2: {
      fontFamily: FONTS.semiBold,
      fontSize: SIZES.medium,
      color: COLORS.primary
    }
  },
})