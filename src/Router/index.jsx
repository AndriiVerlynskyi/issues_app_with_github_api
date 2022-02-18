import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import MeetPage from '../Pages/MeetPage';
import IssuesListPage from '../Pages/IssuesListPage'
import NoDataToSearch from '../Components/general/NoDataToSearch';
import SingleIssuePage from '../Pages/SingleIssuePage'

const Router = ({ issuesData }) => {
  const [showList, setShowList] = useState(false);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/meetPage" element={<MeetPage/>}/>
        <Route exact path="/" element={<Navigate replace to="/meetPage"/>}/>
        {/* {showList && 
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