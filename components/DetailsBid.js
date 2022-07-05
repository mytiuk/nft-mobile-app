import { StyleSheet, Text, View, Image } from 'react-native'
import { EthPrice } from './SubInfo'
import { COLORS, SIZES, FONTS } from '../constants'

export const DetailsBid = ({data}) => {
  return (
    <View style={styles.list}>
      <Image style={styles.bidImg} source={data.image} resizeMode='contain'/>
      <View>
        <Text style={styles.bidText}>Bid placed by {data.name}</Text>
        <Text style={styles.bidDate}>{data.date}</Text>
      </View>
      <EthPrice price={data.price}/>
    </View>
  )
}

const styles = StyleSheet.create({
  list: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: SIZES.base * 2,
    marginVertical: SIZES.base
  },

  bidImg: {
    width: 48, 
    height: 48
  }, 

  bidText: {
    fontFamily: FONTS.semiBold,
    fontSize: SIZES.small,
    color: COLORS.primary
  },
  
  bidDate: {
    fontFamily: FONTS.regular,
    fontSize: SIZES.small - 2,
    color: COLORS.secondary,
    marginTop: 3
  }
})