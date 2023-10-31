import './App.css'
import React, { useState } from 'react'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Todolist from './components/Todolist'

export default function App() {

  const [value, setValue] = useState("home")

  const handleChange = (event, value) => {
    setValue(value)
  }

  return (
    // <Todolist />
    <div className="App">
      <Tabs value={value} onChange={handleChange}>
        <Tab value="home" label="Home" />
        <Tab value="about" label="About" />
        <Tab value="contact" label="Contact" />
        <Tab value="todo" label="Todos" />
      </Tabs>
      {value === "home" && <Home />}
      {value === "about" && <About />}
      {value === "contact" && <Contact />}
      {value === "todo" && <Todolist />}
    </div>
  )
}

// export default App
