import React from 'react';
import SingleIssue from '../Components/SingleIssue';

import Box from '@mui/material/Box'

const SingleIssuePage = ({ requestData }) => {
  console.log(requestData)
  return (
    <Box sx={{display: 'flex', justifyContent:'center', marginTop:'20px'}}>
      <SingleIssue requestData={requestData}/>
    </Box>
  )
}

export default SingleIssuePage