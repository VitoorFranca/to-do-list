import React, { useContext, useState } from 'react'
import { Text, View, TextInput, TouchableOpacity, StyleSheet } from 'react-native'
import ListContext from '../context/ListContext'

const Input = () => {

    const [todo, onChangeTodo] = useState('')
    const { setList } = useContext(ListContext)

    //Generates a random color
    const randomColor = () => {
        const colors = ['#5810F8', '#3068F8', '#F86018']
        const colorRandom = colors[Math.floor(Math.random() * colors.length)]
        return colorRandom
    }

    //Add a new todo
    function addTodo(){
        if(todo.length > 0)
        setList(li => [...li, {
            id: ( li[li.length - 1] ) ? li[li.length - 1].id + 1 : 1,
            todo: todo,
            color: randomColor()
        }])

        onChangeTodo('')
    }

    return (
        <View style={styles.coitainerInput}>
            <View style={styles.boxInput}>

                <TextInput style={styles.input}
                    onChangeText={onChangeTodo}
                    value={todo}
                    placeholder='something'
                    placeholderTextColor='#D8D8E0'
                    placeholder="Add a todo"/>

                <TouchableOpacity
                    style={styles.btnAdd}
                    onPress={addTodo}>

                    <Text style={styles.textBtnAdd}>Add Todo</Text>

                </TouchableOpacity>

            </View>
        </View>
    )
}

export default Input

const styles = StyleSheet.create({
    coitainerInput: {
        width: '100%',
        height: 90,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 15,
    },

    boxInput: {
        width: '80%',
        height: 40,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },

    input: {
        width: '80%',
        height: 40,
        borderWidth: 3,
        borderColor: '#5810F8',
        borderTopLeftRadius: 5,
        borderBottomLeftRadius: 5,
        paddingLeft: 5,
        fontSize: 14,
        fontWeight: 'bold',
        color: '#D8D8E0',
    },

    btnAdd: {
        height: 40,
        width: '20%',
        backgroundColor: '#5810F8',
        borderTopRightRadius: 5,
        borderBottomRightRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textBtnAdd: {
        color: '#D8D8E0',
        fontSize: 16,
        fontWeight: 'bold',
    },
})