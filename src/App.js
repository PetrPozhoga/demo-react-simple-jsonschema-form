import React from "react"
import jsonSchema from "./schema.json" // Your custom json schema
import './App.scss'
import './styles/fonts.scss'
import "react-simple-json-schema-form/build/styles.css"
import JsonParadiseSchema from "react-simple-json-schema-form"

function App() {

  const send = (params, properties) => {
    // params - received values ​​entered by the user after onSubmit
    console.log(params)
    console.log(properties)
  }

  return (
    <div className="App">
      <JsonParadiseSchema schema={ jsonSchema } onSubmit={ send }/>
    </div>
  )
}

export default App