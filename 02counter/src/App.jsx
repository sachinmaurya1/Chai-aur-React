import React from 'react'
import { useState } from 'react'

function App() {

  let [counter, setcounter] = useState(5)
  

  let addvalue = () =>{
console.log(counter+1)
if (counter <=20) {
  setcounter(prevcounter => prevcounter+1)
  setcounter(prevcounter => prevcounter+1)
  setcounter(prevcounter => prevcounter+1)
  setcounter(prevcounter => prevcounter+1)

}

  
  }

 let subValue = () =>{
  console.log(counter-1)

  if (counter>=0) {
    setcounter(counter -1)
  }
  
 }
  return (
    <>
      <h1> Chai aur React</h1>
      <h2> Counter value : {counter} </h2>

      <button onClick={addvalue}> Add Value</button>
      <br/>
      <button onClick={subValue}> Remove Value</button>
    </>
  )
}

export default App

