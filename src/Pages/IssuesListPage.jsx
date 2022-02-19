import React, { useState, useEffect } from 'react';
import axios from 'axios';
import IssuesList from '../Components/IssuesList';

import Box from '@mui/material/Box';
import SortingIssues from '../Components/SortingIssues';

const IssuesListPage = ({ requestData, checkShowIssues }) => {

  const [issuesList, setIssuesList] = useState([]);

  //I create a callback function for SortingIssuesPage, because of lack of state manager, 
  // so I can set sorted issues in the state of the IssuesListPage component

  function setSortedIssues (sortedIssues) {
    setIssuesList(sortedIssues)
  };

  useEffect(  () => {
      axios(`https://api.github.com/repos/${requestData.username}/${requestData.repos}/issues`)
      .then( (resp) => {
        setIssuesList(resp.data);
      })
  }, [])

  return (
    <Box>
      <SortingIssues setSortedIssues={setSortedIssues} issuesList={issuesList}/>
      <Box>                      
        <IssuesList issuesList={issuesList}/>
      </Box>
    </Box>
  )
}

export default IssuesListPage