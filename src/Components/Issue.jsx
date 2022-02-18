import React from 'react';
import { useNavigate } from 'react-router-dom';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box'


const Issue = ({ issue }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/singleIssue/${issue.number}`)
  }


  return (
    <Card sx={{minWidth:'350px'}} onClick={handleClick}>
      <CardHeader 
        title={<Typography variant='h4' sx={{textAlign:'center'}}>
          { issue.name }
        </Typography>}
      />
      <CardContent>
        <Box sx={{marginBottom:'10px'}}>
          <Typography><b>Asignee:</b> {issue.asignee}</Typography>
        </Box>
        <Box sx={{display: 'flex', justifyContent:'space-between'}}>
          <Typography><b>id:</b> {issue.labels[0].id}</Typography>
          <Typography><b>comments:</b> {issue.comments}</Typography>
        </Box>
      </CardContent>
    </Card>
  )
}

export default Issue