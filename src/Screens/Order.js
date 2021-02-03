import React from 'react'
import { View, Text, StyleSheet, ScrollView,Image } from 'react-native'
import { Icon, Item, Input, Badge } from 'native-base'
import { color } from 'react-native-reanimated'
import GreenBox from '../Components/GreenBox'
import Category from '../Components/Category'
const Order = () => {
    return (
        <View style={styles.container}>
            <View style={styles.container1}>
                <Icon name="location-pin" type="SimpleLineIcons" style={{ fontSize: 28 }} />
                <Text style={styles.text}>other - Hastsal Village, Delhi</Text>
                <Icon name="qrcode-scan" type="MaterialCommunityIcons" style={{ fontSize: 25, marginVertical: 3 }} />
            </View>
            <View style={styles.inputCon}>
                <Item rounded style={styles.item} >
                    <Icon name="search" type="EvilIcons" style={{ color: 'red', fontSize: 30 }} />
                    <Input placeholder='Resturant name cuisine, or a dish....' placeholderTextColor="#a3a2a2" style={styles.input} />
                </Item>
            </View>
            <View style={{paddingVertical:5}}>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                    <View style={styles.badge}>
                        <Icon name="md-filter-outline" type="Ionicons" style={{ fontSize: 15, marginTop: 1, marginHorizontal: 2 }} />
                        <Text style={styles.badgetext}>Filters</Text>
                    </View>
                    <View style={styles.badge}>
                        <Text style={styles.badgetext}>Rating 4.O +</Text>
                    </View>
                    <View style={styles.badge}>
                        <Text style={styles.badgetext}>Safe And Hygienic</Text>
                    </View>
                    <View style={styles.badge}>
                        <Text style={styles.badgetext}>Takeaway</Text>
                    </View>
                    <View style={styles.badge}>

                        <Text style={styles.badgetext}>Fastest Delivery</Text>
                    </View>
                </ScrollView>
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
            <View>
                <GreenBox />
            </View>
            <View style={{elevation:20}}>
                <Image
                    source={require('../Images/IMG1.jpg')} style={{width:"100%",height:200,marginTop:10,borderRadius:10}} />
            </View>
            <View>
                <Category />
            </View>
            </ScrollView>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 15,
        backgroundColor: 'white'
    },
    container1: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    text: {
        fontSize: 19,
        letterSpacing:0.5,
        fontWeight:"700",
        marginVertical: 3,
        marginLeft: -30,
        borderBottomColor: 'grey',
        borderBottomWidth: 1.5,
    },
    item: {
        elevation: 4,
        backgroundColor: 'white',
        height: 45
    },
    inputCon: {
        marginTop: 20,
    },
    badge: {
        flexDirection: 'row',
        borderWidth: 0.2,
        borderColor: 'grey',
        backgroundColor: 'white',
        height: 30,
        padding: 5,
        paddingHorizontal: 15,
        marginTop: 20,
        marginHorizontal: 5,
        borderRadius: 50
    },
    badgeCon: {
        flexDirection: 'row'
    },
    badgetext: {
        color: 'grey',
        fontSize: 13
    }
})

export default Order
