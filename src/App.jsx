import React from 'react';
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
const issuesData = {
  issuesList: [
  {
    name: 'Title',
    label: 1,
    asignee: 'user',
    numberOfComments: 10,
    status: 'fulfilled',
    body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam suscipit sunt vero libero temporibus perspiciatis earum, quae doloribus expedita nostrum sed! Pariatur delectus repellendus iure? Odit numquam consectetur necessitatibus repudiandae nisi recusandae accusantium labore itaque quaerat laborum qui soluta consequatur corrupti modi eius, blanditiis sit nostrum vero. Adipisci aperiam ullam earum nam molestias! Sint iste ut id modi officiis veritatis, illo'
  },
  {
    name: 'Other',
    label: 2,
    asignee: 'admin',
    numberOfComments: 12,
    status: 'fulfilled',
    body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam suscipit sunt vero libero temporibus perspiciatis earum, quae doloribus expedita nostrum sed! Pariatur delectus repellendus iure? Odit numquam consectetur necessitatibus repudiandae nisi recusandae accusantium labore itaque quaerat laborum qui soluta consequatur corrupti modi eius, blanditiis sit nostrum vero. Adipisci aperiam ullam earum nam molestias! Sint iste ut id modi officiis veritatis, illo'
  },
  {
    name: 'Title',
    label: 3,
    asignee: 'user',
    numberOfComments: 10,
    status: 'fulfilled',
    body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam suscipit sunt vero libero temporibus perspiciatis earum, quae doloribus expedita nostrum sed! Pariatur delectus repellendus iure? Odit numquam consectetur necessitatibus repudiandae nisi recusandae accusantium labore itaque quaerat laborum qui soluta consequatur corrupti modi eius, blanditiis sit nostrum vero. Adipisci aperiam ullam earum nam molestias! Sint iste ut id modi officiis veritatis, illo'
  },
  {
    name: 'Title',
    label: 4,
    asignee: 'user',
    numberOfComments: 10,
    status: 'fulfilled',
    body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam suscipit sunt vero libero temporibus perspiciatis earum, quae doloribus expedita nostrum sed! Pariatur delectus repellendus iure? Odit numquam consectetur necessitatibus repudiandae nisi recusandae accusantium labore itaque quaerat laborum qui soluta consequatur corrupti modi eius, blanditiis sit nostrum vero. Adipisci aperiam ullam earum nam molestias! Sint iste ut id modi officiis veritatis, illo'
  }
  ]
} 

//Here I emitated server respond

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router issuesData={issuesData}/>
    </ThemeProvider>
    // <IssuesListPage issuesList={issuesList}/>
  );
}

export default App;
