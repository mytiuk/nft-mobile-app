import { StyleSheet, Text, View, Image, TextInput } from 'react-native'
import { COLORS, FONTS, SIZES, assets } from '../constants'

export const HomeHeader = ({onSearch, value, notFound}) => {
  
  return (
    <View style={styles.head}>
      <View style={styles.headBox}>
        <Image source={assets.logo} resizeMode='contain' style={styles.headBox.img} />
        <View style={styles.headBox.user}>
          <Image source={assets.person01} resizeMode='contain' style={{width: '100%', height: '100%'}}/>
          <Image source={assets.badge} resizeMode='contain' style={{width: 15, height: 15, position: 'absolute', bottom: 0, right: 0}}/>
        </View>
       
      </View>
      <View style={{marginVertical: SIZES.font}}>
        <Text style={{fontFamily: FONTS.regular, fontSize: SIZES.small, color: COLORS.white}}>
          Hello, Victoria! 👋
        </Text>
        <Text style={{fontFamily: FONTS.bold, fontSize: SIZES.large, color: COLORS.white, marginTop: SIZES.base / 2}}>
          Let's find a masterpiece
        </Text>
      </View>
      <View style={{marginTop: SIZES.font}}>
        <View style={styles.search}>
          <Image
          source={assets.search}
          resizeMode='contain'
          style={{width: 20, height: 20, marginRight: SIZES.base}}
          />
          <TextInput placeholder='Search NFTs' style={ {flex: 1} } onChangeText={ onSearch } autoCapitalize='none'/>
        </View>
          {!notFound && <View style={styles.empty}><Text style={styles.empty.text}>Not Found</Text></View>   }
      </View>
    </View>
  )
}


const styles = StyleSheet.create({
  head: {
    backgroundColor: COLORS.primary,
    padding: SIZES.font
  },

  headBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    img: {
      width: 90,
      height: 25
    },

    user: {
      width: 45,
      height: 45,
    }
  },
  
  search: {
    width: '100%',
    borderRadius: SIZES.font,
    backgroundColor: COLORS.gray,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: SIZES.font,
    paddingVertical: SIZES.base
  }, 

  empty: {
    width: '100%',
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    text: {
      color: COLORS.white,
      fontSize: SIZES.font,
    }
  }
})