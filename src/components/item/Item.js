import React, { useContext, useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Alert, TextInput } from 'react-native'
import { MaterialIcons, FontAwesome, AntDesign, Feather } from '@expo/vector-icons'
import ListContext from '../context/ListContext'

export default Item = ({ id, todo, color }) => {

    const { list, setList } = useContext(ListContext)
    const [valTodo, setValTodo] = useState(todo)
    const [isEditing, setIsEditing] = useState(false)
    const [isCompleted, setIsCompleted] = useState(false)

    //Delete a todo
    function deleteTodo( todo){
        Alert.alert('Delete', `Would you like to delete "${todo}" ?`, [
            {
                text: 'Continue',
                onPress() {
                    setList( list => list.filter(li => li.id != id)) //
                }
            },{
                text: 'Cancel',
            },
        ])
    }

    function update(){
        setIsEditing(value => !value)
    }

    const chooseBackgroundColor = (defaultColor) => {
        if(isEditing)
            return 'blue'

        if(isCompleted)
            return '#00a33a'

        return defaultColor
    }
    
    return (
        <View style={{...styles.item, backgroundColor: chooseBackgroundColor(color)}}>

            <TextInput style={styles.todoText}
                    editable={isEditing}
                    onChangeText={setValTodo}
                    value={valTodo}/>

            <View style={styles.optionsBox}>

                <TouchableOpacity
                style={styles.check}
                onPress={() => setIsCompleted(val => !val)}>

                    <Feather 
                        name="check-circle"
                        size={24} 
                        color="#fff"/>

                </TouchableOpacity>

                <TouchableOpacity
                style={styles.btnDelete}
                onPress={() => deleteTodo( todo)}>

                    <MaterialIcons 
                        name='highlight-remove'
                        size={26}
                        color='#fff'/>

                </TouchableOpacity>

                <TouchableOpacity
                style={styles.btnAtualizar}
                onPress={update}>

                    {isEditing ? (
                        <AntDesign 
                        name="save" 
                        size={26} 
                        color="#D8D8E0"/>
                    ) : (
                        <FontAwesome 
                        name="edit"
                        size={26}
                        color="#fff"/>
                    )}

                </TouchableOpacity>

            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    item: {
        width: '90%',
        height: 50,
        marginBottom: 5,
        marginLeft: 20,
        marginRight: 20,
        borderRadius: 5,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    optionsBox: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        // backgroundColor: 'green',
        flex: 2,
    },
    todoText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
        paddingLeft: 5,
        flex: 5,
    },
    check: {
        // marginRight: 5,
        margin: 'auto'
    },
    btnDelete: {
        // marginRight: 5,
        margin: 'auto'
    },
    btnAtualizar: {
        // marginLeft: 5,
        marginRight: 5,
        margin: 'auto'
    },
})