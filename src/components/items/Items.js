import React from 'react'
import { StyleSheet, FlatList } from 'react-native'

import Item from '../item/Item'

const Items = ({ list }) => {
    return (
        <FlatList
        style={styles.items}
        data={list}
        keyExtractor={item => item.id}
        renderItem={ ({ item }) => <Item id={item.id} todo={item.todo} color={item.color} /> }
        >
        </FlatList>
    )
}

export default Items

const styles = StyleSheet.create({
    items: {
    },
})
