import React, { useState } from 'react';
import Issue from '../Components/Issue';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Grid from '@mui/material/Grid'

const IssuesList = ({ issuesList }) => {

  return (
      <Grid container spacing={3} sx={{marginLeft:'210px'}}>
        {issuesList.map( issue => {
            return(
              <Grid item lg={3} key={issue.number} sx={{margin: '0px 5px'}}>
                <Issue issue={issue}/>
              </Grid>
            )
          })
        }
          
      </Grid>
  )
}

export default IssuesList