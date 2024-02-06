import React from 'react'
import '../styles/css/app.css'
import Header from './components/header/Header'
import Main from './components/main/Main';
import Footer from './components/footer/Footer';


function App() {
  
  const [theme, setTheme] = React.useState('light');

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  }

  return (
    <div className={`app ${theme}`}>
      <Header toggleTheme={toggleTheme} theme={theme}/>
      <Main />
      <Footer theme={theme}/>
    </div>

  )
}

export default App
