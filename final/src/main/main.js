import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
import getPokemonsPage from '../actions'
const Main = () => {
    const data = useSelector(state => state.data)
    const viewData = data.map(el => <p key={el.id}>{el.name}</p>)
    return (<div>
        {viewData}
    </div>)    
}

export default Main