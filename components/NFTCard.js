import { StyleSheet, Image, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { COLORS, SIZES, SHADOWS, assets } from '../constants/index.js'
import { CircleButton, RectButton } from './Button'
import { SubInfo, EthPrice, NFTTitle } from './SubInfo'

export const NFTCard = ({data}) => {
  const navigator = useNavigation()
 
  return (
    <View style={styles.card}>
      <View style={{width: '100%', height: 250}}>
        <Image source={data.image} style={styles.img}/>
        <CircleButton imgUrl={assets.heart}/>
      </View>
      <SubInfo/>
      <View style={{width: '100%', padding: SIZES.font}}>
        <NFTTitle 
          title={data.name} 
          subTitle={data.creator}
          titleSize={SIZES.large}
          subTitleSize={SIZES.small}
        />
        <View style={{
          marginTop: SIZES.font,
           flexDirection: 'row', 
           justifyContent: 'space-between',
           alignItems: 'center',
           }}>
            <EthPrice price={data.price}/>
            <RectButton 
              minWidth={120} 
              fontSize={SIZES.font} 
              handlePress={() => navigator.navigate('Details', {data})}/>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: COLORS.white,
    borderRadius: SIZES.font,
    marginBottom: SIZES.extraLarge,
    margin: SIZES.base,
    ...SHADOWS.dark
  },

  img: {
    width: '100%',
    height: '100%', 
    borderTopLeftRadius: SIZES.font,
    borderTopRightRadius: SIZES.font,
    resizeMode: 'cover'
  }
})