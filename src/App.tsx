import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Button from './Components/Button'
import Header from './Components/Header'
import Home from './Pages/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Home></Home>
    </div>
    // <div style={{minWidth:'100vw',maxWidth:"100vw", display:"flex", minHeight:'100vh', justifyContent:'center'}}>
    //   {/* <Button></Button> */}
    //   <Header text1="a" text2="a" text3="a" text4="a" ></Header>
    // </div>
  )
}

export default App
