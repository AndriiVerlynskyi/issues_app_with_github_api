import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import MeetPage from '../Pages/MeetPage';
import IssuesListPage from '../Pages/IssuesListPage'
import NoDataToSearch from '../Components/general/NoDataToSearch';
import SingleIssuePage from '../Pages/SingleIssuePage';


const issuesTestData = {
  issuesList: [
  {
    name: 'Title',
    label: 1,
    asignee: 'user',
    comments: 10,
    status: 'fulfilled',
    body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam suscipit sunt vero libero temporibus perspiciatis earum, quae doloribus expedita nostrum sed! Pariatur delectus repellendus iure? Odit numquam consectetur necessitatibus repudiandae nisi recusandae accusantium labore itaque quaerat laborum qui soluta consequatur corrupti modi eius, blanditiis sit nostrum vero. Adipisci aperiam ullam earum nam molestias! Sint iste ut id modi officiis veritatis, illo'
  },
  {
    name: 'Other',
    label: 2,
    asignee: 'admin',
    comments: 12,
    status: 'fulfilled',
    body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam suscipit sunt vero libero temporibus perspiciatis earum, quae doloribus expedita nostrum sed! Pariatur delectus repellendus iure? Odit numquam consectetur necessitatibus repudiandae nisi recusandae accusantium labore itaque quaerat laborum qui soluta consequatur corrupti modi eius, blanditiis sit nostrum vero. Adipisci aperiam ullam earum nam molestias! Sint iste ut id modi officiis veritatis, illo'
  },
  {
    name: 'Title',
    label: 3,
    asignee: 'user',
    comments: 10,
    status: 'fulfilled',
    body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam suscipit sunt vero libero temporibus perspiciatis earum, quae doloribus expedita nostrum sed! Pariatur delectus repellendus iure? Odit numquam consectetur necessitatibus repudiandae nisi recusandae accusantium labore itaque quaerat laborum qui soluta consequatur corrupti modi eius, blanditiis sit nostrum vero. Adipisci aperiam ullam earum nam molestias! Sint iste ut id modi officiis veritatis, illo'
  },
  {
    name: 'Title',
    label: 4,
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
  console.log(requestData)

  // useEffect( async () => {
    // await axios(`https://api.github.com/repos/${requestData.username}/${requestData.repos}/issues`)
  //   checkShowIssues()
  // }, [])

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/meetPage" element={<MeetPage setDataForRequest={setDataForRequest}/>}/>
        <Route exact path="/" element={<Navigate replace to="/meetPage"/>}/>
        {/* {showIssues && 
          <> */}
            <Route path="/issuesList" element={<IssuesListPage issuesList={issuesData.issuesList}/>}/>
            <Route path="/singleIssue/:id" element={<SingleIssuePage/>}/>
          {/* </>
        } */}
        <Route path="*" element={<NoDataToSearch/>}/> 
      </Routes>
    </BrowserRouter>
  )
}

export default Router