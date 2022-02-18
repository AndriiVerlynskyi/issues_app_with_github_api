import React from 'react';
import SingleIssue from '../Components/SingleIssue';

import Box from '@mui/material/Box'

const SingleIssuePage = ({ issue }) => {
  return (
    <Box sx={{display: 'flex', justifyContent:'center', marginTop:'20px'}}>
      <SingleIssue issue={issue}/>
    </Box>
  )
}

export default SingleIssuePage