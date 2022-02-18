import React from 'react';
import Issue from '../Components/Issue';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Grid from '@mui/material/Grid'

const IssuesList = ({ issuesList }) => {
  return (
      // <List>
      //     {issuesList.map( issue => {
      //       return(
      //         <ListItem key={issue.label}>
      //           <Issue issue={issue}/>
      //         </ListItem>
      //       )
      //     })}
      // </List>
      <Grid container spacing={3}>
        {issuesList.map( issue => {
            return(
              <Grid item lg={3.9} key={issue.number} sx={{margin: '0px 5px'}}>
                <Issue issue={issue}/>
              </Grid>
            )
          })
        }
          
      </Grid>
  )
}

export default IssuesList