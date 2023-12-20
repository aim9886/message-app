// Lazy Loading

import React, { Suspense } from 'react'
import Comp1 from './Comp1'
let Comp22=React.lazy(()=>import("./Comp2"))

const App = () => {
  return (
    <div>
        <Comp1/>
        <Suspense fallback={<h1>Please Wait Content is Loading</h1>}>
            <Comp22/>
        </Suspense>
    </div>
  )
}

export default App