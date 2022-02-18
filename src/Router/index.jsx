import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import MeetPage from '../Pages/MeetPage';
import IssuesListPage from '../Pages/IssuesListPage'
import NoDataToSearch from '../Components/general/NoDataToSearch';
import SingleIssuePage from '../Pages/SingleIssuePage';

//Example of server respond with necessary data for testing

const issuesTestData = {
  issuesList: [
  {
    name: 'Title',
    number: 1,
    labels: [
      {
        "id": 1248411212,
        "node_id": "MDU6TGFiZWwxMjQ4NDExMjEy",
        "url": "https://api.github.com/repos/facebook/.github/labels/CLA%20Signed"
      }
    ],
    asignee: 'user',
    comments: 10,
    status: 'fulfilled',
    body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam suscipit sunt vero libero temporibus perspiciatis earum, quae doloribus expedita nostrum sed! Pariatur delectus repellendus iure? Odit numquam consectetur necessitatibus repudiandae nisi recusandae accusantium labore itaque quaerat laborum qui soluta consequatur corrupti modi eius, blanditiis sit nostrum vero. Adipisci aperiam ullam earum nam molestias! Sint iste ut id modi officiis veritatis, illo'
  },
  {
    name: 'Other',
    number: 2,
    labels: [
      {
        "id": 1248411217,
        "node_id": "MDU6TGFiZWwxMjQ4NDExMjEy",
        "url": "https://api.github.com/repos/facebook/.github/labels/CLA%20Signed"
      }
    ],
    asignee: 'admin',
    comments: 12,
    status: 'fulfilled',
    body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam suscipit sunt vero libero temporibus perspiciatis earum, quae doloribus expedita nostrum sed! Pariatur delectus repellendus iure? Odit numquam consectetur necessitatibus repudiandae nisi recusandae accusantium labore itaque quaerat laborum qui soluta consequatur corrupti modi eius, blanditiis sit nostrum vero. Adipisci aperiam ullam earum nam molestias! Sint iste ut id modi officiis veritatis, illo'
  },
  {
    name: 'Title',
    number: 3,
    labels: [
      {
        "id": 1248411286,
        "node_id": "MDU6TGFiZWwxMjQ4NDExMjEy",
        "url": "https://api.github.com/repos/facebook/.github/labels/CLA%20Signed"
      }
    ],
    asignee: 'user',
    comments: 10,
    status: 'fulfilled',
    body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam suscipit sunt vero libero temporibus perspiciatis earum, quae doloribus expedita nostrum sed! Pariatur delectus repellendus iure? Odit numquam consectetur necessitatibus repudiandae nisi recusandae accusantium labore itaque quaerat laborum qui soluta consequatur corrupti modi eius, blanditiis sit nostrum vero. Adipisci aperiam ullam earum nam molestias! Sint iste ut id modi officiis veritatis, illo'
  },
  {
    name: 'Title',
    number: 4,
    labels: [
      {
        "id": 1248411241,
        "node_id": "MDU6TGFiZWwxMjQ4NDExMjEy",
        "url": "https://api.github.com/repos/facebook/.github/labels/CLA%20Signed"
      }
    ],
    asignee: 'user',
    comments: 10,
    status: 'fulfilled',
    body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam suscipit sunt vero libero temporibus perspiciatis earum, quae doloribus expedita nostrum sed! Pariatur delectus repellendus iure? Odit numquam consectetur necessitatibus repudiandae nisi recusandae accusantium labore itaque quaerat laborum qui soluta consequatur corrupti modi eius, blanditiis sit nostrum vero. Adipisci aperiam ullam earum nam molestias! Sint iste ut id modi officiis veritatis, illo'
  }
  ]
} 

const Router = () => {

  const [issuesData, setIssuesData] = useState(issuesTestData);

  const [requestData, setRequestData] = useState('')

  const [showIssues, setShowIssues] = useState(false)

  const checkShowIssues = () => {
    if (!!issuesData.issuesList){
      setShowIssues(true)
    } else {
      setShowIssues(false)
    }
  }

  const setDataForRequest = (username, repos) => {
    setRequestData({
      username,
      repos 
    })
  }

  //Create constant for saving link for SingleIssuePage 

  useEffect( async () => {
    // await axios(`https://api.github.com/repos/${requestData.username}/${requestData.repos}/issues`)
      // .then(resp => setIssuesData(resp.data))
    checkShowIssues()
  }, [])

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/meetPage" element={<MeetPage setDataForRequest={setDataForRequest}/>}/>
        <Route exact path="/" element={<Navigate replace to="/meetPage"/>}/>
        {showIssues && 
          <>
            <Route path="/issuesList" element={<IssuesListPage issuesList={issuesData.issuesList}/>}/>
            <Route path="/singleIssue/:id" element={<SingleIssuePage requestData={requestData}/>}/>
          </>
        }
        <Route path="*" element={<NoDataToSearch/>}/> 
      </Routes>
    </BrowserRouter>
  )
}

export default Router