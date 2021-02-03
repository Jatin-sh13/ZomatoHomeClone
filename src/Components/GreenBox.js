import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
const GreenBox = () => {
    return (
        <>
            <View style={styles.Box}>
                <Image
                    source={require('../Images/shiled_icon.png')}
                style={{height:20,width:20,marginLeft:20,margin:10}} />
                <Text style={{color:'grey'}}>
                    Bird flu virus is sensitive to heat,so it is safe to consume cooked chicken and meat.
            </Text>
            </View>
        </>
    )
}
const styles = StyleSheet.create({
    Box: {
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'row',
        backgroundColor: '#f5fff5',
        padding:10,
        height: 60,
        marginTop: 20,
        borderWidth: 1.5,
        borderRadius: 5,
        borderColor: '#ccffe0'
    }
})
export default GreenBox
