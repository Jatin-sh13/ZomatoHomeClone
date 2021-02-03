import React from 'react'
import { View, Text, ImageBackground } from 'react-native'
import Item from './Items/Item'
const Category = () => {
    return (
        <>
            <View>
                <View>
                    <Text style={{ fontWeight: "700", fontSize: 20, letterSpacing: 0.5, marginTop: 20 }}>Eat what makes you happy</Text>
                </View>
                <View style={{flexDirection:'row',flexWrap:'wrap'}}>
                    <Item name='Burger' address='https://images.unsplash.com/photo-1551782450-a2132b4ba21d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80' />
                    
                    <Item name='Pizza' address='https://images.unsplash.com/photo-1513104890138-7c749659a591?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80' />
                    
                    <Item name='Paneer' address='https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1776&q=80' />
                    
                    <Item name='Rolls' address='https://images.unsplash.com/photo-1563282397-db1ac3a6bf86?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80' />
                    <Item name='Chicken' address='https://images.unsplash.com/photo-1574672280600-4accfa5b6f98?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80' />
                    
                    <Item name='Momos' address='https://images.unsplash.com/photo-1563245372-f21724e3856d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1129&q=80' />
                    
                    <Item name='Fries' address='https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80' />
                    
                    <Item name='Cake' address='https://images.unsplash.com/photo-1587015692860-f3a8481e9865?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=409&q=80' />
                    <Item name='Biryani' address='https://images.unsplash.com/photo-1505253758473-96b7015fcd40?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=345&q=80' />
                    <Item name='Paratha' address='https://images.unsplash.com/photo-1586524068358-77d2196875e7?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80' />
                    <Item name="Shakes" address='https://images.unsplash.com/photo-1542444592-e6880e286bb9?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=311&q=80' />
                    <Item name="Noodles" address='https://images.unsplash.com/photo-1552611052-33e04de081de?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80' />
                </View>
            </View>
        </>
    )
}
export default Category
