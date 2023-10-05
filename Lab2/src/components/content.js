
import React from "react"

//E3 (a)
const Content = () => {
    //E2 (a)
    return ( <><h1>Hello world!</h1>
        {/*returns time value */}
        <h2>It is {new Date().toLocaleTimeString()}</h2></> );
}
export default Content;