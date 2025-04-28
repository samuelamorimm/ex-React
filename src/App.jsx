import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './index.css'
import SideBar from './components/SideBar'
import NameArea from './components/nameArea'

function App() {
  const [count, setCount] = useState(0)

  return (
    

    <div id='portfolio'>
      <NameArea/>
      <SideBar/>
      
    </div>
  )
}

export default App
