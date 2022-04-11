import React from 'react';
import './App.css';
import Router from './Router';
import { createTheme, ThemeProvider } from '@mui/material/styles';


const theme = createTheme({

})

function App() {
  
  return (
    <ThemeProvider theme={theme}>
      <Router />
    </ThemeProvider>
  );
}

export default App;
