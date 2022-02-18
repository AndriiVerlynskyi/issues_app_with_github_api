import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box'


const SingleIssue = ({ requestData }) => {
  const [issueResp, setIssueResp] = useState('');

  const params = useParams();

  useEffect( async () => {
    axios(`https://api.github.com/repos/${requestData.username}/${requestData.repos}/issues/${params.id}`)
      .then( resp => {
        console.log(resp)
        setIssueResp(resp)
      })
  }, [])

  return (
    <Card sx={{width: '60%'}}>
      <CardHeader
        title={<Typography variant='h4' sx={{textAlign:'center'}}>
          { issueResp.data.name }
        </Typography>}
      />
      <CardContent>
        <Grid container sx={{display: 'flex', justifyContent:'space-between'}}> 
          <Grid item>
            <Typography variant='h6'><b>Asignee:</b> {issueResp.data.asignee}</Typography>
            <Typography variant='h6'><b>status:</b> {issueResp.status}</Typography>
          </Grid>
          <Grid item sx={{width: '70%'}}>
            {issueResp.data.body}
          </Grid>
        </Grid>
        <Box sx={{display: 'flex', justifyContent:'space-between'}}>
          <Typography><b>id:</b> {issueResp.data.label[0].id}</Typography>
          <Typography><b>comments:</b> {issueResp.data.comments}</Typography>
        </Box>
      </CardContent>
    </Card>
  )
}

export default SingleIssue