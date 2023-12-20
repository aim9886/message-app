// How to Pass data from Child to Parent => Interview Question

import React, { useState } from "react";
import "./style.css"
import Callback from "./Callback";

//parent

export default function App() {
    const [UIcolor, setUIColor] = useState(null);

    //our callback function

    const getColor = (color) => {
        setUIColor(color);
    };

    return(
        <div className="App">
            <div
            className="App_color_container"
            style={{background: `${UIcolor}`}}
        ></div>
        <Callback getColor={getColor} />
        </div>
    );
}
