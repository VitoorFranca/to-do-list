import React, { createContext, useState } from 'react'
import listTodo from '../data/list'

const ListContext = createContext()

export const ListProvider = props => {

    const [list, setList] = useState(listTodo)

    return (
        <ListContext.Provider value={{ list, setList}}>
            {props.children}
        </ListContext.Provider>
    )
}

export default ListContext