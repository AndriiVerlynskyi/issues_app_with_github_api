import React, { useState } from 'react';
import IssuesList from '../Components/IssuesList';

import Box from '@mui/material/Box';

const IssuesListPage = ( props ) => {
  const [sortBy, setSortBy] = useState('newest');

  const changeSorting = (sortMethod) => {
    setSortBy(sortMethod)
  }

  return (
    <Box>
      <IssuesList issuesList={props.issuesList}/>
    </Box>
  )
}

export default IssuesListPage