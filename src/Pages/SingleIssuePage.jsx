import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import SingleIssue from '../Components/SingleIssue';
import ReturnToNavigateButton from '../Components/general/ReturnToNavigateButton';

import Box from '@mui/material/Box';

const SingleIssuePage = ({ requestData }) => {
  const [issue, setIssue] = useState([])

  const { id } = useParams()

  useEffect( () => {
    axios(`https://api.github.com/repos/${requestData.username}/${requestData.repos}/issues/${id}`)
      .then( resp => {
        setIssue(resp.data)
      })
  }, [requestData])

  return (
    <Box>
      <ReturnToNavigateButton linkTo='/issuesList' title="Back"/>
      <Box sx={{display: 'flex', justifyContent:'center', marginTop:'20px'}}>
        <SingleIssue issue={issue}/>
      </Box>
    </Box>
  )
}

export default SingleIssuePage