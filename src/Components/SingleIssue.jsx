import React from 'react';

import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box'


const SingleIssue = ({ issue }) => {
  
  return (
    <Card sx={{width: '60%'}}>
      <CardHeader
        title={<Typography variant='h4' sx={{textAlign:'center'}}>
          { issue.title }
        </Typography>}
      />
      <CardContent>
        <Grid container sx={{display: 'flex', justifyContent:'space-between'}}> 
          <Grid item>
            <Typography variant='h6'><b>Asignee:</b> {issue.assignee}</Typography>
            <Typography variant='h6'><b>status:</b> {issue.status}</Typography>
          </Grid>
          <Grid item sx={{width: '70%'}}>
            {issue.body}
          </Grid>
        </Grid>
        <Box sx={{display: 'flex', justifyContent:'space-between'}}>
          {!!issue.labels && 
            <Typography>
              <b> label id:</b> {issue.labels[0].id} 
            </Typography>
          } 
          <Typography><b>comments:</b> {issue.comments}</Typography>
        </Box>
      </CardContent>
    </Card>
  )
}

export default SingleIssue