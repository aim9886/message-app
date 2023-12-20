import React, {useContext} from 'react'
import { ContextApi } from '../ContextAPI/service/ContextProvider'

const Consumer = () => {
    let data=useContext(ContextApi)
    console.log(data);
  return (
    <div>
        <h1>{data}</h1>
    </div>
  )
}

export default Consumer