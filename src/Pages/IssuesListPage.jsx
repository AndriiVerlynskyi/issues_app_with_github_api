import React from 'react';
import IssuesList from '../Components/IssuesList';

import Box from '@mui/material/Box'

const IssuesListPage = ( props ) => {
  return (
    <Box >
      <IssuesList issuesList={props.issuesList}/>
    </Box>
  )
}

export default IssuesListPage