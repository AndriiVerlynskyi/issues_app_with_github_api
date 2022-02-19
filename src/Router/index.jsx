import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import MeetPage from '../Pages/MeetPage';
import IssuesListPage from '../Pages/IssuesListPage'
import NoDataToSearch from '../Components/general/NoDataToSearch';
import SingleIssuePage from '../Pages/SingleIssuePage';

//Example of server respond with necessary data for testing

// const issuesTestData = {
//   issuesList: [
//   {
//     name: 'Title',
//     number: 1,
//     created_at: '2019-09-18T17:27:31Z',
//     labels: [
//       {
//         "id": 1248411212,
//         "node_id": "MDU6TGFiZWwxMjQ4NDExMjEy",
//         "url": "https://api.github.com/repos/facebook/.github/labels/CLA%20Signed"
//       }
//     ],
//     asignee: 'user',
//     comments: 10,
//     status: 'fulfilled',
//     body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam suscipit sunt vero libero temporibus perspiciatis earum, quae doloribus expedita nostrum sed! Pariatur delectus repellendus iure? Odit numquam consectetur necessitatibus repudiandae nisi recusandae accusantium labore itaque quaerat laborum qui soluta consequatur corrupti modi eius, blanditiis sit nostrum vero. Adipisci aperiam ullam earum nam molestias! Sint iste ut id modi officiis veritatis, illo'
//   },
//   {
//     name: 'Other',
//     number: 2,
//     created_at: '2019-09-10T17:27:31Z',
//     labels: [
//       {
//         "id": 1248411217,
//         "node_id": "MDU6TGFiZWwxMjQ4NDExMjEy",
//         "url": "https://api.github.com/repos/facebook/.github/labels/CLA%20Signed"
//       }
//     ],
//     asignee: 'admin',
//     comments: 12,
//     status: 'fulfilled',
//     body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam suscipit sunt vero libero temporibus perspiciatis earum, quae doloribus expedita nostrum sed! Pariatur delectus repellendus iure? Odit numquam consectetur necessitatibus repudiandae nisi recusandae accusantium labore itaque quaerat laborum qui soluta consequatur corrupti modi eius, blanditiis sit nostrum vero. Adipisci aperiam ullam earum nam molestias! Sint iste ut id modi officiis veritatis, illo'
//   },
//   {
//     name: 'Title',
//     number: 3,
//     created_at: '2019-10-20T17:27:31Z',
//     labels: [
//       {
//         "id": 1248411286,
//         "node_id": "MDU6TGFiZWwxMjQ4NDExMjEy",
//         "url": "https://api.github.com/repos/facebook/.github/labels/CLA%20Signed"
//       }
//     ],
//     asignee: 'user',
//     comments: 10,
//     status: 'fulfilled',
//     body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam suscipit sunt vero libero temporibus perspiciatis earum, quae doloribus expedita nostrum sed! Pariatur delectus repellendus iure? Odit numquam consectetur necessitatibus repudiandae nisi recusandae accusantium labore itaque quaerat laborum qui soluta consequatur corrupti modi eius, blanditiis sit nostrum vero. Adipisci aperiam ullam earum nam molestias! Sint iste ut id modi officiis veritatis, illo'
//   },
//   {
//     name: 'Title',
//     number: 4,
//     created_at: '2019-10-18T17:27:31Z',
//     labels: [
//       {
//         "id": 1248411241,
//         "node_id": "MDU6TGFiZWwxMjQ4NDExMjEy",
//         "url": "https://api.github.com/repos/facebook/.github/labels/CLA%20Signed"
//       }
//     ],
//     asignee: 'user',
//     comments: 10,
//     status: 'fulfilled',
//     body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam suscipit sunt vero libero temporibus perspiciatis earum, quae doloribus expedita nostrum sed! Pariatur delectus repellendus iure? Odit numquam consectetur necessitatibus repudiandae nisi recusandae accusantium labore itaque quaerat laborum qui soluta consequatur corrupti modi eius, blanditiis sit nostrum vero. Adipisci aperiam ullam earum nam molestias! Sint iste ut id modi officiis veritatis, illo'
//   }
//   ]
// } 

const Router = () => {

  const [requestData, setRequestData] = useState('')

  const [showIssues, setShowIssues] = useState(false)

  const checkShowIssues = ( resStatus ) => {
    // if (!!issuesData.issuesList){
    //   setShowIssues(true)
    // } else {
    //   setShowIssues(false)
    // }
    if (resStatus === 200){
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

  useEffect( () => {
    checkShowIssues()
  }, [])

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/meetPage" element={<MeetPage setDataForRequest={setDataForRequest}/>}/>
        <Route exact path="/" element={<Navigate replace to="/meetPage"/>}/>
        {/* {showIssues &&  */}
          <>
            <Route path="/issuesList" element={<IssuesListPage requestData={requestData} checkShowIssues={checkShowIssues}/>}/>
            <Route path="/issuesList/singleIssue/:id" element={<SingleIssuePage requestData={requestData}/>}/>
          </>
        {/* } */}
        <Route path="/noRequest" element={<NoDataToSearch/>}/>
        <Route path="*" element={<Navigate replace to="/noRequest"/>}/> 
      </Routes>
    </BrowserRouter>
  )
}

export default Router