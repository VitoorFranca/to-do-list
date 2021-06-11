import React, { createContext } from 'react'
import { useList } from '../../hooks/useList';

const ListContext = createContext()

export const ListProvider = props => {

    const [ list, setList] = useList();

    return (
        <ListContext.Provider value={{ list, setList}}>
            {props.children}
        </ListContext.Provider>
    )
}

export default ListContext