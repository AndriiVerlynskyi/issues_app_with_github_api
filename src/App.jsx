import React, { useState } from 'react';
import axios from 'axios';
import './App.css';
import Router from './Router';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import IssuesListPage from './Pages/IssuesListPage';
import SingleIssuePage from './Pages/SingleIssuePage';


const theme = createTheme({

})

// const issue = {
//   name: 'Title',
//   label: 1,
//   asignee: 'any',
//   numberOfComments: 10
// }

//Here I emitated server respond

function App() {
  
  return (
    <ThemeProvider theme={theme}>
      <Router />
    </ThemeProvider>
    // <IssuesListPage issuesList={issuesList}/>
  );
}

export default App;
