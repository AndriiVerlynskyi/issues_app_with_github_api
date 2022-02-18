import React, { useState } from 'react';
import IssuesList from '../Components/IssuesList';

import Box from '@mui/material/Box';
import SortingIssues from '../Components/SortingIssues';

const IssuesListPage = ( props ) => {
  const [issuesList, setIssuesList] = useState([]);

  console.log(issuesList)
  

  //create a callback function for SortingIssuesPage, because of lack of state manager, 
  // so I can set sorted issues in the state of the IssuesListPage component

  function setSortedIssues (sortedIssues) {
    console.log(`I'm called`)
    setIssuesList(sortedIssues)
  };

  return (
    <Box>
      <SortingIssues setSortedIssues={setSortedIssues} issuesList={props.issuesList}/>
      <Box>                      
        <IssuesList issuesList={issuesList}/>
      </Box>
    </Box>
  )
}

export default IssuesListPage