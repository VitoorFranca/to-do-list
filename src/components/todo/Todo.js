import React, { useContext } from 'react'
import { StyleSheet, View, Text, FlatList } from 'react-native'

import ListContext from '../context/ListContext'

import Input from '../input/Input'
import Items from '../items/Items'

const Todo = () => {

        const { list } = useContext(ListContext)

    return (
            <View style={styles.geral} >
                <Text style={styles.tittle}>What's the Plan for Today?</Text>

                <Input />

                <Items style={styles.items} list={list} />

            </View>
    )
}

export default Todo

const styles = StyleSheet.create({
    geral: {
        width: '90%',
        minHeight: 550,
        maxHeight: 700,
        borderRadius: 10,
        backgroundColor: '#201020',
        paddingTop: 10,
    },
    items: {
        margin: 'auto',
    },
    tittle: {
        fontSize: 26,
        fontWeight: 'bold',
        color: '#fff',
        textAlign: 'center',
        marginVertical: 5,
    },
})