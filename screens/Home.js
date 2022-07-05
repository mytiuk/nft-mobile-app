import { StyleSheet, SafeAreaView, FlatList, View, Platform } from 'react-native'
import React, { useState } from 'react'
import { COLORS, NFTData} from '../constants'
import { HomeHeader, FocusedStatusBar } from '../components/index.js'
import { NFTCard} from '../components/NFTCard'

export const Home = () => {
  const [sortData, setSortData] = useState(NFTData)

  const searchHandle = (value) => {
    if(!value.trim()) return setSortData(NFTData)
     const newData = NFTData.filter(item => {
     const title = item.name.toLowerCase()
     const text = value.toLowerCase().trim()
     return  title.includes(text)
    })
    setSortData(newData)
  }
     
  return (
    <SafeAreaView style={{flex: 1}}>
      <FocusedStatusBar 
        backgroundColor={COLORS.primary} 
        barStyle={ Platform.OS === 'android' ? 'light-content': 'dark-content' } />
      <View style={{flex: 1}}>
        <View style={{zIndex: 1}}>
          <FlatList
            data={sortData}
            renderItem={({item}) => (<NFTCard data={item}/>)}
            keyExtractor={(item) => item.id}
            showsVerticalScrollIndicator={false}
            ListHeaderComponent={<HomeHeader notFound={sortData.length} onSearch={searchHandle}/>}
          />
        </View>
        <View style={styles.box}>
          <View style={styles.box2}/>
          <View style={styles.box3}/>
        </View>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({ 
  box: {
    position: 'absolute',
    top: 0, 
    bottom: 0,
    right: 0, 
    left: 0, 
  },

  box2: {
    height: 300,
    backgroundColor: COLORS.primary,
  },

  box3: {
    flex: 1,
   }
})