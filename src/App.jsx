import React, { useState } from 'react'
import 'normalize-css'
import './assets/styles/global.scss'
import Routes from './Routes'
import styled,  {ThemeProvider} from "styled-components"
import {lightTheme, darkTheme} from "./themes"

const StyledApp = styled.div`

`
function App() {
  const [theme, setTheme] = useState('light')
  const themeToggler = () =>
    setTheme(theme === 'light') ? setTheme('dark') : setTheme('light')
  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>

      <div className="App">
        <Routes />
      </div>
    )
    </ThemeProvider>
}

export default App
