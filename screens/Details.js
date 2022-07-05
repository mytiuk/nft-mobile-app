import { StyleSheet, NativeModules , Text, View, StatusBar, Image, FlatList, Platform } from 'react-native'
import { COLORS, SIZES, SHADOWS, FONTS, assets} from '../constants'
import { SubInfo, FocusedStatusBar, DetailsDesc, DetailsBid } from '../components'
import { CircleButton, RectButton } from '../components/Button'
import { useState, useEffect } from 'react'

const { StatusBarManager } = NativeModules

const DetailsHeader = ({data, navigation}) => {
  const [barHeight, setBarHeight] = useState(0)

  useEffect(() => {

    if(Platform.OS === 'ios') {
      StatusBarManager.getHeight(({height}) => setBarHeight(height))
    } else if(Platform.OS === 'android') {
      setBarHeight(StatusBar.currentHeight)
    }
    
  }, [])

  return (
    <View style={{ width: '100%', height: 373 }}>
      <Image source={data.image} resizeMode='cover' style={{width: '100%', height: '100%'}} />
      <CircleButton 
        imgUrl={assets.left} 
        handlePress={() => navigation.goBack()}
        left={15}
        top={barHeight + 10}
      />
      <CircleButton 
        imgUrl={assets.heart} 
        right={15}
        top={barHeight + 10}
      />
    </View>
  )
}

export const Details = ({route, navigation}) => {
 const { data } = route.params

  return (
    <View style={{flex: 1}}>
      <FocusedStatusBar 
        barStyle={ Platform.OS === 'android' ? 'dark-content': 'light-content' }  
        backgroundColor='transparent'
        translucent={true} 
     />
      <View style={styles.dBtn}>
        <RectButton minWidth={170} fontSize={ SIZES.large} {...SHADOWS.dark}/>
      </View>
      <View style={{width: '100%', height: '100%'}}>
      <FlatList 
        data={data.bids}
        renderItem={({item})=> (<DetailsBid data={item}/>)}
        keyExtractor={(item) => item.date + Date.now().toString()}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom: SIZES.extraLarge * 3}}
        ListHeaderComponent={() => ( 
            <>
              <DetailsHeader data={data} navigation={navigation}/>
              <SubInfo/>
              <View style={{padding: SIZES.font}}>
                <DetailsDesc data={data}/>

                {data.bids.length > 0 && (
                  <Text style={{fontSize: SIZES.font, fontFamily: FONTS.semiBold, color: COLORS.primary}}>
                    Current Bid
                  </Text>
                )}
              </View>
            </>
          ) 
        }
      />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  dBtn: {
    width: '100%',
    position: 'absolute',
    bottom: 0,
    paddingVertical: SIZES.font,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    zIndex: 1,
  }
})