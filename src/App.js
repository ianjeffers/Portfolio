import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './components/GlobalStyles';
import { lightTheme, darkTheme } from './components/Themes';
import Toggle from './components/Toggle';
import Cursor from './components/Cursor';
//... rest of your imports

function App() {
  const [theme, setTheme] = useState('light');
  const themeToggler = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light')
  }

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <>
        <GlobalStyles/>
        <Toggle theme={theme} toggleTheme={themeToggler} />
        <Cursor />
        <nav>
          {/*... rest of your code*/}
        </nav>
      </>
    </ThemeProvider>
  );
}

export default App;
