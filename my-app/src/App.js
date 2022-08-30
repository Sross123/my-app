import React from 'react'

export default function App(){

    const [thingsArray, setThingsArray] = React.useState(["Thing 1", "Thing 2"])
    const addItems = () =>{
        setThingsArray(prevThingsArray => (
            [...prevThingsArray, `Thing ${prevThingsArray.length + 1}`]
        ))
    }
    const thingsElements = thingsArray.map((thing)=>{
        return <p key={thing}>{thing}</p>
    })
    }
    return(
        <div>
        <button onClick={addItems}>Add Items</button>
        {thingsElements}
    </div>
  )
}
