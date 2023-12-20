import React, { createContext , useState } from "react"

export let ContextApi=createContext()

const ContextProvider = ({children}) => {
  let [state , setState]=useState("aimanth")
  return (
    <ContextApi.Provider value={state}>{children}</ContextApi.Provider>
  )
}

export default ContextProvider