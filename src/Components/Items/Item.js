import React from 'react'
import { View, Text,ImageBackground } from 'react-native'
const Item = ({name,address}) => {
    const image = { uri: `${address}` };
    return (
        <>
            <View>
                <View style={{borderRadius:50,marginTop:10}}>
                    <ImageBackground source={image} style={{ width: 80, height: 77,marginHorizontal:5 }} imageStyle={{borderRadius:15,}}>
                        <Text style={{color:'white',alignSelf:'center',fontWeight:'400',marginTop:55}}>{name}</Text>
                    </ImageBackground>
                </View>
            </View>
        </>
    )
}

export default Item
